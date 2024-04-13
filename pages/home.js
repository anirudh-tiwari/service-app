import { View } from "react-native";
import Category from "../components/category";
import * as Animatable from "react-native-animatable";
import Header from "../components/header";

const Home = () => {
  return (
    <Animatable.View animation="fadeInUp" duration={1000}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: "black",
          height: '100%'
        }}
      >
       <Header />
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            flexWrap: "wrap",
            marginVertical: 16
          }}
        >
          <Category
            item={{
              name: "ann",
              image: require("../assets/HealthCare.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/curroption.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/family.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/education.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/food.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/enjoyment.png"),
            }}
          />
          <Category
            item={{
              name: "ann",
              image: require("../assets/problem.png"),
            }}
          />
        </View>
      </View>
    </Animatable.View>
  );
};

export default Home;
