import React from 'react'

import './app.css'

const PhilPlaceholder = ({
  text,
  className,
  imgHeight,
  imgWidth,
  altText="",
}) => {
  const getImageSrc = () => `https://www.fillmurray.com/${imgWidth}/${imgHeight}`
  console.log('heyyyy im phil', text, className, imgHeight)
  return (
    <div className={className} >
      {text && <p>{text}</p>}
      <img src={getImageSrc()} alt={altText}/>
    </div>
  )
}

export default PhilPlaceholder