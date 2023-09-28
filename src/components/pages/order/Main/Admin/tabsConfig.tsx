import { ReactElement } from 'react'
import { AiOutlinePlus }  from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'

export const tabsConfig = [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus/>,
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline/>,
    },
  ]

export const getTabSelected = (tabs: Tab[], currentTabSelected: string) => {
  if (tabs !== undefined && currentTabSelected !== undefined) {
    return tabs.find((tab: Tab) => tab.index === currentTabSelected)
  }
}
  
