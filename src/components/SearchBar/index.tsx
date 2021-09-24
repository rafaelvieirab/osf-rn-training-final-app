import SearchIconButton from '../SearchIconButton';
import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputContainer: {
    width: '90%',
    marginVertical: 8,
    marginHorizontal: 4,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  searchAndText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnSearch: {},
  text: {
    marginLeft: 6,
    flex: 1,
    color: colors.white,
    fontSize: 14,
    padding: 6,
  },
});

type Props = {
  movie: string;
  setMovie: Dispatch<SetStateAction<string>>;
  handleShowSearchBar?: () => void;
};

const SearchBar = ({ movie, setMovie, handleShowSearchBar }: Props) => {
  const handleResetMovie = () => {
    setMovie('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.searchAndText}>
          <SearchIconButton onPressed={handleShowSearchBar} />

          <TextInput
            style={styles.text}
            onChangeText={setMovie}
            value={movie}
            placeholderTextColor={colors.gray}
            placeholder="Procure um filme..."
            maxLength={50}
            autoFocus
            focusable
          />
        </View>

        {movie !== '' && (
          <TouchableOpacity onPress={handleResetMovie}>
            <Icon name="close" size={18} color={colors.gray} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
