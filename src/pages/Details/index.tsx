import * as React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './styles';
import type { DetailsScreenPropsType } from './types';

export default function Details(props: DetailsScreenPropsType): React.ReactNode {
  const { route } = props;
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          {movie.Poster && <Image
            style={styles.itemImage}
            source={{
              uri: movie.Poster,
            }}
          />}
        </View>
        <View style={styles.descriptionContainer}>
          {movie.title && (
            <View style={styles.row}>
              <Text style={styles.title}>Title: </Text>
              <Text style={styles.desc}>{movie.title}</Text>
            </View>
          )}
          {movie.release_date && (
            <View style={styles.row}>
              <Text style={styles.title}>Release Date: </Text>
              <Text style={styles.desc}>{movie.release_date}</Text>
            </View>
          )}
          {movie.characters && (
            <View style={styles.row}>
              <Text style={styles.title}>Characters: </Text>
              <Text style={styles.desc}>{movie.characters}</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
