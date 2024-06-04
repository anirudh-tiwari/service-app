import { View, Text, StyleSheet } from 'react-native'
import Carousel from '../../components/carousel';

const Food = () => {
  return (
    <View style={ styles.foodWrap }>
      <Carousel data={data} />
    </View>
  )
}

export default Food;

const styles = StyleSheet.create({
    foodWrap : {
        backgroundColor : '#EFD8D1',
        flex: 1,
        justifyConttent: 'center',
    }
})


const data = [
  {
    image: require("../assets/eatingHealthy.png"),
    heading: "Healthy Kitchen",
    text: "Enjoy healthier versions of your favorite meals without sacrificing taste.",
  },
  {
    image: require("../assets/liveFood.png"),
    heading: "Live Webcam",
    text: "Watch live your healthy meal being made on a webcam",
  },
  {
    image: require("../assets/customizeFood.png"),
    heading: "Customize Meals",
    text: "Design your nutritious meal with our customization features.",
  },
  {
    image: require("../assets/fixEating.png"),
    heading: "Fix Problem",
    class: "fixProblem",
    text: "Sweetened without sugar, no Maida, full of fiber, natural ingredients, and healthy fats can solve: ",
    solve:
      "Overweight, Type 2 diabetes, PCOD, Digestive system, Heart ( Cardiovascular disease, High B.P & Cholesterol ), Stroke, e.t.c",
    points: [
      "Overweight & Obesity",
      "Type 2 diabetes",
      "Heart ( Cardiovascular disease, High B.P & Cholesterol )",
      "PCOD/PCOS",
      "Osteoporosis",
      "Eating disorders",
      "Almost all",
    ],
  },
];
