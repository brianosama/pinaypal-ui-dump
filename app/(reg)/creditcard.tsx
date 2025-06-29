import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image } from 'react-native';
import { NextButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { StyleSheet } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import React from "react";


function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/icons/pp-logo-white-2.png')}
        />
    );
}

const USE_LITE_CREDIT_CARD_INPUT = false;

export default function Page() {

    const _onChange = (formData: any) => {
        console.log(JSON.stringify(formData, null, " "));
    };

    const _onFocus = (field: any) => {
        console.log(field);
    };


    return (
        <BaseScreenWithBackground>
            <Box flex={1} mt={verticalScale(40)}>
                <Text color='#000' lineHeight={23} ml={horizontalScale(10)} textAlign='center' fontFamily='Poppins_400Regular' fontSize={16}>{"We'd like to inform you that registering your credit card within our app incurs no charges. Your card details are securely stored to facilitate seamless transactions and enhance your experience within the app. Rest assured, there are no automatic charges or fees upon adding your credit card. Your financial security is our top priority, and we maintain transparency in our practices."}</Text>

                <Box height={verticalScale(20)} mt={verticalScale(20)} alignContent="center" style={styles.container} borderWidth={"$0"}>
                    {USE_LITE_CREDIT_CARD_INPUT ?
                        (<LiteCreditCardInput
                            autoFocus
                            inputStyle={styles.input}

                            validColor={"black"}
                            invalidColor={"red"}
                            placeholderColor={"gray"}

                            onFocus={this._onFocus}
                            onChange={this._onChange} />
                        ) : (
                            <CreditCardInput
                                autoFocus

                                requiresName
                                requiresCVC
                                requiresPostalCode


                                labelStyle={styles.label}
                                inputStyle={styles.input}
                                validColor={"black"}
                                invalidColor={"red"}
                                placeholderColor={"gray"}

                                onFocus={this._onFocus}
                                onChange={this._onChange} />)
                    }
                </Box>
                <Box mt={verticalScale(300)} alignSelf='center'>
                    <Text color='#000' textAlign='center' fontSize={12} fontFamily='Poppins_400Regular'>{" If you have any questions or need assistance with the registration process, our support team is available to help."}</Text>
                    <Text color='#000' textAlign='center' fontSize={12} fontFamily='Poppins_400Regular'>
                        {"By tapping Add Payment Method, you agree to our "}</Text>
                    <Text color='#000' textAlign='center' fontSize={12} fontFamily='Poppins_600SemiBold' textDecorationLine='underline'>{"Terms."}</Text>
                    <Box mt={verticalScale(10)} alignSelf='center'>
                        <NextButton label={"Add Payment Method"} onPress={() => { router.push("/(reg)/notice"); }} />
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderRadius: 30,
        width: 380,
        alignSelf: 'center',

    },
    container2: {
        height: 100,
        backgroundColor: "#rgba(147, 147, 147, 0.25)",
        borderRadius: 20,
        width: 380,
        alignSelf: 'center',

    },
    label: {
        color: "black",
        fontSize: 12,
        fontFamily: "Poppins_400Regular"
    },
    input: {
        fontSize: 16,
        color: "black",
        fontFamily: "Poppins_400Regular"
      }

});
