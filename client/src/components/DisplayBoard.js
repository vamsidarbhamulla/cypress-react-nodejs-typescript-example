import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    return(
        <div className="display-board">
            <h4 data-testid="h4-userscreated">Users Created</h4>
            <div className="number" data-testid="usercount">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning" data-testid="btn-getallusers">Get all Users</button>
            </div>
        </div>
    )
}
