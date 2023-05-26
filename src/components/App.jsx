import { Component } from "react";
import React from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  handleLeaveFeedback = label => {
    this.setState(prevState => ({
      [label]: prevState[label] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (good === 0) {
      return 0;
    }
    return Math.ceil((good * 100) / (good + neutral + bad));
  };

  render() {
    const feedbacks = this.state;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(feedbacks)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={this.countTotalFeedback(feedbacks)}
            positivePercentage={this.countPositiveFeedbackPercentage(feedbacks)}
          />
        </Section>
      </>
    );
  }
}
