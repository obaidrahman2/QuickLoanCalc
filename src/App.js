import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import Contact from "./Contact";

function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Welcome to SmartLoanTool</h1>
      <p>Use our free loan calculator tool to plan your finances.</p>
      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link to="/terms">Terms</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
