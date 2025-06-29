
import { Stack, router } from "expo-router";
import { BaseScreenWithoutBackground } from "../../screens/generic/basescreen";
import { Avatar, AvatarFallbackText, Box, Button, HStack, Heading, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { verticalScale } from "../../helpers/ScaleHelper";
import { MatchButton } from "../../components/FormElements";
import { StyleSheet } from "react-native";
import { Image } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';




function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/icons/pp-logo-white-2.png')}
        />
    );
}

export default function Page() {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Blocked Contacts" }} />
            <Box h={"100%"} alignContent="center">
                <Box >
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                </Box>
                <Box flexDirection="row" alignSelf="center" >
                    <Box mt={verticalScale(10)} mr={verticalScale(5)}>
                        <MatchButton label="Match List" onPress={() => { router.push("/matchlist"); }} />
                    </Box>
                    <Box borderWidth={"$0"} mt={verticalScale(10)} ml={verticalScale(5)}>
                        <Box borderWidth={"$0"} style={styles.switch}>
                            <Text style={styles.match} color="black"> Block User</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
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
                                <Text fontFamily='Poppins_600SemiBold' fontSize={12} color='#000'>Unblock</Text>
                            </Button>
                        </HStack>
                    </Box>
                </ScrollView>
            </Box>
        </BaseScreenWithoutBackground>
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
