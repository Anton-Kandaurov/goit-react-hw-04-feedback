import React from 'react';
import PropTypes from 'prop-types';
import { Btn, BtnList } from './styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(btn => (
        <Btn type="button" key={btn} onClick={() => onLeaveFeedback(btn)}>
          {btn}
        </Btn>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};