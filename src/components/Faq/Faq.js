import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "How does this website save our time?",
    content: `Study-Hall have movies/series related to subject and also provides book at the same page. you can get both things at same page by just scrolling up and down.`,
  },
  {
    title: "Is it contain UPSE related Subjects?",
    content: `yes, it contains. you can find "History and Political science"`,
  },
  
  
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">FAQ</h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
