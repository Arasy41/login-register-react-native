import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import CustomProject from "../Custom/customProject";

const Separator = () => <View style={styles.separator} />;

const Portfolio = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLikePress = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislikePress = () => {
    setDislikeCount(dislikeCount + 1);
  };
  return (
    <ScrollView>
      <View style={styles.viewStyle1}>
        <View style={styles.viewStyle2}>
          <Image
            source={require("../../assets/my-pict.jpg")}
            style={styles.styleImg}
          />
        </View>

        <View style={styles.viewStyle2}>
          <Text style={styles.textTitle}>AFIF AL ARASYI</Text>
        </View>

        <View style={styles.viewStyle2}>
          <Text style={styles.textDescTitle}>
            Saya Afif Al Arasyi. Saya adalah seorang Siswa SMK Telkom Purwokerto
            dari Jurusan Rekayasa Perangkat Lunak. Saya sangat tertarik dengan
            Backend Development.
          </Text>

          <TouchableOpacity
            style={styles.buttonProfile}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/afif-al-arasyi-3a7254290"
              )
            }
          >
            <Text style={styles.textButton}>Contact Me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewStyle3}>
          <Text style={styles.textTitle2}>My Recent Project</Text>
        </View>

        <CustomProject
          imageSource={require("../../assets/project3.png")}
          title="Clone Cineplex"
          description="Membuat API dengan Golang"
          githubURL="https://github.com/Artzy1401/clone-cineplex-backend-tim4"
        />

        <CustomProject
          imageSource={require("../../assets/project2.png")}
          title="Go Realtime Chat"
          description="Realtime chat using Golang<"
          githubURL="https://github.com/Artzy1401/go-realtime-chat"
        />

        <View style={styles.viewStyle4}>
          <View style={{ width: 150 }}>
            <Text style={styles.textLike}>Like or Dislike : </Text>
          </View>
          <TouchableOpacity onPress={handleLikePress}>
            <Icon name="thumb-up" size={20} />
            <Text style={styles.likeCount}>{likeCount}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dislikeButton}
            onPress={handleDislikePress}
          >
            <Icon name="thumb-down" size={20} />
            <Text style={styles.dislikeCount}>{dislikeCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  styleImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#DCD7C9",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  viewStyle1: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 50,
  },
  viewStyle2: {
    alignContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  textTitle: {
    color: "black",
    paddingTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.2,
    lineHeight: 20,
  },
  textTitle2: {
    color: "black",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.2,
    lineHeight: 20,
  },
  textDescTitle: {
    color: "black",
    fontSize: 16,
    marginBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 30,
    textAlign: "center",
  },
  buttonProfile: {
    alignItems: "center",
    backgroundColor: "#001524",
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
  viewStyle3: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  viewStyle4: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  btnImgP1: {
    width: 45,
    height: 45,
  },
  textLike: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  dislikeButton: {
    marginLeft: 20,
  },
  likeCount: {
    textAlign: "center",
    fontWeight: "bold",
  },
  dislikeCount: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Portfolio;
