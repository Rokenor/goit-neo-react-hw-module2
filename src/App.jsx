import { useEffect, useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';
import './App.css';

const INITIAL_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : INITIAL_FEEDBACK;
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className="app">
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
