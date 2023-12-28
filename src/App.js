import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { ProfilePage } from "./pages/ProfilePage";
import { BlogPost } from "./components/BlogPost";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
} 

export default App;
