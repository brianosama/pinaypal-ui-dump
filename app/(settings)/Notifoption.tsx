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
import { Color } from "../../GlobalStyles";
import { MDBSwitch } from 'mdb-react-ui-kit';



export default function Page() {

    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Notification Settings" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" borderWidth={"$0"} mt={verticalScale(10)}>
                        <Box display="flex" alignItems="center">
                            <Text fontSize={22} fontFamily="Poppins_600SemiBold" p={15}>Enable Notification</Text>
                            <Box alignSelf="center">
                                <Switch size="lg" sx={{
                                    _light: {
                                        props: {
                                            trackColor: {
                                                false: "$backgroundLight300",
                                                true: "$#FFB9C6",
                                            },
                                        },
                                    },
                                }} py={0} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </BaseScreenWithoutBackground >

    );
}

