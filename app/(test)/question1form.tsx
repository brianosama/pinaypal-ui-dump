import { Box, Button, ButtonText, Center, HStack, KeyboardAvoidingView, Text, VStack } from "@gluestack-ui/themed";
import React from 'react';
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PinayPalLogoAndTextWhite, PinayPalLogoWhite, WelcomePalImg } from "../../components/AppIcon";
import { CustomToggleButtonGroup, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function WelcomeScreenPinay() {
    const buttons = [
        { key: 'btn1', label: 'Watch a movie' },
        { key: 'btn2', label: 'Explore nature' },
        { key: 'btn3', label: 'Go Shopping' },
        { key: 'btn4', label: 'Go Clubbing' },

    ];

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} justifyContent="space-around">
                        <Center flex={1.6} >
                            <PinayPalLogoWhite />
                        </Center>
                        <Box flex={0.4} >
                            <Text w={"100%"} px={horizontalScale(12)}>
                                <Text lineHeight={verticalScale(36)} fontSize={22} 
                                    fontFamily='Poppins_600SemiBold' color="#000000" >How do you spend your free time?</Text>
                            </Text>
                        </Box>
                        <Box flex={1.5} >
                            <CustomToggleButtonGroup selection={buttons} />
                        </Box>
                        <Box flex={0.5} alignSelf="center" w={"100%"} justifyContent="center" >
                            <HStack alignSelf="center">
                                <Box w={"45%"} px={horizontalScale(3)}>
                                    <SecondaryButton label="Back" onPress={() => { router.back() }} />
                                </Box>
                                <Box w={"45%"} px={horizontalScale(3)}>
                                    <PrimaryButton label="Next" onPress={() => { router.push("/question2form"); }} />
                                </Box>
                            </HStack>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
};