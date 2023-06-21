import React from 'react'

const Book = ({ title, author, pages, img }) => {
 return (
  <div>
   <h2> {title} </h2>
   <h4> {author} </h4>
   <p> {pages} </p>
 </div>
)
}
const Books = () => {
  return (
   <div>
    <Book title="Snake under the green grass" author="Nnwonko" pages= {150} />
    <Book  title="Moon and Star" author="Doe" pages= {250}/>
    <Book  title="Rich Dad" author="John" pages= {255} />
    </div>
  )
}

export default Books;