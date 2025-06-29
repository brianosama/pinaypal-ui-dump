import { Box, Center, Text } from "@gluestack-ui/themed";

import { BellDotIcon } from "lucide-react-native";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Stack, router } from "expo-router";


export default function Page() {
    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box h={"100%"} flexDirection="column" justifyContent="space-between">
                <Box flex={1} alignItems="center">
                    <Center minHeight={verticalScale(250)} pt={verticalScale(50)}>
                        <BellDotIcon color="#fff" size={160} />
                    </Center>
                </Box>
                <Box flex={1} px={horizontalScale(10)}>
                    <Text mt={verticalScale(54)} lineHeight={36} fontSize={28} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">{`Allow PinayPal to send you notifications?`}</Text>
                    <Text mt={verticalScale(54)} lineHeight={24} fontSize={18} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                        {`We aim to notify you whenever you receive new likes and messages.`}</Text>
                </Box>
                <Box flex={1} py={verticalScale(20)} justifyContent="flex-end" mt={36} borderWidth={"$0"} w={"100%"}>
                    <Box borderWidth={"$0"}>
                        <PrimaryButton label={"Set Permission"} onPress={async () => {
                            router.replace("/startregistration");
                        }} />
                    </Box>
                    <Box mt={20} borderWidth={"$0"}>
                        <SecondaryButton label={"Go Back"} onPress={() => {
                            router.replace("/");
                        }} />
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithBackground>
    );
}