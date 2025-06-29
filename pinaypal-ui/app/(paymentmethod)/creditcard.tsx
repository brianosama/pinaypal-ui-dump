import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView, styled, Divider } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { BuyButton, CcButton, CustomButton3, CustomButton4, PlayButton, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { CancelSub, CancelledSub, FreeSub, GooglePlay, NoSub, SubsMax, SubsPlus, SubsUnlimited, Wallet01 } from '../../components/AppIcon';
import { StyleSheet } from "react-native";


function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/icons/pp-logo-white-2.png')}
        />
    );
}

export default function Page() {
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Payment Method" }} />
            <Box h={"100%"} alignContent="center" mt={verticalScale(10)} >
                <Box style={styles.container} alignContent='flex-start' flexDirection='row'>
                    <Box alignContent='flex-start' marginLeft={horizontalScale(10)} mt={verticalScale(10)}>
                        <GooglePlay />
                    </Box>
                    <Text ml={horizontalScale(20)} fontFamily='Poppins_400Regular' color='#000' fontSize={20} mt={verticalScale(38)}>Google Play</Text>
                </Box >
                <Box mt={verticalScale(350)} style={styles.container2}>
                    <Box flexDirection='row' mt={verticalScale(15)}>
                        <Text color='#4A4A4A' ml={horizontalScale(10)} fontFamily='Poppins_400Regular' fontSize={16}>PinayPal Plus 1 month:</Text>
                        <Text color='#4A4A4A' ml={horizontalScale(68)} fontFamily='Poppins_400Regular' fontSize={16}>₱249.99/mo</Text>
                    </Box>
                    <Divider my={"$3"} bg="#000" />
                    <Box flexDirection='row' >
                        <Text color='#4A4A4A' ml={horizontalScale(10)} fontFamily='Poppins_400Regular' fontSize={16}>Total:</Text>
                        <Text color='#4A4A4A' ml={horizontalScale(187)} fontFamily='Poppins_400Regular' fontSize={16}>₱499.97 + Tax</Text>
                    </Box>
                </Box>
                <Box mt={verticalScale(30)}>
                    <Text fontFamily='Poppins_400Regular' fontSize={11} textAlign='center'>
                        {'By tapping PROCEED, we will charge your card, your subscription will automatically renew for the same package length at the same price until you Cancel, and you agree to our '}

                        <Text fontFamily='Poppins_600SemiBold' fontSize={11} textDecorationLine='underline'>
                            {'Terms'}
                        </Text>
                    </Text>
                </Box>
                <Box alignItems='center' mt={verticalScale(10)}>
                    <BuyButton label="PROCEED" onPress={() => { router.push("/ccpayment"); }} />
                </Box>
            </Box>

        </BaseScreenWithoutBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "#rgba(255, 185, 198, 0.5)",
        borderRadius: 30,
        width: 380,
        alignSelf: 'center',

    },
    container2: {
        height: 100,
        backgroundColor: "#rgba(147, 147, 147, 0.25)",
        borderRadius: 20,
        width: 380,
        alignSelf: 'center',

    }


});
