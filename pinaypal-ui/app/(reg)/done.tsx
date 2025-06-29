import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { NextButton } from '../../components/FormElements';
import { verticalScale } from '../../helpers/ScaleHelper';
import { DoneAdd } from '../../components/AppIcon';
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
      <Box flex={1}  mt={verticalScale(15)}>
        <Box mb={verticalScale(70)} mt={verticalScale(40)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text  pt={10} color='#000' textAlign='center' fontSize={26} fontFamily='Poppins_600SemiBold'>
            {"We've successfully added your payment method."}
          </Text>
        </Box>
        <Box maxHeight={350} pt={verticalScale(20)}>
          <DoneAdd />
        </Box>
        <Box>
        <Text mt={verticalScale(50)} pt={verticalScale(10)} color='#000' textAlign='center' fontSize={26} fontFamily='Poppins_600SemiBold'>
            {"We've successfully added your payment method."}
          </Text>
          </Box>
        <Box mt={verticalScale(100)} alignSelf='center'>
          <NextButton label={"Next"} onPress={() => {router.push("/(reg)/finishreg"); }} />
          
        </Box>
      </Box>

    </BaseScreenWithBackground >
  );
}




