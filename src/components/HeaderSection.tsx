import React, { useState } from 'react'; // 🎯 Added useState here
import { Platform, Pressable, StatusBar, TouchableOpacity } from 'react-native';
import { Menu, Bell, ChevronLeft, Search, X, LogOut, Navigation } from 'lucide-react-native';
import { Menu as HOSMenu, MenuItem, MenuItemLabel } from '../components/HOSGluestackUI';
import FastImage from '@d11/react-native-fast-image';
import { Box, Heading, HStack, VStack } from './HOSGluestackUI';
import { Icon } from './HOSIconUI';
import GradientView from './GradientView';
import AnimatedMotiView from './AnimatedMotiView';
import { scale, moderateScale, verticalScale } from '../utils/scaling';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    theme?: 'midnight' | 'emerald' | 'slate' | 'blue' | 'sunset' | 'ocean' | 'cyan' | 'forest' | 'bordeaux' | 'charcoal' | 'white' | 'glass' | 'mint';
    showBackButton?: boolean;
    onBackPress?: () => void;
    showRightIcon?: boolean;
    rightIconType?: 'menu' | 'bell' | 'search' | 'close';
    onRightPress?: () => void;
    showLogo?: boolean;
}

const getStatusBarHeight = () => {
    return Platform.select({
        ios: 44,
        android: StatusBar.currentHeight || 0,
        default: 0,
    });
};

const HeaderSession = ({
    title,
    theme = 'emerald',
    showBackButton = true,
    onBackPress,
    showRightIcon = true,
    rightIconType = 'menu',
    onRightPress,
    showLogo = false,
}: HeaderProps) => {

    // 🎯 FIX: Explicitly control Menu dropdown open/close state metrics
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigation = useNavigation<any>();

    const palettes = {
        midnight: ['#1E1B4B', '#0F172A'],
        emerald: ['#064E3B', '#022C22'],
        slate: ['#334155', '#0F172A'],
        blue: ['#0891B2', '#155E75'],
        sunset: ['#8B5CF6', '#EC4899'],
        ocean: ['#0284C7', '#0369A1'],
        forest: ['#0F766E', '#115E59'],
        bordeaux: ['#4C0519', '#881337'],
        charcoal: ['#1E293B', '#0F172A'],
        cyan: ['#0097b2', '#00bcd4'],
        white: ['#FFFFFF', '#F8FAFC'],
        glass: ['#F1F5F9', '#E2E8F0'],
        mint: ['#E6F4EA', '#CEEAD6'],
    };

    const getRightIcon = () => {
        switch (rightIconType) {
            case 'menu': return Menu;
            case 'bell': return Bell;
            case 'search': return Search;
            case 'close': return X;
            default: return Menu;
        }
    };

    const RightIcon = getRightIcon();
    const STATUS_BAR_HEIGHT = getStatusBarHeight();

    const isWhiteTheme = theme === 'white' || theme === 'glass' || theme === 'mint';
    const textColor = isWhiteTheme ? 'text-slate-800' : 'text-white';
    const iconColor = isWhiteTheme ? '#1E293B' : 'white';
    const iconBg = isWhiteTheme ? 'bg-slate-900/5' : 'bg-white/10';
    const shadowColor = isWhiteTheme ? '#64748B' : palettes[theme][0];

    const handleLogout = async () => {
        try {
            // 1. Check Google Session Status Safely
            const googleUser = await GoogleSignin.getCurrentUser();
            if (googleUser) {
                await GoogleSignin.signOut();
            }

            // 2. Check Firebase Session Status Safely 
            if (auth().currentUser) {
                await auth().signOut();
                console.log('Firebase session cleared cleanly.');
            } else {
                console.log('No active Firebase session found, skipping signOut.');
            }
        } catch (err) {
            console.error('Logout processing exception:', err);
        }
    };

    return (
        <AnimatedMotiView disableAnimation={true}>
            <GradientView
                colors={palettes[theme]}
                horizontal={true}
                style={{
                    paddingTop: verticalScale(10),
                    paddingBottom: verticalScale(10),
                    elevation: 15,
                    shadowColor: shadowColor,
                    shadowOffset: { width: 0, height: verticalScale(10) },
                    shadowOpacity: isWhiteTheme ? 0.08 : 0.3,
                    shadowRadius: scale(15),
                }}
            >
                <HStack
                    style={{ paddingHorizontal: scale(24), gap: scale(8) }}
                    className="items-center justify-between"
                >
                    {/* LEFT SIDE SLOT: BACK BUTTON OR LOGO WITH DROPDOWN MENU */}
                    <Box style={{ width: scale(48) }} className="justify-center">
                        {showLogo ? (
                            <HOSMenu
                                // 🎯 FIX: Bind controlled parameters explicitly 
                                isOpen={isMenuOpen}
                                onClose={() => setIsMenuOpen(false)}
                                placement="bottom left"
                                offset={5}
                                trigger={(triggerProps) => {
                                    return (
                                        <Pressable
                                            {...triggerProps}
                                            // 🎯 FIX: Set hook true when user targets interaction icon
                                            onPress={() => setIsMenuOpen(true)}
                                            style={{
                                                width: scale(44),
                                                height: scale(44),
                                                padding: scale(4)
                                            }}
                                            className="rounded-xl bg-white/90 items-center justify-center border border-white/20 active:opacity-70"
                                        >
                                            <FastImage
                                                source={require('@/src/assets/playstore-icon.png')}
                                                style={{ width: '100%', height: '100%', borderRadius: scale(8) }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </Pressable>
                                    );
                                }}
                                className='gap-5'
                            >
                                <MenuItem
                                    key="logout"
                                    textValue="Log Out Session"
                                    onPress={() => {
                                        console.log("Menu Item Clicked!");
                                        // 🎯 FIX: Force close popup immediately on execution thread line before route updates
                                        setIsMenuOpen(false);
                                        handleLogout();
                                    }}
                                >
                                    <Icon as={LogOut} size="sm" className="text-red-600 mr-2" />
                                    <MenuItemLabel size="sm" className="text-red-600 font-bold">
                                        Log Out
                                    </MenuItemLabel>
                                </MenuItem>
                                <MenuItem
                                    key="Login"
                                    textValue="Log IN"
                                    onPress={() => {
                                        setIsMenuOpen(false);
                                        navigation.navigate('AuthScreen');
                                    }}
                                >
                                    <Icon as={LogOut} size="sm" className="text-red-600 mr-2" />
                                    <MenuItemLabel size="sm" className="text-red-600 font-bold">
                                        Sign IN
                                    </MenuItemLabel>
                                </MenuItem>
                                <MenuItem
                                    key="Settings"
                                    textValue="Settings"
                                    onPress={() => {
                                        setIsMenuOpen(false);
                                        navigation.navigate('Settings');
                                    }}
                                >
                                    <Icon as={LogOut} size="sm" className="text-red-600 mr-2" />
                                    <MenuItemLabel size="sm" className="text-red-600 font-bold">
                                        Settings
                                    </MenuItemLabel>
                                </MenuItem>
                            </HOSMenu>
                        ) : (
                            showBackButton && (
                                <TouchableOpacity
                                    onPress={onBackPress}
                                    activeOpacity={0.7}
                                    style={{ padding: scale(12) }}
                                    className={`${iconBg} rounded-2xl align-self-start`}
                                >
                                    <Icon as={ChevronLeft} size="lg" color={iconColor} />
                                </TouchableOpacity>
                            )
                        )}
                    </Box>

                    {/* TITLE SLOT */}
                    <VStack
                        style={{ marginHorizontal: scale(8) }}
                        className={`flex-1 ${showLogo ? 'items-start' : 'items-center'}`}
                    >
                        <Heading
                            numberOfLines={1}
                            style={{ fontSize: moderateScale(20) }}
                            className={`font-extrabold tracking-tight ${textColor} ${showLogo ? 'text-left' : 'text-center'}`}
                        >
                            {title}
                        </Heading>
                    </VStack>

                    {/* RIGHT SIDE SLOT */}
                    <Box style={{ width: scale(48) }} className="items-end justify-center">
                        {showRightIcon && (
                            <TouchableOpacity
                                onPress={onRightPress}
                                activeOpacity={0.7}
                                style={{ padding: scale(12) }}
                                className={`${iconBg} rounded-2xl`}
                            >
                                <Box className="relative">
                                    <Icon as={RightIcon} size="lg" color={iconColor} />
                                    {rightIconType === 'bell' && (
                                        <Box
                                            style={{
                                                top: -verticalScale(2),
                                                right: -scale(2),
                                                width: scale(10),
                                                height: scale(10),
                                                borderColor: palettes[theme][0]
                                            }}
                                            className="absolute bg-cyan-400 rounded-full border-2"
                                        />
                                    )}
                                </Box>
                            </TouchableOpacity>
                        )}
                    </Box>
                </HStack>
            </GradientView>
        </AnimatedMotiView>
    );
};

export default HeaderSession;