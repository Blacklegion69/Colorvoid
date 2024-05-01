import Router from "./router";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/custom/Navbar";
import { AnimatePresence } from "framer-motion";

class App extends React.Component {
  render() {
    return (
      <AnimatePresence>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <Router />
        </ThemeProvider>
      </AnimatePresence>
    );
  }
}

export default App;
