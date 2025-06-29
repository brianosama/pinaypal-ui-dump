import { Box, Input, InputField, Text } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from "react";

export default function Page() {

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} px={horizontalScale(10)} pt={verticalScale(10)} minHeight={verticalScale(150)} justifyContent="space-evenly" borderWidth={"$0"}>
                <Text lineHeight={verticalScale(36)} fontSize={30} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">Enter your correct name</Text>
            </Box>
            <Box flex={5} marginLeft={10}>
                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                    Name
                </Text>
                <Input style={styles.InputBoxStyle} alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                    <InputField placeholder="Enter your Name" type="text" keyboardType="numeric" color="#676f82" fontSize={18} />
                </Input>
            </Box>
            <Box flex={1} px={horizontalScale(10)} py={verticalScale(20)} justifyContent="flex-end" w={"100%"} borderWidth={"$0"}>
                <Box borderWidth={"$0"}>
                    <PrimaryButton label={"Continue"} onPress={() => {
                        router.push("/displaynameconfirm");
                    }} />
                </Box>
                <Box mt={20} borderWidth={"$0"}>
                    <SecondaryButton label={"Go Back"} onPress={() => {
                        router.back();
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