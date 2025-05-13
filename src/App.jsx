import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from "./context/AuthProvider";

import ProtectedRoute from "./routes/ProtectedRoute";
import { Login } from "./pages/Login";
import queryClient from "./utils/queryClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                       <About />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>

        </AuthProvider>

      </QueryClientProvider>
    </>
  );
};

export default App;
