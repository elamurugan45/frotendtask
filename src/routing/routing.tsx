import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Tags } from "../tags/modify-tag";
import { Skills } from "../skills/modify-skill";
import { Employee } from "../employee/modify-employee";
import LayoutDesign from "../app/layout";
import { Dashboard } from "../dashboard";
import LoginForm from "../login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { Store, initSession } from "../session/session-model";
import { Spin } from "antd";
import { RoutingConstraints } from "./constraints";

export const AppRouting: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, hasSession } = useSelector(
    (state: Store) => state.session
  );

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      dispatch(initSession() as any);
    });
  }, [dispatch]);

  if (!hasSession) {
    return (
      <div className="loadingSpinner">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navigate to={RoutingConstraints.LOGIN} />} /> */}
        <Route
          path={RoutingConstraints.LOGIN}
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginForm />
          }
        />
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
