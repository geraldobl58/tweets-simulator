import { Modal } from '@material-ui/core';

import './styles.scss';

export default function ModalContainer({ isOpenModal, closeModal, children }) {
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  )
}