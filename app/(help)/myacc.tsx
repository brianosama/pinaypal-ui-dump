import { Box, Center, Input, InputField, ScrollView, Text, Textarea, TextareaInput, Button, } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title, } from 'react-native-paper';
import { Image, StyleSheet, } from 'react-native';
import { CustomButton2, PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { PinayPalLogoAndTextPink, PinayPalLogoPink } from '../../components/AppIcon';


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
            <Stack.Screen options={{ title: "Help Center" }} />
            <Box h={"100%"} alignContent="center">
                <ScrollView >
                    <Center>
                        <PinayPalLogoAndTextPink />
                    </Center>
                    <Box flex={1} px={horizontalScale(10)} py={verticalScale(20)} minHeight={verticalScale(250)} alignItems="center" justifyContent="center">
                        <Box alignContent='center'>
                            <Box style={styles.banner} alignItems='center' >
                                <Text fontFamily='Poppins_600SemiBold' fontSize={20} alignSelf='center' color='#fff' mt={verticalScale(15)}>
                                    My Account
                                </Text>
                            </Box>
                        </Box>
                        <Box flexDirection='row' alignContent='center' py={verticalScale(25)} >
                            <Box mr={verticalScale(3)}>
                                <CustomButton2 label="Profile" onPress={() => { router.push("/profhelp"); }} />
                            </Box>
                            <Box ml={verticalScale(3)}>
                                <CustomButton2 label="Account Setting" onPress={() => { }} />
                            </Box>
                        </Box>
                        <Box style={styles.container} alignSelf="center">
                            <Text alignSelf='center' fontFamily='Poppins_600SemiBold' fontSize={26} color='#fff' py={verticalScale(10)} mt={verticalScale(18)}>
                                Quick Help
                            </Text>
                            <Box flexDirection='column' alignItems='center'>
                                <Text mt={10} mb={verticalScale(15)} textDecorationLine='underline' fontFamily='Poppins_600SemiBold' fontSize={21} color='#fff'>
                                    Account Settings
                                </Text>
                                <Text mb={verticalScale(15)} textDecorationLine='underline' fontFamily='Poppins_600SemiBold' fontSize={21} color='#fff'>
                                    Manage Subscription
                                </Text>
                                <Text textDecorationLine='underline' fontFamily='Poppins_600SemiBold' fontSize={21} color='#fff'>
                                    Blocking
                                </Text>
                            </Box>
                        </Box>
                        <Box alignSelf="center" px={verticalScale(10)} w={"70%"} justifyContent="flex-end" mt={24} mb={verticalScale(36)}>
                            <Box>
                                <Button bgColor='#FFB9C6' h={verticalScale(65)} borderRadius={100} onPress={() => { router.push("/(help)/helpemail"); }} >
                                    <Text mt={5} alignSelf='center' fontSize={20} fontFamily='Poppins_600SemiBold' color='black'>
                                        {'Still need help?'}
                                    </Text>
                                </Button>
                            </Box>
                        </Box>
                        <Box style={styles.footer} py={verticalScale(15)} flexDirection='row' alignItems='center'>
                            <Text borderWidth={"$1"} style={styles.text} onPress={() => { router.push("/"); }}>About Us</Text>
                            <Text borderWidth={"$1"} style={styles.text} onPress={() => { router.push("/"); }}>Privacy</Text>
                            <Text borderWidth={"$1"} style={styles.text} onPress={() => { router.push("/"); }}>Copyright</Text>
                        </Box>
                    </Box>
                </ScrollView>
            </Box >
        </BaseScreenWithoutBackground >
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 4,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#EF5DA8',
        width: "100%",
        position: "relative",
        bottom: 0,

    },
    text: {
        width: 100,
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
        fontFamily: 'Poppins_400Regular',
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: 24,
        marginLeft: 5,

    },
    container: {
        backgroundColor: "#EF5DA8",
        height: 194,
        width: "100%",
        marginTop: 35,
        marginBottom: 25,
        borderRadius: 10,
    },
    banner: {
        height: 50,
        backgroundColor: "#FFB9C6",
        width: 170,
        borderRadius: 10,

    }
});
