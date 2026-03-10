import styles from "./VoteStats.module.css";
import { Votes } from "../types/votes";

interface VoteStatsProps {
  votes: Votes;
}

export default function VoteStats({ votes }: VoteStatsProps) {
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100);

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
