import * as React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import { useInjectSaga } from '../../utils/injectSaga';
import { filterMoviesList } from './helpers';
import type { Movie, People, HomeScreenPropsType } from './types';
import * as actions from './actions';
import * as favoriteMoviesActions from '../FavoriteMovies/actions';
import * as favoriteCharactersActions from '../FavoriteCharacters/actions';
import styles from './styles';

import * as selectors from './selectors';
import * as favoriteMoviesSelectors from '../FavoriteMovies/selectors';
import * as favoriteCharactersSelectors from '../FavoriteCharacters/selectors';
import saga from './saga';

function Home(props: HomeScreenPropsType): React.ReactNode {
  const {
    loadMovies,
    loadPeoples,
    addFavoriteMovie,
    removeFavoriteMovie,
    addFavoriteCharacter,
    removeFavoriteCharacter,
    // loadStarships,
    // loadSpecies,
    // loadVehicles,
    // loadPlanets,
    movies,
    peoples,
    // starships,
    // species,
    // vehicles,
    // planets,
    // error,
    favoriteMovies,
    favoriteCharacters,
    navigation
  } = props;
  useInjectSaga({ key: 'Home', saga });
  const [searchQuery, updateSearchQuery] = React.useState('');

  const moviesArray = Object.values(movies)
  const peoplesArray = Object.values(peoples)
  const filteredMoviesArray = filterMoviesList(moviesArray, searchQuery);

  // Load movies when component mounts
  React.useEffect(() => {
    loadMovies();
    loadPeoples();
    // loadStarships();
    // loadSpecies();
    // loadVehicles();
    // loadPlanets();
  }, []);

  // Render list item ( movie )
  function renderItem({ item }: { item: Movie }) {
    const characters = item.characters.map(characterURL => (peoplesArray.find(p => p.url === characterURL))).filter(ch => !!ch);
    const isFavorited = favoriteMovies.find(f => f.title === item.title)
    const buttonTitle = isFavorited ? 'Remove Favorite' : 'Add Favorite'
    const callback = isFavorited ? removeFavoriteMovie : addFavoriteMovie;
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', {
        movie: item,
        characters,
      })}>
        <View style={styles.descriptionContainer}>
          {item.title && (
            <View style={styles.row}>
              <Text style={styles.title}>Title: </Text>
              <Text style={styles.desc}>{item.title}</Text>
            </View>
          )}
          {item.release_date && (
            <View style={styles.row}>
              <Text style={styles.title}>Release Date: </Text>
              <Text style={styles.desc}>{item.release_date}</Text>
            </View>
          )}
          <Button title={buttonTitle} onPress={() => callback(item)} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search by title..."
        onChangeText={updateSearchQuery}
        value={searchQuery}
      />
      {/* {error && <Text style={styles.error}>Error: {error}</Text>} */}
      <FlatList
        data={filteredMoviesArray}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.episode_id)}
        extraData={filteredMoviesArray}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  movies: selectors.makeSelectMovies(),
  peoples: selectors.makeSelectPeoples(),
  starships: selectors.makeSelectStarships(),
  species: selectors.makeSelectSpecies(),
  vehicles: selectors.makeSelectVehicles(),
  planets: selectors.makeSelectPlanets(),
  loading: selectors.makeSelectLoading(),
  error: selectors.makeSelectError(),
  success: selectors.makeSelectSuccess(),
  favoriteMovies: favoriteMoviesSelectors.makeSelectMovies(),
  favoriteCharacters: favoriteCharactersSelectors.makeSelectCharacters(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadMovies: () => dispatch(actions.loadMovies()),
    loadPeoples: () => dispatch(actions.loadPeoples()),
    loadStarships: () => dispatch(actions.loadStarships()),
    loadSpecies: () => dispatch(actions.loadSpecies()),
    loadVehicles: () => dispatch(actions.loadVehicles()),
    loadPlanets: () => dispatch(actions.loadPlanets()),
    addFavoriteMovie: (movie: Movie) => dispatch(favoriteMoviesActions.addFavorite(movie)),
    removeFavoriteMovie: (movie: Movie) => dispatch(favoriteMoviesActions.removeFavorite(movie)),
    addFavoriteCharacter: (character: People) => dispatch(favoriteCharactersActions.addFavorite(character)),
    removeFavoriteCharacter: (character: People) => dispatch(favoriteCharactersActions.removeFavorite(character)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Home);
