import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MyApp
        </Link>
        <div className="flex gap-4">
          <Link to="/"><Button variant="secondary">Home</Button></Link>
          <Link to="/tasks"><Button variant="secondary">Tasks</Button></Link>
          <Link to="/api-data"><Button variant="secondary">API Data</Button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;