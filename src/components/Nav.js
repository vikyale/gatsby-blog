// Nav.js
import React from  "react"
import  { Link }  from  "gatsby"
import  "./nav.css"

const  Nav  =  ()  => (
<nav className="nav">
<ul className="nav-list">
<li className="nav-list-item">
<Link
activeStyle={{ borderBottom:  "2px solid #fa744f"  }}
to="/"
>
Home
</Link>
</li>
<li className="nav-list-item">
<Link
activeStyle={{ borderBottom:  "2px solid #fa744f"  }}
to="/about"
>
About
</Link>
</li>
<li className="nav-list-item">
<Link
activeStyle={{ borderBottom:  "2px solid #fa744f"  }}
to="/blog"
>
Blog
</Link>
</li>
<li className="nav-list-item">
<Link
activeStyle={{ borderBottom:  "2px solid #fa744f"  }}
to="/contact"
>
Contact
</Link>
</li>
</ul>
</nav>
)


export  default Nav