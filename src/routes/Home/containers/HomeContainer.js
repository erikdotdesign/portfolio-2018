import { connect } from 'react-redux';

import Home from '../components/Home';

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  workList: state.workList
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
