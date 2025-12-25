import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [groceryItem, setGroceryItem] = useState("");
  const [groceryList, setGroceryList] = useState<String[]>([]);

  const handleAddItem = () => {
    setGroceryList((currentGroceryList) => [
      ...currentGroceryList,
      groceryItem,
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Grocery List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Insert here an item to shop"
          onChangeText={setGroceryItem}
        ></TextInput>
        <Button title="Add" onPress={handleAddItem}></Button>
      </View>
      <FlatList
        data={groceryList}
        renderItem={(groceryItem) => (
          <Text key={groceryItem.index}>{groceryItem.item}</Text>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
});
