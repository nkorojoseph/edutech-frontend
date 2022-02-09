import { createStore } from 'redux';
import rootReducer  from "./reducers/rootReducer";

import { composeWithDevTools } from '@redux-devtools/extension';


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  rootReducer,
  composeEnhancers()
);


export default store