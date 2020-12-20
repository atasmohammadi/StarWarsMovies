import * as React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';
import { useInjectSaga } from '../../utils/injectSaga';
import { filterMoviesList } from './helpers';
import type { Movie, HomeScreenPropsType } from './types';
import * as actions from './actions';
import styles from './styles';

import {
  makeSelectLoading,
  makeSelectList,
  makeSelectError,
  makeSelectSuccess,
} from './selectors';
import saga from './saga';

function Home(props: HomeScreenPropsType): React.ReactNode {
  const { loadMovies, movies, error, navigation } = props;
  useInjectSaga({ key: 'Home', saga });
  const [searchQuery, updateSearchQuery] = React.useState('');

  const moviesArray = Object.values(movies)
  const filteredMoviesArray = filterMoviesList(moviesArray, searchQuery);

  // Load movies when component mounts
  React.useEffect(() => {
    loadMovies();
  }, []);

  // Render list item ( movie )
  function renderItem({ item }: { item: Movie }) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', {
        movie: item,
      })}>
        {/* <View style={styles.imageContainer}>
          {item.Poster && <Image
            style={styles.itemImage}
            source={{
              uri: item.Poster,
            }}
          />}
        </View> */}
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
          {item.characters && (
            <View style={styles.row}>
              <Text style={styles.title}>Characters: </Text>
              <Text style={styles.desc}>{item.characters}</Text>
            </View>
          )}
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
  movies: makeSelectList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loadMovies: () => dispatch(actions.loadMovies()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Home);
