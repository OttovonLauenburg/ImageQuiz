import React from "react";


class Flower extends React.Component{

	render(){
		return (
			
			<div className="flower">
				<img src={require('./image/' + this.props.data.image)}  alt={this.props.data.name}/>
				<p>{this.props.data.name}</p>
			</div>
			
		);
	}
}

export default Flower;