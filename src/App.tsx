// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Travel from "./pages/Travel/Travel";
import Shelf from "./pages/Shelf/Shelf";
import Writing from "./pages/Writing/Writing";
import Contact from "./pages/Contact/Contact";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Keep the existing homepage independent of the shared layout. */}
        <Route path="/" element={<Home />} />

        {/* New pages will use the shared layout. */}
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/shelf" element={<Shelf />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;