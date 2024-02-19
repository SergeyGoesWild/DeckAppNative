import React, { useState } from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { Image, StyleSheet, View } from "react-native";

function Test() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <ListItem.Accordion
        content={
          <>
            <View style={{ alignItems: "center" }}></View>
            <Avatar
              rounded
              source={require("../../assets/square.jpg")}
              containerStyle={{ alignSelf: "center" }}
            />
            <View />
            <ListItem.Content>
              <ListItem.Title>Aaaaaa</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>eeeeeeee</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
});

export default Test;
