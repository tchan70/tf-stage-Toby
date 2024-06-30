import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/orderPage";
import HomePage from "./pages/homePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;