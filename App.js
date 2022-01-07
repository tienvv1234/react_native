/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Provider as BlogProvider} from './src/context/BlogContext';

// import IndexScreen from './src/screens/IndexScreen';
// import ShowScreen from './src/screens/ShowScreen';
// import CreateScreen from './src/screens/CreateScreen';
// import EditScreen from './src/screens/EditScreen';

// Auth in App
import AccountScreen from './src/screens/auth/AccountScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import TrackCreateScreen from './src/screens/auth/TrackCreateScreen';
import TrackDetailScreen from './src/screens/auth/TrackDetailScreen';
import TrackListScreen from './src/screens/auth/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {navigationRef} from './src/navigationRef';
import ReSolveAuthScreen from './src/screens/auth/ResolveAuthScreen';

const loginStack = createNativeStackNavigator();

// const App = () => {
//     return (
//         <BlogProvider>
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     {/* <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Box" component={BoxScreen} /> */}
//                     <Stack.Screen
//                         name="Index"
//                         component={IndexScreen}
//                         options={({navigation, route}) => ({
//                             headerRight: () => {
//                                 return (
//                                     <TouchableOpacity
//                                         onPress={() =>
//                                             navigation.navigate('Create')
//                                         }>
//                                         <View>
//                                             <Text>+</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 );
//                             },
//                         })}
//                         // options={{
//                         //     headerRight: ({navigation}) => (
//                         //         <TouchableOpacity
//                         //             onPress={() =>
//                         //                 navigation.navigate('Create')
//                         //             }>
//                         //             <View>
//                         //                 <Text>+</Text>
//                         //             </View>
//                         //         </TouchableOpacity>
//                         //     ),
//                         // }}
//                     />
//                     <Stack.Screen
//                         name="Show"
//                         component={ShowScreen}
//                         options={({navigation, route}) => ({
//                             headerRight: () => {
//                                 return (
//                                     <TouchableOpacity
//                                         onPress={() =>
//                                             navigation.navigate('Edit', {
//                                                 id: route.params.id,
//                                             })
//                                         }>
//                                         <View>
//                                             <Text>Edit</Text>
//                                         </View>
//                                     </TouchableOpacity>
//                                 );
//                             },
//                         })}
//                     />
//                     <Stack.Screen
//                         name="Create"
//                         component={CreateScreen}
//                         // options={{headerRight: () => <View>+</View>}}
//                     />
//                     <Stack.Screen
//                         name="Edit"
//                         component={EditScreen}
//                         // options={({navigation, route}) => ({
//                         //     headerRight: () => {
//                         //         return (
//                         //             <TouchableOpacity
//                         //                 onPress={() =>
//                         //                     navigation.navigate('Edit')
//                         //                 }>
//                         //                 <View>
//                         //                     <Text>Edit</Text>
//                         //                 </View>
//                         //             </TouchableOpacity>
//                         //         );
//                         //     },
//                         // })}
//                     />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </BlogProvider>
//     );
// };

const loginFlow = () => {
    return (
        <loginStack.Navigator>
            <loginStack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{headerShown: false}}
            />
            <loginStack.Screen name="SignIn" component={SignInScreen} />
        </loginStack.Navigator>
    );
};

const trackListStack = createNativeStackNavigator();

const trackListFlow = () => {
    return (
        <trackListStack.Navigator>
            <trackListStack.Screen
                name="TrackListScreen"
                component={TrackListScreen}
            />
            <trackListStack.Screen
                name="TrackDetailScreen"
                component={TrackDetailScreen}
            />
        </trackListStack.Navigator>
    );
};

const mainTab = createBottomTabNavigator();

const mainFlow = () => {
    return (
        <mainTab.Navigator>
            <mainTab.Screen
                name="TrackListFlow"
                component={trackListFlow}
                options={{headerShown: false}}
            />
            <mainTab.Screen
                name="TrackCreateScreen"
                component={TrackCreateScreen}
            />
            <mainTab.Screen name="AccountScreen" component={AccountScreen} />
        </mainTab.Navigator>
    );
};

const RootStack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="ResolveAuth"
                    component={ReSolveAuthScreen}
                />
                <RootStack.Screen
                    name="LoginFlow"
                    component={loginFlow}
                    options={{headerShown: false}}
                />
                <RootStack.Screen
                    name="MainFlow"
                    component={mainFlow}
                    options={{headerShown: false}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
// export default App;
export default () => {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
};
