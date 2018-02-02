import { combineReducers } from 'redux';
// Books reducer.
import BookReducer from './reducer_books';
// Active book reducer.
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
