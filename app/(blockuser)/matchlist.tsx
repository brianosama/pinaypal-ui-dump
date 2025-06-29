
import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Box, Center, HStack, Input, InputField, KeyboardAvoidingView, Progress, ProgressFilledTrack, Text, Textarea, TextareaInput, VStack, Avatar, Switch, ScrollView, Button } from "@gluestack-ui/themed";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";
import { BlockUserButton, CustomButton, ListButton, PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { StyleSheet, SectionList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PalLogoutPic, PinayPalLogoAndTextPink } from "../../components/AppIcon";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { AvatarFallbackText } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Badge } from "react-native-paper";
import { Image } from 'react-native';




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
            <Stack.Screen options={{ title: "Blocked Contacts" }} />
            <Box h={"100%"} alignContent="center">
                <Box style={styles.container}>
                    <Text fontFamily='Poppins_400Regular' mt={verticalScale(15)} textAlign="center"> Select people from your match list that you don’t want to see or be seen.</Text>
                </Box>
                <Box flexDirection="row" alignSelf="center" >
                    <Box borderWidth={"$0"} style={styles.switch} mt={verticalScale(10)} mr={verticalScale(5)}>
                        <Text style={styles.match} color="black"> Match List</Text>
                    </Box>
                    <Box borderWidth={"$0"} mt={verticalScale(10)} ml={verticalScale(5)}>
                        <Box>
                            <BlockUserButton label="Block User" onPress={() => { router.push("/blockuserlist"); }} />
                        </Box>
                    </Box>
                </Box>
                <ScrollView>
                <Box flexDirection='row' mt={verticalScale(25)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
                <Box flexDirection='row' mt={verticalScale(15)}>
                    <HStack space="md" >
                        <Avatar bgColor="$yellow800">
                            <AvatarFallbackText>Arlene McCoy</AvatarFallbackText>
                        </Avatar>
                        <VStack marginRight={verticalScale(87)} flexDirection="row" alignItems="center">
                            <Heading size="sm" >Arlene McCoy</Heading>
                        </VStack>
                        <Button borderRadius={10} bgColor='#rgba(255, 185, 198, 0.5)' height={"100%"} w={110} px={(verticalScale(20))}
                            onPress={() => { }}>
                            <Text fontFamily='Poppins_600SemiBold' fontSize={14} color='#000'>Block</Text>
                        </Button>
                    </HStack>
                </Box>
            </ScrollView>

        </Box>
        </BaseScreenWithoutBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "#rgba(255, 255, 255, 0.3)",
        borderRadius: 10,
        width: 350,
        alignSelf: "center",
    },
    switch: {
        height: 50,
        backgroundColor: "#FFB9C6",
        borderRadius: 10,
        width: 150,
    },
    match: {
        fontFamily: "Poppins_400Regular",
        fontSize: 18,
        alignSelf: "center",
        marginTop: 14,

    }


});
