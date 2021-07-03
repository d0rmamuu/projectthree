import React from "react";
import Button from './Button'

const Header=({title,changeFormState,showInputForm})=> {
  
  return (
    <div className='header'>

        <h2 >{title}</h2>
        <a className='' href="https://d0rmamuu.github.io/super-octo-system/aboutme_webpage/aboutme.html">About Me</a>
        <a className='' href="https://d0rmamuu.github.io/super-octo-system/books_webpage/index.html">Books</a>
        
        <Button text={showInputForm?'-':'+'} onClick={changeFormState} />
    </div>
  )
}
Header.defaultProps={
	title:" F E E D B A C K ",
      }
export default Header