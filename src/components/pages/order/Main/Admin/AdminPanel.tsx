import styled from "styled-components";
import { theme } from "../../../../../theme";
import { getTabSelected, tabsConfig } from "./tabsConfig";
import { ReactElement, useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)

  const tabs = tabsConfig
  const selectedTab = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>
      { selectedTab && selectedTab.label }
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    box-sizing: border-box;
    color: black;
    background: white;
    height: 250px;
    border: 2px solid ${theme.colors.greyLight};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};   
`;