import { DataContext, ThemeProvider } from "./contexts";
import data from "./assets/app.json";
import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";

const Home = lazy(() => import("./routes/Home"));
// const Projects = lazy(() => import("./routes/Projects"));
const ComingSoon = lazy(() => import("./routes/ComingSoon"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));

export function App() {
  return (
    <ThemeProvider>
      <DataContext.Provider value={data}>
        <LocationProvider>
          <ErrorBoundary>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/projects" component={ComingSoon} />
              <Route path="/contact" component={Contact} />
              <NotFound default />
            </Router>
          </ErrorBoundary>
        </LocationProvider>
      </DataContext.Provider>
    </ThemeProvider>
  );
}
