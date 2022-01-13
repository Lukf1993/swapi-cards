import React  from 'react';
import { QueryClientProvider, QueryClient } from "react-query";
import CardPage from "./page/Card.page";


const App = () => {
    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <CardPage />
      </QueryClientProvider>
      )
}

export default App;
