import { Box, Button, Input, InputField, KeyboardAvoidingView, ScrollView, Text } from "@gluestack-ui/themed";

import { CloseBtn, CustomButton4, MaxBtn, PrimaryButton, SecondaryButton, UnliBtn } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { Keyboard, Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BaseScreenWithBackground, BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";
import { PinayPalMax, PinayPalUnli, SubsMax, SubsUnlimited } from "../../components/AppIcon";



export default function Page() {
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box mt={verticalScale(24)} alignItems="center" borderWidth={"$0"}>
                <Box alignSelf="flex-end" >
                    <CloseBtn label="" onPress={() => { }} />
                </Box>
                <Box borderWidth={"$0"} alignSelf="center">
                    <SubsUnlimited />
                </Box>
                <Box borderWidth={"$0"}>
                    <Text fontFamily='Poppins_600SemiBold' fontSize={19} color='#000' textAlign="center">
                        {'With PinayPal UNLIMITED, you get unlimited premium access.'}
                    </Text>
                </Box>
                <Box mt={verticalScale(18)} >
                    <Text fontFamily='Poppins_600SemiBold' fontSize={16} color='#000'>
                        Select a Plan
                    </Text>
                    <Box flexDirection="row" alignSelf="center" borderWidth={"$0"}>
                        <Box style={styles.container} ml={horizontalScale(8)}>
                            <Box style={styles.container3}>
                                <Box>
                                    <Text mt={verticalScale(5)} fontFamily="Poppins_600SemiBold" fontSize={18} color="#000" alignSelf="center">
                                        3 Months
                                    </Text>
                                </Box>
                            </Box>
                            <Box>
                                <Text fontFamily="Poppins_700Bold" fontSize={20} color="#000" alignSelf="center">
                                    ₱249.99
                                </Text>
                            </Box>
                        </Box>
                        <Box style={styles.container2}>
                            <Box style={styles.container3}>
                                <Text mt={verticalScale(5)} fontFamily="Poppins_600SemiBold" fontSize={18} color="#000" alignSelf="center">
                                    12 Months
                                </Text>
                            </Box>
                            <Box>
                                <Text fontFamily="Poppins_700Bold" fontSize={20} color="#000" alignSelf="center">
                                    ₱699.99
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box alignItems="center" borderWidth={"$0"}>
                        <PinayPalUnli />
                        <Box alignItems="center" borderWidth={"$0"} mt={verticalScale(20)}>
                            <Box>
                                <Text fontFamily="Poppins_400Regular" fontSize={10} textAlign="center">
                                    {'By tapping Continue, you will be charged, your subscription will auto-renew for the same price and package length until you cancel, and you agree to our '}
                                    <Text fontFamily="Poppins_600SemiBold" fontSize={10} textDecorationLine="underline">
                                        {'Terms.'}
                                    </Text>
                                </Text>
                            </Box>
                            <Box mt={verticalScale(10)}>
                                <UnliBtn label="Continue" onPress={() => { }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithoutBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#rgba(255, 185, 198, 0)",
        height: 101,
        width: 175,
        marginTop: 35,
        marginBottom: 25,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: "#FEE994",
    },
    container2: {
        height: 101,
        width: 175,
        marginTop: 35,
        marginBottom: 25,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#939393",
    },
    container3: {
        backgroundColor: "#rgba(255, 255, 255, 0)",
        height: 30,
        width: "70%",
        marginTop: 8,
        marginBottom: 25,
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
    }
});
