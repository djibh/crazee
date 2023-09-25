import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>AdminPanel</AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    color: black;
    height: 250px;
    border: 1px solid ${theme.colors.greyLight};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;