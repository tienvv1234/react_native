import React, {useContext} from 'react';
import BlogPostForm from '../components/BlogPostForm';
import {Context as BlogContext} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(BlogContext);

    return (
        <BlogPostForm
            onSubmit={(title, context) => {
                addBlogPost(title, context, () => {
                    navigation.navigate('Index');
                });
            }}
        />
    );
};

export default CreateScreen;
