import { View } from "react-native";
import Header from "../components/header";
import { Suspense, lazy } from "react";

const Category = lazy(() => import("../components/category"));

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
      <Suspense fallback={<></>}>
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
          navigate={'Health'}
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
          navigate={'Security'}
        />
        <Category
          item={{
            name: "ann",
            image: require("../assets/education.png"),
            index: 3,
          }}
          navigate={'Skill'}
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
          navigate={'Locality'}
        />
      </View>
      </Suspense>
    </View>
  );
};

export default Home;
