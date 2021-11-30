import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabsNav from "../BottomTabsNav/BottomTabsNav";
import AboutStackNav from "../StackNav/AboutStackNav";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeDrawer"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="HomeDrawer" component={BottomTabsNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
