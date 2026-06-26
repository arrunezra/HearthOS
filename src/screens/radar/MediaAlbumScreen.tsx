import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, Image, Modal, Dimensions } from 'react-native';
import { Image as ImageIcon, Video as VideoIcon, Play, X, ShieldAlert, FolderSearch } from 'lucide-react-native';
import Video from 'react-native-video'; // 🚀 Native media decoding engine
import {
    VStack,
    HStack,
    Box,
    Text
} from '@/src/components/HOSGluestackUI';
import { moderateScale, scale, verticalScale } from '@/src/utils/scaling';
import ScreenContainer from '@/src/components/ScreenContainer';
import { collection, getFirestore, onSnapshot, orderBy, query } from '@react-native-firebase/firestore';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const COLUMN_WIDTH = (SCREEN_WIDTH - scale(60)) / 2;

interface AlbumItem {
    id: string;
    type: 'image' | 'video';
    thumbnailUrl: string; // The URL fetched from Firebase Storage or local paths
    mediaUrl: string;     // The playable high-def file link
    title?: string;
    createdAt?: any;
}

export default function MediaAlbumScreen() {
    const [loading, setLoading] = useState(true);
    const [mediaItems, setMediaItems] = useState<AlbumItem[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isVideoBuffering, setIsVideoBuffering] = useState(false);

    // 📡 Live Firestore Query Connection
    useEffect(() => {
        const db = getFirestore();

        // Target your core logs directory ordered by newest entries first
        const mediaQuery = query(
            collection(db, 'mediaVault'),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(mediaQuery, (snapshot) => {
            const dynamicItems: AlbumItem[] = [];

            snapshot.forEach((doc) => {
                const data = doc.data();
                dynamicItems.push({
                    id: doc.id,
                    type: data.type || 'image',
                    thumbnailUrl: data.thumbnailUrl || '',
                    mediaUrl: data.mediaUrl || '',
                    title: data.title || 'Alert Captured',
                    createdAt: data.createdAt
                });
            });

            setMediaItems(dynamicItems);
            setLoading(false);
        }, (error) => {
            console.error("Firebase live album subscription error:", error);
            setLoading(false);
        });

        // Clean up connection channel on layout teardown
        return () => unsubscribe();
    }, []);

    const handleMediaPress = (item: AlbumItem) => {
        if (item.type === 'video') {
            setSelectedVideo(item.mediaUrl);
        } else {
            console.log("Viewing static high-res picture:", item.mediaUrl);
        }
    };

    const renderGridItem = ({ item }: { item: AlbumItem }) => {
        const isVideo = item.type === 'video';

        return (
            <TouchableOpacity
                onPress={() => handleMediaPress(item)}
                activeOpacity={0.9}
                style={styles.gridCard}
            >
                <Box style={styles.imageWrapper}>
                    {item.thumbnailUrl ? (
                        <Image source={{ uri: item.thumbnailUrl }} style={styles.mediaThumbnail} />
                    ) : (
                        <Box style={StyleSheet.absoluteFillObject} className="bg-slate-200 justify-center items-center" />
                    )}

                    {/* Overlay Player Controllers */}
                    <Box style={styles.overlayBadge} className={isVideo ? "bg-black/40" : "bg-black/20"}>
                        {isVideo ? (
                            <Box style={styles.playCircle} className="bg-orange-500">
                                <Play color="white" fill="white" size={scale(14)} style={{ marginLeft: scale(2) }} />
                            </Box>
                        ) : (
                            <ImageIcon color="white" size={scale(16)} />
                        )}
                    </Box>
                </Box>

                <Text style={{ fontSize: moderateScale(12), fontWeight: '600' }} className="text-slate-600 mt-2 px-1" numberOfLines={1}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScreenContainer showHeader={false} scrollable={false}>
            <VStack style={{ flex: 1, paddingHorizontal: scale(24), paddingTop: verticalScale(40), gap: verticalScale(20) }}>

                {/* Header Profile Info Layout */}
                <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <VStack style={{ gap: verticalScale(2) }}>
                        <Text style={{ fontSize: moderateScale(22), fontWeight: '900' }} className="text-slate-900 tracking-tight">
                            Security Media Vault
                        </Text>
                        <Text style={{ fontSize: moderateScale(13) }} className="text-slate-400 font-medium">
                            Review real-time cloud snapshot logs.
                        </Text>
                    </VStack>
                    <VideoIcon color="#EA580C" size={scale(28)} />
                </HStack>

                {/* Conditional Screen Context Renderer */}
                {loading ? (
                    <VStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#EA580C" />
                    </VStack>
                ) : mediaItems.length === 0 ? (
                    <VStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: scale(8) }}>
                        <FolderSearch color="#94A3B8" size={scale(48)} />
                        <Text style={{ fontSize: moderateScale(14) }} className="text-slate-400 font-bold">
                            No Media Content Recorded Yet
                        </Text>
                    </VStack>
                ) : (
                    <FlatList
                        data={mediaItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderGridItem}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: verticalScale(30) }}
                        style={{ flex: 1 }}
                    />
                )}

                {/* Video Player Modal Engine Layout */}
                <Modal
                    visible={selectedVideo !== null}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setSelectedVideo(null)}
                >
                    <Box style={styles.modalOverlay} className="bg-black/95">
                        <HStack style={styles.modalHeader}>
                            <TouchableOpacity
                                onPress={() => { setSelectedVideo(null); setIsVideoBuffering(false); }}
                                style={styles.closeButton}
                                className="bg-white/10"
                            >
                                <X color="white" size={scale(20)} />
                            </TouchableOpacity>
                        </HStack>

                        {selectedVideo && (
                            <Box style={styles.videoPlayerCanvas}>
                                <Video
                                    source={{ uri: selectedVideo }}
                                    style={StyleSheet.absoluteFillObject}
                                    resizeMode="contain"
                                    controls={true}
                                    paused={false}
                                    onLoadStart={() => setIsVideoBuffering(true)}
                                    onReadyForDisplay={() => setIsVideoBuffering(false)}
                                />
                                {isVideoBuffering && (
                                    <Box style={StyleSheet.absoluteFillObject} className="justify-center items-center bg-black/30">
                                        <ActivityIndicator size="large" color="#EA580C" />
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Box>
                </Modal>

            </VStack>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    gridCard: { width: COLUMN_WIDTH, marginBottom: verticalScale(18) },
    imageWrapper: { width: COLUMN_WIDTH, height: COLUMN_WIDTH, borderRadius: scale(16), overflow: 'hidden', position: 'relative', backgroundColor: '#E2E8F0' },
    mediaThumbnail: { width: '100%', height: '100%', resizeMode: 'cover' },
    overlayBadge: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end', alignItems: 'flex-start', padding: scale(10) },
    playCircle: { width: scale(28), height: scale(28), borderRadius: scale(14), justifyContent: 'center', alignItems: 'center' },
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modalHeader: { position: 'absolute', top: verticalScale(40), right: scale(24), zIndex: 10 },
    closeButton: { padding: scale(10), borderRadius: scale(20) },
    videoPlayerCanvas: { width: SCREEN_WIDTH, height: verticalScale(400), position: 'relative' },
});