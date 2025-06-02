import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface Props {
  candidates: Candidate[];
  onSave?: (candidate: Candidate) => void;
  onRemove?: (id: number) => void;
  savedIds?: number[];
}

const CandidateList = ({ candidates, onSave, onRemove, savedIds = [] }: Props) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
    {candidates.map((candidate) => (
      <CandidateCard
        key={candidate.id}
        candidate={candidate}
        onSave={onSave}
        onRemove={onRemove}
        isSaved={savedIds.includes(candidate.id)}
      />
    ))}
  </div>
);

export default CandidateList;