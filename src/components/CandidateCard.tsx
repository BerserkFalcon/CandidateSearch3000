import { Candidate } from '../interfaces/Candidate.interface';

interface Props {
  candidate: Candidate;
  onSave?: (candidate: Candidate) => void;
  onRemove?: (id: number) => void;
  isSaved?: boolean;
}

const CandidateCard = ({ candidate, onSave, onRemove, isSaved }: Props) => (
  <div style={{ border: '1px solid #444', borderRadius: 8, margin: 8, padding: 16, width: 300 }}>
    <img src={candidate.avatar_url} alt={candidate.login} width={60} style={{ borderRadius: '50%' }} />
    <h3>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.login}</a>
    </h3>
    {candidate.name && <p>Name: {candidate.name}</p>}
    {candidate.location && <p>Location: {candidate.location}</p>}
    {candidate.bio && <p>Bio: {candidate.bio}</p>}
    {onSave && !isSaved && <button onClick={() => onSave(candidate)}>Save</button>}
    {onRemove && isSaved && <button onClick={() => onRemove(candidate.id)}>Remove</button>}
  </div>
);

export default CandidateCard;