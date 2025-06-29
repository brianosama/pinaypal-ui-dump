import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Center, HStack, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput, } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { CustomButton, CustomButton1, DeleteButton, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet } from "react-native";
import { RadioButton, } from 'react-native-paper';
import React from "react";



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
                                <Text lineHeight={verticalScale(48)} textAlign="center" fontSize={16} fontFamily='Poppins_600SemiBold' color="#000000" >{`Please let us know why you are deleting:`}</Text>
                            </Text>
                        </Box>

                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <Box width={"90%"} borderWidth={'$0'} alignContent="center" justifyContent="center" alignSelf="center" mb={verticalScale(100)}>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="First" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>I met someone here</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Second" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>I met someone somewhere else</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Third" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>This app is too slow</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Fourth" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>This app has too many bugs</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Fifth" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>Not enough users here</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Sixth" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>Taking a break</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Seventh" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>I want to start a new profile</Text>
                                    </Box>
                                </Box>
                                <Box flexDirection="row" justifyContent="center">
                                    <Box flex={1}><RadioButton value="Eight" /></Box>
                                    <Box flex={5} borderWidth={"$0"} mt={verticalScale(5)}>
                                        <Text>Other</Text>
                                    </Box>
                                </Box>

                            </Box>
                        </RadioButton.Group>

                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" mt={28} borderWidth={"$0"}>
                            <Box alignSelf="center" >
                                <DeleteButton label="Delete Account" onPress={() => {router.push("/deleteaccpalconfirm"); }} />
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