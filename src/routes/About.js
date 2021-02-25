import React from 'react'

function About(props) {
	console.log(props)
	return(
		<div className="about_container">
			<span>
				About this page: I built it because I love moives.
			</span>
			<span>- JongMin Lee, 2000</span>
		</div>
	)
}

export default About