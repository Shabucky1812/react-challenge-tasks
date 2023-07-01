import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedIn ? (
            <button onClick={props.handleClick}>Log In</button>
        ) : (
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="username" name="password"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="password" name="password"></input>
                <button onClick={props.handleClick}>Submit</button>
            </form>
        )
    )
}

export default NavBarChild