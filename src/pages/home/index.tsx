import styles from "./index.module.less";
const Home = () => {
  return (
    <div className={styles.home}>
      <h1>React + qiankun主应用案例项目</h1>
      <h3>
        macro-app1, macro-app2子应用采用静态配置加载
        <a
          target="_blank"
          href="https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles"
        >
          registerMicroApps
        </a>
      </h3>
      <span>参考/src/pages/staticContainer实现</span>
      <h3>
        dynamic-app1, dynamic-app2子应用采用动态加载
        <a
          target="_blank"
          href="https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration"
        >
          loadMicroApp
        </a>
      </h3>
      <span>参考/src/pages/dynamicContainer实现</span>
      <h3>更多社区解决方案: </h3>
      <a href="https://umijs.org/docs/max/micro-frontend#masteroptions" target="_blank" rel="noopener noreferrer">Umijs微前端接入</a>
    </div>
  );
};

export default Home;
