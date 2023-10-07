import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route element={<HomeScreen />} path="/"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
