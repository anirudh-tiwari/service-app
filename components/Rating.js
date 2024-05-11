import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = ({ rating, totalStars, onStarPress }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <TouchableOpacity style={{ marginRight: 8 }} key={i} onPress={() => onStarPress(i)}>
          <FontAwesome
            name={i <= rating ? 'star' : 'star-o'}
            size={16}
            color={i <= rating ? '#FFD700' : '#C0C0C0'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
