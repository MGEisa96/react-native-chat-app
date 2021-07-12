import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Avatar from '../Avatar';
import styles from './styles';

interface ProfilesCardProps {
  onPress: () => void;
  disabled: boolean;
  item: {name: string};
}

const ProfilesCard = ({onPress, item}: ProfilesCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar avatarStyle={styles.imageStyle} disabled={true} />
      <View style={styles.textwrapparStyle}>
        <View style={styles.rowViewStyle}>
          <Text style={styles.nameTextStyle}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilesCard;
