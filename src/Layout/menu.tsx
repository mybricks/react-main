import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { staticApps, dynamicApps, subApps } from "../microApps";

const { Item } = Menu;

export default () => {
  const { pathname } = useLocation();
  const renderMenu = (menu) => {
    return (menu || []).map((item) => {
      return (
        <Item title={item.title} key={item.activeRule}>
          <NavLink to={item.activeRule}>
            <span>{item.title}</span>
          </NavLink>
        </Item>
      );
    });
  };
  return (
    <Menu mode="vertical" selectedKeys={[pathname]}>
      {renderMenu([{ title: 'home', activeRule: '/' }, ...staticApps, ...dynamicApps, ...subApps])}
    </Menu>
  );
};
