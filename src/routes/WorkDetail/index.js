import { workList } from '../../store/data/workData';

// Sync route definition
export default {
  path : 'work/:workId',
  /*  Async getComponent is only invoked when route matches   */
  onEnter(nextState, replace, cb) {
    if (!workList.find(item => item.id === nextState.params.workId)) {
      replace('not-found');
    }
    cb();
  },
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const WorkDetail = require('./containers/WorkDetailContainer').default;
      // const reducer = require('./modules/counter').default;

      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'counter', reducer });

      /*  Return getComponent   */
      cb(null, WorkDetail);

    /* Webpack named bundle   */
    }, 'work');
  }
};
