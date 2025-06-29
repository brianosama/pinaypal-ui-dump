import { Box, Input, InputField, Text } from "@gluestack-ui/themed";

import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from "react";

const CountryData = [
    { key: "US", value: "US +1" },
    { key: "PH", value: "PH +63" }
];

export default function Page() {
    const [country, setCountry] = useState("");

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} px={horizontalScale(10)} pt={verticalScale(50)} minHeight={verticalScale(150)} justifyContent="space-evenly" borderWidth={"$0"}>
                <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">What's your mobile number?</Text>
                <Text lineHeight={verticalScale(24)} fontSize={16} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333">
                    {`Your mobile number serves as a unique identifier in our app. Rest assured, we do not share your number with anyone.`}</Text>
            </Box>
            <Box flex={1} px={horizontalScale(10)} justifyContent="center" borderWidth={"$0"}>
                <Box flexDirection="row">
                    <Box flex={1.5}>
                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                            Country
                        </Text>
                        <SelectList data={CountryData} setSelected={setCountry} searchicon={null}
                            defaultOption={{ key: "US", value: "US +1" }} search={false}
                            boxStyles={{ borderRadius: 4, borderColor: "#ffb9c6", backgroundColor: "#fff", }}
                            inputStyles={{ fontSize: 18 }}
                            dropdownStyles={{ borderColor: "#ffb9c6", backgroundColor: "#fff" }} />
                    </Box>
                    <Box flex={3} marginLeft={10}>
                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                            Mobile Number
                        </Text>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                            <InputField type="text" keyboardType="numeric" color="#676f82" fontSize={18} />
                        </Input>
                    </Box>
                </Box>
            </Box>
            <Box flex={1} px={horizontalScale(10)} py={verticalScale(20)} justifyContent="flex-end" w={"100%"} borderWidth={"$0"}>
                <Box borderWidth={"$0"}>
                    <PrimaryButton label={"Continue"} onPress={() => {
                        router.push("/mobileverify");
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