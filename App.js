import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.header}>
        <Image source={require("./assets/logo-imdb.png")} style={styles.logo} />
      </View>

      <View style={styles.container}>
        <Text style={[styles.textWhite, styles.h1]}>Interstellar</Text>

        <View style={styles.blocTags}>
          <Text style={styles.textGrey}>2014</Text>
          <Text style={styles.textGrey}>PG-13</Text>
          <Text style={styles.textGrey}>2h 49min</Text>
          <Text style={styles.textGrey}>Adventure, Drama, Sci-Fi</Text>
        </View>

        <View style={[styles.movieCard, styles.my10]}>
          <View style={styles.movieCardImg}>
            <Image
              source={require("./assets/film.jpg")}
              style={styles.imgFull}
            />
          </View>
          <View style={styles.movieCardDesc}>
            <Text style={[styles.textWhite, { paddingBottom: 10 }]}>
              A team of explorers travel travel through a wormhole in space in
              an attempt to ensure humanity's survival
            </Text>
            <Pressable onPress={() => console.log("hello")} style={styles.btn}>
              <Text style={[styles.textWhite, styles.btnText]}>
                + Add to watchlist
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Entypo name="star" size={24} color={col.yellow} />
            <Text style={styles.textGrey}>8.6/10</Text>
            <Text style={styles.textGrey}>1.1M</Text>
          </View>

          <View style={styles.stat}>
            <Entypo name="star-outlined" size={24} color="white" />
            <Text style={styles.textGrey}>Rate this</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.metascore}>74</Text>
            <Text style={styles.textGrey}>Metascore</Text>
            <Text style={styles.textGrey}>46 critics reviews</Text>
          </View>
        </View>

        <View style={styles.sectionActors}>
          <Text style={[styles.textWhite, styles.h2]}>Top Billed Cast</Text>
          <Text style={{ color: col.blue }}>See all</Text>
        </View>

        <ScrollView
          horizontal
          style={[styles.actors, styles.my10]}
          contentContainerStyle={{ gap: 10 }}
        >
          <View style={styles.actorCard}>
            <Image
              style={styles.img3over4}
              source={require("./assets/matthew.jpg")}
            />
            <View style={styles.p10}>
              <Text style={styles.textWhite} numberOfLines={1}>
                Matthew McConaughey
              </Text>
              <Text style={styles.textGrey}>Cooper</Text>
            </View>
          </View>

          <View style={styles.actorCard}>
            <Image
              style={styles.img3over4}
              source={require("./assets/anne.jpg")}
            />
            <View style={styles.p10}>
              <Text style={styles.textWhite} numberOfLines={1}>
                Anne Hathaway
              </Text>
              <Text style={styles.textGrey}>Brand</Text>
            </View>
          </View>

          <View style={styles.actorCard}>
            <Image
              style={styles.img3over4}
              source={require("./assets/jessica.jpg")}
            />
            <View style={styles.p10}>
              <Text style={styles.textWhite} numberOfLines={1}>
                Jessica Ch
              </Text>
              <Text style={styles.textGrey}>Murph</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={[styles.textWhite, styles.h3]}>Director</Text>
        <Text style={styles.textGrey}>Christopher Nolan</Text>

        <Text style={[styles.textWhite, styles.h3]}>Writers</Text>
        <Text style={styles.textGrey}>
          Jonathan Nolan (written by) andd Christopher Nolan (written by)
        </Text>

        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}

const col = {
  blue: "#0177BD",
  yellow: "gold",
  black: "#1D1D1D",
  dark1: "#212121",
  dark2: "#2A2A2A",
  grey: "#393939",
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: col.black,
  },
  container: {
    padding: 10,
  },
  header: {
    paddingVertical: 5,
    backgroundColor: col.grey,
  },
  logo: {
    height: 20,
    width: 60,
    resizeMode: "contain",
  },
  textWhite: { color: "white" },
  textGrey: { color: "grey" },
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  imgFull: {
    width: "100%",
    height: "100%",
  },
  btn: {
    backgroundColor: col.blue,
    borderRadius: 5,
    paddingVertical: 10,
  },
  btnText: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  bgGrey: {
    backgroundColor: "grey",
  },
  blocTags: {
    flexDirection: "row",
    gap: 10,
  },
  my10: {
    marginVertical: 10,
  },
  movieCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  movieCardImg: {
    width: "35%",
    height: undefined,
    aspectRatio: 3 / 4,
  },
  movieCardDesc: {
    paddingHorizontal: 10,
    flex: 1,
  },
  stats: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  metascore: {
    borderColor: "white",
    color: "white",
    backgroundColor: "green",
  },
  sectionActors: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  img3over4: {
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 4,
  },
  actorCard: {
    width: 150,
    backgroundColor: col.dark2,
  },
  p10: {
    padding: 10,
  },
});
