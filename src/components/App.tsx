import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import { useState } from "react";
import { Votes, VoteType } from "../types/votes";
import VoteOptions from "./VoteOptions";
import VoteStats from "./VoteStats";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (key: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [key]: prevVotes[key] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={votes.good > 0 || votes.neutral > 0 || votes.bad > 0}
      />
      <VoteStats votes={votes} />
    </div>
  );
}

export default App;
