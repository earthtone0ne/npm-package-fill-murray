# npm-package-fill-murray
POC for creating an npm package from a React component

Provides a `<BillPlaceholder />` component with the following props:

```
  text // optional text preceding the placeholder image 
  className // optional class names to be applied to the wrapper component
  imgHeight // numerical value for image height
  imgWidth  // numerical value for image width
  altText="" // alt text value for the image; default is a blank string
```

Example: 

```
import React from 'react'
import BillPlaceholder from 'npm-package-fill-murray'

const MyPlaceholderWrapper = ({height, width}) => (
    <BillPlaceholder 
        text="Hi, this is a picture of Bill Murray!"
        className="bill-image"
        imgHeight={height}
        imgWidth={width}
        altText="Bill Murray for some reason"
    />
)
export default MyPlaceholderWrapper
```

