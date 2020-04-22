import Modal from 'react-modal'
import React from 'react'

const HelpModal = ({ modalVisible, toggleVisbility }) => (
    <Modal
        isOpen={modalVisible}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="helpModal"
        onRequestClose={toggleVisbility}
    >
        <h1> FAQ </h1>

        <h2>What does this website do?</h2>

        <p>Shorten URLs and attach self-destructing messages</p>

        <p>After the first visit of the shorted URL, the message becomes visible and destroys itself</p>

        <p>Every other visit redirects to the original URL</p>

        <h2>Why?</h2>

        <p>By hiding secret messages behind URLs, it is possible to deny the sending of that message afterward</p>

        <p>From an outside perspective, it's just a shortened URL</p>
    </Modal>
)

export default HelpModal;
