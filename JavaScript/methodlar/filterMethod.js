const points = [70, 76, 47, 34, 23, 98, 100];

const studentsPassed1 = points.filter(point =>{
    return true;
})

console.log(studentsPassed1);

const studentsPassed2 = points.filter(point =>{
    return point>50;
})

console.log(studentsPassed2);


const students = [
    {name: 'berk', passed: true},  
    {name: 'batuhan', passed: true}, 
    {name: 'neymar', passed:false}, 
    {name: 'mbappe', passed: true},   

];

const passingStudents = students.filter(student =>{
    return student.passed
})

console.log(passingStudents);