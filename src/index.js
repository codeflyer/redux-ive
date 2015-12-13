import {runDispatcher} from './redux-ive';
import {Actions, reducerList} from './actions';

var initialStatus = {
  lastId: 0,
  todo: []
};

runDispatcher(initialStatus, reducerList)
    .subscribe(value => console.log('currentStatus', value));

Actions.add('Say Hello');
Actions.add('Leave home');
Actions.add('Take the bus');
Actions.add('Go to work');
Actions.toggle(2);
Actions.toggle(3);
Actions.toggle(2);
Actions.remove(1);
Actions.add('Sleep');
Actions.getLast();

