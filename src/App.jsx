import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl font-bold">Welcome to Creed Web Clone</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
