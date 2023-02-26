import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes(routes);
  return (
    // <Routes>
    //   {routes.map(({ component, path, ...rest }) => {
    //     return <Route key={path} path={path} element={component} />;
    //   })}

    // </Routes>
    <div>{element}</div>
  );
}

export default App;
