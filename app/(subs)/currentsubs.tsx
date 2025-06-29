import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { CustomButton3, CustomButton4, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { FreeSub, SubsUnlimited, Wallet01 } from '../../components/AppIcon';



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
            <Stack.Screen options={{ title: "Subscription" }} />
            <Box h={"100%"} alignContent="center" flex={1}>
                <Box mt={verticalScale(30)} alignItems='center' >
                    <Box  justifyContent='center'   >
                        <Text  fontSize={20.5} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'current Subscription'}</Text>
                    </Box>
                    <SubsUnlimited />
                </Box >
                <Box mt={verticalScale(30)} alignItems='center'>
                    <Wallet01 />
                </Box >
                <Box alignItems='center' mt={verticalScale(70)}>
                    <CustomButton3 label="Upgrade" onPress={() => {  }} />
                </Box>
                <Box alignItems='center' mt={verticalScale(15)}>
                    <CustomButton4 label="Cancel" onPress={() => {  }} />
                </Box>
            </Box>
        </BaseScreenWithoutBackground >
    );
}