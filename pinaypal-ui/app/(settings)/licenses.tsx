import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Center, HStack, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput, VStack, Avatar, Switch, ScrollView } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { CustomButton, ListButton, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet, SectionList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PalLogoutPic, PinayPalLogoAndTextPink } from "../../components/AppIcon";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { AvatarFallbackText } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Badge } from "react-native-paper";




export default function Page() {

    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Licenses" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <Box h={"100%"} flexDirection="column" borderWidth={"$0"} mt={verticalScale(10)}>
                    <ScrollView>
                        <Box alignSelf="center" justifyContent="flex-start" borderWidth={"$0"}>

                            <Box style={styles.container}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Unsplash
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Figma
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box style={styles.container} mt={verticalScale(8)}>
                                <Text style={styles.text}>
                                    Firebase
                                </Text>
                            </Box>
                            <Box>
                                <Center>
                                    <PinayPalLogoAndTextPink />
                                </Center>
                            </Box>
                            <Box mb={verticalScale(10)} mt={verticalScale(10)}>
                                <Text color="#EF5DA8" alignSelf="center" fontSize={14} fontFamily="Poppins_400Regular">{'v1.0'}</Text>
                            </Box>
                        </Box>
                    </ScrollView>
                </Box>
            </KeyboardAvoidingView>
        </BaseScreenWithoutBackground >

    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#rgba(147, 147, 147, 0.3)",
        borderRadius: 10,
        width: 370,
        justifyContent: "flex-start",
    },
    text: {
        color: "#000",
        fontSize: 22,
        fontFamily: "Poppins_400Regular",
        alignSelf: "flex-start",
        paddingTop: 20,
        paddingLeft: 10,
    }


});


