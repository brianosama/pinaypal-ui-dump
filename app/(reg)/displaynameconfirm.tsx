import { Box, Input, InputField, Text } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton, UserNameBtn, UserNameBtn2 } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from "react";



export default function Page() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={5} px={horizontalScale(10)} pt={verticalScale(100)} minHeight={verticalScale(150)} justifyContent="space-evenly" borderWidth={"$0"}>
                <Text lineHeight={verticalScale(36)} fontSize={30} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#000">Hi, "UserName"</Text>
                <Box mt={verticalScale(50)}>
                    <Text lineHeight={verticalScale(30)} fontSize={24} fontFamily='Poppins_400Regular' textAlign="center" width={"100%"} color="#000">
                        {`Confirm that your name is correct, please.`}</Text>
                </Box>
            </Box>
            <Box flex={1} px={horizontalScale(10)} py={verticalScale(280)} justifyContent="flex-end" w={"100%"} borderWidth={"$0"}>
                <Box borderWidth={"$0"}>
                    <UserNameBtn label={"Yes"} onPress={() => {
                        router.push("/(reg)/spcloffer");
                    }} />
                </Box>
                <Box mt={20} borderWidth={"$0"}>
                    <UserNameBtn2 label={"No"} onPress={() => {
                        router.push("/(reg)/displayname");
                    }} />
                </Box>

            </Box>
        </BaseScreenWithBackground>
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