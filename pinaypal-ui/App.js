import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { LocationEnableScreen } from './screens/registration/locationenablescreen';
import { TopLevelNavigationScreen } from './screens/toplevelnavigationscreen';
import { BaseScreenWithBackground } from './screens/generic/basescreen';
import LoginScreen from './screens/loginscreen';
//import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIProvider config={config} onLayoutRootView={onLayoutRootView}>
        <TopLevelNavigationScreen />
    </GluestackUIProvider>
  );
}