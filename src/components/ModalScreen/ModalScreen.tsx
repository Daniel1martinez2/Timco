import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom';
import styles from './ModalScreen.module.css';

interface ModalScreenInterface{
  setShowModal:any ;
  children: React.ReactNode;
}; 

// ACTUAL COMPONENT
const ModalScreen:React.FC<ModalScreenInterface>= ({setShowModal, children}) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const backdrop = document.getElementById("backdrop-root") as HTMLElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div 
          onClick={() => setShowModal(false)} 
          className={styles['modal-wrapper']}
        >
        </div>
        , backdrop)}
      {ReactDOM.createPortal(<div className={styles['container']}>{children}</div>, modalRoot)}
    </Fragment>
  )
}

export default ModalScreen
