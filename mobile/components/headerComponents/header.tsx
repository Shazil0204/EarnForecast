import { StyleSheet, Text, View } from "react-native";
import Logo from "./logo";

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#193940",
  },
});
