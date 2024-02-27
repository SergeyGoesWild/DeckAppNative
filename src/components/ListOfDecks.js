import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSharedContext } from "./SharedContext";

const ListOfDecks = ({ getValue }) => {
  const { contextDeck } = useSharedContext();
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={contextDeck}
      search={false}
      maxHeight={200}
      labelField="name"
      valueField="id"
      placeholder="Select deck"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        getValue(item.id);
      }}
      renderLeftIcon={() => (
        <MaterialCommunityIcons
          name="cards-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
      )}
    />
  );
};

export default ListOfDecks;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 25,
    height: 50,
    width: 150,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
