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
        <Text style={styles.h1}>Interstellar</Text>
        <Text style={styles.p}>
          2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
        </Text>

        <View style={styles.movieCard}>
          <Image
            source={require("./assets/film.jpg")}
            style={styles.movieCardImg}
          />
          <View>
            <Text style={styles.p}>
              A team of explorers travel travel through a wormhole in space in
              an attempt to ensure humanity's survival
            </Text>
            <Pressable onPress={() => console.log("hello")} style={styles.btn}>
              <Text style={styles.btnText}>+ Add to watchlist</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Entypo name="star" size={24} color="yellow" />
            <Text style={styles.p}>8.6/10</Text>
            <Text style={styles.p}>1.1M</Text>
          </View>

          <View style={styles.stat}>
            <Entypo name="star-outlined" size={24} color="white" />
            <Text style={styles.p}>Rate this</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.metascore}>74</Text>
            <Text style={styles.p}>Metascore</Text>
            <Text style={styles.p}>46 critics reviews</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.h2}>Top Billed Cast</Text>
          <Text style={{ color: "blue" }}>See all</Text>
        </View>

        <ScrollView
          horizontal
          style={styles.actors}
          contentContainerStyle={{ gap: 10 }}
        >
          <View style={styles.actorCard}>
            <Image
              style={styles.actorCardImg}
              source={require("./assets/matthew.jpg")}
            />
            <Text style={styles.p}>Matthew McConaughey</Text>
            <Text style={styles.p}>Cooper</Text>
          </View>

          <View style={styles.actorCard}>
            <Image
              style={styles.actorCardImg}
              source={require("./assets/anne.jpg")}
            />
            <Text style={styles.p}>Anne Hathaway</Text>
            <Text style={styles.p}>Brand</Text>
          </View>

          <View style={styles.actorCard}>
            <Image
              style={styles.actorCardImg}
              source={require("./assets/jessica.jpg")}
            />
            <Text style={styles.p}>Jessica Ch</Text>
            <Text style={styles.p}>Murph</Text>
          </View>
        </ScrollView>

        <Text style={styles.h3}>Director</Text>
        <Text style={styles.p}>Christopher Nolan</Text>

        <Text style={styles.h3}>Writers</Text>
        <Text style={styles.p}>
          Jonathan Nolan (written by) andd Christopher Nolan (written by)
        </Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },
  container: {
    padding: 10,
  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "grey",
  },
  logo: {
    height: 20,
    width: 60,
    resizeMode: "contain",
  },

  h1: {
    fontSize: 30,
    color: "white",
  },
  h2: {
    fontSize: 24,
    color: "white",
  },
  h3: {
    fontSize: 20,
    color: "white",
  },
  p: {
    color: "white",
  },
  btn: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
  },
  bgGrey: {
    backgroundColor: "grey",
  },
  movieCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  movieCardImg: {
    width: "35%",
    aspectRatio: 3 / 4,
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
  actorCard: {
    backgroundColor: "grey",
  },
  actorCardImg: {
    width: 150,
    //aspectRatio: 3 / 4,
    height: 150 / (3 / 4),
  },
});
