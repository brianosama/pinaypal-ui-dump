import { Stack, router } from "expo-router";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Box, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";

export default function Page() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" >
                        <Progress value={45} w={"100%"} mt={verticalScale(30)}>
                            <ProgressFilledTrack bg="#EF5DA8" />
                        </Progress>
                        <Box mt={verticalScale(50)} px={horizontalScale(10)} minHeight={verticalScale(150)}>
                            <Text w={"100%"}>
                                <Text lineHeight={verticalScale(48)} fontSize={32} fontFamily='Poppins_600SemiBold' color="#000000" >What's your birthday? </Text>
                            </Text>
                            <Text mt={verticalScale(12)} w={"100%"} fontFamily="Poppins_400Regular">
                                <Text>Your age will be shown to potential matches, but your birthday will not be disclosed.</Text>
                            </Text>
                        </Box>
                        <Box flex={1} px={horizontalScale(10)} minHeight={verticalScale(250)} alignItems="center" justifyContent="center">
                            <Box justifyContent="space-evenly" flexDirection="row" >
                                <Box flex={2} px={horizontalScale(5)}>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Month
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                </Box>
                                <Box flex={1.5} px={horizontalScale(5)}>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Day
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                </Box>
                                <Box flex={2.5} px={horizontalScale(5)}>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Year
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                </Box>
                            </Box>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                            <Box>
                                <PrimaryButton label="Next" onPress={() => { router.push("/aboutmeform");  }} />
                            </Box>
                            <Box mt={verticalScale(20)}>
                                <SecondaryButton label="Go Back" onPress={() => { router.back() }} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
}