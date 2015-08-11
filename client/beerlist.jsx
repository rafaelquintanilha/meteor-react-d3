BeerList = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      beers: Beers.find({}, { sort: {date: -1} }).fetch()
	    }
  	},

  	renderBeers() {		
		return this.data.beers.map((beer) => {			
		  return <BeerItem _id={beer._id} beer={beer} />;
		});
	},

	render: function() {		
		return (
			<div className="panel panel-default">			  
			  <div className="panel-heading">
			    <h3 className="panel-title">History
			    <small> click to remove</small>
			    </h3>			    
			  </div>
			  <div className="panel-body">
			    <ul>
			    	{this.renderBeers()}
			    </ul>
			  </div>
			</div>
		);
	}
})