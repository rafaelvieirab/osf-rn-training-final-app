import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ErrorContent from '../../components/ErrorContent';
import Loading from '../../components/Loading';
import MovieListItem from '../../components/MovieListItem';
import SearchBar from '../../components/SearchBar';
import SearchIconButton from '../../components/SearchIconButton';
import { RootStackParamList } from '../../router/Router';
import { getMovies, Movie } from '../../service';
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
});

const Home = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(null);

  const handleShowSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then(response => setMovies(response.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtereds = movies.filter(movie =>
      movie.title.toLowerCase().includes(movieTitle.toLowerCase()),
    );
    setFilteredMovies(filtereds);
  }, [movieTitle, movies]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
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
    </View>
  );
};

export default Home;
