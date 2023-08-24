const points = [70, 76, 47, 34, 23, 88, 10];


const result = points.reduce((value, point) => {
     if(point>50){
        value++;
     }
     return value;
}, 0);
console.log(result);



const students = [
    {name: 'berk', point: 83},  
    {name: 'batuhan', point: 87}, 
    {name: 'neymar', point:43}, 
    {name: 'mbappe', point: 32},   
    {name: 'valencia', point: 76},
    {name: 'altay', point: 45}, 
    {name: 'berk', point: 71}, 
    {name: 'serdar', point: 40}, 
    {name: 'alex', point: 76}, 
    {name: 'messi', point: 66},    

];
const berkToplam =students.reduce((value, student)=>{
        if(student.name === "berk"){
            value += student.point;
        }
        return value;
},0);

console.log(berkToplam);
