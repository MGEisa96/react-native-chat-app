import * as React from 'react';
import {Image, ImageStyle, TouchableOpacity} from 'react-native';
import styles from './styles';

interface AvatarProps {
  avatar?: string;
  avatarStyle?: ImageStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const Avatar = ({avatar, avatarStyle, disabled, onPress}: AvatarProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image
        source={{
          uri: avatar || 'https://i.pravatar.cc/300',
        }}
        style={[styles.image, avatarStyle]}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
