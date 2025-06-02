import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateList from '../components/CandidateList';

const LOCAL_KEY = 'savedCandidates';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [saved, setSaved] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedFromStorage = localStorage.getItem(LOCAL_KEY);
    if (savedFromStorage) setSaved(JSON.parse(savedFromStorage));
  }, []);

  useEffect(() => {
    setLoading(true);
    searchGithub().then(async (users) => {
      // Fetch more details for each user
      const details = await Promise.all(
        users.slice(0, 10).map((u: Candidate) => searchGithubUser(u.login))
      );
      setCandidates(details);
      setLoading(false);
    });
  }, []);

  const handleSave = (candidate: Candidate) => {
    if (!saved.find((c) => c.id === candidate.id)) {
      const updated = [...saved, candidate];
      setSaved(updated);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    }
  };

  return (
    <section>
      <h1>Candidate Search</h1>
      {loading ? <p>Loading...</p> : (
        <CandidateList
          candidates={candidates}
          onSave={handleSave}
          savedIds={saved.map((c) => c.id)}
        />
      )}
    </section>
  );
};

export default CandidateSearch;
