import React from 'react';


//const Card = (props) => {
//deconstructing props
const MemCard = ({name, email, id}) => {
	//const {name, email, id } = props;
	return (
		<div className="tc grow bg-light-white br3 pa3 ma2 dib bw2 shadow-1">
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
	);
}
export default MemCard;