
import Header from "./components/Header";
import Input from "./components/Input";
import Footer from "./components/Footer";
//import useLocalStorage from "./components/useLocalStorage";
import Feedbacks from "./components/Feedbacks"
import { useState,useEffect } from 'react'
import axios from 'axios'

const App=()=> {
	const [showInput,setShowInput]=useState(false)	
  	const [feedbacks,setfeedbacks]=useState([])
	//delete feedback(just filtering the already present arrray)
const deleteFeedback=(id) =>{
  axios.delete(`/delete/${id}`)
	setfeedbacks(feedbacks.filter((feedback) => feedback._id !== id))
 }

   useEffect(() => {
   axios.get('/api/comments')
    .then(res => {
    setfeedbacks(res.data)
      
    })
  
},[])

 	//toggle like(DC)
const toggleLike=(feedback,id)=>{
  axios.put('/like',{
    _id:feedback._id,
    like:feedback.like
  })
	setfeedbacks(feedbacks.map((feedback) => feedback._id === id? 
	{...feedback, like:!feedback.like}: feedback))
}

	//add feedback
const addFeedback=async (feedback) =>{
	await axios.post('/feedbacks',{
    comment:feedback.comment,
    like:feedback.like
  })
  const _id=Math.floor(Math.random() * 10000)+1
  const newFeedback={ _id, ...feedback}  
	setfeedbacks([...feedbacks,newFeedback])
     
	console.log(feedback.comment)
	console.log(feedback)
} 

  return ( 
    <div  className="container">
      <Header changeFormState={()=>setShowInput(!showInput)} showInputForm={showInput}/>
      {showInput && <Input onFeedbackAdd={addFeedback} />}
      
      {feedbacks.length > 0?(
      <Feedbacks feedbacks={feedbacks} 
      onDelete={deleteFeedback}
      onLike={toggleLike}
      />
      ):(<>No feedback to Show</>)}
      
      <Footer />
    </div>
  );
}
export default App