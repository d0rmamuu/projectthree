
import Header from "./components/Header";
import Input from "./components/Input";
import Footer from "./components/Footer";
//import useLocalStorage from "./components/useLocalStorage";
import Feedbacks from "./components/Feedbacks"
import { useState } from 'react'
const App=()=> {
	const [showInput,setShowInput]=useState(false)	
  	const [feedbacks,setfeedbacks]=useState([])
	//delete feedback(just filtering the already present arrray)
 const deleteFeedback=(id) =>{
	 setfeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
 }
 	//toggle like(DC)
const toggleLike=(id)=>{
	setfeedbacks(feedbacks.map((feedback) => feedback.id === id? 
	{...feedback, like:!feedback.like}: feedback))
}
	//add feedback
const addFeedback=(feedback) =>{
	const id=Math.floor(Math.random() * 10000)+1
    	const newFeedback={ id, ...feedback}  
    	setfeedbacks([...feedbacks,newFeedback])
	console.log(id)
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
      ):(<span className="line">No Feedback to Show</span>)}
      
      <Footer />
    </div>
  );
}
export default App