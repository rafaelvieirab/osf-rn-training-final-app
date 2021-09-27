import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import ErrorContent from '../../components/ErrorContent';
import Loading from '../../components/Loading';
import MovieListItem from '../../components/MovieListItem';
import SearchBar from '../../components/SearchBar';
import SearchIconButton from '../../components/SearchIconButton';
import { Movie } from '../../models/Movie';
import { RootStackParamList } from '../../router/Router';
import { getMoviesAsync } from '../../service';
import { colors } from '../../style';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bodyBackgroundColor,
  },
  searchIconButtonContainer: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 0,
    backgroundColor: colors.bodyBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  msgNotFoundContainer: {
    backgroundColor: colors.bodyBackgroundColor,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgNotFound: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});

const Home = ({ navigation }: Props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const { data, isLoading, isError } = useQuery('todos', getMoviesAsync);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  const handleShowSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const filtereds = movies.filter(movie =>
      movie.title.toLowerCase().includes(movieTitle.toLowerCase()),
    );
    setFilteredMovies(filtereds);
  }, [movieTitle, movies]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorContent message="Não há filmes disponíveis no momento" />;
  }

  return (
    <View>
      {isSearchOpen ? (
        <SearchBar
          movie={movieTitle}
          setMovie={setMovieTitle}
          handleShowSearchBar={handleShowSearchBar}
        />
      ) : (
        <View style={styles.searchIconButtonContainer}>
          <SearchIconButton onPressed={handleShowSearchBar} />
        </View>
      )}

      {filteredMovies.length === 0 ? (
        <View style={styles.msgNotFoundContainer}>
          <Text style={styles.msgNotFound}>
            Não encontramos nenhum filme com o nome: "{movieTitle}"
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.container}
          numColumns={2}
          data={filteredMovies}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MovieListItem
              movie={item}
              onPress={() => navigation.push('MovieDetail', { movie: item })}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
