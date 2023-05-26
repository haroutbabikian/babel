import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./Components/MainPage";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <MainPage />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
