import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AvatarProps {
  iconSize?: number;
  iconName?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const AppIcon = ({iconSize, iconName, disabled, onPress}: AvatarProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon name={iconName || 'rocket'} size={iconSize || 25} color="#900" />
    </TouchableOpacity>
  );
};

export default AppIcon;
