import { styled } from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

type Username = {
  username: string,
}

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const displayToastNotification = () => {
    if (!isModeAdmin){
        toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return <NavbarRightSideStyled className="right-side">
            <ToggleButton 
              isChecked={isModeAdmin}
              labelIfChecked='Désactiver le mode admin' 
              labelIfUnchecked='Activer le mode admin'
              onToggle={displayToastNotification}
            />
            <Profile />
            <ToastAdmin />
        </NavbarRightSideStyled>
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    gap: 50px;

    h1 {
      font-size: 1rem;
      margin: 0;
      color: black;
    }
`;