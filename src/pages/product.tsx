import React from "react"
import { Router } from "@reach/router"
import Layout from "../component/Layout"
import ProductOne from "../component/product1"
import ProductTwo from "../component/product2"
import Main from "../component/main"
import {Link} from 'gatsby'

const Product = () => {
  return (
    <Layout>

      <h1>See Products</h1>
     <div>
       <Link to="/product/product1">Product 1</Link>
       <Link to="/product/product2">Product 2</Link>
       
     </div>


      <Router basepath="/product">
        <ProductOne path="/product1" />
        <ProductTwo path="/product2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default Product