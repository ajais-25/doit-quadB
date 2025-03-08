import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import TaskBoard from "./pages/TaskBoard";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<ProtectedRoute element={<TaskBoard />} />}
          />
        </Route>
        <Route
          path="*"
          element={
            <div className="h-screen w-screen flex justify-center items-center">
              404 Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
