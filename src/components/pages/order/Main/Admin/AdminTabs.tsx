import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import React, { SetStateAction } from "react";
import { theme } from "../../../../../theme";

type AdminTabsProps = {
  isCollapsed: boolean,
  setIsCollapsed: React.Dispatch<SetStateAction<boolean>>
}

export default function AdminTabs({ isCollapsed, setIsCollapsed }: AdminTabsProps) {

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <AdminTabsStyled>
        <Tab 
          Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
          onClick={ handleClick }
          className={ isCollapsed ? "is-active" : "" }
        />
        <Tab 
          label="Ajouter un produit"
          Icon={<AiOutlinePlus />} 
          onClick={ handleClick }
          className={ isCollapsed ? "is-active" : "" }
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`

    display: flex;
    padding: 0 20px;
    gap: 1px;

    .is-active {
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-color: ${theme.colors.background_dark};
    }
`;