import {generateAction} from './redux-ive';
import {objectReplaceDeep} from './helpers';

export var reducerList = [];

/**
 * Create the actions for the applications
 * @type {{getLast: Function, add: Function, toggle: Function, remove: Function}}
 */
export var Actions = {
  getLast: generateAction(reducerList, (state, value) => state),

  add: generateAction(reducerList, (state, value) => {
    var newId = state.lastId + 1;
    return objectReplaceDeep(
        objectReplaceDeep(state, ['lastId'], () => newId), ['todo'], (todo) => {
          return [...todo, {id: newId, action: value, done: false}]
        })
  }),

  toggle: generateAction(reducerList, (state, value) => {
    return objectReplaceDeep(state, ['todo'], (todo) => {
      return todo.map((item) => {
        if (item.id === value) {
          return objectReplaceDeep(item, ['done'], (done) => !done)
        }
        return Object.assign({}, item);
      });
    });
  }),

  remove: generateAction(reducerList, (state, value) => {
    return objectReplaceDeep(state, ['todo'], (todo) => {
      return todo.map((item) => {
        if (item.id === value) {
          return objectReplaceDeep(item, ['removed'], () => true)
        }
        return Object.assign({}, item);
      });
    });
  })
};
