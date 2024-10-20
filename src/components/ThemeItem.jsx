import React from 'react'

const ThemeItem = ({color, img, changeColor, closeSwitcher}) => {
  return (
    <img src={img} alt="color__img" className="theme__img" onClick={()=>{ changeColor(color); closeSwitcher(); }}/>
  )
}

export default ThemeItem
