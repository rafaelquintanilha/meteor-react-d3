BeerForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var numBeers = ReactDOM.findDOMNode(this.refs.numBeers);
		var beerDate = ReactDOM.findDOMNode(this.refs.beerDate);
		
		Meteor.call("insertBeer", numBeers.value, moment(beerDate.value).toDate(), function(e, r) {
			if (e) alert(e.reason)			
		});

		numBeers.value = "";
		beerDate.value = "";
	},

	render: function() {		
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Beer Consumption</h3>
			  </div>
			  <div className="panel-body">
			    <form className="form-horizontal" onSubmit={this.handleSubmit}>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="number" className="form-control" 
				      		placeholder="How many beers?" ref="numBeers" />
				    </div>
				  </div>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="date" className="form-control" ref="beerDate"/>
				    </div>
				  </div>
				  
				  <div className="form-group">
				    <div className="col-sm-10">
				      <button type="submit" className="btn btn-primary btn-block">Add</button>
				    </div>
				  </div>
				</form>
			  </div>
			</div>
		);
	}
})