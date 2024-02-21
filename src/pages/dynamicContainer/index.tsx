import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { MicroApp, loadMicroApp } from "qiankun";
import { dynamicApps } from "../../microApps";
import { Spin } from "antd";

const DynamicContainer = () => {
  const { pathname } = useLocation();
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const app = dynamicApps.find((app) => app.activeRule === pathname);
    let currentApp: MicroApp;
    if (app && container.current) {
      currentApp = loadMicroApp(
        { ...app, container: container.current },
        {
          sandbox: {
            strictStyleIsolation: true
          }
        },
        {
          beforeLoad() {
            setLoading(true);
            return Promise.resolve();
          },
          afterMount() {
            setLoading(false);
            return Promise.resolve();
          },
        }
      );
    }
    return () => {
      currentApp?.unmount();
    };
  }, [pathname]);
  return (
    <Spin spinning={loading}>
      <div ref={container}></div>
    </Spin>
  );
};

export default DynamicContainer;
