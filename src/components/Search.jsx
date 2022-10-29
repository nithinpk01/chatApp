import React from 'react'
import profile from '../images/profile.png'

export const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" name="" placeholder='Find user' id="" />
            </div>
            <div className='userChat'>
                <img src={profile} alt="" />
                <div className="userChatInfo">
                    <span>Nithin PK</span>
                </div>
            </div>
        </div>
    )
}
