// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [tabKey, setTabKey] = useState(1);
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
