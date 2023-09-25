import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      Admin Panel
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