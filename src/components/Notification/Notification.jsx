import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={styles.notificationContainer}>
      <p className={styles.notification}>No feedback yet</p>
    </div>
  );
};

export default Notification;
