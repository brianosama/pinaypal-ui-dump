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
                    <Box flex={1} px={horizontalScale(10)} py={verticalScale(10)} minHeight={verticalScale(250)} alignItems="center" justifyContent="center">
                        <Box alignContent='center'>
                            <Box style={styles.banner} alignItems='center' >
                                <Text fontFamily='Poppins_600SemiBold' fontSize={20} alignSelf='center' color='#fff' mt={verticalScale(15)}>
                                    Profile
                                </Text>
                            </Box>
                        </Box>
                        <Box mt={verticalScale(18)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16}>
                                Welcome to the Profile Help Center! Here, you'll find useful information and guidance on managing your profile effectively. Whether you're looking to verify your profile, adjust your account settings, or update your personal information, we've got you covered.
                            </Text>
                        </Box>
                        <Box mt={verticalScale(24)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={18}>
                                Verify Profile Button
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16}>
                                Verifying your profile is an important step to establish authenticity and trust within our community. Here's how you can verify your profile:
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                1. Navigate to Profile Settings: Go to your profile dashboard and locate the "Profile verify button".
                            </Text>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                2. Click on the "Verify Profile" button.
                            </Text>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} >
                                3. Follow Verification Steps: You'll be guided through the verification process, which may include providing additional information or documentation to confirm your identity.
                            </Text>
                        </Box>
                        <Box mt={verticalScale(24)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={18}>
                                Account Settings Button
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16}>
                                Your account settings allow you to customize your profile, edit information, and control various aspects of your account. Here's how to access your account settings:
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                1. Locate Account Settings: Look for the "Account Settings" button. It may be located in the bottom of your profile name.
                            </Text>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                2. Explore Options: Once you're in the account settings, you can explore different tabs to adjust your profile settings, photos.
                            </Text>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} >
                                3. Save Changes: Remember to save any changes you make to your account settings before exiting the page.
                            </Text>
                        </Box>
                        <Box mt={verticalScale(24)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={18}>
                                Personal Information
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16}>
                                Keeping your personal information up-to-date is essential for effective communication and account security. Here's how you can view your personal information:
                            </Text>
                        </Box>
                        <Box mt={verticalScale(16)} alignSelf='flex-start'>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                1. Navigate to Profile: Go to your profile dashboard.
                            </Text>
                            <Text fontFamily='Poppins_400Regular' fontSize={16} mb={verticalScale(5)}>
                                2. Once you're in the profile dashboard, you can view your personal information at the bottom of your profile picture.
                            </Text>
                        </Box>
                        <Box>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={22} pt={verticalScale(10)} mb={verticalScale(10)} mt={verticalScale(25)}>
                                Need Further Assistance?
                            </Text>
                            <Box mt={verticalScale(16)} alignSelf='flex-start'>
                                <Text fontFamily='Poppins_400Regular' fontSize={16}>
                                    Keeping your personal information up-to-date is essential for effective communication and account security. Here's how you can view your personal information:
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
        marginRight: 5,

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
