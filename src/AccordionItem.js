const AccordionItem = ({ num, title, children, curOpen, handleToggle }) => {
  const isOpen = curOpen === num

  return (
    <div
      className={`item ${isOpen && 'open'}`}
      onClick={() => handleToggle(num)}
    >
      <p className='number'>{(num + 1 + '').padStart(2, '0')}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && (
        <div className='content-box'>
          <ul>{children}</ul>
        </div>
      )}
    </div>
  )
}

export default AccordionItem
