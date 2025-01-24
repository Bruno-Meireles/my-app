import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
