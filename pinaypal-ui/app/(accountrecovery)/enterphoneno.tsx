import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { router } from 'expo-router';
import { Image, } from 'react-native';
import { verticalScale } from '../../helpers/ScaleHelper';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Input } from '@gluestack-ui/themed';
import { StyleSheet } from "react-native";
import { InputField } from '@gluestack-ui/themed';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/icons/pp-logo-white-2.png')}
    />
  );
}

const CountryData = [
  { key: "US", value: "US +1" },
  { key: "PH", value: "PH +63" }
];


export default function Page() {
  const [country, setCountry] = useState("");

  return (
    <BaseScreenWithBackground>
      <Box flex={1} mt={verticalScale(20)}>
        <Box mt={verticalScale(60)} alignSelf='stretch' pt={verticalScale(10)}>
          <Text pt={10} lineHeight={30} color='#000' textAlign='left' fontSize={32} fontFamily='Poppins_600SemiBold'>
            {"Enter Phone Number"}
          </Text>
        </Box>
        <Box mt={verticalScale(10)} alignSelf='stretch' >
          <Text pt={10} lineHeight={24} color='#000' textAlign='left' fontSize={20} fontFamily='Poppins_400Regular'>
            {"Please provide us with your mobile number so we can send you a verification code."}
          </Text>
          <Box>
            <Box flexDirection="row" mt={verticalScale(50)}>
              <Box flex={1.5}>
                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#333" >
                  Country
                </Text>
                <SelectList data={CountryData} setSelected={setCountry} searchicon={null}
                  defaultOption={{ key: "PH", value: "PH +63" }} search={false}
                  boxStyles={{ borderRadius: 4, borderColor: "#ffb9c6", backgroundColor: "#fff", }}
                  inputStyles={{ fontSize: 18 }}
                  dropdownStyles={{ borderColor: "#ffb9c6", backgroundColor: "#fff" }} />
              </Box>
              <Box flex={3} mt={1.5} marginLeft={10}>
                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#333" >
                  Mobile Number
                </Text>
                <Input style={styles.InputBoxStyle} alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                  <InputField type="text" keyboardType="numeric" color="#676f82" fontSize={18} />
                </Input>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={verticalScale(400)} alignSelf='center'>
          <Button borderRadius={100} bgColor='#EF5DA8' width={350} height={60}  onPress={() => { router.push("/(accountrecovery)/verifyphoneno"); }}>
            <ButtonText fontFamily='Poppins_400Regular' fontSize={16} alignSelf='center' color='#fff'>{'Verify'}</ButtonText>
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
    backgroundColor: "#fff",
  }
});

