import React from 'react';
import PropTypes from 'prop-types';
import { FetchComponent, LoadComponent } from 'hocs';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions, sagas, selectors } from 'public-modules';

const {
  bountiesSelector,
  bountiesCountSelector,
  bountiesStateSelector
} = selectors;

const Leaderboard = props => {
  const { loading, count, error } = props;

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <div>
      <div>COUNT: {count}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  bounties: bountiesSelector(state),
  count: bountiesCountSelector(state),
  ...bountiesStateSelector(state)
});

Leaderboard.propTypes = {
  bounties: PropTypes.array,
  load: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

const check = compose(
  FetchComponent(sagas.fetch),
  connect(mapStateToProps, { load: actions.loadBounties }),
  LoadComponent
)(Leaderboard);

export default check;
