import './App.css';
import Row from './components/Row';
import categories from './api';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Destaques */}
      {/* Em Alta */}
      {categories.map((category) => {
        return (
          <Row 
            key={category.name} 
            title={category.title} 
            path={category.path}
          />)
      })}
    </div>
  );
}

export default App;
