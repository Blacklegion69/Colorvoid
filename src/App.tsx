import Router from "./router";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/custom/Navbar";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Router />
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
