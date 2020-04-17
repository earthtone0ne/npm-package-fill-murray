import React from 'react'

const PhilPlaceholder = ({
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

export default PhilPlaceholder