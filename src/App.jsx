import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './components/Clock';
import Weather from './components/Weather';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* نوبار همیشه بالای صفحه */}
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/theme" element={<ThemeToggle />} />
      </Routes>
    </BrowserRouter>
  );
}