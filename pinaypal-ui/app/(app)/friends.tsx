import { Box, Button, ButtonText, Card, Heading, Image, ScrollView, Text } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack } from 'expo-router';
import { BadgeCheckIcon, CheckCircle2Icon, CircleIcon, CrossIcon, MessageCircleIcon, TrashIcon, VerifiedIcon, XCircleIcon, XIcon } from 'lucide-react-native';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { StyleSheet } from 'react-native';

const UserCard = () => {
    return (
        <Box style={style.UserCardStyle}>
            <Image
                alt={"pinay_01"}
                borderRadius={30}
                w={horizontalScale(180)}
                h={verticalScale(180)}
                resizeMode='cover'
                source={{
                    uri: "https://unsplash.com/photos/2blOZ_smQ6c/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4MTg3MDg4fA&force=true&w=640",
                }}
            />
            <Box my={verticalScale(8)}>
                <Text>
                    <Text fontSize={20} fontFamily='Poppins_700Bold'>
                        Maria, 28
                    </Text>
                    <CheckCircle2Icon color={"white"} fill={"green"} />
                </Text>
                <Text fontSize={16}>Dasmarinas, Cavite</Text>
            </Box>
            <Box flexDirection='row' justifyContent='space-evenly'>
                <Button width={"45%"} borderRadius={0} bgColor='#ffb9c6' $active-bgColor='#996f76'>
                    <XIcon color={"#fff"} />
                </Button>
                <Button width={"45%"} borderRadius={0} bgColor='#ffb9c6' $active-bgColor='#996f76'>
                    <MessageCircleIcon color={"#fff"} />
                </Button>
            </Box>
        </Box>
    );
}

const UserCardScreen = () => {
    return (
        <ScrollView >
            <Box mt={verticalScale(12)} flexDirection="row" justifyContent='space-evenly'>
                <UserCard />
                <UserCard />
            </Box>
            <Box mt={verticalScale(12)} flexDirection="row" justifyContent='space-evenly'>
                <UserCard />
                <UserCard />
            </Box>
            <Box mt={verticalScale(12)} flexDirection="row" justifyContent='space-evenly'>
                <UserCard />
            </Box>
        </ScrollView>
    );
}

export default function Page() {
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "PinayPal" }} />
            <Box h={"100%"} alignContent="center">
                <UserCardScreen />
            </Box>
        </BaseScreenWithoutBackground>
    );
}

const style = StyleSheet.create({
    UserCardStyle: {
        borderRadius: 16,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 16,
        elevation: 16,
        shadowOpacity: 1,
        overflow: "hidden",
        width: "45%"
    }
})