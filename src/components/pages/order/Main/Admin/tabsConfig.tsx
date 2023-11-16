import { AiOutlinePlus }  from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import AddForm from './AdminPanel/AddForm'
import EditForm from './AdminPanel/EditForm'

export const tabsConfig = [
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus/>,
      Content: <AddForm/>
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline/>,
      Content: <EditForm/>
    },
  ]

export const getTabSelected = (tabs: Tab[], currentTabSelected: string) => {
  if (tabs !== undefined && currentTabSelected !== undefined) {
    return tabs.find((tab: Tab) => tab.index === currentTabSelected)
  }
}