import { Stack, router } from "expo-router";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Box, Center, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { PinayPalPic } from "../../components/AppIcon";


export default function Page() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" >
                        <Progress value={100} w={"100%"} mt={verticalScale(30)}>
                            <ProgressFilledTrack bg="#EF5DA8" />
                        </Progress>
                        <Box mt={verticalScale(50)} px={horizontalScale(10)} minHeight={verticalScale(150)}>
                            <Text textAlign="left" w={"100%"}>
                                <Text lineHeight={verticalScale(46)} fontSize={28} fontFamily='Poppins_600SemiBold' color="#000000" >Let's begin the search for your </Text>
                                <Text fontSize={28} fontFamily='Poppins_700Bold' color="#EF5DA8">Pinay.</Text>
                            </Text>                            
                        </Box>
                        <Box flex={1} px={horizontalScale(10)} minHeight={verticalScale(250)} alignItems="center" justifyContent="center">
                            <Center flex={1} borderWidth={"$0"} alignSelf="center">
                                <PinayPalPic />
                            </Center>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                            <Box>
                                <PrimaryButton label="Finish" onPress={() => { router.push("/"); }} />
                            </Box>
                            <Box mt={verticalScale(20)}>
                                <SecondaryButton label="Back" onPress={() => { router.back() }} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithBackground>
    );
}