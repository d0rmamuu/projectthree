import { FaTimes } from 'react-icons/fa'

const Feedback = ({feedback,onDelete,onLike}) => {
	return (
		<div className={`feedback ${feedback.like ? 'like': ''}`} 
		onDoubleClick={()=>onLike(feedback,feedback._id)}>
		<h3> {feedback.comment}<FaTimes style={{color:'red' ,cursor:'pointer'}}
		onClick={() => onDelete(feedback._id)}
		/></h3>	
		</div>
	)
}

export default Feedback
