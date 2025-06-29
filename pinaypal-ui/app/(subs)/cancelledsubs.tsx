import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { CustomButton3, CustomButton4, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { CancelSub, CancelledSub, FreeSub, NoSub, SubsMax, SubsPlus, SubsUnlimited, Wallet01 } from '../../components/AppIcon';



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
                    <Box alignItems='center' mt={verticalScale(10)} >
                        <Text padding={5} textAlign='center' fontSize={24} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'You cancelled your'}</Text>
                        <Text padding={5} textAlign='center' fontSize={24} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'subscription'}</Text>
                    </Box >
                    <Box mt={verticalScale(40)} alignItems='center'>
                        <CancelledSub />
                    </Box>
                    <Box alignItems='center' mt={verticalScale(80)}>
                        <Text fontSize={15} color='#FFB9C6' fontFamily='Poppins_400Regular'>{'You still be able to use '}</Text>
                        <Text fontSize={18} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'*Subscription*'}</Text>
                        <Text fontSize={15} color='#FFB9C6' fontFamily='Poppins_400Regular'>{'Until 12/01/2024'}</Text>
                        <Box mt={verticalScale(10)}>
                            <CustomButton3 label="Renew Subscription" onPress={() => { }} />
                        </Box>
                        <Box alignItems='center' mt={verticalScale(10)}>
                            <CustomButton4 label="Go Back" onPress={() => { }} />
                        </Box>
                    </Box>
                </Box>
            </Box >
        </BaseScreenWithoutBackground >
    );
}