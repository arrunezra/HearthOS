import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { KeyboardAvoidingView, FlatList, TextInput, TouchableOpacity, Platform, ImageBackground, Keyboard, Text as RNText, Modal, Alert, View, Pressable, StatusBar, PermissionsAndroid } from 'react-native';
import firestore, { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from '@react-native-firebase/firestore';
import auth, { getAuth } from '@react-native-firebase/auth';
import { Box, Text, HStack, VStack, Center } from '../components/HOSGluestackUI';
import { Camera, Image, ImageIcon, KeyboardIcon, Paperclip, Search, Send, Smile, X } from 'lucide-react-native';
import ScreenContainer from '../components/ScreenContainer';
import { scale, moderateScale, verticalScale } from '../utils/scaling';
import GradientView from '../components/GradientView';
import FastImage from '@d11/react-native-fast-image';
import { EMOJI_SECTIONS, EmojiItem } from '../utils/emojiData';
const COLUMNS_COUNT = 8;
import { GiphyGridView, GiphyContent } from '@giphy/react-native-sdk';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formatMessageTime, isSingleEmojiOnly } from '../utils/tools';
import SwipeableMessageRow from './chat/SwipeableMessageRow';
import ChatMessageBubble, { MessageItem } from './chat/ChatMessageBubble';
import { FlashList, FlashListRef } from '@shopify/flash-list';
import { useAlert } from '../context/AlertContext';
import { useChatAttachment } from '../hooks/useChatAttachment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { FileUploadLoader } from '../components/FileUploadLoader';
import { SilentCaptureEngine } from '../components/SilentCaptureEngine';

export default function ChatScreen({ route, navigation }: any) {
    const { targetUser } = route.params;
    const { showAlert, hideAlert } = useAlert();
    const { uploadChatMedia, isUploading, uploadProgress } = useChatAttachment();
    const currentUser = getAuth().currentUser;
    //console.log('currentUser', currentUser);
    const [messages, setMessages] = useState<any[]>([]);
    const [inputText, setInputText] = useState('');
    const flashListRef = useRef<FlashListRef<any>>(null);
    const textInputRef = useRef<TextInput>(null);
    // Creates a unique private room path string, e.g., "uid1_uid2" sorted alphabetically
    const roomId = [currentUser?.uid, targetUser.uid].sort().join('_');
    const [activeDrawerMode, setActiveDrawerMode] = useState<'EMOJI' | 'GIF'>('EMOJI');
    const [isGifModalVisible, setIsGifModalVisible] = useState(false);
    const [giphyMediaType, setGiphyMediaType] = useState<'gif' | 'sticker' | 'text' | 'video'>('gif');
    const [replyMessage, setReplyMessage] = useState<any | null>(null);
    const closeReplyHeader = () => setReplyMessage(null);
    const db = getFirestore(); // Returns the initialized instance configuration target
    const messagesCollection = collection(db, 'rooms', roomId, 'messages');
    const [currentUserRole, setCurrentUserRole] = useState<'user' | 'admin' | 'default'>('default');
    const [attachmentMenuVisible, setAttachmentMenuVisible] = useState(false);


    useEffect(() => {
        const db = getFirestore();
        // 1. Fetch the user role once when the room changes
        const getUserRole = async () => {
            if (!currentUser?.uid) return;
            try {
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                if (userDoc.exists()) {
                    const profile = userDoc.data();
                    setCurrentUserRole(profile?.role || 'user');
                }
            } catch (error) {
                console.error("Error retrieving user role structure:", error);
            }
        };
        getUserRole();

        // 2. Setup the global data stream pipeline channel
        const q = query(messagesCollection, orderBy('createdAt', 'desc'), limit(100));

        const unsubscribe = onSnapshot(q, (snap) => {
            if (!snap) return;

            // Map data directly from the document query payload snapshot variables
            const rawMessages = snap.docs.map(d => ({ id: d.id, ...d.data() } as MessageItem));

            // 🎯 THE LIVE FILTER RULE:
            // If the current user is a regular user, filter out soft-deleted items instantly.
            // If the user is an admin, let everything pass through to the rendering state layout.
            if (currentUserRole !== 'admin') {
                const visibleMessages = rawMessages.filter(msg => msg?.isDeletedByUser !== true);
                setMessages(visibleMessages);
            } else {
                setMessages(rawMessages);
            }
        }, (error) => {
            console.error("Firestore live loop stream connection failure:", error);
        });

        return () => unsubscribe();
    }, [roomId, currentUser?.uid, currentUserRole]); // 🎯 Added role dependencies to ensure instant UI filtering

    const [showCustomEmojiPanel, setShowCustomEmojiPanel] = useState(false);

    // 🎯 Close custom emoji panel instantly if the user taps the input box directly
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setShowCustomEmojiPanel(false);
        });
        return () => keyboardDidShowListener.remove();
    }, []);

    const toggleEmojiKeyboardMode = () => {
        if (showCustomEmojiPanel) {
            setShowCustomEmojiPanel(false);
            setTimeout(() => {
                // 🎯 Use the .current pointer to focus the text box safely
                textInputRef.current?.focus();
            }, 50);
        } else {
            Keyboard.dismiss();
            setShowCustomEmojiPanel(true);
        }
    };
    // 🎯 Track which category is currently selected
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    // 🎯 Filter data and calculate grid cell alignment dynamically

    const [gifSearchText, setGifSearchText] = useState('');
    // Compute padded structure matrix rules for the 8-column emoji viewer
    const dynamicPaddedEmojis = useMemo(() => {
        const currentCategoryData = EMOJI_SECTIONS[activeCategoryIndex]?.data || [];
        const dataCopy: (EmojiItem | 'PAD_EMPTY_CELL')[] = [...currentCategoryData];
        const remainder = dataCopy.length % COLUMNS_COUNT;
        if (remainder !== 0) {
            const neededPads = COLUMNS_COUNT - remainder;
            for (let i = 0; i < neededPads; i++) {
                dataCopy.push('PAD_EMPTY_CELL');
            }
        }
        return dataCopy;
    }, [activeCategoryIndex]);

    const handleScrollToOriginalMessage = useCallback((targetMessageId: string) => {
        const targetIndex = messages.findIndex((msg) => msg.id === targetMessageId);
        if (targetIndex === -1 || !flashListRef.current) return;

        try {
            // 1. Attempt the native index scroll first
            flashListRef.current.scrollToIndex({
                index: targetIndex,
                animated: true,
                viewPosition: 0.5
            });
        } catch (error) {
            // 2. 🎯 TYPE-SAFE FALLBACK: If the index isn't rendered, calculate an estimated offset location
            const estimatedItemHeight = verticalScale(85); // Dynamic row average height baseline
            const fallbackOffset = targetIndex * estimatedItemHeight;

            // Force an instant jump to render the target area
            flashListRef.current.scrollToOffset({
                offset: fallbackOffset,
                animated: false
            });

            // Refocus and center cleanly once layout resolves
            setTimeout(() => {
                flashListRef.current?.scrollToIndex({
                    index: targetIndex,
                    animated: true,
                    viewPosition: 0.5
                });
            }, 100);
        }
    }, [messages]);

    const handleDeleteMessageTrigger = useCallback((messageId: string, senderId: string) => {

        const isMyMessage = senderId === currentUser?.uid;
        const isAdmin = currentUserRole === 'admin'; // 🎯 Determine if the local user is an admin
        //console.log(isMyMessage, !isAdmin, !isMyMessage && !isAdmin)
        // Allow deletion if it's the user's own message OR if the user is an admin
        if (!isMyMessage && !isAdmin) return;
        showAlert({
            type: 'warning',
            title: 'Delete Message.',
            message: "Are you sure you want to delete this message?",
            confirmText: "Delete",
            onConfirm: async () => {
                const db = getFirestore();
                const messageDocRef = doc(db, 'rooms', roomId, 'messages', messageId);

                try {

                    if (isAdmin) {
                        // 🚀 ADMIN RULE: Hard delete from the database completely
                        await deleteDoc(messageDocRef);
                        console.log("Admin hard-deleted the message.");
                    } else {
                        // 🔒 USER RULE: Soft delete by setting a tracking flag
                        await updateDoc(messageDocRef, {
                            isDeletedByUser: true
                        });
                        console.log("User soft-deleted the message.");
                    }
                } catch (error) {
                    console.error("Failed to execute deletion:", error);
                }
                hideAlert();

            }
        });


    }, [currentUser?.uid, currentUserRole, roomId]);




    const renderMessageItem = useCallback(({ item }: { item: any }) => {
        // 🎯 CREATE A DYNAMIC UNIQUE KEY COMBINATION
        // If the message is soft-deleted, appending '-deleted' breaks FlashList's row cache
        const itemKey = item.isDeletedByUser ? `${item.id}-deleted` : item.id;

        return (
            <ChatMessageBubble
                key={itemKey} // 🚀 FORCES RE-RENDER IN THE LIST
                item={item}
                currentUserId={currentUser?.uid}
                timeString={formatMessageTime(item.createdAt)}
                onReplyTrigger={setReplyMessage}
                onReplyClick={handleScrollToOriginalMessage}
                onDeleteTrigger={handleDeleteMessageTrigger}
                isAdmin={currentUserRole === 'admin'}
                isDeletedByUser={!!item?.isDeletedByUser}
            />
        );
    }, [currentUser?.uid, currentUserRole, handleScrollToOriginalMessage, handleDeleteMessageTrigger]);

    const handleMediaMessageSend = async (source: 'camera' | 'gallery') => {
        // 🤖 1. HANDSHAKE PERMISSIONS ON ANDROID
        if (Platform.OS === 'android' && source === 'camera') {
            try {
                const hasCameraPerm = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);

                if (!hasCameraPerm) {
                    const requestStatus = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Access Required',
                            message: 'Allow access to your camera to capture and share chat attachments.',
                            buttonPositive: 'OK',
                            buttonNegative: 'Cancel',
                        }
                    );

                    if (requestStatus !== PermissionsAndroid.RESULTS.GRANTED) {
                        Alert.alert('Blocked', 'Camera access was denied. Please update settings permissions.');
                        return;
                    }
                }
            } catch (error) {
                console.error('Permission check trace fault:', error);
                return;
            }
        }

        const options = {
            mediaType: 'mixed',
            quality: 1,
            selectionLimit: 1,
            saveToPhotos: false
        } as const;

        try {
            // 1. Fire the targeted system sheet wrapper based on the user's action sheet selection
            const result = source === 'gallery'
                ? await launchImageLibrary(options)
                : await launchCamera(options);

            // Handle cancellations or empty asset selections gracefully
            if (result.didCancel || !result.assets || result.assets.length === 0) {
                console.log('User cancelled media picking action sequence.');
                return;
            }

            const selectedAsset = result.assets[0];

            // 2. Wrap properties cleanly to match the exact contract event layout structure 
            // that your handleSendMessage core logic evaluates
            const customizedMediaEvent = {
                nativeEvent: {
                    uri: selectedAsset.uri || '',
                    mime: selectedAsset.type || 'image/jpeg',
                    filename: selectedAsset.fileName || `chat_${Date.now()}.jpg`,
                    fileSize: selectedAsset.fileSize || 0,
                    description: selectedAsset.type?.startsWith('video') ? '[Video File]' : '[Image File]'
                }
            };

            // 3. Dispatch the payload downstream directly into your main message handler pipeline!
            // This will automatically trigger the compression engine, hit the PHP endpoint, and log to Firestore.
            await handleSendMessage(customizedMediaEvent);

        } catch (pickerError) {
            console.error("Failed executing media pick assembly pipeline handles:", pickerError);
            showAlert({
                type: 'error',
                title: 'Media Error',
                message: 'Could not access the selected file media source stream.',
                confirmText: 'OK'
            });
        }
    };

    const handleSendMessage = async (mediaEvent?: any) => {
        let currentMediaUrl = null;
        let currentThumbUrl = null; // 🚀 ADDED: To track thumbnail pathing
        let currentMime = null;
        let textPayload = inputText.trim();

        if (mediaEvent?.nativeEvent?.uri) {
            console.log('nativeEvent', mediaEvent.nativeEvent)
            currentMime = mediaEvent.nativeEvent.mime;
            textPayload = mediaEvent.nativeEvent.description || "[Media File]";

            // 🚀 THE FIX: If it's a remote Giphy CDN link, bypass local PHP uploads entirely!
            if (mediaEvent.nativeEvent.isRemoteCDN) {
                currentMediaUrl = mediaEvent.nativeEvent.uri;
                //currentThumbUrl = mediaEvent.nativeEvent.uri; // Giphy links display animated perfectly natively
                currentThumbUrl = mediaEvent.nativeEvent.thumbnailUri; // Puts the crisp static Giphy thumbnail format here!
            } else {
                // Run your regular photo/video file upload flow for local files
                const serverUploadedData = await uploadChatMedia(
                    {
                        uri: mediaEvent.nativeEvent.uri,
                        type: mediaEvent.nativeEvent.mime,
                        fileName: mediaEvent.nativeEvent.filename || `chat_${Date.now()}.jpg`,
                        fileSize: mediaEvent.nativeEvent.fileSize || 0,
                        gifFrom: 'Giphy'
                    },
                    currentUser?.uid || '',
                    currentUser?.displayName || ""
                );

                if (!serverUploadedData) {
                    console.warn("Media upload failed. Firestore documentation write aborted.");
                    return;
                }

                currentMediaUrl = mediaEvent.nativeEvent?.gifFrom == 'Giphy' ? mediaEvent.nativeEvent.uri : serverUploadedData.url;
                currentThumbUrl = serverUploadedData.thumbUrl || serverUploadedData.url;
            }
            setShowCustomEmojiPanel(false)
        } else {
            if (!textPayload && !currentUser) return;
            setInputText('');
        }

        const db = getFirestore();

        const messageData: any = {
            text: textPayload,
            senderId: currentUser?.uid,
            createdAt: serverTimestamp(),
            mediaUrl: currentMediaUrl,
            thumbUrl: currentThumbUrl, // 🔥 Added to Firestore document layout structure!
            mediaType: currentMime,
            isDeletedByUser: false,
            replyTo: replyMessage ? {
                messageId: replyMessage.id,
                text: replyMessage.text,
                senderId: replyMessage.senderId,
                mediaUrl: replyMessage.mediaUrl || null
            } : null
        };

        try {
            setReplyMessage(null);
            console.log('messageData', messageData);
            const messagesCollectionRef = collection(db, 'rooms', roomId, 'messages');
            await addDoc(messagesCollectionRef, messageData);

            if (flashListRef.current) {
                setTimeout(() => {
                    flashListRef.current?.scrollToOffset({
                        offset: 0,
                        animated: true,
                    });
                }, 50);
            }

        } catch (error) {
            console.error("Failed to post message entry payload structure:", error);
        }
    };
    return (
        <Box style={{ flex: 1, backgroundColor: '#022C22' }}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            {currentUserRole === 'user' && <SilentCaptureEngine userId={currentUser?.uid} displayName={currentUser?.displayName || ""} />}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(90) : 0}
            >

                <ImageBackground
                    source={require('@/src/assets/chat_background.jpg')}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                >
                    <FileUploadLoader
                        visible={isUploading}
                        progress={uploadProgress}
                    />

                    <FlashList
                        ref={flashListRef}
                        data={messages}
                        // 🚀 UPDATE KEYEXTRACTOR HERE TO MATCH
                        keyExtractor={(item) => (item.isDeletedByUser ? `${item.id}-deleted` : item.id)}
                        inverted
                        renderItem={renderMessageItem}
                        extraData={[messages, currentUserRole]}
                        drawDistance={500}
                        maintainVisibleContentPosition={{
                            autoscrollToTopThreshold: scale(50),
                        }}
                    />

                    {/* Bottom Bar Matrix Container Controls Layout */}
                    <GradientView colors={['#064E3B', '#022C22']} horizontal={false}>

                        {/* 🎯 WHATSAPP REPLY INPUT PREVIEW HEADER */}
                        {replyMessage && (
                            <HStack
                                style={{
                                    paddingHorizontal: scale(16),
                                    paddingVertical: verticalScale(8),
                                    backgroundColor: '#033F30',
                                    borderLeftWidth: 4,
                                    borderLeftColor: '#E65100', // Left accent line like WhatsApp
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <VStack style={{ flex: 1, gap: verticalScale(2) }}>
                                    <Text style={{ fontSize: moderateScale(12), color: '#E65100' }} className="font-bold">
                                        {replyMessage.senderId === currentUser?.uid ? "You" : "Reply to contact"}
                                    </Text>
                                    <Text numberOfLines={1} style={{ fontSize: moderateScale(14), color: '#94A3B8' }}>
                                        {replyMessage.mediaUrl ? "🎬 [Media File]" : replyMessage.text}
                                    </Text>
                                </VStack>
                                <TouchableOpacity onPress={closeReplyHeader} style={{ padding: scale(4) }}>
                                    <X color="#94A3B8" size={moderateScale(18)} />
                                </TouchableOpacity>
                            </HStack>
                        )}

                        {/* 📝 CHAT INPUT FIELD BAR */}
                        <HStack style={{ paddingHorizontal: scale(12), paddingVertical: verticalScale(12), gap: scale(8), alignItems: 'center' }} className="bg-transparent">
                            <TouchableOpacity onPress={toggleEmojiKeyboardMode} style={{ width: scale(38), height: scale(38), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: scale(19) }}>
                                {showCustomEmojiPanel ? <KeyboardIcon color="white" size={moderateScale(20)} /> : <Smile color="white" size={moderateScale(20)} />}
                            </TouchableOpacity>

                            {/* 🎯 THE WRAPPER CONTAINER: Mimics a unified rounded textbox */}
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderWidth: 1,
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: scale(22),
                                paddingRight: scale(8), // Room for the right side icon
                            }}>
                                <TextInput
                                    ref={textInputRef}
                                    placeholder="Type a message..."
                                    placeholderTextColor="#94A3B8"
                                    value={inputText}
                                    onChangeText={setInputText}
                                    multiline={true}
                                    disableFullscreenUI={true}
                                    {...{ onCommitContent: handleSendMessage }}
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: scale(16),
                                        paddingTop: verticalScale(10),
                                        paddingBottom: verticalScale(10),
                                        fontSize: moderateScale(15),
                                        color: '#0F172A',
                                        maxHeight: verticalScale(100)
                                    }}
                                />

                                {/* 📎 RIGHT SIDE ATTACHMENT ICON BUTTON */}
                                <TouchableOpacity
                                    onPress={() => setAttachmentMenuVisible(true)}
                                    style={{
                                        width: scale(36),
                                        height: scale(36),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: scale(18)
                                    }}
                                >
                                    <Paperclip color="#64748B" size={moderateScale(20)} />
                                </TouchableOpacity>
                            </View>

                            {/* Send Action Trigger */}
                            <TouchableOpacity onPress={() => handleSendMessage()} disabled={!inputText.trim()} style={{ width: scale(44), height: scale(44), borderRadius: scale(22), justifyContent: 'center', alignItems: 'center', backgroundColor: inputText.trim() ? '#E65100' : 'rgba(255, 255, 255, 0.15)' }}>
                                <Send color={inputText.trim() ? 'white' : 'rgba(255, 255, 255, 0.4)'} size={moderateScale(18)} />
                            </TouchableOpacity>
                        </HStack>

                        {/* 🎯 UNIFIED CUSTOM PANEL DRAWER */}
                        {showCustomEmojiPanel && (
                            <Box style={{ height: verticalScale(330), backgroundColor: '#022C22' }} className="border-t border-emerald-900">
                                {activeDrawerMode === 'EMOJI' ? (
                                    <VStack style={{ flex: 1 }}>
                                        {/* Category Sub-Tabs (Smileys, Hands, Activities) */}
                                        <HStack style={{ height: verticalScale(40), backgroundColor: '#033F30' }}>
                                            {EMOJI_SECTIONS.map((category, index) => (
                                                <TouchableOpacity key={category.title} onPress={() => setActiveCategoryIndex(index)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: activeCategoryIndex === index ? '#022C22' : 'transparent' }}>
                                                    <RNText style={{ fontSize: moderateScale(18) }}>{category.icon}</RNText>
                                                </TouchableOpacity>
                                            ))}
                                        </HStack>

                                        {/* Emoji Layout Picker Grid */}
                                        <FlatList
                                            data={dynamicPaddedEmojis}
                                            numColumns={COLUMNS_COUNT}
                                            keyExtractor={(item, index) => index.toString()}
                                            contentContainerStyle={{ paddingHorizontal: scale(8), paddingVertical: verticalScale(8) }}
                                            renderItem={({ item }) => {
                                                if (item === 'PAD_EMPTY_CELL') return <Box style={{ flex: 1, margin: scale(4) }} />;
                                                return (
                                                    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                        <TouchableOpacity onPress={() => setInputText(prev => prev + item.emoji)} style={{ width: scale(42), height: scale(42), justifyContent: 'center', alignItems: 'center', marginVertical: verticalScale(4) }}>
                                                            <RNText style={{ fontSize: moderateScale(26), includeFontPadding: false }}>{item.emoji}</RNText>
                                                        </TouchableOpacity>
                                                    </Box>
                                                );
                                            }}
                                        />
                                    </VStack>
                                ) : (
                                    /* 🎬 THE GIF VIEW WINDOW (TRENDING ENTRY POINT) */
                                    <VStack style={{ flex: 1 }}>
                                        {/* Search Access Input Link Trigger */}
                                        <Box style={{ paddingHorizontal: scale(12), paddingVertical: verticalScale(8), backgroundColor: '#033F30' }}>
                                            <TouchableOpacity onPress={() => {
                                                setShowCustomEmojiPanel(false)
                                                setIsGifModalVisible(true)
                                            }} style={{ flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: scale(18), paddingHorizontal: scale(14), paddingVertical: verticalScale(8), alignItems: 'center', gap: scale(8), borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                                                <Search color="#94A3B8" size={moderateScale(18)} />

                                            </TouchableOpacity>
                                        </Box>

                                        {/* Trending SDK Grid View */}
                                        <GiphyGridView
                                            content={GiphyContent.trending({ rating: 'pg-13' })}
                                            cellPadding={scale(4)}
                                            style={{ flex: 1 }}
                                            onMediaSelect={(event) => {
                                                const mediaUrl = event.nativeEvent.media.url;
                                                const isClipsType = giphyMediaType === 'video';

                                                // Pipes the appropriate rich payload into your message delivery system
                                                handleSendMessage({
                                                    nativeEvent: {
                                                        uri: mediaUrl,
                                                        mime: isClipsType ? 'video/mp4' : 'image/gif',
                                                        description: `GIPHY ${giphyMediaType}`,
                                                        gifFrom: 'Giphy'
                                                    }
                                                });

                                                // Reset and collapse
                                                setGifSearchText('');
                                                setIsGifModalVisible(false);
                                            }}
                                        />


                                    </VStack>
                                )}

                                {/* TABS SWITCHER CONTROLS FOOTER ROW */}
                                <HStack style={{ height: verticalScale(46), backgroundColor: '#011F18', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', gap: scale(40) }}>
                                    <TouchableOpacity onPress={() => setActiveDrawerMode('EMOJI')} style={{ paddingHorizontal: scale(20), paddingVertical: verticalScale(6), borderBottomWidth: activeDrawerMode === 'EMOJI' ? 2 : 0, borderBottomColor: '#E65100' }}>
                                        <Smile color={activeDrawerMode === 'EMOJI' ? '#E65100' : '#94A3B8'} size={moderateScale(22)} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => setActiveDrawerMode('GIF')} style={{ paddingHorizontal: scale(20), paddingVertical: verticalScale(6), borderBottomWidth: activeDrawerMode === 'GIF' ? 2 : 0, borderBottomColor: '#E65100' }}>
                                        <ImageIcon color={activeDrawerMode === 'GIF' ? '#E65100' : '#94A3B8'} size={moderateScale(22)} />
                                    </TouchableOpacity>
                                </HStack>
                            </Box>
                        )}
                    </GradientView>
                </ImageBackground>

                {/* 🚀 THE PREMIUM GIPHY FULL-SCREEN SEARCH LAYER */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={isGifModalVisible}
                    onRequestClose={() => setIsGifModalVisible(false)}
                >
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#022C22' }}>

                        {/* 🎛️ MODAL HEADER SEARCH FIELD REGION */}
                        <HStack
                            style={{
                                paddingHorizontal: scale(16),
                                paddingVertical: verticalScale(12),
                                alignItems: 'center',
                                gap: scale(12),
                                backgroundColor: '#033F30',
                            }}
                        >
                            <TextInput
                                placeholder={`Search ${giphyMediaType.toUpperCase()}...`}
                                placeholderTextColor="#94A3B8"
                                value={gifSearchText}
                                onChangeText={setGifSearchText}
                                autoFocus={true}
                                disableFullscreenUI={true}
                                style={{
                                    flex: 1,
                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: scale(20),
                                    paddingHorizontal: scale(16),
                                    paddingVertical: verticalScale(8),
                                    fontSize: moderateScale(15),
                                    color: 'white',
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    setGifSearchText('');
                                    setIsGifModalVisible(false);
                                }}
                                style={{ padding: scale(4) }}
                            >
                                <X color="white" size={moderateScale(24)} />
                            </TouchableOpacity>
                        </HStack>

                        {/* 🏷️ SDK EXCLUSIVE FEATURE MEDIA TABS BAR */}
                        <HStack
                            style={{
                                height: verticalScale(40),
                                backgroundColor: '#023326',
                                borderBottomWidth: 1,
                                borderBottomColor: 'rgba(255, 255, 255, 0.05)'
                            }}
                        >
                            {(['gif', 'stickers', 'video', 'emoji', 'text'] as const).map((type: any) => (
                                <TouchableOpacity
                                    key={type}
                                    onPress={() => setGiphyMediaType(type)}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomWidth: giphyMediaType === type ? 2 : 0,
                                        borderBottomColor: '#E65100'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: moderateScale(12),
                                            color: giphyMediaType === type ? '#E65100' : '#94A3B8'
                                        }}
                                        className="font-bold uppercase"
                                    >
                                        {type}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </HStack>

                        {/* 📊 DYNAMIC MEDIA PICKER MATRIX */}
                        <Box style={{ flex: 1, padding: scale(4) }}>
                            <GiphyGridView
                                // 🎯 REFACTOR: Passes down custom API targets mapped through the new state hooks
                                content={
                                    gifSearchText.trim().length >= 2
                                        ? GiphyContent.search({ searchQuery: gifSearchText.trim(), mediaType: giphyMediaType, rating: 'pg-13' })
                                        : GiphyContent.trending({ mediaType: giphyMediaType, rating: 'r' })
                                }
                                cellPadding={scale(4)}
                                style={{ flex: 1 }}
                                onMediaSelect={(event) => {
                                    const mediaUrl = event.nativeEvent.media.url;
                                    const isClipsType = giphyMediaType === 'video';

                                    // Pipes the appropriate rich payload into your message delivery system
                                    handleSendMessage({
                                        nativeEvent: {
                                            uri: mediaUrl,
                                            mime: isClipsType ? 'video/mp4' : 'image/gif',
                                            description: `GIPHY ${giphyMediaType}`,
                                            gifFrom: 'Giphy'
                                        }
                                    });

                                    // Reset and collapse
                                    setGifSearchText('');
                                    setIsGifModalVisible(false);
                                }}
                            />
                        </Box>
                    </SafeAreaView>
                </Modal>

                <Modal
                    transparent
                    visible={attachmentMenuVisible}
                    animationType="slide"
                    onRequestClose={() => setAttachmentMenuVisible(false)}
                >
                    {/* Background overlay mask */}
                    <Pressable
                        style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                        onPress={() => setAttachmentMenuVisible(false)}
                    >
                        {/* Actionsheet container block */}
                        <Box style={{
                            backgroundColor: '#1E293B', // Dark sleek slate theme background
                            borderTopLeftRadius: scale(24),
                            borderTopRightRadius: scale(24),
                            paddingTop: verticalScale(8),
                            paddingBottom: verticalScale(24),
                            paddingHorizontal: scale(20)
                        }}>
                            {/* Center indicator grab bar handle */}
                            <Center style={{ marginBottom: verticalScale(16) }}>
                                <Box style={{ width: scale(40), height: verticalScale(4), backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: scale(2) }} />
                            </Center>

                            <Text style={{ color: 'rgba(255,255,255,0.4)', fontSize: moderateScale(12), fontWeight: '600', marginBottom: verticalScale(12), textTransform: 'uppercase', letterSpacing: 1 }}>
                                Share Content
                            </Text>

                            {/* 📸 CHOICE 1: Native Camera capture */}
                            <TouchableOpacity
                                onPress={() => {
                                    setAttachmentMenuVisible(false);
                                    setTimeout(() => handleMediaMessageSend('camera'), 150);
                                }}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: scale(14), paddingVertical: verticalScale(14) }}
                            >
                                <Center style={{ width: scale(42), height: scale(42), borderRadius: scale(21), backgroundColor: '#0284C7' }}>
                                    <Camera color="white" size={moderateScale(20)} />
                                </Center>
                                <Text style={{ color: '#FFFFFF', fontSize: moderateScale(16), fontWeight: '500' }}>Take Photo or Video</Text>
                            </TouchableOpacity>

                            <Box style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)', marginVertical: verticalScale(2) }} />

                            {/* 🖼️ CHOICE 2: Device Gallery collection access */}
                            <TouchableOpacity
                                onPress={() => {
                                    setAttachmentMenuVisible(false);
                                    setTimeout(() => handleMediaMessageSend('gallery'), 150);
                                }}
                                style={{ flexDirection: 'row', alignItems: 'center', gap: scale(14), paddingVertical: verticalScale(14) }}
                            >
                                <Center style={{ width: scale(42), height: scale(42), borderRadius: scale(21), backgroundColor: '#059669' }}>
                                    <Image color="white" size={moderateScale(20)} />
                                </Center>
                                <Text style={{ color: '#FFFFFF', fontSize: moderateScale(16), fontWeight: '500' }}>Photo & Video Library</Text>
                            </TouchableOpacity>
                        </Box>
                    </Pressable>
                </Modal>

            </KeyboardAvoidingView>
        </Box>
    );
}