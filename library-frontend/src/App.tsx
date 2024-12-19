import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
