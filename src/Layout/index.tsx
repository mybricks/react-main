import { Layout } from "antd";
import Menu from "./menu";
import { useNavigate } from 'react-router-dom'
import styles from "./index.module.less";
import logo from "../assets/react.svg";
const { Sider, Header, Content, Footer } = Layout;
const MicroLayout = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate()
  return (
    <Layout className={styles.layout}>
      <Sider theme="light">
        <div className={styles.logo} onClick={() => navigate('/')}>
          <img src={logo} />
          <h2>react-main</h2>
        </div>
        <Menu />
      </Sider>
      <Layout>
        <Header className={styles.header}><h2>header</h2></Header>
        <Content className={styles.content}>{children}</Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default MicroLayout;
