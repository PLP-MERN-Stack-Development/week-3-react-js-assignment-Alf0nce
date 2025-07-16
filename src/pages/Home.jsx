import Card from '../components/Card';
import Button from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome to My React App</h1>
        <Button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>
      
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>This is a demo application showcasing React with Tailwind CSS.</p>
        <p>Features include:</p>
        <ul className="list-disc pl-6">
          <li>Responsive design</li>
          <li>Dark/light mode toggle</li>
          <li>Task management</li>
          <li>API data fetching</li>
          <li>Reusable components</li>
        </ul>
      </div>
    </Card>
  );
};

export default Home;