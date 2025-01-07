import { useState } from 'react'

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)
  return (
    <div
      className={`item ${isOpen && 'open'}`}
      onClick={handleToggle}
    >
      <p className='number'>{num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && (
        <div className='content-box'>
          <ul>{text}</ul>
        </div>
      )}
    </div>
  )
}

export default AccordionItem
