import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { MaxBtn2, NextButton, PlusBtn2, SkipButtonAlt, UnliBtn2 } from '../../components/FormElements';
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
      <Box flex={1} mt={verticalScale(10)}>
        <Box mt={verticalScale(35)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text pt={10} color='#000' lineHeight={25} textAlign='center' fontSize={22} fontFamily='Poppins_400Regular'>"Select the subscription level that fits your needs best! Whether you're seeking plus access, unlimited features, or max features, we have a plan tailored just for you. Explore our subscription tiers and choose the one that aligns perfectly with your preferences and requirements." </Text>
        </Box>
        <Box flex={1} mt={verticalScale(30)} alignContent='center'>
          <Box alignSelf='center'>
            <PlusBtn2 onPress={() => {
              router.back();
            }} />
            <Box alignSelf='center' mt={verticalScale(20)}>
              <MaxBtn2 onPress={() => {
                router.back();
              }} />
              <Box alignSelf='center' mt={verticalScale(20)}>
                <UnliBtn2 onPress={() => {
                  router.back();
                }} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box  alignSelf='center' >
          <NextButton label={"Back"} onPress={() => { router.push("/(reg)/notice"); }} />
        </Box>
        <Box mt={verticalScale(10)} alignSelf='center'>
        <SkipButtonAlt label={"Skip for now"} onPress={() => { router.push("/(reg)/done")}} />
        </Box>
      </Box>
    </BaseScreenWithBackground >
  );
}




