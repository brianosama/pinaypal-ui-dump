import { Stack } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Center, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { verticalScale } from "../../helpers/ScaleHelper";
import { CustomButton, CustomButton1 } from "../../components/FormElements";
import { StyleSheet } from "react-native";
import { PalLogoutPic } from "../../components/AppIcon";

export default function Page() {

    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Logout" }} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} flexDirection="column" borderWidth={"$0"}>
                        <Box mt={verticalScale(10)}>
                            <Text color="#000" textAlign="center" lineHeight={32} fontSize={30} fontFamily="Poppins_600SemiBold">{'You sure you want to Logout?'}</Text>
                        </Box>
                        <Center flex={1} borderWidth={"$0"}>
                            <PalLogoutPic />
                        </Center>
                        <Box alignSelf="center" py={verticalScale(20)} justifyContent="flex-end" mt={28} borderWidth={"$0"}>
                            <Box alignSelf="center" >
                                <CustomButton label="Logout" onPress={() => { }} />
                            </Box>
                            <Box mt={verticalScale(20)} alignItems="center">
                                <CustomButton1 label="Take a Break" onPress={() => { }} />
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