function ExtraeDatos() {

    var shape= 'circle';

    var sin = [
        {x:1,temperature:14.2,y:215,z:'January',size:40, shape:'triangle-up'},
        {x:2,temperature:16.4,y:325,z:'February',size:40, shape:'triangle-up'},
        {x:3,temperature:11.9,y:185, z:'March',size:40, shape:'triangle-up'},
        {x:4,temperature:15.2,y:332,z:'April',size:40, shape:'triangle-up'},
        {x:5,temperature:18.5,y:406,z:'May',size:40, shape:'triangle-up'},
        {x:6,temperature:22.1,y:522,z:'June',size:40, shape:'triangle-up'},
        {x:7,temperature:19.4,y:412,z:'July',size:40, shape:'triangle-up'},
        {x:8,temperature:25.1,y:614,z:'August',size:40, shape:'triangle-up'},
        {x:9,temperature:23.4,y:544,z:'September',size:40, shape:'triangle-up'},
        {x:10,temperature:18.1,y:421,z:'October',size:40, shape:'triangle-up'},
        {x:11,temperature:22.6,y:445,z:'November',size:40, shape:'triangle-up'},
        {x:12,temperature:17.2,y:408, z:'December',size:40, shape:'triangle-up'}];

        var sin2 = [
            {x:1,y:215},
            {x:2,y:325},
            {x:3,y:185},
            {x:4,y:332},
            {x:5,y:406},
            {x:6,y:522},
            {x:7,y:412},
            {x:8,y:614},
            {x:9,y:544},
            {x:10,y:421},
            {x:11,y:445},
            {x:12,y:408}
        ];        
    
    return [
        {
            //area: true,
            key: "Evolución Ventas",
            values: sin2,
            type:"line",
            Yaxis: 2,                 
            color: "#ff7f0e",
            //strokeWidth: 4,
            //classed: '#2ca02c'
        }
        
    ];
}