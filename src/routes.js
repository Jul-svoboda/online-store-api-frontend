import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import ItemPage from "./pages/ItemPage"
import Auth from "./pages/Auth"

export const authRoutes = [  //для авторизованных пользователей
    {
        path: ADMIN_ROUTE, //url ссылка для связи
        Component: Admin //какой компонент будет вызван
    },
    {
        path: BASKET_ROUTE, //url ссылка для связи
        Component: Basket //какой компонент будет вызван
    },
] 



export const publicRoutes = [  //публичные страницы
    {
        path: LOGIN_ROUTE, //url ссылка для связи
        Component: Auth //какой компонент будет вызван
    },
    {
        path: REGISTRATION_ROUTE, //url ссылка для связи
        Component: Auth //какой компонент будет вызван
    },
    {
        path: SHOP_ROUTE, //url ссылка для связи
        Component: Shop //какой компонент будет вызван
    },
    {
        path: ITEM_ROUTE + "/:id", //url ссылка для связи
        Component: ItemPage //какой компонент будет вызван
    },
] 
