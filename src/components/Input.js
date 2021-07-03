import React, { useState } from "react"
const Input =({ onFeedbackAdd }) =>{
  
  let [first, setfirst] = useState("")
  let [middle, setmiddle] = useState("")
  let [last, setlast] = useState("")
  let [feed, setfeed] = useState("")
  let [like, setlike] = useState(false)
  let [gen, setgen] = useState('m')

  const onSubmit=(event) =>{
    event.preventDefault()

    if (first === "" || last === "" || feed=== "" ) {
      alert("Please input all fields.");
    } 
    else 
    {
      const comment=gen+ " "+first+" "+middle+" "+last+" says "+ feed
      onFeedbackAdd({comment,like})

      setfirst("")
      setmiddle("")
      setlast("")
      setfeed("")
      setlike(false)
  }
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>First Name: </label><input
              type="text"
              value={first}
              placeholder='Enter your First Name'
              onChange={(event) => setfirst(event.target.value)}/>
        </div>
        <div className='form-control'>
        <label>Second Name: </label><input 
              type="text" 
              value={middle}
              placeholder='Enter your Second Name'
              onChange={(event) => setmiddle(event.target.value)}/> 
              </div>
        <div className='form-control'>
        <label>Last Name: </label><input 
              type="text" 
              value={last}
              placeholder='Enter your Last Name'
              onChange={(event) => setlast(event.target.value)}/> 
              </div>
        <div className='form-control form-control-check'>
        <label>Gender: </label>
              <input type="radio" 
              checked={gen === 'Mr.'}
              value='Mr.' 
              onChange={(event) => setgen(event.target.value)}/>
              <label >Male</label>
              <input type="radio" 
              checked={gen === 'Mrs.'}
              value='Mrs.'
              onChange={(event) => setgen(event.target.value)}/>
              <label >Female</label> 
              </div>
        <div className='form-control'>
        <label>Comment: </label><input
              type="text" 
              placeholder=' .....'
              value={feed} 
              onChange={(event) => setfeed(event.target.value)} />
              </div>
        
        <input type='submit' className='btn btn-block' value="Submit"/>
        </form>
  );   
  //creating new object and adding it to list
  
}
export default Input
