import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [responses, setResponses] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    ...JSON.parse(window.localStorage.getItem("responses")),
  });

  useEffect(() => {
    window.localStorage.setItem("responses", JSON.stringify(responses));
  }, [responses]);

  const totalFeedback = Object.values(responses).reduce((total, num) => {
    return total + num;
  }, 0);
  const positiveShare = Math.round((responses.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setResponses({ good: 0, neutral: 0, bad: 0 });
  };
  const updateFeedback = (feedbackType) => {
    setResponses((prev) => {
      return { ...prev, [feedbackType]: prev[feedbackType] + 1 };
    });
  };

  return (
    <div className="container">
      <Description />
      <Options
        reset={resetFeedback}
        totalFeedback={totalFeedback}
        update={updateFeedback}
        responsesNames={Object.keys(responses)}
      />
      {totalFeedback ? (
        <Feedback
          responses={responses}
          total={totalFeedback}
          positive={positiveShare}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
