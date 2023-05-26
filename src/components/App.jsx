import { useState } from 'react';
import React from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = label => {
    if (label === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (label === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (label === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const feedbacks = { good, neutral, bad };
  const totalFeedbacks = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.ceil((good * 100) / totalFeedbacks);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title={'Statistic'}>
        {totalFeedbacks !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {totalFeedbacks === 0 && (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}


// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };


//   handleLeaveFeedback = label => {
//     this.setState(prevState => ({
//       [label]: prevState[label] + 1,
//     }));
//   };

//   countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

//   countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
//     if (good === 0) {
//       return 0;
//     }
//     return Math.ceil((good * 100) / (good + neutral + bad));
//   };

//   render() {
//     const feedbacks = this.state;

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(feedbacks)}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistic'}>
//           <Statistics
//             good={feedbacks.good}
//             neutral={feedbacks.neutral}
//             bad={feedbacks.bad}
//             total={this.countTotalFeedback(feedbacks)}
//             positivePercentage={this.countPositiveFeedbackPercentage(feedbacks)}
//           />
//         </Section>
//       </>
//     );
//   }
// }
