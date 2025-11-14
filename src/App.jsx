import './App.css';
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
// import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
  //  <ThemeProvider>
    <div className='app'>
      <ThemeToggle/>
      <Clock />
      <Weather />
      <TodoList />
    </div>  
  //  </ThemeProvider>
  );
}