import Image from './components/Image'
import './styles.css'

const Works = () => {
  const imageUrls: string[] = [
    // 'https://res.cloudinary.com/dv8o2h11n/image/upload/v1628986298/u9wqcxckk08qas69nesy.png',
    // 'https://res.cloudinary.com/dv8o2h11n/image/upload/v1628986295/kxjtqgxwyjxnnw21hurb.png',
    // 'https://res.cloudinary.com/dv8o2h11n/image/upload/v1628986292/rvea57ftbrxjo3onyqxy.png'
  ]
  return (
    <section>
      <h1>Projects - </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {imageUrls.map((url) => (
          <Image url={url} />
        ))}
      </div>
    </section>
  )
}

export default Works
