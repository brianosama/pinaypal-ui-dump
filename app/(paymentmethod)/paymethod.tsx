import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView, styled } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { CcButton, CustomButton3, CustomButton4, PlayButton, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { CancelSub, CancelledSub, FreeSub, NoSub, SubsMax, SubsPlus, SubsUnlimited, Wallet01 } from '../../components/AppIcon';
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
                <Box style={styles.container} mt={verticalScale(228)}>
                    <Box mt={verticalScale(10)} alignItems='center'>
                        <CcButton label="Credit or Debit Card " onPress={() => { router.push("/ccpayment");}} />
                        <Box mt={verticalScale(5)}></Box>
                        <PlayButton label="Google Pay " onPress={() => { router.push("/creditcard"); }} />
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
