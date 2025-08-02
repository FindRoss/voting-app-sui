import React from "react";
import { useTheme } from "./providers/theme/ThemeContext";
import ProposalView from "./views/ProposalView";
import WalletView from "./views/WalletView";
import Navbar from "./components/Navbar";
import { useNavigation } from "./providers/navigation/NavigationContext";

const Pages = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case "/":
      return <ProposalView />
    case "/wallet":
      return <WalletView />
    default:
      return <div className="text-center">Page not found.</div>
  }

};

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="max-w-screen-xl m-auto px-4 sm:px-6 lg:px-8 pt-16">
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default App;
