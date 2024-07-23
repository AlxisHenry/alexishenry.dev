import { DataProvider, LocaleProvider, ThemeProvider } from "./contexts";
import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";

const Home = lazy(() => import("./routes/Home"));
const Projects = lazy(() => import("./routes/Projects"));
const Project = lazy(() => import("./routes/Project"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));

export function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <DataProvider>
          <LocationProvider>
            <ErrorBoundary>
              <Router>
                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                {/* <Route path="/projects/:slug" component={Project} /> */}
                <Route path="/contact" component={Contact} />
                <NotFound default />
              </Router>
            </ErrorBoundary>
          </LocationProvider>
        </DataProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
