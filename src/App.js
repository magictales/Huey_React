import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme, lightTheme } from "theme";
import routes from "./routes";
import PrivateRoute from "./routes/Private";
import PublicRoute from "./routes/Public";

const base = process.env.PUBLIC_URL || "/";

function App() {
  const appData = useSelector((state) => state?.app ?? {});

  return (
    <ThemeProvider theme={appData?.isDark ? darkTheme : lightTheme}>
      <Router basename={base}>
        {routes.map((route) => {
          if (route.auth) {
            return <PrivateRoute key={route.path} {...route} />;
          }
          return <PublicRoute key={route.path} {...route} />;
        })}
      </Router>
    </ThemeProvider>
  );
}

export default App;
