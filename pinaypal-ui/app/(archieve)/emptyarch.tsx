import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';

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
            <Stack.Screen options={{ title: "Archieve" }} />
            <Box h={"100%"} alignContent="center">
                <Box py={(verticalScale(340))}  alignItems='center'>
                    <Text fontFamily='Poppins_400Regular'> You don’t have archive messages yet.</Text>
                </Box>
            </Box>
        </BaseScreenWithoutBackground>
    );
}