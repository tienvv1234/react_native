import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        case 'edit_blogpost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id
                    ? {
                          ...blogPost,
                          title: action.payload.title,
                          content: action.payload.content,
                      }
                    : blogPost;
            });
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data});
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});
        // dispatch({type: 'add_blogpost', payload: {title, content}});
        if (callback) {
            callback();
        }
    };
};

// you can handle request in here
// const addBlogPost = dispatch => {
//     return async (title, content, callback) => {
//         try {
//             await axisios.post('http://localhost:3000/api/blogposts');
//             dispatch({type: 'add_blogpost', payload: {title, content}});
//             callback();
//         } catch (error) {
//             console.log(error);
//         }
//     };
// };

const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({type: 'edit_blogpost', payload: {id, title, content}});
        if (callback) {
            callback();
        }
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    [],
);
