/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
        
  - Home untuk pasien yang sudah login
  - Dashboard untuk admin & superadmin yang sudah login
*/

import Login from "pages/Login";
import Register from "pages/Register";

export const APP_ROUTE = [
  {
    name: "Register",
    path: "/register",
    exact: true,
    component: Register,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
];
