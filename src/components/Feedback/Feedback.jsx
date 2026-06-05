import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.feedback}>
      <li className={css.item}>Good: {feedback.good}</li>
      <li className={css.item}>Neutral: {feedback.neutral}</li>
      <li className={css.item}>Bad: {feedback.bad}</li>
      <li className={css.item}>Total: {totalFeedback}</li>
      <li className={css.item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
