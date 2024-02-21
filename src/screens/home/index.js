import { View, Text, Pressable } from "react-native";
import React from "react";
import colors from "../../assets/colors";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Pressable onPress={() => handleBack()}>
          <Text>back</Text>
        </Pressable>
      </View>
      <Text style={{ color: colors.black }}>Home</Text>
    </View>
  );
};

export default Home;
