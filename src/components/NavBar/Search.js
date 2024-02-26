import { useRef } from 'react';
import { useKey } from '../../hooks/useKey';

export default function Search({ query, setQuery }) {
  const searchBarEl = useRef(null);

  useKey('Enter', () => {
    if (document.activeElement === searchBarEl.current) return;

    searchBarEl.current.focus();
    setQuery('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={searchBarEl}
    />
  );
}
