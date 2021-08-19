interface urlType {
  url: string
}

const Image = ({ url }: urlType) => {
  return (
    <div style={{ borderRadius: 10, height: 500 }}>
      <img src={url} alt="Some work" width={500} />
    </div>
  )
}

export default Image
