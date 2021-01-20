import { compose, StoreEnhancer, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reactotron from './configReactoron';

// Reactoron Config
if (__DEV__) {
    import('./configReactoron').then(() => console.log('Reactotron Configured'));
}

// Redux Enhancers Config
const applyAppEnhances = (storeEnhancers: Array<StoreEnhancer>) => {
    let enhancers: any;

    if (__DEV__) {
        enhancers = compose(...storeEnhancers, reactotron.createEnhancer(), applyMiddleware(logger));
    } else {
        enhancers = compose(...storeEnhancers);
    }

    return enhancers;
};

export { applyAppEnhances };
