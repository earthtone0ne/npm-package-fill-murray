import React from 'react'

// import './app.css'

const BillPlaceholder = ({
  text,
  className,
  imgHeight,
  imgWidth,
  altText="",
}) => {
  const getImageSrc = () => `https://www.fillmurray.com/${imgWidth}/${imgHeight}`
  return (
    <div className={className} >
      {text && <p>{text}</p>}
      <img src={getImageSrc()} alt={altText}/>
    </div>
  )
}

export default BillPlaceholder