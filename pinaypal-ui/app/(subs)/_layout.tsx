import React from "react";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { verticalScale } from "../../helpers/ScaleHelper";


//const Stack = createStackNavigator();

export default function SubsLayout() {
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
                fontSize: 24,
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


