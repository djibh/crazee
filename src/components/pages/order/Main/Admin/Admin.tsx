import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>
      ADMIN
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    height: 250px;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border: 1px solid ${theme.colors.greyLight};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
`;