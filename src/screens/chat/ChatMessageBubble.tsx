import React, { useState } from 'react';
import SwipeableMessageRow from './SwipeableMessageRow';
import { scale, moderateScale, verticalScale } from '@/src/utils/scaling';
import { Box, VStack, Text } from '@/src/components/HOSGluestackUI';
import FastImage from '@d11/react-native-fast-image';
import { Alert, TouchableOpacity } from 'react-native';
import { OptimizedChatGif } from '@/src/components/OptimizedChatGif';
import { ModernImageViewer } from '@/src/components/ModernImageViewer';

interface ReplyToData {
    messageId: string;
    text: string;
    senderId: string;
    mediaUrl?: string | null;
}

// 🎯 UPDATE YOUR INTERFACE DESIGN MODEL
export interface MessageItem {
    id: string;
    senderId: string;
    text: string;
    createdAt: any;
    mediaUrl?: string;
    thumbUrl?: string;
    replyTo?: {
        messageId: string;
        senderId: string;
        text?: string;
        mediaUrl?: string;
    };
    // 🎯 ADD THIS OPTIONAL TRACKING FIELD HERE
    isDeletedByUser?: boolean;
    mediaType?: string;
}

interface ChatMessageBubbleProps {
    item: MessageItem;
    currentUserId: string | undefined;
    timeString: string;
    isAdmin: boolean;
    isDeletedByUser: boolean;
    onReplyTrigger: (item: MessageItem) => void;
    onReplyClick: (replyToId: string) => void;
    onDeleteTrigger: (messageId: string, senderId: string) => void;
}

const ChatMessageBubble = ({
    item,
    currentUserId,
    timeString,
    isAdmin,
    isDeletedByUser,
    onReplyTrigger,
    onReplyClick,
    onDeleteTrigger
}: ChatMessageBubbleProps) => {
    const isMe = item.senderId === currentUserId;
    const hasReply = !!item.replyTo;
    const isMedia = !!item.mediaUrl;
    const isGif = item?.mediaType === 'image/gif' || item?.text === '[GIF]';
    const [viewerVisible, setViewerVisible] = useState(false);
    const getBubbleColor = () => {
        if (isDeletedByUser && isAdmin) return '#7F1D1D'; // Distinct dark red bubble background for Admin viewing deleted content
        return isMe ? '#064E3B' : '#115E59';
    };

    return (
        <VStack style={{ alignItems: isMe ? 'flex-end' : 'flex-start', marginBottom: verticalScale(12) }}>
            <SwipeableMessageRow isMe={isMe} onReplyTrigger={() => onReplyTrigger(item)}>
                <TouchableOpacity
                    onLongPress={() => {
                        console.log('Working')
                        setTimeout(() => {
                            return onDeleteTrigger(item.id, item.senderId);
                        }, 100);
                    }}
                    onPress={() => {
                        if (isMedia) {
                            setViewerVisible(true); // Open Awesome-Gallery view tray layout
                        }
                    }}
                    delayLongPress={400}
                    activeOpacity={0.9}
                    style={{ maxWidth: '75%', alignItems: isMe ? 'flex-end' : 'flex-start' }}
                >
                    <Box style={{
                        paddingHorizontal: isMedia ? 0 : scale(14),
                        paddingTop: isMedia ? 0 : verticalScale(10),
                        paddingBottom: isMedia ? 0 : verticalScale(6),
                        borderRadius: scale(16),
                        borderBottomRightRadius: isMe ? scale(4) : scale(16),
                        borderBottomLeftRadius: !isMe ? scale(4) : scale(16),
                        maxWidth: '75%',
                        backgroundColor: getBubbleColor(),
                        overflow: 'hidden',
                        borderWidth: isMedia ? 1 : 0,
                        borderColor: isMe ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
                    }}>

                        {/* 🎯 NESTED WHATSAPP REPLY DECORATOR */}
                        {hasReply && item.replyTo && (
                            <TouchableOpacity
                                onPress={() => onReplyClick(item.replyTo!.messageId)}
                                activeOpacity={0.9}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: scale(8),
                                    padding: scale(8),
                                    borderLeftWidth: 3,
                                    borderLeftColor: '#E65100',
                                    marginTop: isMedia ? scale(8) : 0,
                                    marginHorizontal: isMedia ? scale(8) : 0,
                                    marginBottom: verticalScale(4),
                                }}
                            >
                                <Text style={{ fontSize: moderateScale(12), color: '#E65100' }} className="font-bold">
                                    {item.replyTo.senderId === currentUserId ? "You" : "Contact"}
                                </Text>
                                <Text numberOfLines={1} style={{ fontSize: moderateScale(13), color: 'rgba(255, 255, 255, 0.6)' }}>
                                    {item.replyTo.mediaUrl ? "🎬 [Media Context]" : item.replyTo.text}
                                </Text>
                            </TouchableOpacity>
                        )}

                        {isMedia ? (
                            /* 🎬 MEDIA VIEW LAYOUT TRAY BLOCK SWITCHER */
                            <Box style={{ position: 'relative', marginTop: hasReply ? scale(4) : 0 }}>
                                {isGif ? (
                                    /* 🚀 TARGET 1: Feed variables right down into the custom GIF layout wrapper */
                                    <OptimizedChatGif
                                        mediaUrl={item.mediaUrl!}
                                        thumbUrl={item.thumbUrl || item.mediaUrl!}
                                        timeString={timeString}
                                        isMe={isMe}
                                    />
                                ) : (
                                    /* 📸 TARGET 2: Normal picture view layout (Keeps standard absolute bottom right positioning safely) */
                                    <Box style={{ position: 'relative' }}>
                                        <FastImage
                                            source={{ uri: item.mediaUrl! }}
                                            style={{ width: scale(220), height: verticalScale(180) }}
                                            resizeMode={FastImage.resizeMode.cover}
                                        />

                                        {/* Static Photo Timestamp Marker */}
                                        <Box style={{
                                            position: 'absolute',
                                            bottom: scale(6),
                                            right: scale(8),
                                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                            paddingHorizontal: scale(6),
                                            paddingVertical: verticalScale(2),
                                            borderRadius: scale(10),
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: scale(4)
                                        }}>
                                            <Text style={{ fontSize: moderateScale(11), color: 'rgba(255, 255, 255, 0.8)' }}>
                                                {timeString}
                                            </Text>
                                            {/* {isMe && (
                                                <Text style={{ fontSize: moderateScale(11), color: '#34B7F1' }}>
                                                    ✓✓
                                                </Text>
                                            )} */}
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        ) : (
                            /* 💬 WHATSAPP ANTI-OVERLAP TEXT LAYOUT ENGINE */
                            <VStack style={{ minWidth: scale(70) }}>
                                <Box
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: moderateScale(15),
                                            color: 'white',
                                            paddingRight: scale(65),
                                            lineHeight: verticalScale(20),
                                            alignSelf: 'flex-start',
                                            flexGrow: 1
                                        }}
                                        className="font-medium"
                                    >
                                        {item.text}
                                    </Text>

                                    <Box
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: scale(3),
                                            paddingTop: verticalScale(4)
                                        }}
                                    >
                                        <Text style={{ fontSize: moderateScale(10), color: 'rgba(255, 255, 255, 0.5)' }}>
                                            {timeString}
                                        </Text>
                                        {/* {isMe && (
                                            <Text style={{ fontSize: moderateScale(12), color: '#34B7F1' }}>
                                                ✓✓
                                            </Text>
                                        )} */}
                                    </Box>
                                </Box>
                            </VStack>
                        )}
                    </Box>
                </TouchableOpacity>
            </SwipeableMessageRow>
            <ModernImageViewer
                visible={viewerVisible}
                imageUrl={item.mediaUrl!}
                onClose={() => setViewerVisible(false)}
            />
        </VStack>
    );
};

// 🎯 OPTIMIZATION: Prevents unneeded row items re-rendering cycles
export default React.memo(ChatMessageBubble, (prevProps, nextProps) => {
    return (
        prevProps.item.id === nextProps.item.id &&
        prevProps.item.text === nextProps.item.text &&
        prevProps.item.mediaUrl === nextProps.item.mediaUrl &&
        prevProps.timeString === nextProps.timeString &&
        // 🚀 CRITICAL FIX: Tell React to watch for deletion changes instantly
        prevProps.isDeletedByUser === nextProps.isDeletedByUser &&
        prevProps.isAdmin === nextProps.isAdmin &&
        prevProps.onDeleteTrigger === nextProps.onDeleteTrigger
    );
});