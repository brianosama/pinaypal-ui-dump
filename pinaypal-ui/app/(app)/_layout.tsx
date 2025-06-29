import { Box, Text, View } from "@gluestack-ui/themed";
import React from "react";
import { BottomNavigation } from "react-native-paper";
import { Slot, Stack, Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "@gluestack-ui/themed";
import { CircleUserRoundIcon, HeartIcon, InfinityIcon, MessageCircleMoreIcon } from "lucide-react-native";
import { horizontalScale, verticalScale } from "../../helpers/ScaleHelper";


const MusicRoute = () => <Slot />;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;


export default function AppLayout() {
    const [index, setIndex] = React.useState(0);

    const insets = useSafeAreaInsets()

    const [routes] = React.useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });

    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: "#ffb9c6",
                borderBottomEndRadius: 45,
                borderBottomLeftRadius: 45,
                height: 80 + insets.top,
            }, headerTitleStyle: {
                fontFamily: "Poppins_600SemiBold",
                fontSize: 28,
                color: "#fff"
            },
            headerTitleAlign: "center",
            tabBarStyle: {
                height: verticalScale(94),
            },
            tabBarActiveTintColor: "#fff",
        }}>
            <Tabs.Screen name="radar" options={{
                tabBarLabelStyle: { display: "none" },
                tabBarIcon: ({ color, size }) => (
                    <Box h={"65%"} w={"80%"} justifyContent="center" alignItems="center" backgroundColor={color === "#fff" ? "#ffb9c6" : "#fff"} borderRadius={"$full"}>
                        <InfinityIcon style={{flex: 1}} size={size + 24} color={color} />
                    </Box>
                )
            }} />
            <Tabs.Screen name="friends" options={{
                tabBarLabelStyle: { display: "none" },
                tabBarIcon: ({ color, size }) => (
                    <Box h={"65%"} w={"80%"} justifyContent="center" alignItems="center" backgroundColor={color === "#fff" ? "#ffb9c6" : "#fff"} borderRadius={"$full"}>
                        <HeartIcon size={size + 12} color={color} />
                    </Box>
                )
            }} />
            <Tabs.Screen name="messages" options={{
                tabBarLabelStyle: { display: "none" },
                tabBarIcon: ({ color, size }) => (
                    <Box h={"65%"} w={"80%"} justifyContent="center" alignItems="center" backgroundColor={color === "#fff" ? "#ffb9c6" : "#fff"} borderRadius={"$full"}>
                        <MessageCircleMoreIcon size={size + 12} color={color} />
                    </Box>
                )
            }} />
            <Tabs.Screen name="index" options={{
                tabBarLabelStyle: { display: "none" },
                tabBarIcon: ({ color, size }) => (
                    <Box h={"65%"} w={"80%"} justifyContent="center" alignItems="center" backgroundColor={color === "#fff" ? "#ffb9c6" : "#fff"} borderRadius={"$full"}>
                        <CircleUserRoundIcon size={size + 12} color={color} />
                    </Box>
                )
            }} />
        </Tabs>
    );
}