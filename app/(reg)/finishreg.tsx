import { Box, Input, InputField, KeyboardAvoidingView, Text } from "@gluestack-ui/themed";

import { PrimaryButton, BackButton, NextButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { Keyboard, Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from "react";
import { CheckAnim } from "../../components/AppIcon";





export default function Page() {
 
        return (
            <BaseScreenWithBackground>
                <Stack.Screen options={{ headerShown: false }} />
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box height={"100%"} >
                            <Box px={horizontalScale(10)} pt={verticalScale(30)} justifyContent="space-evenly" minHeight={verticalScale(150)} borderWidth={"$0"} >
                                <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">Welcome,
                                    <Text lineHeight={verticalScale(36)} fontSize={27} fontFamily='Poppins_600SemiBold' width={"100%"} color="#333">"UserName".</Text></Text>
                            </Box>
                            <Box maxHeight={350} pt={verticalScale(20)} alignSelf="center">
                               <CheckAnim />
                            </Box>
                            <Box flex={1} mt={verticalScale(80)}>
                                <Text lineHeight={verticalScale(25)} fontSize={24} fontFamily='Poppins_400Regular' textAlign="center" width={"100%"} color="#333" borderWidth={"$0"}>
                                    {`You’ve successfully registered, Let’s setup your profile.`}</Text>
                            </Box>
                            <Box flex={1} px={horizontalScale(10)} py={verticalScale(10)} justifyContent="flex-end" w={"100%"} borderWidth={"$0"}>
                                <Box alignSelf="center">
                                    <NextButton label={"Continue"} onPress={() => {
                                        router.push("/");
                                    }} />
                                </Box>
                                <Box mt={20} alignSelf="center">
                                    <BackButton label={"Go Back"} onPress={() => {
                                        router.back();
                                    }} />
                                </Box>
                            </Box>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </BaseScreenWithBackground>
        );
    }

    const styles = StyleSheet.create({
        InputBoxStyle: {
            shadowColor: "rgba(245, 130, 67, 0.16)",
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