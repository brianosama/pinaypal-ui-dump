import { LinearGradient } from "expo-linear-gradient";
import { verticalScale, horizontalScale } from "../../helpers/ScaleHelper";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from "react-native-safe-area-context";

export const BaseScreenWithBackground = ({ children }) => {
    return (
        <GluestackUIProvider config={config}>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']}>
                <Box h={"100%"} px={horizontalScale(16)} py={verticalScale(16)} flexDirection="column" justifyContent="space-between">
                    {children}
                </Box>
            </LinearGradient>
        </GluestackUIProvider>
    );
};

export const BaseScreenWithoutBackground = ({ children }) => {
    return (
        <GluestackUIProvider config={config}>
            <Box h={"100%"} px={horizontalScale(16)} py={verticalScale(16)} flexDirection="column" justifyContent="space-between" bg='#fff'>
                {children}
            </Box>
        </GluestackUIProvider>
    );
};