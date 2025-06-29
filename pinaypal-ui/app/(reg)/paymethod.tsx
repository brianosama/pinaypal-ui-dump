import { Box } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Image } from 'react-native';
import { CcButton2, PlayButton2 } from '../../components/FormElements';
import { verticalScale } from '../../helpers/ScaleHelper';
import { StyleSheet } from "react-native";
import React from 'react';


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
        <BaseScreenWithBackground>
            <Stack.Screen options={{ title: "Payment Method" }} />
            <Box h={"100%"} alignContent="center" mt={verticalScale(10)} >
                <Box style={styles.container} mt={verticalScale(220)}>
                    <Box mt={verticalScale(80)} alignItems='center'>
                        <CcButton2 label="Credit or Debit Card " onPress={() => { router.push("/(reg)/creditcard"); }} />
                        <Box mt={verticalScale(10)}>
                            <PlayButton2 label="Google Pay" onPress={() => { router.push("/"); }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </BaseScreenWithBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        backgroundColor: "#rgba(255, 185, 198, 0.5)",
        borderRadius: 10,
        width: 380,
        alignSelf: 'center',

    },
    elevatedButton: {
        elevation: 5, // Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.25, // iOS
        shadowRadius: 3.84, // iOS
    },


});
