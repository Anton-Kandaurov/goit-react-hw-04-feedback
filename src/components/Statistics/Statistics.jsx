import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification';
import { StatisticLi } from './styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total > 0 ? (
        <ul>
          <StatisticLi>
            Good: <span>{good}</span>
          </StatisticLi>
          <StatisticLi>
            Neutral: <span>{neutral}</span>
          </StatisticLi>
          <StatisticLi>
            Bad: <span>{bad}</span>
          </StatisticLi>
          <StatisticLi>
            Total: <span>{total}</span>
          </StatisticLi>
          <StatisticLi>
            Positive feedback:
            <span> {positivePercentage}%</span>
          </StatisticLi>
        </ul>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};