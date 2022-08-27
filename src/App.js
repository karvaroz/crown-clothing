import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";

import Home from "./routes/home/Home";
import SignIn from "./routes/signIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
