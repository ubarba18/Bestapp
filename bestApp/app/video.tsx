import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Camera, CameraView } from "expo-camera";

export default function Video() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [videoStream, setVideoStream] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [facing, setFacing] = useState<CameraType>('front');

    useEffect(() => {
        // Request permission for camera and microphone on web
        if (Platform.OS === "web" ) {
            (async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true,
                    });
                    setVideoStream(stream);
                    setHasPermission(true);
                } catch (error) {
                    console.error("Permission denied", error);
                    setHasPermission(false);
                }
            })();
        }
        else if (Platform.OS === "ios" || Platform.OS === "android") {
            // Use Expo Camera for iOS and Android
            (async () => {
                const { status } = await Camera.requestCameraPermissionsAsync();
                console.log("Camera permission status:", status);
                setHasPermission(status === "granted");
            })();
        }
    }, []);

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
      }

    return (
        <View style={styles.container}>
            {/* Left Half */}
            <View style={styles.leftHalf}>
                <Text style={{ color: "white" }}>Left Half</Text>
            </View>

            {/* Right Half - Show Camera or Black Screen */}
            <View style={styles.rightHalf}>
                {hasPermission === true ? (
                    Platform.OS === "web" ? (
                        <video
                            style={styles.video}
                            ref={(video) => {
                                if (video && videoStream) {
                                    video.srcObject = videoStream; // Directly assign the stream to the video element
                                }
                            }}
                            autoPlay
                            playsInline
                        />
                    ) : (
                        // Use Expo Camera on iOS and Android
                        <CameraView style={styles.camera} facing={facing}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                                    <Text style={styles.text}>Flip Camera</Text>
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    )
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
    video: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    camera: {
        width: "100%",
        height: "100%",
    },
});