import React, { useState } from 'react'
import Modal from 'react-modal';

function TextContiner({showAlert}) {

    const [text, setText] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const handleChange = (e) => {
        setText(e.target.value)
        
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
        showAlert("success", "Uppercase successfully")
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
        showAlert("success", "Lowrecase successfully")
    }

    const handleClear = () => {
        setText("")
        showAlert("success", "Clear successfully")
    }

    const handleRmExSpaces = () => {
        let newText =  text.split(/[ ]+/)
        setText(newText.join(" "))
        showAlert("success", "Remove Extra Spaces successfully")
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: "1px solid gray",
            width: "70vw",
            height: "70vh",
            backgroundColor: "rgb(255 255 255)",
        },

        overlay: {
            background: "rgb(41 41 41 / 32%)"
        }
    }


    // Modal.setAppElement(document.getElementById('root'))

    return (
        <>
            <div>
                <div className="form-floating container1">
                    <h1 className="heading">Text Modifier</h1>
                    <textarea onChange={handleChange} value={text} style={{ height: "20rem" }} className="form-control text-area" id="floatingTextarea2"></textarea>
                </div>
                <div className="btnsdiv">
                    <button className="button" onClick={handleUpperCase}>To Uppercase</button>
                    <button className="button" onClick={handleLowerCase}>To Lowercase</button>
                    <button className="button" onClick={handleClear}>Clear</button>
                    <button className="button" onClick={handleRmExSpaces}>Remove Extra Spaces</button>
                </div>

            </div>

            <div className="summarycont">
                <h1>Your text summary</h1>
                <div className="summary">
                    <div className="wordsdiv">
                        <span className="words">{
                            text.length > 0 ? text.split(" ").length
                                            : 0
                        }
                        </span> <span className="wordstext"> words</span>
                    </div>

                    <div className="charsdiv">
                        <span className="words">{text.length}</span> <span className="wordstext"> characters </span>
                    </div>

                    <div className="readdiv">
                        <span className="words">{
                            text.length > 0 ? (0.008 * text.split(" ").length).toFixed(4)
                                            : 0
                        }
                        </span> <span className="wordstext"> Minutes to read</span>
                    </div>
                </div>

                <div className="preview" >
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Write something"}</p>
                    <button onClick={openModal} className="modalopenbutton"><i className="fas fa-arrow-right"></i></button>

                    {


                        <div className="modalcont">
                            <Modal style={{ border: "3px solid green" }} classNam="modal" isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal">

                                <div >
                                    <div>
                                        <button className="modalcopyutton" onClick={() => {
                                            navigator.clipboard.writeText(text + "  𝕮𝖔𝖕𝖎𝖊𝖉 𝕱𝖗𝖔𝖒 𝕿𝖊𝖝𝖙𝕸𝖔𝖉𝖎")
                                            setIsCopied(true)
                                            setInterval(() => {
                                                setIsCopied(false)
                                            }, 3000);
                                        }} >
                                            Copy Text
                                        </button>
                                        {
                                            isCopied ? <i class="fas fa-check-circle"></i>
                                                : null
                                        }
                                        <button className="modalclosebutton" onClick={() => setIsOpen(false)} ><i className="fas fa-times"></i></button>
                                        <h1>Preview</h1>
                                    </div>
                                    <div>
                                        {text}
                                    </div>
                                </div>


                            </Modal>
                        </div>

                    }
                   
                </div>
            </div>
        </>
    )
}

export default TextContiner
