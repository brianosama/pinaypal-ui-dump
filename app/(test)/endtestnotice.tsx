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
                        <Center flex={2.5}>
                            <PinayPalLogoAndTextWhite />
                        </Center>
                        <Box flex={1} mt={verticalScale(50)} px={horizontalScale(5)}>
                            <Text w={"100%"} >
                                <Text lineHeight={verticalScale(26)} fontFamily='Poppins_600SemiBold'
                                    color="#000000" >You have successfully completed the partner matching test. We will now proceed to update our matching algorithm with the information gathered from your test results.</Text>
                            </Text>
                        </Box>
                        <Box flex={0.5} w={"100%"} justifyContent="flex-end">
                            <Box m={verticalScale(8)}>
                                <PrimaryButton label="Finish Test" onPress={() => {
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