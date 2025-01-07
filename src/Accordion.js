import AccordionItem from './AccordionItem'

export default function Accordion({ data }) {
  return (
    <div className='accordion'>
      {data.map((faq, index) => (
        <AccordionItem
          num={(index + 1 + '').padStart(2, '0')}
          title={faq.title}
          text={faq.text}
          key={faq.title}
        />
      ))}
    </div>
  )
}
