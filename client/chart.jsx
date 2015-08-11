Chart = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	      data: Data.find({}).fetch()
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
              <Bar data={this.data.data} width={this.props.width} height={this.props.height} />
            </svg> 
        );
    }
});