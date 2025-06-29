import { AvatarFallbackText, Box, Text, Avatar, AvatarBadge, HStack, VStack, Heading, Button, ScrollView } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { Title } from 'react-native-paper';
import { Image } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/FormElements';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';



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
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Archieve" }} />
            <Box h={"100%"} alignContent="center">

                <Box>
                    <Text fontFamily='Poppins_400Regular'>Here you'll see the list of users that you've moved from message to archieve, and you can restore them anytime.</Text>
                </Box>
                <ScrollView>
                    <Box flex={1} py={(verticalScale(30))} >
                        <VStack space="2xl">
                            <Box flexDirection='row'  >
                                <HStack space="md" >
                                    <Avatar bgColor="$yellow800">
                                        <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                    </Avatar>
                                    <VStack marginRight={verticalScale(28)} >
                                        <Heading size="sm" >Arlene McCoy</Heading>
                                        <Text fontFamily='Poppins_400Regular' size="sm">alksjdkldjas dasdasd</Text>
                                    </VStack>
                                    <Button borderRadius={10} bgColor='#939393' height={"100%"} w={110} px={(verticalScale(20))}
                                        onPress={() => { }}>
                                        <Text fontFamily='Poppins_400Regular' fontSize={14} color='#fff'>Restore</Text>
                                    </Button>
                                </HStack>
                            </Box>
                            <HStack space="md">
                                <Avatar bgColor="$orange600">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$amber200">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$blueGray800">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$orange600">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$amber200">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$blueGray800">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$orange600">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$amber200">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                            <HStack space="md">
                                <Avatar bgColor="$blueGray800">
                                    <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                                </Avatar>
                                <VStack>
                                    <Heading size="sm" >Arlene McCoy</Heading>
                                    <Text fontFamily='Poppins_400Regular' size="sm">Marketing Coordinator</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box >
                </ScrollView>
            </Box >

        </BaseScreenWithoutBackground >
    );
}