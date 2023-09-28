import { useEffect } from "react";
import { registerMicroApps, start } from "qiankun";
import { staticApps } from "../../microApps";

const StaticContainer = () => {
  useEffect(() => {
    registerMicroApps(staticApps);
    start({
      sandbox: {
        experimentalStyleIsolation: true,
      },
    });
  }, []);
  return <div id="container"></div>;
};
export default StaticContainer;
