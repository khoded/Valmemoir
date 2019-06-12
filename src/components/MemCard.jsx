import React from 'react';


//const Card = (props) => {
//deconstructing props
const MemCard = ({name, email, id}) => {
	return (
		<div className="tc grow bg-light-white br3 pa3 ma2 dib bw2 shadow-1">
			<img src={`https://robohash.org/${id}?50x50`} alt='robots' />
			<div>
				
			</div>
		</div>
	);
}
export default MemCard;