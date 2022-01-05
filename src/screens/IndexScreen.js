import React, {useContext, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context as BlogContext} from '../context/BlogContext';
const IndexScreen = ({navigation}) => {
    console.log('navigation 111');
    console.log(JSON.stringify(navigation, null, 2));
    const {state, getBlogPosts, deleteBlogPost} = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // navigation.setOptions({
    //     headerRight: () => {
    //         <View>
    //             <Text>+</Text>
    //         </View>;
    //     },
    // });

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => {
    //             <View>
    //                 <Text>+</Text>
    //             </View>;
    //         },
    //     });
    // }, [navigation]);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={state}
                // key={item => item.title}
                keyExtractor={blogPost => {
                    blogPost.title;
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Show', {id: item.id})
                            }>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteBlogPost(item.id);
                                    }}>
                                    <View style={styles.icon}>
                                        <Text>TT</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.setOptions = () => {
    return {
        headerRight: (
            <View>
                <Text>+</Text>
            </View>
        ),
    };
};
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
