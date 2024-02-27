import { Routes, Route } from "react-router-dom";
import App1 from "./sub-pages/app1";
import App2 from './sub-pages/app2'

const Empty = () => {
  return <div>sub-app</div>;
};

const SubComponent = () => {
  return (
    <Routes>
      <Route path="/app1" element={<App1 />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/*" element={<Empty />}></Route>
    </Routes>
  );
};

export default SubComponent;
