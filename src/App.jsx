import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;