import Rx from 'rx';

/**
 * Generate the action and add the reducer to the reducer list
 * @param {array} reducerList The list of reducer, should be passed next to the runDispatcher method
 * @param {function} reducer The reducer connected to the action
 * @return {Function} The action
 */
export function generateAction(reducerList, reducer) {
  var actionEvent = new Rx.Subject();

  reducerList.push(actionEvent.map(value => {
    return {value, reducer}
  }));

  return (value) => actionEvent.onNext(value)
}

/**
 * Init the dispatcher with a initial state and a list of reducers
 * @param {Object} initialStatus The initial state
 * @param {array} reducerList The list of the reducer
 * @return {Observable}
 */
export function runDispatcher(initialStatus, reducerList) {
  return Rx.Observable.merge.apply(null, reducerList)
      .scan((state, curr) => {
        if (curr.reducer) {
          state = curr.reducer(state, curr.value);
        }
        return state;
      }, initialStatus)
      .share();
}
