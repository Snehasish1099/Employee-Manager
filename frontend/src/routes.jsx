import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
// import LandingPage from "./components/HomeSection/LandingPage";
import AuthenticationMain from "./containers/Authentication/AuthIndex";
import AdminMain from "./containers/Admin";
import AdminDashboard from "./containers/Admin/AdminDashboard";
import AdminEmployeeIndex from "./containers/Admin/AdminEmployeeIndex";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<AuthenticationMain />} />
            <Route path="login" element={<AuthenticationMain />} />
            
            <Route path="admin" element={<AdminMain />} >
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="employees" element={<AdminEmployeeIndex />} />
            </Route>
        </Route>
    )
);

export default router