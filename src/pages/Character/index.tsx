import * as React from 'react';
import { SafeAreaView, View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import styles from './styles';
import type { CharacterScreenPropsType } from './types';
import type { People } from '../Home/types';
import * as homeSelectors from '../Home/selectors';
import * as favoriteCharactersSelectors from '../FavoriteCharacters/selectors';
import * as favoriteCharactersActions from '../FavoriteCharacters/actions';

function Character(props: CharacterScreenPropsType): React.ReactNode {
  const { route, movies, favoriteCharacters, addFavoriteCharacter, removeFavoriteCharacter } = props;
  const { character } = route.params;
  const moviesArray = Object.values(movies)
  const films = character.films.map(url => moviesArray.find(mv => mv.url === url));
  const isFavorited = favoriteCharacters.find(f => f.name === character.name);
  const buttonTitle = isFavorited ? 'Remove Favorite' : 'Add Favorite'
  const callback = isFavorited ? removeFavoriteCharacter : addFavoriteCharacter;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        {/* <View style={styles.imageContainer}>
          {character.Poster && <Image
            style={styles.itemImage}
            source={{
              uri: character.Poster,
            }}
          />}
        </View> */}
        <View style={styles.descriptionContainer}>
          {character.name && (
            <View style={styles.row}>
              <Text style={styles.title}>Name: </Text>
              <Text style={styles.desc}>{character.name}</Text>
            </View>
          )}
          {character.birth_year && (
            <View style={styles.row}>
              <Text style={styles.title}>Birth Year: </Text>
              <Text style={styles.desc}>{character.birth_year}</Text>
            </View>
          )}
          {character.eye_color && (
            <View style={styles.row}>
              <Text style={styles.title}>Eye Color: </Text>
              <Text style={styles.desc}>{character.eye_color}</Text>
            </View>
          )}
          {films && (
            <View style={styles.row}>
              <Text style={styles.title}>Films: </Text>
              <Text style={styles.desc}>{films.map(mov => mov.title).join(", ")}</Text>
            </View>
          )}
          <Button title={buttonTitle} onPress={() => callback(character)} />
        </View>
      </View>
    </SafeAreaView>
  );
}


const mapStateToProps = createStructuredSelector({
  favoriteCharacters: favoriteCharactersSelectors.makeSelectCharacters(),
  movies: homeSelectors.makeSelectMovies(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addFavoriteCharacter: (character: People) => dispatch(favoriteCharactersActions.addFavorite(character)),
    removeFavoriteCharacter: (character: People) => dispatch(favoriteCharactersActions.removeFavorite(character)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Character);
