import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-800 text-white px-4 py-2 flex gap-4 shadow-md">
      <Link to="/">Home</Link>
      <Link to="/art">Art</Link>
      <Link to="/sailing">Sailing</Link>
      <Link to="/coding">Coding</Link>
      <Link to="/music">Music</Link>
      <Link to="/other">Other</Link>
    </nav>
  );
}
