import React from "react";
import { Text, View } from "react-native";

interface DynamicComponentsProp {
  components: React.ReactNode[];
  name: string | string[];
}

export const DynamicComponent: React.FC<DynamicComponentsProp> = ({
  components,
  name,
}) => {
  return (
    <View>
      <Text>{name}</Text>
      {components.map((comp, index) => (
        <React.Fragment key={index}>{comp}</React.Fragment>
      ))}
    </View>
  );
};
