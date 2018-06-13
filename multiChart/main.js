  
  function buildGraph(){
    //this will hold of our main data consists of multiple chart data
    var data = [];
    
    //variables to hold monthly month
    var monthList = ['Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2014','Jun 2015','Jul 2015','Aug 2015', 'Sep 2015', 'Oct 2015', 'Nov 2015', 'Dec 2015'];
    var monthlyIncome = [12022.44, 9872.34, 8506.92, 13405.20, 10090.32, 8902.33, 11002.78, 10398.22, 9876.32, 10510.23, 8876.44, 9872.39];
    var monthlyExpense = [7500.25, 6590.23, 8200.32, 5600.34, 6701.34, 7100.67, 7402.34, 7800.23, 5908.66, 6701.23, 8100.34, 7234.56];
    var transportExpense = [240.33, 150.34, 110.32, 178.95, 188.24, 160.39, 220.13, 189.34, 190.33, 201.56, 201.43, 220.15];
    var foodExpense = [502.89, 629.33, 710.22, 442.50, 320.66, 350.84, 400.10, 420.89, 501.43, 380.99, 450.39, 370.22];
    var electricityExpense = [120.99, 221.32, 85.89, 110.22, 91.44, 87.60, 102.33, 132.87, 96.44, 105.50, 87.33, 76.30];
    
    //Array to hold each individual coordinate x and y values
    var monthlyIncomeValues = [];
    var monthlyExpenseValues = [];
    var transportExpenseValues = [];
    var foodExpenseValues = [];
    var electricityExpenseValues = [];
    
    //Looping the data and fetch into array
    for(var i = 0; i < monthList.length; i++){
        var xyIncome = {x: i, y: monthlyIncome[i]};
        monthlyIncomeValues.push(xyIncome);
        
        var xyExpense = {x: i, y: monthlyExpense[i]};
        monthlyExpenseValues.push(xyExpense);
        
        var xyTransport = {x: i, y: transportExpense[i],};
        transportExpenseValues.push(xyTransport);
        
        var xyFood = {x: i, y: foodExpense[i],shape:'triangle-up',size:100};
        foodExpenseValues.push(xyFood);
        
        var xyElectricity = {x: i, y: electricityExpense[i]};
        electricityExpenseValues.push(xyElectricity);
    }
    
    //Those will be the two bar charts
    var dataIncome = { key: "Income", values: monthlyIncomeValues, type: "bar", yAxis: 1, color: 'red' }
    var dataExpense = { key: "Expenses", values: monthlyExpenseValues, type: "bar", yAxis: 1, color: 'blue' }
    
    //Those will be the three line charts
    var dataTransport = { key: "Transport Expense", values: transportExpenseValues, type: "line", yAxis: 2, color: 'green' }

    var dataFood_scatter = { key: "Food Expense", values: foodExpenseValues, type: "scatter", yAxis: 2, color: 'red' }
    var dataFood_line = { key: "Food Expense", values: foodExpenseValues, type: "line", yAxis: 2, color: 'blue' }

    var dataElectricity = { key: "Electricity Expense", values: electricityExpenseValues, type: "line", yAxis: 2, color: 'orange' }
    
    //Insert the values array into data variable
    //data.push(dataIncome);
    //data.push(dataExpense);
    //data.push(dataTransport);
    data.push(dataFood_scatter);
    data.push(dataFood_line);
    //data.push(dataElectricity);
    
    //build the graph
    nv.addGraph(function () {
        //build as multichart graphs and set the margin right and left to 100px.
        var chart = nv.models.multiChart()
                    .margin({left: 100, right: 100})
                    .options({
                        duration: 300,
                        useInteractiveGuideline: true,
                        useVoronoi: false,
                    })
                                    
                    
        
        //customize the tool tip
        chart.tooltip.contentGenerator(function (key, x, y, e, graph) {
            return "<div class='tooltip'><span>Month:</span> " + monthList[key.index] + "</div>" + "<div class='tooltip'><span>Value:</span> " + key.series[0].value + "</div><div class='tooltip'><span>Legend:</span> <div style='background:" + key.series[0].color + ";display:inline-block;height:15px;width:15px;'>&#160;</div></div>";
        });
    
        //Overwrite the x axis label and replace it with the month name
        chart.xAxis.tickFormat(function (d) { return monthList[d] });
        
        //get the chart svg object and fecth the data to build the chart
        d3.select('#chart svg')
            .datum(data)
            .transition().duration(500).call(chart);
        
        chart.scatters1.dispatch.on('elementClick', (e) => {
            console.log('elementClick:',e)
            
        //    text_table="Temperature: " + e.point.temperature + "º" +'<br/>'+"Sales: "+e.point.y + "$"+'<br/>'+ "Month: "+e.point.z;
        //    document.getElementById("mitexto").innerHTML=text_table;                
        });
        return chart;
    }
);
}

//call the function to build the graph.
buildGraph();