import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./context/FakeAuthContext";
import BoutiqueHome from "./pages/boutique/boutique-home/BoutiqueHome";
import BoutiqueSolutions from "./pages/boutique/boutique-solutions/BoutiqueSolutions";
import BoutiqueConsulterSolution from "./pages/boutique/boutique-consulter-solution/BoutiqueConsulterSolution";
import BoutiqueLogin from "./pages/boutique/boutique-login/BoutiqueLogin";
import BoutiquePaiement from "./pages/boutique/boutique-paiement/BoutiquePaiement";
import BoutiqueConfirmationPaiement from "./pages/boutique/boutique-confirmation-paiement/BoutiqueConfirmationPaiement";
import UserAccount from "./pages/user/user-account/UserAccount";

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
              <Route path="/paiement" element={<BoutiquePaiement/>}/>
              <Route path="/statutpaiement" element={<BoutiqueConfirmationPaiement/>}/>
              <Route path="/account" element={<UserAccount/>}/>
              <Route path="*" element={<BoutiqueHome/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </>
  );
}

export default App;
