// Layout.js
import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import Nav from "./Nav"

import "./layout.css"



const Layout = ({ children }) => (
  <div className="layout">
   <Helmet>
                <meta charSet="utf-8" />
                <title>Victoria</title>
            </Helmet>
    <Nav />
    <main className="main">{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout