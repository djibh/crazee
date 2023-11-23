import React, { FormEventHandler, createContext } from "react";
import { Menu } from "../fakeData/fakeMenu";

type OrderContextType = {
    isModeAdmin: boolean,
    setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    currentTabSelected: string,
    setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>,
    menu: Array<Menu>,
    handleAddProduct: any,
    handleProductDelete: any,
    resetMenu: any
}

const OrderContextInit = {
    isModeAdmin : false,
    setIsModeAdmin : () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    currentTabSelected : "",
    setCurrentTabSelected : () => "",
    menu: [],
    handleAddProduct: () => {},
    handleProductDelete: () => {},
    resetMenu: () => {},
}

const OrderContext = createContext<OrderContextType>(OrderContextInit)

export default OrderContext
