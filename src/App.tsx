import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import EmploymentHistory from "./pages/EmploymentHistory";
import Coding from "./pages/Coding";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="education" element={<Education />} />
          <Route path="employment-history" element={<EmploymentHistory />} />
          <Route
            path="coding"
            element={<Coding key={0} name={""} link={""} desc={""} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
