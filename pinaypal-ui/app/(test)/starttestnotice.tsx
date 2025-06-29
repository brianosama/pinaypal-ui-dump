import { Box, Center, KeyboardAvoidingView, Text, VStack } from "@gluestack-ui/themed";
import React from 'react';
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PinayPalLogoAndTextWhite, WelcomePalImg } from "../../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function WelcomeScreenPinay() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} justifyContent="space-around">
                        <Center flex={1}>
                            <PinayPalLogoAndTextWhite />
                        </Center>
                        <Box flex={1} mt={verticalScale(50)} px={horizontalScale(5)}>
                            <Text w={"100%"} >
                                <Text lineHeight={verticalScale(26)} fontFamily='Poppins_600SemiBold' color="#000000" >This test is designed to help you find a partner who aligns well with your preferences. For the most accurate matching, please respond to the questions honestly.</Text>
                            </Text>
                        </Box>
                        <Box w={"100%"} justifyContent="flex-end">
                            <Box m={verticalScale(8)}>
                                <PrimaryButton label="Start" onPress={() => {
                                    router.push("/question1form");
                                }} />
                            </Box>
                            <Box m={verticalScale(8)}>
                                <SecondaryButton label="Cancel" onPress={() => {
                                    router.replace("/")
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
};