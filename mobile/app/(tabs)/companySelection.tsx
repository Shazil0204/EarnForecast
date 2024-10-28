import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import useFonts from "../../hooks/useFonts";
import { getFontFamily } from "../../constants/fontFamily";

type Company = {
  name: string;
  id: number;
};

const CompanySelection = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  const companies: Company[] = [
    {
      name: "Just eat",
      id: 1,
    },
    {
      name: "Wolt",
      id: 2,
    },
    {
      name: "what will happen if the name is long",
      id: 3,
    },
    {
      name: "nothing",
      id: 4,
    },
    {
      name: "great",
      id: 5,
    },
    {
      name: "added type for security",
      id: 6,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() =>
              router.push({
                pathname: "/dataEntry",
                params: {
                  exampleData: item.name,
                  anotherParam: item.id,
                },
              })
            }
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
    gap: 20,
  },
  linkContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    marginVertical: 2,
  },
  link: {
    textAlign: "center",
    color: "#d1d1d1",
    fontSize: 30,
    fontFamily: getFontFamily(true, "extraLight"),
  },
});
