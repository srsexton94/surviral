import React from 'react'

export const Email = () => {
  function closeModal() {
    const email = document.getElementById('email')
    if (email) email.style.display = "none"
  }
  
  return (
    <section onClick={closeModal} id="email" className="Email">
      <div>
        <p className="glow">Click anywhere to close</p>
      </div>
    </section>
  )
}
