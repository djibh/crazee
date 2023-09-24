import React, { SetStateAction, createContext } from "react";

type OrderContextType = {
    isModeAdmin: boolean,
    setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderContextInit = {
    isModeAdmin : false,
    setIsModeAdmin : () => {}
}

const OrderContext = createContext<OrderContextType>(OrderContextInit)

export default OrderContext
