Bar = React.createClass({  

  shouldComponentUpdate: function(nextProps) {
      return this.props.data !== nextProps.data;
  },

  render: function() {
    var props = this.props;
    var data = props.data.map(function(d) {
      return d.y;
    });

    var yScale = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    var bars = data.map(function(point, i) {
      var height = yScale(point),
          y = props.height - height,
          width = xScale.rangeBand(),
          x = xScale(i);

      return (
        <rect
          width={width}
          height={height} 
          x={x}
          y={y}
          key={i}                   
        >
        </rect>
      );

    });

    return (
          <g>{bars}</g>
    );
  }
});