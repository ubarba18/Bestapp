import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function Video() {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            console.log("Camera permission status:", status);
            setHasPermission(status === "granted");
        })();
    }, []);

    return (
        <View style={styles.container}>
            {/* Left Half */}
            <View style={styles.leftHalf}>
                <Text style={{ color: "white" }}>Left Half</Text>
            </View>

            {/* Right Half - Show Camera or Black Screen */}
            <View style={styles.rightHalf}>
                {hasPermission === "granted" ? (
                    <Camera style={StyleSheet.absoluteFill} />
                ) : (
                    <View style={styles.blackScreen} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    leftHalf: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212121",
    },
    rightHalf: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center", // Ensure Camera is centered
        alignItems: "center",      // Center alignment
        overflow: "hidden",        // Prevent layout issues
    },
    blackScreen: {
        flex: 1,
        backgroundColor: "#000",
    },
    camera: {
        width: "100%",
        height: "100%", // Ensure full height
    },

});
