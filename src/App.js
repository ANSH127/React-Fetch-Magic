import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage';
import SuperHerosPage from './components/SuperHerosPage';
import RQSuperHerosPage from './components/RQSuperHerosPage'; 
import RQSuperHeroDetail from './components/RQSuperHeroDetail';
import RQParallelQuaries from './components/RQParallelQuaries';
import RQDynamicParallelQuaries from './components/RQDynamicParallelQuaries';
import Navbar from './composables/Navbar';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


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
        <Route path="/rq-super-heros/:id" element={<RQSuperHeroDetail />} />
        <Route path="/rq-parallel" element={<RQParallelQuaries />} />
        <Route path="/rq-dynamic-parallel" element={<RQDynamicParallelQuaries idlist={[1,3]} />} />

      </Routes>





    </Router>
    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
    </>
  );
}

export default App;
