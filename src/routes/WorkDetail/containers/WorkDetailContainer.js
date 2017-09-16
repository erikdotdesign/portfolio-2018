import { connect } from 'react-redux'

import WorkDetail from '../components/WorkDetail'

const mapDispatchToProps = {}

const mapStateToProps = (state, ownProps) => ({
  work: state.workDetail[ownProps.params.workId],
  nextWork: state.workDetail[state.workDetail[ownProps.params.workId].next],
  prevWork: state.workDetail[state.workDetail[ownProps.params.workId].prev]
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetail)
