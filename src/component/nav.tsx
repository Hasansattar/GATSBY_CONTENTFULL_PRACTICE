import React from "react"
import {Link} from 'gatsby'
import Style from './nav.module.css'

export default function Navbar() {
  return (
  
  <div className={Style.Navbar}>
      <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/product">Product</Link>
      </div>)
}
