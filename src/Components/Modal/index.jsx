import { useState } from "react";
import Modal from "../custome-modal-popup/modal";

function ModalOpen() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)} > Open Modal </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Content</h2>
            </Modal>
        </div>
    )
}

export default ModalOpen;