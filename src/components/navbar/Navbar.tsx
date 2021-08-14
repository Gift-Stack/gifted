import { useState } from 'react'
import './styles.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [x, setX] = useState('')

  const handleToggle = (prev: boolean) => {
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
      <ul style={{ visibility: `${!toggle ? 'hidden' : 'visible'}` }}>
        <li>
          <a href="somewhere.com">Works</a>
        </li>
        <li>
          <a href="somewhere.com">Resume</a>
        </li>
        <li>
          <a href="somewhere.com">Contacts</a>
        </li>
      </ul>
      <div
        className={`menu-icon d-lg-none js-menu-open menu-open-${x}`}
        onClick={() => handleToggle(toggle)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  )
}

export default Navbar
