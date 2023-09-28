import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } = useContext(OrderContext)

  const tabsConfig = [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
    },
  ]

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectTab = (tabSelected: string) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  return (
    <AdminTabsStyled>
        <Tab 
          Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />} 
          onClick={ handleCollapseClick }
          className={ isCollapsed ? "is-active" : "" }
        />        

        { tabsConfig.map((tab, idx) => {                 
          return <Tab 
            key={idx}
            label={tab.label}
            Icon={tab.Icon} 
            onClick={ () => selectTab(tab.index) }
            className={ currentTabSelected ===  tab.index ? "is-active" : "" }
          />
        })}
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