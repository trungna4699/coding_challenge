import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Card from 'react-bootstrap/Card';
import StarRating from './starRating';
import MainFunction from './mainFunction';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>PartCheck OEM Suppliers</h1>

      <QueryClientProvider client={queryClient}>
        <MainFunction />
      </QueryClientProvider>

    </div>
  );
}

export default App;
