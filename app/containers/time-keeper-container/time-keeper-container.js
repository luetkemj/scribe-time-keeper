import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementTime, getTime } from '../../actions/time.actions';

import TimeKeeper from '../../components/time-keeper/time-keeper.component';

class TimeKeeperContainer extends Component {
  componentWillMount() {
    this.props.getTime();
  }

  render() {
    const { timeState } = this.props;
    return (
      <TimeKeeper
        day={timeState.time.days + 1}
        time={{
          hours: timeState.time.hours,
          minutes: timeState.time.minutes,
          seconds: timeState.time.seconds,
        }}
        sky={timeState.time.sky}
        rotation={timeState.time.rotation}
        increment={this.props.incrementTime}
        initialMs={timeState.time.ms}
      />
    );
  }
}

TimeKeeperContainer.propTypes = {
  timeState: PropTypes.shape({
    time: PropTypes.shape({
      ms: PropTypes.number.isRequired,
      days: PropTypes.number.isRequired,
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired,
      sky: PropTypes.string.isRequired,
      rotation: PropTypes.number.isRequired,
    }),
    loading: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    error: PropTypes.string,
    success: PropTypes.bool.isRequired,
  }),
  incrementTime: PropTypes.func.isRequired,
  getTime: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementTime,
    getTime,
  }, dispatch);
}


function mapStateToProps(state) {
  return {
    timeState: state.timeState,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeKeeperContainer);
