import { Box, Center, Text } from "@gluestack-ui/themed";
import React from 'react';
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { WelcomePalImg } from "../../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";

export default function WelcomeScreenPinay() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} px={horizontalScale(10)} w={"100%"} minHeight={verticalScale(250)} justifyContent="space-evenly">
                <Text textAlign="left" alignContent="center" >
                    <Text lineHeight={verticalScale(46)} fontSize={28} fontFamily='Poppins_600SemiBold' color="#000000">Welcome, </Text>
                    <Text fontSize={28} fontFamily='Poppins_700Bold' color="#EF5DA8">Pal!</Text>
                </Text>
                <Text w={"100%"} fontFamily="Poppins_400Regular" >
                    <Text>Almost ready to meet your </Text>
                    <Text fontFamily="Poppins_700Bold" color="#000000">Pinay! </Text>
                    <Text fontFamily="Poppins_400Regular">Let's set up your profile first.</Text>
                </Text>
            </Box>
            <Center borderWidth={"$0"}>
                <WelcomePalImg />
            </Center>
            <Box px={horizontalScale(10)} py={verticalScale(20)}>
                <Box borderWidth={"$0"} mt={48}>
                    <PrimaryButton label={"Next"} onPress={() => { 
                        router.push("/fullnameform");
                    }} />
                </Box>
                <Box mt={20} borderWidth={"$0"}>
                    <SecondaryButton label={"Go Back"} onPress={() => { 
                        router.back();
                    }} />
                </Box>
            </Box>
        </BaseScreenWithBackground>
    );
};