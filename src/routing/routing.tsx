import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Tags } from "../tags/modify-tag";
import { Skills } from "../skills/modify-skill";
import { Employee } from "../employee/modify-employee";
import LayoutDesign from "../app/layout";
import { Dashboard } from "../dashboard";

export const AppRouting: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDesign />}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/tag" element={<Tags />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};