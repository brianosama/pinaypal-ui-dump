import { Box, Text } from "@gluestack-ui/themed";
import { MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import * as Location from 'expo-location';
import { GetUserCountryLocation, SetLocationPermissions } from "../../helpers/LocationHelper";
import { Center } from "@gluestack-ui/themed";
import { BaseScreenWithBackground } from "../../screens/generic/basescreen";
import { Link, Stack, router } from "expo-router";


export default function Page() {

    const AllowLocationServices = async () => {
        let status = await SetLocationPermissions();

        if (status !== Location.PermissionStatus.GRANTED) {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await GetUserCountryLocation();
        console.log(location);

        router.replace("/notificationpermission");
    };

    return (
        <BaseScreenWithBackground>
            <Stack.Screen options={{ headerShown: false }} />
            <Box flex={1} alignItems="center">
                <Center minHeight={verticalScale(250)} pt={verticalScale(50)} >
                    <MapPinnedIcon color="#fff" size={160} />
                </Center>
            </Box>
            <Box flex={1}>
                <Text mt={verticalScale(54)} px={horizontalScale(10)} lineHeight={36} fontSize={28} fontFamily='Poppins_600SemiBold' textAlign="left" width={"100%"} color="#333">{`Allow PinayPal to use                      
your location?`}</Text>
                <Text mt={verticalScale(54)} px={horizontalScale(10)} lineHeight={20} fontSize={18} fontFamily='Poppins_400Regular' textAlign="left" width={"100%"} color="#333">
                    {`Our use of location services helps us find the most suitable match for you.`}</Text>
            </Box>
            <Box flex={1} py={verticalScale(20)} justifyContent="flex-end" alignSelf="center" w={"100%"} px={horizontalScale(10)} >
                <Box>
                    <PrimaryButton label={"Allow Location Services"} onPress={AllowLocationServices} />
                </Box>
                <Box mt={20}>
                    <SecondaryButton label={"Go Back"} onPress={() => {
                        router.replace("/");
                    }} />
                </Box>
            </Box>
        </BaseScreenWithBackground>
    );
}