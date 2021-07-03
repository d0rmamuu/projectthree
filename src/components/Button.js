import PropTypes from 'prop-types'
const Button = ({text,onClick}) => {
	return <button 
	className={'btn right'}
	onClick={onClick}
	>{text}</button>
}

Button.propTypes = {
	text: PropTypes.string,
      }
export default Button
