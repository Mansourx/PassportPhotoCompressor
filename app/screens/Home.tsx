import { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Alert,
} from "react-native";
// import { requestCameraPermission } from "../utils/helper";
// import ImageCropPicker from "react-native-image-crop-picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import LarggeIconButton from "../components/LarggeIconButton";

interface Props {}
const Home: FC<Props> = (): JSX.Element => {
  const handleImageCapture = async (): Promise<void> => {
    // try {
    //   await requestCameraPermission();
    //   // open the camera
    //   const { path } = await ImageCropPicker.openCamera({
    //     width: 413,
    //     height: 531,
    //     cropping: true,
    //   });
    //   console.log(path);
    // } catch (error) {}
  };

  return (
    <View style={styles.container}>
      {/* App Titles */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose Your Image</Text>
        <Text style={styles.secondaryText}>
          You can select your image using one of these option which you want to
          convert to passport size.
        </Text>
      </View>
      {/* Image Capture button */}
      <LarggeIconButton onPress={handleImageCapture} title="Capture">
        <Icon name="camera"></Icon>
      </LarggeIconButton>
      {/* Image Select Button */}
      <LarggeIconButton title="Select">
        <Icon name="folder-open"></Icon>
      </LarggeIconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex 1 means taking full hight and width of
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 750,
  },
  titleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: "#272727",
    fontWeight: "500",
    textAlign: "center",
  },
  secondaryText: {
    color: "#272727",
    textAlign: "center",
    opacity: 0.5,
    lineHeight: 20,
    paddingTop: 5,
  },
});

export default Home;
