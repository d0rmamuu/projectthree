import Feedback from './Feedback'

const Feedbacks = ({feedbacks,onDelete,onLike}) => {
	
	return (
		<>
		{
			feedbacks.map((feedback)=>(
			<Feedback key={feedback._id} feedback={feedback} 
			onDelete={onDelete}
			onLike={onLike}
			/>
			))}	
		</>
	)
}

export default Feedbacks
