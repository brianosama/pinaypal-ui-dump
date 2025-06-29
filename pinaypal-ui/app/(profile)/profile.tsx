

import { Text } from 'react-native';
import { Box, HStack, ScrollView, VStack } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { StyleSheet } from "react-native";
import { Image } from '@gluestack-ui/themed';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { BadgeCheckIcon, Locate, Router } from 'lucide-react-native';
import { LocationBadge } from '../../components/AppIcon';
import { CustomToggleButton2, LikeButton, SkipButton } from '../../components/FormElements';

export default function Page() {
    return (
        <BaseScreenWithoutBackground>
        <ScrollView>
            <Stack.Screen options={{ title: "Profile Info" }} />
            <Box h={"100%"} alignContent="center">
                <Box style={styles.container}>
                    <Image
                        alt={"pinay_01"}
                        borderRadius={16}
                        w={horizontalScale(350)}
                        h={verticalScale(300)}
                        resizeMode='cover'
                        source={{
                            uri: "https://unsplash.com/photos/2blOZ_smQ6c/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4MTg3MDg4fA&force=true&w=640",
                        }}
                    />
                </Box>
                <Box style={styles.container2}>
                    <Box marginLeft={horizontalScale(20)} marginTop={verticalScale(5)}>
                        <Text style={styles.font}>Anna,28
                            <BadgeCheckIcon color={"white"} fill={"#FFB9C6"} />
                        </Text>
                        <Box>
                            <Text style={styles.font2}>
                                <LocationBadge />
                                {"San Francisco"}
                            </Text>
                        </Box>
                        <Box >
                            <Text style={styles.font3}>
                                {"About Me"}
                            </Text>
                            <Text>
                                {"BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH"}
                            </Text>
                        </Box>
                        <Box>
                            <Text style={styles.font4}>
                                {"Hobbies"}
                            </Text>
                        </Box>
                        <Box px={horizontalScale(10)} flexDirection="row" flexWrap="wrap" >
                            <HStack>
                                <CustomToggleButton2 label={"Art"} onPress={() => { }} />
                                <CustomToggleButton2 label={"Travel"} onPress={() => { }} />
                                <CustomToggleButton2 label={"Gardening"} onPress={() => { }} />
                            </HStack>
                            <HStack>
                                <CustomToggleButton2 label={"Painting"} onPress={() => { }} />
                                <CustomToggleButton2 label={"Writing"} onPress={() => { }} />
                                <CustomToggleButton2 label={"Hiking"} onPress={() => { }} />
                            </HStack>
                    </Box>
                </Box>
            </Box>
            <Box marginTop={verticalScale(25)} alignSelf='center'>
                <HStack >
                    <Box marginRight={10}>
                        <SkipButton onPress={() => { router.push("/radar"); }} />
                    </Box>
                    <Box marginLeft={10}>
                        <LikeButton onPress={() => { router.push("/(profile)/profile"); }} />
                    </Box>
                </HStack>
            </Box>
        </Box>
        </ScrollView>
        </BaseScreenWithoutBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 16,
        width: 350,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 0.35,
        elevation: 1,
    },
    container2: {
        marginTop: 35,
        height: 370,
        backgroundColor: "#fff",
        borderRadius: 16,
        width: 350,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 0.35,
        elevation: 1,
    },
    font: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 27,

    },
    font2: {
        fontFamily: "Poppins_400Regular",
        fontSize: 16,


    },

    font3: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 23,
        marginTop: 10,

    },
    font4: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 23,
        marginTop: 10,

    }


});