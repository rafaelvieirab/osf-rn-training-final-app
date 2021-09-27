import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../router/Router';
import PosterLandscape from '../../components/PosterLandscape';
import PosterPortrait from '../../components/PosterPortrait';
import TrailerButton from '../../components/TrailerButton';
import SessionsAvailableSubsequentsDays from '../../components/SessionsSubsequentsDays';
import { colors } from '../../style';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetail'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bodyBackgroundColor,
  },
  posterPortraitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    margin: 4,
    padding: 6,
  },
  movieTitle: {
    color: colors.white,
    fontSize: 18,
    marginVertical: 4,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  boldText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  regularText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
  },
  synopsis: {
    marginBottom: 14,
  },
});

const MovieDetail = ({ route }: Props) => {
  const { movie } = route.params;

  const renderTrailerButton = () => {
    return movie.trailers.length ? (
      <TrailerButton trailerURL={movie.trailers[0].url} />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <PosterLandscape imageURL={movie.posterHorizontalUrl}>
        <View style={styles.posterPortraitContainer}>
          <PosterPortrait
            imageURL={movie.posterPortraitUrl}
            width={170}
            height={170}
          />
        </View>
      </PosterLandscape>

      <View style={styles.detailsContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.boldText}>
          Classificação:{' '}
          <Text style={styles.regularText}>{movie.contentRating}</Text>
        </Text>
        <Text style={[styles.boldText, styles.synopsis]} numberOfLines={3}>
          Synopsis: <Text style={styles.regularText}>{movie.synopsis}</Text>
        </Text>

        {renderTrailerButton()}

        <SessionsAvailableSubsequentsDays moveId={movie.id} />
      </View>
    </View>
  );
};

export default MovieDetail;
