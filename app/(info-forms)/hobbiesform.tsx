import { Stack, router } from "expo-router";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Box, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { CustomToggleButton, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { Chip, PaperProvider, ToggleButton } from "react-native-paper";

export default function Page() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <PaperProvider>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box h={"100%"} flexDirection="column" >
                            <Progress value={45} w={"100%"} mt={verticalScale(30)}>
                                <ProgressFilledTrack bg="#EF5DA8" />
                            </Progress>
                            <Box mt={verticalScale(50)} px={horizontalScale(10)} minHeight={verticalScale(150)}>
                                <Text w={"100%"}>
                                    <Text lineHeight={verticalScale(48)} fontSize={32} fontFamily='Poppins_600SemiBold' color="#000000" >What interests you?</Text>
                                </Text>
                                <Text mt={verticalScale(12)} w={"100%"} fontFamily="Poppins_400Regular">
                                    <Text>Inform everyone about your hobbies and interests by choosing them from the options below.</Text>
                                </Text>
                            </Box>
                            <Box flex={1} justifyContent="center" minHeight={verticalScale(150)}>
                                <Box px={horizontalScale(10)} flexDirection="row" flexWrap="wrap" justifyContent="space-between">
                                    <CustomToggleButton label={"Gym"} onPress={() => { }} />
                                    <CustomToggleButton label={"Cooking"} onPress={() => { }} />
                                    <CustomToggleButton label={"Basketball"} onPress={() => { }} />
                                    <CustomToggleButton label={"Spa"} onPress={() => { }} />
                                    <CustomToggleButton label={"Music"} onPress={() => { }} />
                                    <CustomToggleButton label={"Sushi"} onPress={() => { }} />
                                    <CustomToggleButton label={"Yoga"} onPress={() => { }} />
                                    <CustomToggleButton label={"Art"} onPress={() => { }} />
                                    <CustomToggleButton label={"Hiking"} onPress={() => { }} />
                                    <CustomToggleButton label={"Gardening"} onPress={() => { }} />
                                    <CustomToggleButton label={"Dancing"} onPress={() => { }} />
                                    <CustomToggleButton label={"Baking"} onPress={() => { }} />
                                </Box>
                            </Box>
                            <Box flex={1} alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                                <Box>
                                    <PrimaryButton label="Next" onPress={() => { router.push("/profiledoneform") }} />
                                </Box>
                                <Box mt={verticalScale(20)}>
                                    <SecondaryButton label="Go Back" onPress={() => { router.back() }} />
                                </Box>
                            </Box>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </PaperProvider>
        </BaseScreenWithBackground>
    );
}