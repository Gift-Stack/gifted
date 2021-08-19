import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'

function App() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 2500)
  }, [])
  return (
    <div
      className="App"
      style={{
        display: `${!show ? 'flex' : 'block'}`,
        justifyContent: `${!show && 'center'}`,
        alignItems: `${!show && 'center'}`,
        minHeight: '100vh'
      }}
    >
      {!show ? (
        <motion.div
          style={{
            background: '#fff',
            borderRadius: 30,
            width: 100,
            height: 100
          }}
          animate={{
            scale: [1, 2, 2, 1, 100],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            // loop: Infinity,
            repeatDelay: 1
          }}
        />
      ) : (
        <>
          <Navbar />
          <Body />
        </>
      )}
    </div>
  )
}

export default App
