import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

CustomProject = (props) => {
  return (
    <View>
      <View style={styles.viewStyle3}>
        <Image style={styles.project} source={props.projectImage} />
      </View>
      <View style={styles.viewStyle4}>
        <View style={{ width: 230 }}>
          <Text style={styles.textTitleProject1}>Clone Cineplex</Text>
          <Text style={styles.descProject1}>Membuat API dengan Golang</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btnProject1}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/afif-al-arasyi-3a7254290"
              )
            }
          >
            <Image
              style={styles.btnImgP1}
              source={require("../../assets/next.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomProject;
