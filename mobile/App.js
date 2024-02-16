import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  PlusJakartaSans_200ExtraLight,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
  PlusJakartaSans_200ExtraLight_Italic,
  PlusJakartaSans_300Light_Italic,
  PlusJakartaSans_400Regular_Italic,
  PlusJakartaSans_500Medium_Italic,
  PlusJakartaSans_600SemiBold_Italic,
  PlusJakartaSans_700Bold_Italic,
  PlusJakartaSans_800ExtraBold_Italic,
} from "@expo-google-fonts/plus-jakarta-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
    PlusJakartaSans_200ExtraLight_Italic,
    PlusJakartaSans_300Light_Italic,
    PlusJakartaSans_400Regular_Italic,
    PlusJakartaSans_500Medium_Italic,
    PlusJakartaSans_600SemiBold_Italic,
    PlusJakartaSans_700Bold_Italic,
    PlusJakartaSans_800ExtraBold_Italic,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>spartify</Text>
        <Text style={styles.text}>party democracy</Text>
        <Text style={styles.text}>get the party started</Text>
        <View>
          <Text style={styles.text}>continue with spotify</Text>
        </View>
        <View>
          <Text style={styles.text}>sign up</Text>
        </View>
        <View>
          <Text style={styles.text}>login</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12372A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FBFADA",
  },
  title: {
    color: "#FBFADA",
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 40,
    marginBottom:10,
  },
});
