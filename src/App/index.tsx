import { FC, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";

interface AppProps {
  serverData?: unknown;
}

export const App: FC<AppProps> = ({ serverData = null }) => {
  useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, [])

  const data = isFirstRender.current ? serverData : undefined;
  return (
    <Routes>
      {routes.map((route) => {
        const { path, component: C } = route;
        return (
          <Route
            key={path}
            path={path}
            element={
               <C serverData={data} />
            }
          />
        );
      })}
    </Routes>
  )
};