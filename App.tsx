import Home from "./app/screens/Home";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, useColorScheme } from "react-native";
import React, { FC } from "react";

interface Props {
  appName: string;
}

const App: FC<Props> = (props): JSX.Element => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
