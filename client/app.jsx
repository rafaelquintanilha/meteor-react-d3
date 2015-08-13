App = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      beers: Beers.find({}).fetch()
	    }
  	},

  	mapData: function() {  		
  		var data = [
  			{ qty: 0, xLabel: "Sun" }, 
  			{ qty: 0, xLabel: "Mon" },
  			{ qty: 0, xLabel: "Tue" },
  			{ qty: 0, xLabel: "Wed" },
  			{ qty: 0, xLabel: "Thu" },
  			{ qty: 0, xLabel: "Fri" },
  			{ qty: 0, xLabel: "Sat" },
  		];
  		this.data.beers.map(function(d) {
	      data[moment(d.date).day()].qty += d.beers;
	    });
	    
	    return data;
  	},

	render: function() {		
		return (
		  <div>
		  	<div className="page-header">
					<center>
						<h1>
						<i className="fa fa-beer"></i> Beer 
						<small> Dashboard</small></h1>
					</center>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<BeerForm />
						<BeerList data={this.data.beers}/>
					</div>

					<div className="col-md-offset-2 col-md-6">					
						<BarChart data={this.mapData()} width="480" height="320"/>
					</div>
				</div>
			</div>        
		  </div>
		);
	}
});