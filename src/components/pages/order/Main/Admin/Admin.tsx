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
    background: rgba(255, 192, 203, 0.85);
    height: 250px;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;