
const points = [70, 76, 47, 34, 23, 98, 100];

const arrayIndex  = points.findIndex(point =>{
    return point==34;
})
console.log(arrayIndex);
points[arrayIndex] = 47;
console.log(points);



const students = [
    {name: 'berk', point: 83},  
    {name: 'batuhan', point: 87}, 
    {name: 'neymar', point:43}, 
    {name: 'mbappe', point: 32},   
    {name: 'ali', point: 76},   

];

const objectIndex = students.findIndex(student => {
    return student.name == 'berk'
});

students[objectIndex].name = 'berk batuhan Devran';
console.log(students);
