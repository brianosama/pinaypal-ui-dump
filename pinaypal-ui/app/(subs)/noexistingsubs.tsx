import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { CustomButton3, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { FreeSub, NoSub, SubsMax, SubsPlus, SubsUnlimited, Wallet01 } from '../../components/AppIcon';



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
                    <Box>
                        <NoSub />
                    </Box>
                    <Box justifyContent='center' alignItems='center' mt={verticalScale(10)}>
                        <Text padding={34} fontSize={50} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'UHH OHH!'}</Text>
                        <Text textAlign='center' fontSize={18} color='#EF5DA8' fontFamily='Poppins_400Regular'>{'You are not currently subscribed to any plans'}</Text>
                    </Box >

                    <Box flexDirection='row' mt={verticalScale(90)}>
                        <Text fontSize={18} color='#FFB9C6' fontFamily='Poppins_400Regular'>{'Subscribe now and meet new '}</Text>
                        <Text fontSize={18} color='#FFB9C6' fontFamily='Poppins_600SemiBold'>{'PINAY '}</Text>
                    </Box>
                    <Text fontSize={18} color='#FFB9C6' fontFamily='Poppins_400Regular'>{'now!'}</Text>
                    <Box alignItems='center' mt={verticalScale(10)}>
                        <CustomButton3 label="Cancel" onPress={() => { }} />
                    </Box>
                </Box>
            </Box >
        </BaseScreenWithoutBackground >
    );
}