import { Box, Button, ButtonText, Image, VStack, verboseStyled, Switch } from '@gluestack-ui/themed';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { horizontalScale, verticalScale } from '../helpers/ScaleHelper';
import { HeartIcon, MaxPicBtn, PlusPicBtn, Plusbtn2, SkipIcon, UnliBtnPic, UnliPicBtn } from './AppIcon';

export const PrimaryButton = ({ label, onPress }) => {
  return (
    <Button onPress={onPress} size='xl' action="primary" borderRadius="$full" bg="rgba(255, 185, 198, 0.5)">
      <ButtonText color='#000' fontSize="$md" fontFamily="Poppins_400Regular">{label}</ButtonText>
    </Button>
  );
};

export const SecondaryButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="secondary" borderRadius="$full" bg="#fff">
        <ButtonText color='#000' fontSize="$md" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const CustomButton2 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} h={verticalScale(70)} action="primary" borderRadius="$full" bg="#FFB9C6" width={170}>

        <ButtonText color='#fff' textAlign='center' fontSize="$md" fontFamily="Poppins_600SemiBold">{label}</ButtonText>
      </Button>
    </>
  );
};



export const CustomButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="secondary" borderRadius="$full" bg="rgba(255, 185, 198, 0.5)" width={300}>
        <ButtonText color='#000' fontSize="$md" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const NextButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$full" bg="rgba(255, 185, 198, 0.5)" width={350} height={60}>
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};


export const BackButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$full" bg="rgba(255, 255, 255, 0)" width={350} height={60}>
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};



export const CustomButton1 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="secondary" borderRadius="$full" bg="#fff" width={200}>
        <ButtonText color='#000' fontSize="$md" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const ListButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$sm" bg="#rgba(255, 255, 255, 0.3)" width={380} justifyContent="flex-start">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const MatchButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$2xl" bg="#rgba(255, 255, 255, 0.3)" width={150} justifyContent="flex-start">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};


export const BlockUserButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$sm" bg="#rgba(255, 255, 255, 0.3)" width={150} height={50} justifyContent="flex-start">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const PaywallButtonPlus = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$sm" bg="#rgba(255, 185, 198, 0.8)" width={320} height={60} justifyContent="flex-start">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const PaywallButtonMax = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$sm" bg="#rgba(143, 80, 220, 0.8)" width={320} height={60} justifyContent="flex-start">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const PaywallButtonUnlimited = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#rgba(254, 233, 148, 1.0)" width={320} height={60} justifyContent="center">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const CustomButton3 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#FFFFFF" width={240} height={60} justifyContent="center" borderWidth={'$1'} borderColor='#939393'>
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const CustomButton4 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#FFFFFF" width={220} height={50} justifyContent="center" borderWidth={'$1'} borderColor='#939393'>
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const MaxBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#rgba(143, 80, 220, 0.8)" width={250} height={50} justifyContent="center" >
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_600SemiBold">{label}</ButtonText>
      </Button>
    </>
  );
};

export const PlusBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#rgba(255, 185, 198, 0.8)" width={250} height={50} justifyContent="center" >
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const UnliBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#rgba(254, 233, 148, 0.8)" width={250} height={50} justifyContent="center">
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const BuyButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#EF5DA8" width={300} height={70} justifyContent="center" >
        <ButtonText color='#fff' fontSize="$lg" fontFamily="Poppins_600SemiBold">{label}</ButtonText>
      </Button>
    </>
  );
};

export const CcButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#fff" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor='#939393'>
        <Image alignItems='flex-start' alt="ccButton-Sub" w={horizontalScale(75)} h={verticalScale(60)} mr={horizontalScale(1)} resizeMode='contain'
          source={require('../assets/icons/cc.png')} />
        <ButtonText ml={horizontalScale(20)} color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const RefreshBtn = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress}  action="primary"  height="0%" width="40%" bg="#fff"  justifyContent="flex-start">
        <Image alignItems='flex-start' alt="RefreshBtn-Sub" w={horizontalScale(90)} h={verticalScale(90)} mr={horizontalScale(1)} resizeMode='contain'
          source={require('../assets/test-image/refresh-btn.png')} />
      </Button>
    </>
  );
};

export const CcButton2 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={3} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor='#rgba(0, 0, 0, 0.5)'  >
        <Image alignItems='flex-start' alt="ccButton2-Sub" w={horizontalScale(75)} h={verticalScale(60)} mr={horizontalScale(1)} resizeMode='contain'
          source={require('../assets/icons/cc.png')} />
        <ButtonText ml={horizontalScale(20)} color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const CloseBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 185, 198, 0)" width={80} height={50} justifyContent="center">
        <Image ml={horizontalScale(84)} alignItems='flex-end' alt="closebtn-Sub" w={horizontalScale(80)} h={verticalScale(50)} resizeMode='contain'
          source={require('../assets/icons/closebtn.png')} />
        <ButtonText ml={horizontalScale(30)} color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>

      </Button>
    </>
  );
};

export const PlayButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#fff" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor='#939393'>
        <Image alignItems='flex-start' alt="ccButton-Sub" w={horizontalScale(75)} h={verticalScale(70)} mr={horizontalScale(30)} resizeMode='contain'
          source={require('../assets/icons/googlelogo1.png')} />
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const ApplePayButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={3} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#fff" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor='#939393'>
        <Image alignItems='flex-start' alt="ApplePayButton-Sub" w={horizontalScale(75)} h={verticalScale(55)} mr={horizontalScale(30)} resizeMode='contain'
          source={require('../assets/icons/applelogo1.png')} />
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const ApplePayButton1 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#fff" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor='#939393'>
        <Image alignItems='flex-start' alt="ApplePayButton-Sub" w={horizontalScale(75)} h={verticalScale(55)} mr={horizontalScale(30)} resizeMode='contain'
          source={require('../assets/icons/applelogo1.png')} />
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};


export const TroubleLoginBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$3xl" bg="#fff" width={250} height={40} borderWidth={'$1'} borderColor='#fff'>
        <ButtonText maxWidth={250} color='#565656' fontSize="$md" fontFamily="Poppins_600SemiBold">{label}</ButtonText>
      </Button>
    </>
  );
};

export const PlayButton2 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={3} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={80} justifyContent="flex-start" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.5)">
        <Image alignItems='flex-start' alt="PlayLogo-Sub" w={horizontalScale(75)} h={verticalScale(70)} mr={horizontalScale(30)} resizeMode='contain'
          source={require('../assets/icons/googlelogo1.png')} />
        <ButtonText color='#000' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const GoogleSignInBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={56} justifyContent="flex-start" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
        <Image alignSelf='center' alignItems='flex-start' alt="googlebtn-Sub" w={horizontalScale(30)} h={verticalScale(45)} mr={horizontalScale(25)} resizeMode='contain'
          source={require('../assets/icons/googlelogo.png')} />
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};

export const FacebookSignInBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={56} justifyContent="flex-start" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
        <Image alignSelf='center' alignItems='flex-start' alt="googlebtn-Sub" w={horizontalScale(50)} h={verticalScale(35)} mr={horizontalScale(25)} resizeMode='contain'
          source={require('../assets/icons/fblogo.png')} />
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};

export const AppleSignInBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={56} justifyContent="flex-start" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
        <Image alignSelf='center' alignItems='flex-start' alt="googlebtn-Sub" w={horizontalScale(30)} h={verticalScale(30)} mr={horizontalScale(25)} resizeMode='contain'
          source={require('../assets/icons/applelogo.png')} />
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};

export const PhoneNumberSignInBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={55} justifyContent="center" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
      <Image alignSelf='center' alignItems='flex-start' alt="phoneicon-Sub" w={horizontalScale(20)} h={verticalScale(25)} mr={horizontalScale(25)} resizeMode='contain'
          source={require('../assets/icons/phoneicon.png')} />
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};

export const UserNameBtn = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="rgba(255, 255, 255, 1)" width={360} height={60} justifyContent="center" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};

export const UserNameBtn2 = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} elevation={1} shadowColor='#000' shadowOffset={1} shadowOpacity={0.25} shadowRadius={3.84} size='lg' action="primary" borderRadius="$3xl" bg="#rgba(255, 255, 255, 1)" width={360} height={60} justifyContent="center" borderWidth={'$1'} borderColor="#rgba(0, 0, 0, 0.1)">
        <ButtonText  color='#000' fontSize="$lg" fontFamily="Poppins_400Regular" >{label}</ButtonText>
      </Button>
    </>
  );
};





export const DeleteButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="secondary" borderRadius="$full" bg="#F94F69" width={250}>
        <ButtonText color='#fff' fontSize="$lg" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const LikeButton = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$xl" bg="#FFB9C6" height={75} width={85} >
        <HeartIcon />
      </Button>
    </>
  );
};

export const PlusBtn2 = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$xl" bg="#rgba(143, 80, 220, 0.0)" height={110} width={455} >
        <PlusPicBtn />
      </Button>
    </>
  );
};

export const MaxBtn2 = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$xl" bg="#rgba(143, 80, 220, 0.0)" height={110} width={455} >
        <MaxPicBtn />
      </Button>
    </>
  );
};

export const UnliBtn2 = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="primary" borderRadius="$xl" bg="#rgba(143, 80, 220, 0.0)" height={110} width={455} >
        <UnliBtnPic />
      </Button>
    </>
  );
};



export const SkipButtonAlt = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="#rgba(143, 80, 220, 0.0)" width={350} height={60} justifyContent="center" borderWidth={"$0"}>
        <ButtonText color='#FFB9C6' fontSize="$xl" fontFamily="Poppins_400Regular">{label}</ButtonText>
      </Button>
    </>
  );
};

export const SkipButton = ({ onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='xl' action="secondary" borderRadius="$xl" bg="#FFB9C6" height={75} width={85} >
        <SkipIcon />
      </Button>
    </>
  );
};


export const CustomToggleButton = ({ label, onPress, flex = 0, padding = 15 }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handlePress = () => {
    setButtonClicked(!buttonClicked);
    onPress(buttonClicked);
  };




  const buttonStyle = {
    backgroundColor: buttonClicked ? '#EF5DA8' : 'rgba(103, 111, 130, 0.7)',
    padding: padding,
    borderRadius: 20,
    flex: flex,
    margin: 4
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: 'white' }}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

export const CustomToggleButton2 = ({ label, onPress, flex = 0, padding = 15 }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handlePress = () => {
    setButtonClicked(!buttonClicked);
    onPress(buttonClicked);
  };




  const buttonStyle = {
    backgroundColor: buttonClicked ? '#EF5DA8' : '#FFB9C6',
    padding: padding,
    borderRadius: 20,
    flex: flex,
    margin: 4
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={{ color: 'white' }}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

export const CustomToggleButtonGroup = ({ selection }) => {
  const [activeButton, setActiveButton] = useState({});

  const buttonList = selection.map(button => {
    return (
      <TouchableOpacity
        key={button.key}
        style={{ borderRadius: 45, padding: 16, backgroundColor: activeButton === button.key ? '#EF5DA8' : '#fff' }}
        onPress={() => setActiveButton(button.key)}
      >
        <Text style={{
          color: activeButton === button.key ? '#fff' : '#000', fontFamily: "Poppins_400Regular",
          fontSize: 16, textAlign: "center"
        }}>{button.label}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <Box flex={1} justifyContent='space-evenly'>{buttonList}</Box>
  );
};

