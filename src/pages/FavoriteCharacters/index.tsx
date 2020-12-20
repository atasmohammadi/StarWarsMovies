import * as React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import type { People, FavoriteCharactersScreenPropsType } from './types';
import * as actions from './actions';
import styles from './styles';

import * as selectors from './selectors';

function FavoriteCharacters(props: FavoriteCharactersScreenPropsType): React.ReactNode {
  const {
    addFavorite,
    removeFavorite,
    characters,
    navigation
  } = props;

  // Render list item ( Character )
  function renderItem({ item }: { item: People }) {
    return (
      <View style={styles.item}>
        <View style={styles.descriptionContainer}>
          {!!item.name && (
            <View style={styles.row}>
              <Text style={styles.title}>Name: </Text>
              <Text style={styles.desc}>{item.name}</Text>
            </View>
          )}
          {!!item.films && (
            <View style={styles.row}>
              <Text style={styles.title}>Movies: </Text>
              <Text style={styles.desc}>{item.films}</Text>
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
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={characters}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  characters: selectors.makeSelectCharacters(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addFavorite: (character: People) => dispatch(actions.addFavorite(character)),
    removeFavorite: (character: People) => dispatch(actions.removeFavorite(character)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(FavoriteCharacters);
