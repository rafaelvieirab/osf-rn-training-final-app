import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

const styles = StyleSheet.create({
  btnSearch: {
    marginRight: 6,
  },
});

type Props = {
  onPressed?: () => void;
};

const SearchIconButton = ({ onPressed }: Props) => {
  return (
    <TouchableOpacity style={styles.btnSearch} onPress={onPressed}>
      <Icon name="search" size={16} color={colors.gray} />
    </TouchableOpacity>
  );
};

export default SearchIconButton;
