import React, { useEffect } from 'react'

function Detail(props) {
	
	useEffect(() => {
		const { location, history } = props;
		console.log(location.state)
		if(location.state === undefined) {
			history.push('/');
		}
	})
	
	const { location } = props;
	
	if(location.state){
		return(
			<span>{location.state.title}</span>
		)
	} else {
		return null;
	}
}

export default Detail