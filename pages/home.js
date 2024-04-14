import { View } from "react-native";
import Category from "../components/category";
import Header from "../components/header";

const Home = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <Header />
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          flexWrap: "wrap",
          marginVertical: 16,
        }}
      >
        <Category
          item={{
            name: "ann",
            image: require("../assets/HealthCare.png"),
            index: 1,
          }}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/curroption.png"),
            index: 1,
          }}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/family.png"),
            index: 2,
          }}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/education.png"),
            index: 3,
          }}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/food.png"),
            index: 4,
          }}
          navigate={'Food'}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/enjoyment.png"),
            index: 5,
          }}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/problem.png"),
            index: 6,
          }}
        />
      </View>
    </View>
  );
};

export default Home;
