import { styled } from 'styled-components';
import Profile from './Profile';

type NavbarRightSideProps = {
    username: string
}

export default function NavbarRightSide({ username }: NavbarRightSideProps) {
  return <NavbarRightSideStyled className="right-side">
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile username={ username }/>
        </NavbarRightSideStyled>
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    h1 {
      font-size: 1rem;
      margin: 0;
      color: black;
    }

    /* .admin-button {
        background: lightblue;
    } */
`;