import { Box, Text, Divider } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack } from 'expo-router';
import { Image, } from 'react-native';
import { BuyButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { CCredit } from '../../components/AppIcon';
import { StyleSheet, } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input"; // 0.3.3
import React = require('react');



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
    <BaseScreenWithoutBackground>
      <Stack.Screen options={{ title: "Payment" }} />
     
      <Box style={styles.container3} alignContent='flex-start' flexDirection='row'>
        <Box alignContent='flex-start' marginLeft={horizontalScale(10)} mt={verticalScale(10)} >
          <CCredit />
        </Box>
        <Text ml={horizontalScale(20)} fontFamily='Poppins_400Regular' color='#000' fontSize={20} mt={verticalScale(38)}>{'Credit or Debit Card'}</Text>
      </Box>
      
        <Box h={300} mt={verticalScale(5)} alignContent="center" style={styles.container} borderWidth={"$0"}>
          {USE_LITE_CREDIT_CARD_INPUT ?
            (<LiteCreditCardInput
              autoFocus
              inputStyle={styles.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

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
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />)
          }
        </Box>
        <Box mt={verticalScale(10)} style={styles.container2}>
          <Box flexDirection='row' mt={verticalScale(15)}>
            <Text color='#4A4A4A' ml={horizontalScale(10)} fontFamily='Poppins_400Regular' fontSize={16}>PinayPal Plus 1 month:</Text>
            <Text color='#4A4A4A' ml={horizontalScale(68)} fontFamily='Poppins_400Regular' fontSize={16}>₱249.99/mo</Text>
          </Box>
          <Divider my={"$3"} bg="#000" />
          <Box flexDirection='row' >
            <Text color='#4A4A4A' ml={horizontalScale(10)} fontFamily='Poppins_400Regular' fontSize={16}>Total:</Text>
            <Text color='#4A4A4A' ml={horizontalScale(187)} fontFamily='Poppins_400Regular' fontSize={16}>₱499.97 + Tax</Text>
          </Box>
        </Box>
        <Box mt={verticalScale(10)}>
          <Text fontFamily='Poppins_400Regular' fontSize={11} textAlign='center'>
            {'By tapping PROCEED, we will charge your card, your subscription will automatically renew for the same package length at the same price until you Cancel, and you agree to our '}
            <Text fontFamily='Poppins_600SemiBold' fontSize={11} textDecorationLine='underline'>
              {'Terms'}
            </Text>
          </Text>
        </Box>
        <Box alignItems='center' mt={verticalScale(10)}>
          <BuyButton label="PROCEED" onPress={() => {  }} />
        </Box>
     
    </BaseScreenWithoutBackground >
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

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
  },
  container3: {
    height: 100,
    backgroundColor: "#rgba(255, 185, 198, 0.5)",
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

});


