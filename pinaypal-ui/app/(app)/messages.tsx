import { Box, FlatList, Image, ScrollView, Text, VirtualizedList } from '@gluestack-ui/themed';
import { BaseScreenWithoutBackground } from '../../screens/generic/basescreen';
import { Stack, router } from 'expo-router';
import { horizontalScale, verticalScale } from '../../helpers/ScaleHelper';
import { useState } from 'react';
import { PinayPalMessageNewPic } from '../../components/AppIcon';
import { PrimaryButton } from '../../components/FormElements';

const NoMessagesComponent = () => {
    return (
        <Box alignContent='center' alignSelf='center' justifyContent='center'>
            <Text>No Messages</Text>
        </Box>
    );
}

const MessageScreen = () => {
    return (
        <BaseScreenWithoutBackground>
            <Stack.Screen options={{ title: "Messages" }} />
            <Box>
                <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18 }}>Recent Matches</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} mt={verticalScale(8)}>
                    <Box h={verticalScale(100)} width={horizontalScale(85)} alignItems='center' mx={horizontalScale(4)}>
                        <Box bg='$red' h={75} width={75} borderRadius={"$full"}></Box>
                        <Text mt={verticalScale(2)}>Maria</Text>
                    </Box>
                    <Box h={verticalScale(100)} width={horizontalScale(85)} alignItems='center' mx={horizontalScale(4)}>
                        <Box bg='$red' h={75} width={75} borderRadius={"$full"}></Box>
                        <Text mt={verticalScale(2)}>Maria</Text>
                    </Box>
                    <Box h={verticalScale(100)} width={horizontalScale(85)} alignItems='center' mx={horizontalScale(4)}>
                        <Box bg='$red' h={75} width={75} borderRadius={"$full"}></Box>
                        <Text mt={verticalScale(2)}>Maria</Text>
                    </Box>
                    <Box h={verticalScale(100)} width={horizontalScale(85)} alignItems='center' mx={horizontalScale(4)}>
                        <Box bg='$red' h={75} width={75} borderRadius={"$full"}></Box>
                        <Text mt={verticalScale(2)}>Maria</Text>
                    </Box>
                    <Box h={verticalScale(100)} width={horizontalScale(85)} alignItems='center' mx={horizontalScale(4)}>
                        <Box bg='$red' h={75} width={75} borderRadius={"$full"}></Box>
                        <Text mt={verticalScale(2)}>Maria</Text>
                    </Box>
                </ScrollView>
            </Box>
            <Box flex={1} py={verticalScale(12)}>
                <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18 }}>Messages</Text>
                <FlatList
                    ListEmptyComponent={NoMessagesComponent()}
                    refreshControl={null}>
                </FlatList>
            </Box>
        </BaseScreenWithoutBackground>
    );
}

const NewUserMessageScreen = () => {
    return (
        <Box height={"100%"} style={{ backgroundColor: "#fff" }}>
            <Stack.Screen options={{ title: "Messages" }} />
            <Box mt={verticalScale(36)} w={horizontalScale(270)} h={verticalScale(270)}
                justifyContent="space-around" alignSelf='center'>
                <PinayPalMessageNewPic />
            </Box>
            <Box mt={verticalScale(12)} px={horizontalScale(38)}>
                <Text style={{
                    fontSize: 18, fontFamily: "Poppins_700Bold",
                    color: "#ef5da8", textAlign: "center"
                }}>Get in touch with you Pinays here</Text>
                <Text style={{
                    fontSize: 18, fontFamily: "Poppins_400Regular",
                    color: "#ffb9c6", textAlign: "center", marginTop: 10
                }}>It's a match when both of you share mutual feelings and have similar interests or hobbies.</Text>
                <Box mt={verticalScale(12)}>
                    <PrimaryButton label="Start finding your Pinay now!" onPress={() => { router.push("/(changenum)/verifynewnum"); }} />
                </Box>
            </Box>
        </Box>
    );
}

export default function MessagePage() {
    const [isNew, setIsNew] = useState(false);

    if (isNew) {
        return (
            <MessageScreen />
        );
    } else {
        return (
            <NewUserMessageScreen />
        );
    }

}