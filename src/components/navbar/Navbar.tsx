import React, { useState } from 'react'
import './styles.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [x, setX] = useState('')

  const handleToggle = (prev: boolean, e: React.MouseEvent) => {
    setToggle(!prev)
    if (toggle === true) {
      setX('')
    } else if (prev === false) {
      setX('x')
    }
  }
  return (
    <nav>
      <div className="logo">Gift Opia</div>
      {toggle && (
        <ul>
          <li>
            <a href="somewhere.com">Home</a>
          </li>
          <li>
            <a href="somewhere.com">Works</a>
          </li>
          <li>
            <a href="somewhere.com">Contacts</a>
          </li>
        </ul>
      )}
      <div
        className={`menu-icon d-lg-none js-menu-open menu-open-${x}`}
        onClick={(e) => handleToggle(toggle, e)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  )
}

export default Navbar
