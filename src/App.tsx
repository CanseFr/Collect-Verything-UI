import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {AuthProvider, useAuth} from "./context/FakeAuthContext";
import BoutiqueHome from "./pages/boutique/boutique-home/BoutiqueHome";
import BoutiqueSolutions from "./pages/boutique/boutique-solutions/BoutiqueSolutions";
import BoutiqueConsulterSolution from "./pages/boutique/boutique-consulter-solution/BoutiqueConsulterSolution";
import BoutiqueLogin from "./pages/boutique/boutique-login/BoutiqueLogin";
import BoutiquePaiement from "./pages/boutique/boutique-paiement/BoutiquePaiement";
import BoutiqueConfirmationPaiement from "./pages/boutique/boutique-confirmation-paiement/BoutiqueConfirmationPaiement";
import UserAccount from "./pages/user/user-account/UserAccount";
import BoutiqueRegister from "./pages/boutique/boutique-register/BoutiqueRegister";
import AdministrationDashboard from "./pages/administration/administration-dashboard/AdministrationDashboard";
import {AdministrationClients} from "./pages/administration/administration-clients/AdministrationClients";

const PrivateRoute = ()=>{
  const { role } = useAuth();
  if (role !== 'ROLE_ADMIN') {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

function App() {
  return (
      <>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BoutiqueHome/>}/>
              <Route path="/solution" element={<BoutiqueSolutions/>}/>
              <Route path="/prod/1" element={<BoutiqueConsulterSolution/>}/>
              <Route path="/login" element={<BoutiqueLogin/>}/>
              <Route path="/register" element={<BoutiqueRegister/>}/>
              <Route path="/paiement" element={<BoutiquePaiement/>}/>
              <Route path="/statutpaiement" element={<BoutiqueConfirmationPaiement/>}/>
              <Route path="/account" element={<UserAccount/>}/>
              <Route element={<PrivateRoute/>}>
                <Route path="/admin" element={<AdministrationDashboard/>}>
                  <Route path="clients" element={<AdministrationClients/>}/>
                </Route>
              </Route>
              <Route path="*" element={<BoutiqueHome/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </>
  );
}

export default App;
