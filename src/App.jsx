import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./privacy_policy.jsx";
import TermsAndConditions from "./termsAndConditions.jsx";
import AccountDeletionRequest from "./accountDeletionRequest.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/AccountDeletionRequest" element={<AccountDeletionRequest />} />
      </Routes>
    </Router>
  );
}

export default App;