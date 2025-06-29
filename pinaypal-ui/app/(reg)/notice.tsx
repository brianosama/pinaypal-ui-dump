import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { NextButton, SkipButtonAlt } from '../../components/FormElements';
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
      <Box flex={1} mt={verticalScale(15)}>
        <Box mb={verticalScale(70)} mt={verticalScale(40)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text pt={10} lineHeight={32} color='#000' textAlign='center' fontSize={26} fontFamily='Poppins_400Regular'>
            {"“After enjoying your free trial, simply select the subscription plan that suits you best, and we'll seamlessly transition you to that subscription. Your chosen plan will be automatically charged to your credit card, ensuring uninterrupted access to our premium features and services. It's hassle-free and convenient, allowing you to continue experiencing all the benefits without any interruptions.”"}
          </Text>
        </Box>
        <Box mt={verticalScale(30)} alignSelf='center'>
          <NextButton label={"Next"} onPress={() => {router.push("/(reg)/subs"); }} />
        </Box>
        <Box mt={verticalScale(20)} alignSelf='center'>
          <SkipButtonAlt label={"Skip for now"} onPress={() => {router.push("/(reg)/finishreg"); }} />
        </Box>
      </Box>

    </BaseScreenWithBackground >
  );
}




