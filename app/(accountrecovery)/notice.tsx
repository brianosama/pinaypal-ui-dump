import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { NextButton, SkipButtonAlt } from '../../components/FormElements';
import { verticalScale } from '../../helpers/ScaleHelper';
import React from 'react';
import { RecoveryPic } from "../../components/AppIcon";


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
      <Box flex={1} mt={verticalScale(20)}>
        <Box mt={verticalScale(60)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text pt={10} lineHeight={30} color='#000' textAlign='left' fontSize={32} fontFamily='Poppins_600SemiBold'>
            {"Account Recovery"}
          </Text>
        </Box>
        <Box mt={verticalScale(10)} alignSelf='stretch' >
          <Text pt={10} lineHeight={22} color='#000' textAlign='left' fontSize={20} fontFamily='Poppins_400Regular'>
            {"You can now access your account by logging in with your phone number."}
          </Text>
        </Box>
        <Box mt={100} alignSelf='center'>
          <RecoveryPic />
        </Box>
        <Box mt={verticalScale(250)} alignSelf='center'>
          <Button borderRadius={100} bgColor='#EF5DA8' width={350} height={60} onPress={() => { router.push("/loginandroid"); }}>
            <ButtonText fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center' color='#fff'>Login</ButtonText>
          </Button>
        </Box>
      </Box>
    </BaseScreenWithBackground >
  );
}




