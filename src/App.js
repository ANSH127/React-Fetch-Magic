import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage';
import SuperHerosPage from './components/SuperHerosPage';
import RQSuperHerosPage from './components/RQSuperHerosPage'; 
import Navbar from './composables/Navbar';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()




function App() {
  return (
    <>

    <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/super-heros" element={<SuperHerosPage />} />
        <Route path="/rq-super-heros" element={<RQSuperHerosPage />} />
      </Routes>





    </Router>
    </QueryClientProvider>
    </>
  );
}

export default App;
