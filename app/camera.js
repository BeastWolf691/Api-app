import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { StyleSheet, View, Text, Button, Image, ScrollView } from "react-native";



export default function Camera() {
    const cameraRef = useRef();
    const [permission, requestPermission] = useCameraPermissions();
    const [image,setImage] = useState('');

    async function pictureHandle() {
        const pict = await cameraRef.current.takePictureAsync({base64:true})
        setImage(pict);
    }


    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {//permission accordée
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <CameraView ref={cameraRef} style={styles.camera}>

            </CameraView>
            <Button  title="prenez une photo" onPress={pictureHandle}/>
            {image && <Image source={image}  /> }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width:200,
        height:350,
        position:'relative',
        top: 100
    },
    camera: {
        width: 200,
        height: 300
    }
})