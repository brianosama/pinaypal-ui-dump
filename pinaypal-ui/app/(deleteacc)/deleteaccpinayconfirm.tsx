import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Center, HStack, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput, } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { CustomButton, CustomButton1, DeleteButton, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet } from "react-native";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { RadioButton, } from 'react-native-paper';
import React from "react";
import { PalLogoutPic, PinayLogoutPic } from "../../components/AppIcon";



export default function Page() {

    const [value, setValue] = React.useState('');

    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Delete Account" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" >
                        <Box flex={1} px={horizontalScale(10)} mt={verticalScale(24)} minHeight={verticalScale(136)}>
                            <Text w={"100%"}>
                                <Text lineHeight={verticalScale(48)} textAlign="left" fontSize={24} fontFamily='Poppins_600SemiBold' color="#000000" >{`You sure you want to delete your account?`}</Text>
                            </Text>
                        </Box>
                        <Center mb={verticalScale(130)} borderWidth={"$0"}>
                            <PinayLogoutPic />
                        </Center>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" mt={28} borderWidth={"$0"}>
                            <Box alignSelf="center" >
                                <DeleteButton label="Delete Account" onPress={() => { }} />
                            </Box>
                        </Box>
                    </Box>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithoutBackground>
    );
}

const styles = StyleSheet.create({
    InputBoxStyle: {
        shadowColor: "rgba(245, 130, 41, 0.16)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#ffb9c6",
        borderWidth: 1,
        backgroundColor: "#fff",
    }



});