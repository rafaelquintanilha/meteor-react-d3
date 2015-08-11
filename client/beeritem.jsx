BeerItem = React.createClass({
  	handleClick() {
  		var id = this.props.beer._id;
  		Meteor.call("removeBeer", id, function(e) {
  			if (e) alert(e.reason);
  		});
  	},

	render: function() {
		var date = moment(this.props.beer.date).format("DD/MM/YYYY");	
		var tail = this.props.beer.beers > 1 ? "beers" : "beer";

		return (
			<li onClick={this.handleClick}>On <strong>{date}</strong> grabbed <strong>{this.props.beer.beers}</strong> {tail}</li>
		);
	}
})