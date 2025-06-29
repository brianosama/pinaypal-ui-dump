import { ScrollView, Text, Image, Button, ButtonText, Box } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { BadgeCheckIcon } from 'lucide-react-native';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { Card, TextInput } from 'react-native-paper';
import { CustomToggleButton } from '../../components/FormElements';
import React from "react";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/icons/pp-logo-white-2.png')}
    />
  );
}

export default function Page() {
  const AboutMeString = "Hoy pare pakinggan nyo ko\nEto nang tunay na filipino\nGaling sa baryo sapangbato\nPumunta ng LA nagtrabaho\nPara makatulong sa nanay\nDahil sa hirap ng buhay\nPero masaya parin ang kulay"
  return (
    <BaseScreenWithoutBackground>
      <Stack.Screen options={{ title: "Profile" }} />
      <ScrollView w="100%" h={"$80"} flexDirection='column' >
        <Box flex={1} flexDirection='row' mt={verticalScale(24)}>
          <Box flex={1} >
            <Image alt="Profile Picture" borderWidth={4} borderColor='rgba(255, 185, 198, 1)' width={horizontalScale(120)} h={verticalScale(124)} borderRadius={"$full"} source={require("../../assets/test-image/no_picture.png")} />
          </Box>
          <Box flex={2} flexDirection='column' px={horizontalScale(10)}>
            <Box flex={1} flexDirection='row' py={verticalScale(4)} >
              <Text fontFamily='Poppins_600SemiBold' pt={verticalScale(4)} >
                <Text fontSize={18}>Mang Joe</Text>,
                <Text fontSize={18}> 35 </Text>
              </Text>
              <BadgeCheckIcon color={"white"} fill={"#939393"} />
            </Box>
            <Box flex={2} justifyContent='space-evenly'>
              <Button size='sm' bgColor='#939393'>
                <ButtonText> Verify my account</ButtonText>
              </Button>
              <Button size='sm' bgColor='rgba(255, 185, 198, 1)'>
                <ButtonText> Account settings</ButtonText>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box flex={1} mt={verticalScale(48)}>
          <Card style={{ backgroundColor: "#fff", padding: 4 }}>
            <Card.Content>
              <Text my={verticalScale(4)} fontSize={18} fontFamily='Poppins_600SemiBold'>Personal Information</Text>
              <TextInput style={{ marginVertical: verticalScale(8), backgroundColor: "#fff", fontSize: 18, fontFamily: "Poppins_400Regular" }} label={"Full name"} value='Mang Joe Chicha' editable={false} />
              <TextInput style={{ marginVertical: verticalScale(8), backgroundColor: "#fff", fontSize: 18, fontFamily: "Poppins_400Regular" }} label={"Email"} value='mang.joe.chicha@gmail.com' editable={false} />
              <TextInput style={{ marginVertical: verticalScale(8), backgroundColor: "#fff", fontSize: 18, fontFamily: "Poppins_400Regular" }} label={"Mobile number"} value='+18081231234' editable={false} />
              <TextInput style={{ marginVertical: verticalScale(8), backgroundColor: "#fff", fontSize: 18, fontFamily: "Poppins_400Regular" }} label={"About me"} value={AboutMeString} multiline={true} numberOfLines={5} editable={false} ></TextInput>
              <Text fontSize={12} paddingLeft={16}>Interest</Text>
              <Box px={horizontalScale(10)} flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                <CustomToggleButton label={"Gym"} onPress={() => { router.push("/(Login)/loginios"); }} />
                <CustomToggleButton label={"Cooking"} onPress={() => {router.push("/(Login)/loginandroid"); }} />
                <CustomToggleButton label={"Basketball"} onPress={() => {router.push("/(reg)/mobilenumber"); }} />
                <CustomToggleButton label={"Hiking"} onPress={() => { }} />
                <CustomToggleButton label={"Motorcycling"} onPress={() => { }} />
                <CustomToggleButton label={"Dating"} onPress={() => { }} />
              </Box>
            </Card.Content>
          </Card>
        </Box>
      </ScrollView>
    </BaseScreenWithoutBackground>
  );
}