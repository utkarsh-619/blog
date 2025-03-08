import HomePage from "./pages/HomePage.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import Write from "./pages/Write.jsx";
import Posts from "./pages/Posts.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Navbar from "./components/Navbar.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="posts" element={<Posts />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

export default App;
