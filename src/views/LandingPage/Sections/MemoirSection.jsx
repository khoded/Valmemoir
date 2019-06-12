import React from 'react';
import Card from "components/Card/Card.jsx";


const CardList = ({ userStory }) => {
	return (
		<div>
		{
		userStory.map((user, i) => {
			return(
				<Card 	
				key={i}
				id = {userStory[i].id}
				name = {userStory[i].name}
				email = {userStory[i].email}
				/>
			);
		})
	}
	</div>
 	);
}
export default  CardList;