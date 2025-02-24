import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { JumpingTransition } from "react-native-reanimated";

export default function Index() {
  return (
      <View style={styles.container}>
        <View style={styles.leftHalf}>
          <View style={styles.navbar}>
            <View style={styles.navbarButton}>
              <FontAwesome  style={styles.icon}
                name="home" 
                size={10} 
                color="black" />
            </View>
            <View style={styles.navbarButton}>
              <FontAwesome  style={styles.icon}
                name="search" 
                size={10} 
                color="black" />
            </View>
            <View style={styles.navbarButton}>
              <FontAwesome  style={styles.icon}
                name="search" 
                size={10} 
                color="black" />
            </View>
            <View style={styles.navbarButton}>
              <FontAwesome  style={styles.icon}
                name="search" 
                size={10} 
                color="black" />
            </View>
          </View>
          <View>          
            <Text style={styles.text}>LEFT</Text>
          </View>
        </View>

        <View style={styles.rightHalf}>
        <Text style={styles.text}>Right</Text>
        </View>
      </View>
  );
}

const styles = { 
  container: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  leftHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#212121',
  },
  rightHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#121212',
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 376,
    height: 54,
    backgroundColor: "#212121",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    objectFit: "cover",
  },
  navbarButton: {
    flex: 1,
    backgroundColor: "#FFC0CB",
    padding: 5,
    borderRadius: 20,
    width: 93,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFC0CB",
  }

};

