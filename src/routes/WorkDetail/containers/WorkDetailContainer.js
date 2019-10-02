import { connect } from 'react-redux';

import WorkDetail from '../components/WorkDetail';

const mapDispatchToProps = {};

const mapStateToProps = (state, ownProps) => ({
  work: state.workDetail.find(currentValue => currentValue.id === ownProps.params.workId)
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetail);
