import { Box, Center, SafeAreaView, VStack } from "@gluestack-ui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, verticalScale } from "../helpers/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";
import { BaseScreenWithBackground } from "./generic/basescreen";

const IndexScreen = ({ navigation }) => {
    return (
        <BaseScreenWithBackground>
            <Box h={"100%"} alignContent="center">
                <Center flex={1} minHeight={verticalScale(250)}>
                    <PinayPalLogoAndTextWhite />
                </Center>
                <VStack flex={1} justifyContent="flex-end" alignSelf="center" w={"100%"} px={horizontalScale(10)} mt={verticalScale(36)}>
                    <Box m={verticalScale(8)}>
                        <PrimaryButton label="Login" onPress={() => {
                            navigation.navigate("LoginScreen")
                        }} />
                    </Box>
                    <Box m={verticalScale(8)}>
                        <SecondaryButton label="Sign Up" onPress={() => {
                            navigation.navigate("RegistrationScreen")
                        }} />
                    </Box>
                </VStack>
            </Box>
        </BaseScreenWithBackground>
    );
}

export default IndexScreen;