import React from 'react'

const Container = ({ children,extraClasses, }: any) => {
  return (
    <div className={`Container mx-8 h-full ${extraClasses}`}>{children}</div>
  )
}

export default Container