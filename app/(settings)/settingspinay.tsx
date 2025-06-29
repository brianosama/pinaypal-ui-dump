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
            <Stack.Screen options={{ title: "Settings" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <Box h={"100%"} flexDirection="column" borderWidth={"$0"} mt={verticalScale(10)}>
                    <ScrollView>
                        <HStack space="md">
                            <Avatar bgColor="$orange600">
                            </Avatar>
                            <VStack alignSelf="center">
                                <Heading size="lg" alignItems="center">Robert
                                </Heading>
                            </VStack>
                        </HStack>
                        <Box flexDirection="row" mt={verticalScale(25)}>
                            <Text color="#939393" fontFamily="Poppins_600SemiBold" fontSize={18}>
                                Account Settings
                            </Text>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" borderWidth={"$0"}>
                            <Box alignSelf="center" >
                                <ListButton label="Edit Profile" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Change Mobile Number" onPress={() => { router.push("/(changenum)/notice"); }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Notification Settings" onPress={() => { router.push("/(settings)/Notifoption"); }} />
                            </Box>
                            
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Edit Profile" onPress={() => { }} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" mt={verticalScale(25)}>
                            <Text color="#939393" fontFamily="Poppins_600SemiBold" fontSize={18}>
                                Privacy Settings
                            </Text>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" borderWidth={"$0"}>
                            <Box alignSelf="center" >
                                <ListButton label="Blocked Users" onPress={() => { }} />
                            </Box>
                        </Box>
                        <Box flexDirection="row" mt={verticalScale(25)}>
                            <Text color="#939393" fontFamily="Poppins_600SemiBold" fontSize={18}>
                                More
                            </Text>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" borderWidth={"$0"}>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Cookie Policy" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Privacy Policy" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Terms and Condition" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Licenses" onPress={() => { router.push("/licenses"); }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Help Center" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="About Us" onPress={() => { }} />
                            </Box>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Logout" onPress={() => { }} />
                            </Box>
                            <Center>
                                <PinayPalLogoAndTextPink />
                            </Center>
                        </Box>
                        <Box flexDirection="row" mt={verticalScale(25)}>
                            <Text color="#939393" fontFamily="Poppins_600SemiBold" fontSize={18}>
                                Account Management
                            </Text>
                        </Box>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" borderWidth={"$0"}>
                            <Box alignSelf="center" mt={verticalScale(5)}>
                                <ListButton label="Delete Account" onPress={() => { }} />
                            </Box>
                            <Box alignContent="center" justifyContent="center" mt={verticalScale(10)}>
                                <Text alignSelf="center" color="#EF5DA8" fontFamily="Poppins_600SemiBold">
                                    v1.0
                                </Text>
                            </Box>
                        </Box>
                    </ScrollView>
                </Box>
            </KeyboardAvoidingView>
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
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        fontFamily: "Poppins_400Regular",
    },
    item: {
        padding: 12,
        fontSize: 16,
        height: 50,
        fontFamily: "Poppins_400Regular",
    },
    container: {
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 10,
    }


});


