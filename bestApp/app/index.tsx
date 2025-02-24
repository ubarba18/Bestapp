import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { JumpingTransition } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";


export default function Index() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View style={styles.leftHalf}>
        <View style={styles.navbarWrapper}>
          <View style={styles.signIn}>
            <Text style={{
              fontSize: 18.26,
              color: "#FFFFFF",
              }}>
                Sign In
            </Text>
          </View>
  
            <View style={styles.navbar}>
              <View style={styles.navbarButton}>
                <FontAwesome  style={styles.icon}
                  name="home" 
                  size={10} 
                  color="black" />
              </View>
              <View style={styles.navbarButton}>
                <TouchableOpacity
                  style={styles.navbarButton}
                  onPress={() => navigation.navigate('Game')}  // Navigate to 'Game' screen
                >
                <FontAwesome style={styles.icon} name="card" size={10} color="black" />
            </TouchableOpacity>
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
          </View>
        <View>          
          <Text style={styles.text}>LEFT</Text>
        </View>
      </View>

        <View style={styles.rightHalf}>
          <View style={styles.navbarWrapper}>
            <View style={styles.navbarR}>
              <View style={styles.navbarButton}>
                <Text style={{
                  fontSize: 18.26,
                  color: "#FFFFFF",
                  }}>
                    Solo
                </Text>
              </View>
              <View style={styles.navbarButton}>
              <Text style={{
                  fontSize: 18.26,
                  color: "#FFFFFF",
                  }}>
                    Duo
                </Text>
              </View>
            </View>
          </View>
        <Text style={styles.text}>Right</Text>
        </View>
      </View>
  );
}

const styles = { 
  container: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  leftHalf: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-start",
    backgroundColor: '#212121',
    
  },
  rightHalf: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-start",
    backgroundColor: '#121212',
  },
  navbarWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
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
  navbarR: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
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
  },
  signIn: {
    width: 111,
    height: 53,
    borderRadius: 30,
    backgroundColor: "#212121",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
};

