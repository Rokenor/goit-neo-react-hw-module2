import css from './Options.module.css';

export default function Options({ onUpdate, onReset, totalFeedback }) {
  return (
    <div className={css.options}>
      <button
        type="button"
        className={css.button}
        onClick={() => onUpdate('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onUpdate('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onUpdate('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
