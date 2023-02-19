import CustomNavigationStack from "./components/NavigationStack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    setAppIsReady(true);
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  return <CustomNavigationStack />;
}
