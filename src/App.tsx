import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { Footer } from "@components/Footer/Footer";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  return (
    <>
      <Toolbar />
      <div className="main-wrapper">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
