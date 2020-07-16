import React from 'react'
import './Nav.css'
import { useEffect } from 'react'
import { useState } from 'react'

function Nav() {

    const [show,handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return () =>{
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" 
            alt="netflix logo" 
            className="nav__logo"/>

            <img 
            src="/images/user.png" 
            alt="nav avatar" 
            className="nav__avatar"/>
        </div>
    )
}

export default Nav
