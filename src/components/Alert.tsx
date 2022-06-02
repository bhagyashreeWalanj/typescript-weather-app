import React, { useState, useEffect } from 'react'

export const Alert = () => {
  const [showError, setShowError] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowError(false)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <>
      {showError ? (
        <div
          className="bg-blue-lighter border-l-4 border-orange-500 text-white p-4"
          role="alert"
        >
          <p className="font-bold text-red-500">No Data Found</p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
