import styles from "./Feedback.module.css";

const Feedback = ({ responses, total, positive }) => {
  return (
    <div className={styles.container}>
      {Object.keys(responses).map((response) => {
        return (
          <p key={response} className={styles.response}>
            {response}: {responses[response]}
          </p>
        );
      })}
      <p className={styles.response}>Total: {total}</p>
      <p className={styles.response}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
