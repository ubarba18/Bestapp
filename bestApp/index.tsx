import { Text, View } from "react-native";
import Tren from "../assets/tren.jpg";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Tren} alt="Tren" />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
