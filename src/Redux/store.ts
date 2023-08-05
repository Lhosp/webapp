import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './root'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
