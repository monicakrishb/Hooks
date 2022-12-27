import React from 'react'

function Button({handleClick,children}) {
    console.log('Rendering Button-',children);
  return (
    <div>
        <Button onClick={handleClick}>
            {children}
        </Button>
    </div>
  )
}
export default Button
