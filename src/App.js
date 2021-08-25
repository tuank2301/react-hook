import Navbar from './components/Navbar';
import './App.css';
import Todos from './components/Todos';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TodoContextProvider from './contexts/TodoContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className='app'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
