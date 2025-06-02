import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateList from '../components/CandidateList';

const LOCAL_KEY = 'savedCandidates';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedFromStorage = localStorage.getItem(LOCAL_KEY);
    if (savedFromStorage) setSaved(JSON.parse(savedFromStorage));
  }, []);

  const handleRemove = (id: number) => {
    const updated = saved.filter((c) => c.id !== id);
    setSaved(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  return (
    <section>
      <h1>Saved Candidates</h1>
      {saved.length === 0 ? (
        <p>No saved candidates.</p>
      ) : (
        <CandidateList
          candidates={saved}
          onRemove={handleRemove}
          savedIds={saved.map((c) => c.id)}
        />
      )}
    </section>
  );
};

export default SavedCandidates;
