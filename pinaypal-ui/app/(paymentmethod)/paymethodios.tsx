import { Box } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Image } from 'react-native';
import { CcButton, ApplePayButton1 } from '../../components/FormElements';
import { verticalScale } from '../../helpers/ScaleHelper';
import { StyleSheet } from "react-native";
import React = require('react');


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
                <Box style={styles.container} mt={verticalScale(228)}>
                    <Box mt={verticalScale(10)} alignItems='center'>
                        <CcButton label="Credit or Debit Card " onPress={() => { router.push("/ccpayment"); }} />
                        <Box mt={verticalScale(5)}></Box>
                        <ApplePayButton1 label="Apple Pay " onPress={() => { router.push("/(paymentmethod)/iospay"); }} />
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithoutBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        backgroundColor: "#rgba(255, 185, 198, 0.5)",
        borderRadius: 10,
        width: 380,
        alignSelf: 'center',

    }


});
