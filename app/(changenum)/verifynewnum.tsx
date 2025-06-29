import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet } from "react-native";


export default function Page() {
    return (
        <BaseScreenWithoutBackground>
         <Stack.Screen options={{ title: "Change Mobile Number" }} />
            <Box h={"100%"} flexDirection="column" >
                <Box flex={1} px={horizontalScale(10)} mt={verticalScale(24)} minHeight={verticalScale(136)}>
                    <Text w={"100%"}>
                        <Text lineHeight={verticalScale(48)} textAlign="left" fontSize={32} fontFamily='Poppins_600SemiBold' color="#000000" >{`Verify your Mobile Number`}</Text>
                    </Text>
                </Box>
                <Box flex={1} px={horizontalScale(10)} minHeight={verticalScale(150)} pt={verticalScale(50)} justifyContent="space-evenly" borderWidth={"$0"}>
                    <Text lineHeight={verticalScale(24)} fontSize={16} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333">
                        {`Please input the six-digit code that was sent to your mobile number via text.`}</Text>
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
                <Box flex={1} px={horizontalScale(15)} minHeight={verticalScale(150)} pt={verticalScale(50)} justifyContent="space-evenly" borderWidth={"$0"}>
                    <Text lineHeight={verticalScale(20)} fontSize={16} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333">
                        <Text fontFamily='Poppins_400Regular' color="#333">Haven't received anything? </Text>
                        <Text fontFamily="Poppins_700Bold" color="#333">RESEND</Text>
                    </Text>
                </Box>
                <Box alignSelf="center" py={verticalScale(20)} w={"100%"} justifyContent="flex-end" mt={36}>
                    <Box>
                        <PrimaryButton label="Send OTP" onPress={() => { router.push("/(changenum)/changenumdoneform"); }} />
                    </Box>
                    <Box mt={verticalScale(20)}>
                        <SecondaryButton label="Go Back" onPress={() => { router.back(); }} />
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithoutBackground >
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