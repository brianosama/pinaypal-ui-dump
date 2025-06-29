import { Box, Input, InputField, Text } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { StyleSheet } from "react-native";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import React from 'react';

export default function MobileVerification()  {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} px={horizontalScale(10)} minHeight={verticalScale(150)} pt={verticalScale(50)} justifyContent="space-evenly" borderWidth={"$0"}>
                <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">Verify you mobile number</Text>
                <Text lineHeight={verticalScale(24)} fontSize={16} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333">
                    {`Please input the six-digit code that was sent to your mobile number via text.`}</Text>
                <Text >
                    <Text fontFamily='Poppins_400Regular' color="#333">Haven't received anything? </Text>
                    <Text fontFamily="Poppins_700Bold" color="#333">RESEND</Text>
                </Text>
            </Box>
            <Box flex={1} px={horizontalScale(10)} justifyContent="center" alignContent="space-between" borderWidth={"$0"}>
                <Box flexDirection="row">
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                    <Box flex={1} m={2}>
                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                        </Input>
                    </Box>
                </Box>
            </Box>
            <Box flex={1} px={horizontalScale(10)} py={verticalScale(20)} justifyContent="flex-end" w={"100%"} borderWidth={"$0"}>
                <Box borderWidth={"$0"}>
                    <PrimaryButton label={"Verify"} onPress={() => {
                        router.push("/(reg)/displaynameconfirm");
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
    }
});










