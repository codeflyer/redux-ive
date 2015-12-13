import {generateAction, runDispatcher} from './redux-ive';

// Define the initial status
var initialStatus = {
  current: 0
};

// Create some actions
var reducerList = [];
var incrementAction  = generateAction(reducerList, (state, value) => {
  state.current += value;
  return state;
});

var decrementAction  = generateAction(reducerList, (state, value) => {
  state.current -= value;
  return state;
});

// Run the dispatcher
runDispatcher(initialStatus, reducerList)
    .subscribe(value => console.log('currentStatus', value));

// Call some action
incrementAction(1);
// {current : 1}
incrementAction(3);
// {current : 4}
decrementAction(1);
// {current : 3}


