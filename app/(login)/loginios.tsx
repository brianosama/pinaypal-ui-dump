import { Box, Text } from "@gluestack-ui/themed";
import { AppleSignInBtn, FacebookSignInBtn, GoogleSignInBtn, PhoneNumberSignInBtn, PrimaryButton, SecondaryButton, TroubleLoginBtn } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";
import { useState } from "react";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from "react";


export default function Page() {
    const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box mt={verticalScale(50)} alignItems="center" justifyContent="center" minHeight={verticalScale(250)}>
                <PinayPalLogoAndTextWhite />
            </Box>
            <Box justifyContent="center" w={"100%"}>
                <Box px={horizontalScale(10)} minHeight={verticalScale(100)}>
                    <Text textAlign="center" fontFamily="Poppins_400Regular">
                        <Text color="#000">By signing in, you agree to our </Text>
                        <Text color="#000" fontFamily="Poppins_600SemiBold" textDecorationLine="underline">Terms and Conditions.</Text>
                    </Text>
                    <Text textAlign="center" w={"100%"} fontFamily="Poppins_400Regular">
                        <Text color="#000">Learn about our use of your data in our </Text>
                        <Text color="#000" fontFamily="Poppins_600SemiBold" textDecorationLine="underline">Privacy Policy.</Text>
                    </Text>
                </Box>
                <Box mt={verticalScale(10)} alignSelf="center">
                    <Box mt={verticalScale(10)}>
                        <AppleSignInBtn label={"Sign in with Apple"} onPress={() => {
                            console.log("clicked!");
                            router.replace("/(reg)/startregistration");
                        }} />
                    </Box>
                    <Box mt={verticalScale(10)}>
                        <PhoneNumberSignInBtn label={"Sign in with Phone Number"} onPress={() => {
                            console.log("clicked!");
                            router.replace("/(reg)/startregistration");
                        }} />
                    </Box>
                    <Box mt={verticalScale(30)} alignSelf="center">
                        <TroubleLoginBtn label={"Trouble logging in?"} onPress={() => {
                            console.log("clicked!");
                            router.replace("/(accountrecovery)/troublelogin");
                        }} />
                    </Box>
                </Box>
                <Box mt={verticalScale(30)}>
                </Box>
            </Box>

        </BaseScreenWithBackground>
    );
}