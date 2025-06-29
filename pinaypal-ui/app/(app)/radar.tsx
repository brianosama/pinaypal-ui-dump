

import { Text, StyleSheet } from 'react-native';
import { Box, Center, HStack } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Image } from '@gluestack-ui/themed';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { BadgeCheckIcon, Locate, Router } from 'lucide-react-native';
import { Badge_Avatar, LocationBadge, No_Picture_Avatar, Radar, } from '../../components/AppIcon';
import { LikeButton, SkipButton, RefreshBtn } from '../../components/FormElements';
import { ScrollView } from '@gluestack-ui/themed';
import React from 'react';
import { Color, FontFamily, FontSize } from '../../GlobalStyles';

export default function Page() {
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Match" }} />
            <Box h={"100%"} alignContent="center">
                <Box flext={1} alignSelf='center'>
                    <Image
                        style={[styles.image, styles.outercircle]}
                        source={require('../../assets/test-image/outercircle.png')}/>
                    <Image
                        style={[styles.image, styles.midcircle]}
                        source={require('../../assets/test-image/midcircle.png')}
                    />
                    <Image
                        style={[styles.image, styles.innercircle]}
                        source={require('../../assets/test-image/innercircle.png')}
                    />
                    <Image
                        style={[styles.image, styles.avatar]}
                        source={require('../../assets/test-image/no_picture_avatar.png')}
                    />
                     <Image
                        style={[styles.image, styles.avatar1]}
                        source={require('../../assets/test-image/no_picture_avatar.png')}
                    />
                    <Image
                        style={[styles.image, styles.badge1]}
                        source={require('../../assets/test-image/badge.png')}
                    />
                    <Text style={[styles.percent]}>50%</Text>
                     <Image
                        style={[styles.image, styles.avatar2]}
                        source={require('../../assets/test-image/no_picture_avatar.png')}
                    />
                     <Image
                        style={[styles.image, styles.avatar3]}
                        source={require('../../assets/test-image/no_picture_avatar.png')}
                    />
                     <Image
                        style={[styles.image, styles.avatar4]}
                        source={require('../../assets/test-image/no_picture_avatar.png')}
                    />
                </Box>
                < Box flex={1} mt={verticalScale(460)} alignSelf='center' >
                    <RefreshBtn onPress={() => { router.push("/"); }} />
                    <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16, alignSelf: 'center', marginTop: 40, color: "#FFB9C6" }}>
                        {'Refresh'}
                    </Text>
                </Box >
            </Box>
        </BaseScreenWithoutBackground>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        width: 250,  // Adjust size as needed
        height: 250, // Adjust size as needed
        resizeMode: 'cover', // Adjust resizeMode as needed
    },
    badge: {
        width: 40,  // Adjust size as needed
        height: 40, // Adjust size as needed
        maxHeight: 60,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    badge1: {
        width: 33,  // Adjust size as needed
        height: 33, // Adjust size as needed
        maxHeight: 60,
        resizeMode: 'contain', // Adjust resizeMode as needed
        position: 'absolute',
        top: 68,
        right: 78,
    },
    percent: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        top: 75,
        right: 79,
        color: 'white',
    },
    avatar: {
        alignSelf: 'center',
        position: 'absolute',
        width: 90,  // Adjust size as needed
        height: 90, // Adjust size as needed
        maxHeight: 80,
        top: 140,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    avatar1: {
        right: 85,
        position: 'absolute',
        width: 70,  // Adjust size as needed
        height: 70, // Adjust size as needed
        maxHeight: 70,
        top: 30,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    avatar2: {
        left: 85,
        position: 'absolute',
        width: 70,  // Adjust size as needed
        height: 70, // Adjust size as needed
        maxHeight: 70,
        top: 260,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    avatar3: {
        right: 85,
        position: 'absolute',
        width: 70,  // Adjust size as needed
        height: 70, // Adjust size as needed
        maxHeight: 70,
        top: 260,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    avatar4: {
        left: 85,
        position: 'absolute',
        width: 70,  // Adjust size as needed
        height: 70, // Adjust size as needed
        maxHeight: 70,
        top: 30,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    innercircle: {
        top: 130,
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    midcircle: {
        top: 65,
        alignSelf: 'center',
        width: 230,
        height: 230,
    },
    outercircle: {
        alignSelf: 'center',
        height: 350,
        width: 350,
        top: 10,
    }
});
