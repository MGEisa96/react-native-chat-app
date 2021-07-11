import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Avatar from '../Avatar';
import styles from './styles';

interface ProfilesCardProps {
  onPress: () => void;
  disabled: boolean;
}

const ProfilesCard = ({onPress}: ProfilesCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar avatarStyle={styles.imageStyle} disabled={true} />
      <View style={styles.textwrapparStyle}>
        <View style={styles.rowViewStyle}>
          <Text style={styles.nameTextStyle}>Justin O'Moore</Text>
          <Text style={styles.timeStyle}>19:00 </Text>
        </View>
        <Text style={styles.msgTextStyle} numberOfLines={1}>
          sadasdsadsadsadasdsadasdasdadsd
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfilesCard;
