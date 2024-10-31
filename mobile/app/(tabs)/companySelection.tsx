import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useFonts from "../../hooks/useFonts";
import { getFontFamily } from "../../constants/fontFamily";
import LoadingScreen from "../../components/reuseableComponents/loadingScreen";
import { router } from "expo-router";

type Company = {
  name: string;
  id: number;
};

const CompanySelection = () => {
  // This if to load my font
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  // this is my dummy data for testing
  const companies: Company[] = [
    {
      name: "Just eat",
      id: 1,
    },
    {
      name: "Wolt",
      id: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => {
              router.push({
                pathname: "/(calc)/calculation",
                params: { id: item.id, name: item.name },
              });
            }}
          >
            <Text style={styles.link}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CompanySelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#193940",
  },
  linkContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    marginVertical: 5,
  },
  link: {
    textAlign: "center",
    color: "#d1d1d1",
    fontSize: 30,
    fontFamily: getFontFamily(true, "extraLight"),
  },
});
