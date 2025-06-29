import { Box, Text } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";
import { useState } from "react";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";


export default function Page() {
    const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} alignItems="center" justifyContent="center" minHeight={verticalScale(250)}>
                <PinayPalLogoAndTextWhite />
            </Box>
            <Box flex={1} justifyContent="center" w={"100%"}>
                <Box px={horizontalScale(10)} minHeight={verticalScale(200)}>
                    <Text flex={1} textAlign="center" fontFamily="Poppins_400Regular">
                        <Text>By continuing with the signup process, you agree to our </Text>
                        <Text fontFamily="Poppins_600SemiBold" textDecorationLine="underline">Terms and Conditions</Text>
                        <Text> as outlined.</Text>
                    </Text>
                    <Text flex={1} textAlign="center" w={"100%"} fontFamily="Poppins_400Regular" >
                        <Text>Learn about our use of your data in our </Text>
                        <Text fontFamily="Poppins_600SemiBold" textDecorationLine="underline">Privacy Policy</Text>
                    </Text>
                </Box>
            </Box>
            <Box px={horizontalScale(10)} py={verticalScale(20)}>
                <Box>
                    <PrimaryButton label={"I'm Pal, looking for Pinays to Chat"} onPress={() => {
                        router.push("/mobilenumber");
                    }} />
                </Box>
                <Box mt={20}>
                    <SecondaryButton label={"I'm contented for now"} onPress={() => {
                        console.log("cancel clicked!");
                        router.replace("/");
                    }} />
                </Box>
            </Box>
        </BaseScreenWithBackground>
    );
}