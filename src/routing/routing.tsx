import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { Skills } from "../skill";
import LayoutDesign from "../app/layout";
import { Tags } from "../tags/modify-tag";
import { Employee } from "../employee/modify-employee";

export const AppRouting: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navigate to={RoutingConstraints.LOGIN} />} /> */}

        <Route
          path="/"
          element={
            <>
              <LayoutDesign />
              {/* <Employee/> */}
            </>
          }
        />

        {/* </Route> */}
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};