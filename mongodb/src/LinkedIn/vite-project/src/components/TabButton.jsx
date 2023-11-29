import React from 'react'

function TabButton({children, onSelect}) {
  console.log('i am from tab button')
  return (
    <button onClick={onSelect}> {children}</button>
  )
}

export default TabButton