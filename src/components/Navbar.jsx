import { Link } from 'react-router-dom';
import './Navbar.css'; // اگه میخوای استایل داشته باشه

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Clock</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <li><Link to="/theme">ThemeToggle</Link></li>
      </ul>
    </nav>
  );
}