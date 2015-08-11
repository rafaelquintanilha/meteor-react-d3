App = React.createClass({
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
					<BeerList />
				</div>

				<div className="col-md-offset-2 col-md-6">					
					<Chart width="480" height="320"/>
				</div>
			</div>
		</div>        
      </div>
    );
  }
});