import { Text, View, Image } from "react-native";


export default function Index() {
  return (
      <View style={styles.container}>
        <View style={styles.leftHalf}>
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
};

