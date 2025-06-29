import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, Text, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { horizontalScale, verticalScale } from "../helpers/ScaleHelper";
import { PinayPalLogoWhite } from "../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { BaseScreenWithBackground } from "./generic/basescreen";


const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }

    return (
        <BaseScreenWithBackground >
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"}>
                        <Center flex={1} minHeight={verticalScale(250)}>
                            <PinayPalLogoWhite />
                        </Center>
                        <VStack alignItems="center" w={"100%"}>
                            <Box w={horizontalScale(300)} >
                                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                    Email Address
                                </Text>
                                <Input alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                                    <InputField type="text" color="#676f82" />
                                </Input>
                            </Box>
                            <Box w={horizontalScale(300)}>
                                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                    Password
                                </Text>
                                <Input alignSelf="stretch" borderColor="#676f82" size="xl">
                                    <InputField type={showPassword ? "text" : "password"} color="#676f82" />
                                    <InputSlot pr="$3" onPress={handleState}>
                                        <InputIcon
                                            as={showPassword ? EyeIcon : EyeOffIcon}
                                            color="#676f82"
                                        />
                                    </InputSlot>
                                </Input>
                            </Box>
                        </VStack>
                        <VStack alignSelf="center" justifyContent="flex-end" w={"100%"} px={horizontalScale(10)} mt={verticalScale(36)}> 
                            <Box m={verticalScale(8)}>
                                <PrimaryButton label="Login" onPress={() => {
                                    console.log("Test 1")
                                }} />
                            </Box>
                            <Box m={verticalScale(8)}>
                                <SecondaryButton label="Back" onPress={() => {
                                    navigation.goBack();
                                }} />
                            </Box>
                        </VStack>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
}



export default LoginScreen;