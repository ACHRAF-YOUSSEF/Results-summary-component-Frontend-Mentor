import './App.css';

import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div 
        className='
          md:w-screen
          md:h-screen
          p-4
          bg-grey
      '>
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
