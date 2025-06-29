import { Slot, Stack, Tabs } from "expo-router";
import { useFonts, Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";



export default function RootLayout() {
    let [fontLoaded] = useFonts({ Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold });

    if (!fontLoaded) {
        return null;
    }

    return (
        <Slot />
    );
}