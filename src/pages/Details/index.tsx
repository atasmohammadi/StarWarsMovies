import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import type { DetailsScreenPropsType } from './types';

export default function Details(props: DetailsScreenPropsType): React.ReactNode {
  const { route, navigation } = props;
  const { movie, characters } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.item}>
        {/* <View style={styles.imageContainer}>
          {movie.Poster && <Image
            style={styles.itemImage}
            source={{
              uri: movie.Poster,
            }}
          />}
        </View> */}
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
          {characters && (
            <View style={styles.row}>
              <Text style={styles.title}>Characters: </Text>
              {characters.map(character => (
                <TouchableOpacity key={character.created} style={styles.listItem} onPress={() => navigation.navigate('Character', {
                  character,
                })}>
                  <Text style={styles.desc}>{character.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {movie.opening_crawl && (
            <View style={styles.row}>
              <Text style={styles.title}>Opening Crawl: </Text>
              <Text style={styles.desc}>{movie.opening_crawl}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
