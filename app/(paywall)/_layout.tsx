import { Text } from "@gluestack-ui/themed";
import React from "react";
import { BottomNavigation } from "react-native-paper";
import { Slot, Stack, Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "@gluestack-ui/themed";

import { verticalScale } from "../../helpers/ScaleHelper";


//const Stack = createStackNavigator();

export default function PayWallLayout() {
    const [index, setIndex] = React.useState(0);

    const insets = useSafeAreaInsets()


    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#ffb9c6",
                borderBottomEndRadius: 45,
                borderBottomLeftRadius: 45,
                height: 80 + insets.top,
            }, headerTitleStyle: {
                fontFamily: "Poppins_400Regular",
                fontSize: 28,
                color: "#fff"
            },
            headerTitleAlign: "center",
            tabBarStyle: {
                height: verticalScale(94),
            }
        }}>
        </Stack >
    );
}


