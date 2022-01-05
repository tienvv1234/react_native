import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';

const ShowScreen = ({navigation, route}) => {
    console.log('route');
    console.log(JSON.stringify(route, null, 2));
    const id = route.params.id;
    const {state} = useContext(BlogContext);
    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
