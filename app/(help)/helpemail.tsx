import { Box, Center, Input, InputField, ScrollView, Text, Textarea, TextareaInput, Button, } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title, } from 'react-native-paper';
import { Image, StyleSheet, } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { PinayPalLogoAndTextPink, PinayPalLogoPink } from '../../components/AppIcon';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


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
                    <Text fontFamily='Poppins_600SemiBold' fontSize={30} py={verticalScale(10)} alignSelf='center'>
                        Still need help?
                    </Text>
                    <Text fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center'>
                        Fill out form and we’ll get back to you ASAP.
                    </Text>
                    <Box flex={1} px={horizontalScale(10)} py={verticalScale(20)} minHeight={verticalScale(250)} alignItems="center" justifyContent="center">
                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                            Email Address
                        </Text>
                        <Input alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                            <InputField type="text" color="#676f82" />
                        </Input>
                        <Box w={"100%"} flex={1} py={verticalScale(5)}>
                            <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                Description
                            </Text>
                            <Textarea h={verticalScale(160)} alignSelf="stretch" borderColor="#ffb9c6" size="xl" backgroundColor="#fff">
                                <TextareaInput type="text" color="#676f82" placeholder="" />
                            </Textarea>
                        </Box>
                        <Box alignSelf="center" px={verticalScale(10)} w={"60%"} justifyContent="flex-end" mt={24} mb={verticalScale(24)}>
                            <Box>
                                <Button bgColor='#FFB9C6' h={verticalScale(65)} borderRadius={100} onPress={() => { }} >
                                    <Text fontFamily='Poppins_600SemiBold' color='black'>
                                        Send Email
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

    }
});
