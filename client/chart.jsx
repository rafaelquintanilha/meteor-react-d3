Chart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      beers: Beers.find({}).fetch()
	    }
  	},

	getDefaultProps: function() {
		return {
		  width: 640,
		  height: 480
		}
	},

    render: function() {
        return (
            <svg width={this.props.width} height={this.props.height} >
              <Bar data={this.data.beers} width={this.props.width} height={this.props.height} />
            </svg> 
        );
    }
});