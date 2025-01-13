import styles from "./Options.module.css";

const Options = ({ reset, totalFeedback, update, responsesNames }) => {
  return (
    <div className={styles.optionContainer}>
      {responsesNames.map((name) => {
        return (
          <button
            className={styles.button}
            key={name}
            onClick={() => update(name)}
          >
            {name}
          </button>
        );
      })}
      {totalFeedback !== 0 && (
        <button onClick={reset} className={styles.button}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
