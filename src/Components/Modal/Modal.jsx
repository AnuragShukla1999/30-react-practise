import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  return (
     isOpen && (
        <div>
            <div>
                <button onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>
     )
  )
}

export default Modal