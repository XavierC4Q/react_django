import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link to='/login'>Login</Link>
            {" "}
            <Link to='/register'>Register</Link>
            {" "}
            <Link to='/'>Home</Link>
            {" "}
        </div>
    )
}