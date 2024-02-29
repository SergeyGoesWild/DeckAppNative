import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSharedContext } from "./SharedContext";
import { styles } from "./styles/ListOfDecks.style.js";

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
