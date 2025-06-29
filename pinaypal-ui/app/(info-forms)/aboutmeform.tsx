import { Stack, router } from "expo-router";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Box, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput } from "@gluestack-ui/themed";
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
                        <Progress value={70} w={"100%"} mt={verticalScale(42)}>
                            <ProgressFilledTrack bg="#EF5DA8" />
                        </Progress>
                        <Box flex={1} px={horizontalScale(10)} mt={verticalScale(24)} minHeight={verticalScale(136)}>
                            <Text w={"100%"}>
                                <Text lineHeight={verticalScale(48)} textAlign="left" fontSize={32} fontFamily='Poppins_600SemiBold' color="#000000" >{`Tell us anything about yourself`}</Text>
                            </Text>
                            <Text w={"100%"} fontFamily="Poppins_400Regular">
                                <Text>Share some details about who you are.</Text>
                            </Text>
                        </Box>
                        <Box flex={1} px={horizontalScale(10)} minHeight={verticalScale(200)} alignContent="stretch" justifyContent="space-evenly">
                            <Box w={"100%"} flex={1}>
                                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                    About Me
                                </Text>
                                <Textarea h={verticalScale(160)} alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                                    <TextareaInput type="text" color="#676f82" placeholder="e.i. I'm sweet and caring" />
                                </Textarea>
                            </Box>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                            <Box>
                                <PrimaryButton label="Next" onPress={() => { router.push("/hobbiesform"); }} />
                            </Box>
                            <Box mt={verticalScale(20)}>
                                <SecondaryButton label="Go Back" onPress={() => { router.back(); }} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
}