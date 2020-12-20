import * as React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import type { Movie, FavoriteMoviesScreenPropsType } from './types';
import * as actions from './actions';
import styles from './styles';

import * as selectors from './selectors';
import * as homeScreenSelectors from '../Home/selectors';

function FavoriteMovies(props: FavoriteMoviesScreenPropsType): React.ReactNode {
  const {
    addFavorite,
    removeFavorite,
    movies,
    peoples,
    navigation
  } = props;

  const peoplesArray = Object.values(peoples)

  // Render list item ( Movie )
  function renderItem({ item }: { item: Movie }) {
    const characters = item.characters.map(characterURL => (peoplesArray.find(p => p.url === characterURL))).filter(ch => !!ch);
    return (
      <View style={styles.item}>
        <View style={styles.descriptionContainer}>
          {!!item.title && (
            <View style={styles.row}>
              <Text style={styles.title}>Title: </Text>
              <Text style={styles.desc}>{item.title}</Text>
            </View>
          )}
          {!!characters && (
            <View style={styles.row}>
              <Text style={styles.title}>Characters: </Text>
              <Text style={styles.desc}>{characters.map(character => character.name).join(", ")}</Text>
            </View>
          )}
          <Button title="Remove Favorite" onPress={() => removeFavorite(item)} />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={movies}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  movies: selectors.makeSelectMovies(),
  peoples: homeScreenSelectors.makeSelectPeoples(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addFavorite: (character: Movie) => dispatch(actions.addFavorite(character)),
    removeFavorite: (character: Movie) => dispatch(actions.removeFavorite(character)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(FavoriteMovies);
