import React, { createContext } from "react";

type OrderContextType = {
    isModeAdmin: boolean,
    setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
    isCollapsed: boolean,
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    currentTabSelected: string,
    setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>,
}

const OrderContextInit = {
    isModeAdmin : false,
    setIsModeAdmin : () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    currentTabSelected : "",
    setCurrentTabSelected : () => "",
}

const OrderContext = createContext<OrderContextType>(OrderContextInit)

export default OrderContext
