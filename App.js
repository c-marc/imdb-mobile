import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bgGrey}>
        <Image source={require("./assets/logo-imdb.png")} style={styles.logo} />
      </View>

      <Text style={styles.h1}>Interstellar</Text>
      <Text style={styles.p}>2014 PG-13 2h 49min Adventure, Drama, Sci-Fi</Text>

      <View style={styles.movieCard}>
        <Image
          source={require("./assets/film.jpg")}
          style={styles.movieCardImg}
        />
        <View>
          <Text style={styles.p}>
            A team of explorers travel travel through a wormhole in space in an
            attempt to ensure humanity's survival
          </Text>
          <Text style={styles.p}>Add to watchlist</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View>
          <Text style={styles.p}>8.6/10</Text>
          <Text style={styles.p}>1.1M</Text>
        </View>

        <Text style={styles.p}>Rate this</Text>

        <View>
          <Text style={styles.p}>74</Text>
          <Text style={styles.p}>Metascore</Text>
          <Text style={styles.p}>46 critics reviews</Text>
        </View>
      </View>

      <Text style={styles.h2}>Top Billed Cast</Text>
      <Text style={styles.p}>See all</Text>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },

  logo: {
    height: 60,
    width: 100,
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

  bgGrey: {
    backgroundColor: "grey",
  },
  movieCard: {
    flexDirection: "row",
  },
  movieCardImg: {
    width: "30%",
    aspectRatio: 2 / 3,
  },
  stats: {
    flexDirection: "row",
    gap: 10,
  },
  actorCard: {
    backgroundColor: "grey",
  },
  actorCardImg: {
    height: 100,
    aspectRatio: 2 / 3,
  },
});
