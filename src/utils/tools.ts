export const formatMessageTime = (createdAt: any) => {
    if (!createdAt) return '';
    // Handle both Firestore timestamp objects (.toDate()) and standard dates/numbers
    const date = typeof createdAt.toDate === 'function' ? createdAt.toDate() : new Date(createdAt);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

// 🎯 Checks if a text string contains exactly ONE emoji character sequence and nothing else
export const isSingleEmojiOnly = (text: string): boolean => {
    const trimmed = text.trim();
    // Modern complete Unicode Emoji regex matching boundary pairs
    const emojiRegex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$/;
    return emojiRegex.test(trimmed);
};