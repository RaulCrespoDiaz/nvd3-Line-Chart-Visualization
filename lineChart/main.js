  
   // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
    var chart;
    var data;
    var area;
    var legendPosition = "top";

    nv.addGraph(function() {
        chart = nv.models.lineChart()
            .options({
                duration: 300,
                useInteractiveGuideline: true,
            })
            
        ;
        // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
        chart.xAxis
            .axisLabel("Month")
            .tickFormat(d3.format(',.1f'))
            .staggerLabels(true)
        ;
        chart.yAxis
            .axisLabel('Sales ($)')
            .tickFormat(function(d) {
                if (d == null) {
                    return 'N/A';
                }
                return d3.format(',.2f')(d);
            })
        ;
        data = ExtraeDatos();
        d3.select('#chart1').append('svg')
            .datum(data)
            .call(chart);
            
        nv.utils.windowResize(chart.update);

        chart.lines.dispatch.on('elementClick', (e) => {
            console.log('elementClick:',e)
            
            text_table="Temperature: " + e[0].point.temperature + "º" +'<br/>'+"Sales: "+e[0].point.y + "$"+'<br/>'+ "Month: "+e[0].point.z;
            document.getElementById("mitexto").innerHTML=text_table;
            
        });
        
        return chart;
    });
     
    
 

    
  
    

   