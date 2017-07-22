import { connect } from 'react-redux';
import { enableBaseline, disableBaseline } from '../modules/baseline';

import PageLayout from '../layouts/PageLayout/PageLayout';

const mapDispatchToProps = {
  enableBaseline,
  disableBaseline
};

const mapStateToProps = (state) => ({
  baseline : state.baseline
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);

