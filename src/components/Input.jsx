import React from 'react'
import Attachment from '../images/attachment.png'
import gallery from '../images/gallery.png'
export const Input = () => {
    return (
        <div className='input'>
            <input type="text" name="text" placeholder="Type Something" id="" />
            <div className="send">
                <img src={Attachment} alt=""/>
                <input type="file" style={{ display: "none" }} name="file" id="file" />
                <label htmlFor="file">
                    <img src={gallery} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}
