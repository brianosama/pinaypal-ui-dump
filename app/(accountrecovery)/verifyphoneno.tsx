import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, StyleSheet, } from 'react-native';
import { verticalScale } from '../../helpers/ScaleHelper';
import React from 'react';
import { Input } from '@gluestack-ui/themed';
import { InputField } from '@gluestack-ui/themed';




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
            {"Verification Code"}
          </Text>
        </Box>
        <Box mt={verticalScale(10)} alignSelf='stretch' >
          <Text pt={10} lineHeight={24} color='#000' textAlign='left' fontSize={20} fontFamily='Poppins_400Regular'>
            {'Enter the verification code that we sent to "Mobile Number" '}
          </Text>
        </Box>
        <Box mt={verticalScale(200)}>
          <Box flexDirection="row">
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
            <Box flex={1} m={2}>
              <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
              </Input>
            </Box>
          </Box>
        </Box>
        <Box mt={verticalScale(300)} alignSelf='center'>
          <Button borderRadius={100} bgColor='#EF5DA8' width={350} height={60}  onPress={() => { router.push("/"); }}>
            <ButtonText fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center' color='#fff'>Verify</ButtonText>
          </Button>
        </Box>
      </Box>
    </BaseScreenWithBackground >
  );
}

const styles = StyleSheet.create({
  InputBoxStyle: {
    shadowColor: "rgba(245, 130, 41, 0.16)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#ffb9c6",
    borderWidth: 1,
  }
});
