import { combineReducers } from 'redux';
import productsReducer from './containers/products-admin/reducer';
import authReducer from './containers/auth/reducer'
import { reducer as formReducer } from 'redux-form';


const Reducer = combineReducers({
    form: formReducer,
    products: productsReducer,
    auth : authReducer
});

export default Reducer;