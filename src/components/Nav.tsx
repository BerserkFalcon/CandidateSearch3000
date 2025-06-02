import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Candidate Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/SavedCandidates" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Saved Candidates
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
