import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import "./SignupFormModal.css"

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <button className="navbar-signup" onClick={() => setShowModal(true)}>Create Account</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <SignupForm />
            </Modal>
      )}
    </>
    )
}

export default SignupFormModal