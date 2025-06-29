import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";




export default function Page() {

    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Change Mobile Number" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" >
                        <Box flex={1} px={horizontalScale(10)} mt={verticalScale(24)} minHeight={verticalScale(136)}>
                            <Text w={"100%"}>
                                <Text lineHeight={verticalScale(48)} textAlign="left" fontSize={32} fontFamily='Poppins_600SemiBold' color="#000000" >{`You changed your Mobile Number`}</Text>
                            </Text>
                            <Text w={"100%"} fontFamily="Poppins_400Regular">
                                <Text>You may now return to your profile</Text>
                            </Text>
                
                    
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                            <Box>
                                <PrimaryButton label="Complete" onPress={() => { router.push("/(app)/"); }} />
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
