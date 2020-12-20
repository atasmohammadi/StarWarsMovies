import 'react-native-gesture-handler';
import * as React from 'react';

import Home from './Home';
import Details from './Details';
import Character from './Character';
import FavoriteCharacters from './FavoriteCharacters';
import FavoriteMovies from './FavoriteMovies';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreenStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{ title: 'Home' }} component={Home as React.ComponentClass} />
            <Stack.Screen name="Details" options={({ route }) => ({ title: route.params.movie.title })} component={Details as React.FC} />
            <Stack.Screen name="Character" options={({ route }) => ({ title: route.params.character.name })} component={Character as React.FC} />
        </Stack.Navigator>
    );
}

function FavoriteCharactersStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoriteCharacters" options={{ title: 'Favorite Characters' }} component={FavoriteCharacters as React.ComponentClass} />
        </Stack.Navigator>
    );
}

function FavoriteMoviesStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoriteMovies" options={{ title: 'Favorite Movies' }} component={FavoriteMovies as React.ComponentClass} />
        </Stack.Navigator>
    );
}

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreenStackNavigator} />
                <Tab.Screen name="Characters" component={FavoriteCharactersStackNavigator} />
                <Tab.Screen name="Movies" component={FavoriteMoviesStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}