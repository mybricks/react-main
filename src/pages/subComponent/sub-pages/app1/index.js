import React, { useEffect, useRef, useState } from "react";
import { loadMicroApp } from "qiankun";

const pageName = "drag"
const pageId = "537270627328069"

const AppContainer = () => {
    const container = useRef(null);
    useEffect(() => {
        const app = {
            name: pageName,
            entry: `./${pageId}.html`,
        }
        let currentApp;
        if (app && container.current) {
            console.log(container)
            currentApp = loadMicroApp(
                { ...app, container: container.current },
                {
                    sandbox: {
                        experimentalStyleIsolation: true
                    }
                },
                {
                    beforeLoad() {
                        return Promise.resolve();
                    },
                    afterMount() {
                        return Promise.resolve();
                    },
                }
            );
        }
        return () => {
            currentApp?.unmount();
        };
    }, []);

    return React.createElement('div', { ref: container });
};

export default AppContainer;