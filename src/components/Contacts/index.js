import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faSquarePollHorizontal} style={styles.contacts} size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 15,
    backgroundColor: "#0e9669",
    padding:15,
    borderRadius:25
  },
  contacts: {
    color: "white",
  },
});

export default index;
