Bar = React.createClass({  

  shouldComponentUpdate: function(nextProps) {
      return this.props.data !== nextProps.data;
  },

  render: function() {
    var props = this.props;
    var data = [
      0, 0, 0, 0, 0, 0, 0
    ];

    props.data.map(function(d) {
      data[moment(d.date).weekday()] += d.beers;
    });

    console.log(data);

    var yScale = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    var bars = data.map(function(point, i) {
      console.log("Index: " + i + "; Value: " + point);
      
      var height = yScale(point),
          y = props.height - height,
          width = xScale.rangeBand(),
          x = xScale(i);          

      return (
        <g>
          <rect
            fill={"teal"}
            width={width}
            height={height} 
            x={x}
            y={y}
            key={i} />

          <text 
            x={x + width/2 - 5} 
            y={y+20}>
            {point}
          </text>  
        </g>
      );

    });

    return (
      <g>{bars}</g>
    );
  }
});