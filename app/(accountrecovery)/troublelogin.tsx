import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { NextButton, SkipButtonAlt } from '../../components/FormElements';
import { verticalScale } from '../../helpers/ScaleHelper';
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
      <Box flex={1} mt={verticalScale(20)}>
        <Box mt={verticalScale(60)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text pt={10} lineHeight={30} color='#000' textAlign='left' fontSize={32} fontFamily='Poppins_600SemiBold'>
            {"Account Recovery"}
          </Text>
        </Box>
        <Box mt={verticalScale(10)} alignSelf='stretch' >
          <Text pt={10} lineHeight={22} color='#000' textAlign='left' fontSize={20} fontFamily='Poppins_400Regular'>
            {"Lost access to your account? We can help you login with your Phone Number."}
          </Text>
        </Box>
        <Box  mt={verticalScale(450)} alignSelf='center'>
          <Button borderRadius={100} bgColor='#EF5DA8' width={350} height={60}  onPress={() => { router.push("/(accountrecovery)/enterphoneno"); }}>
            <ButtonText fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center' color='#fff'>Continue</ButtonText>
          </Button>
        </Box>
        <Box  mt={verticalScale(10)} alignSelf='center'>
          <Button borderRadius={100} bgColor='#fff' width={350} height={60}  onPress={() => { router.push("/"); }}>
            <ButtonText fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center' color='#000'>Cancel</ButtonText>
          </Button>
        </Box>
      </Box>
    </BaseScreenWithBackground >
  );
}




