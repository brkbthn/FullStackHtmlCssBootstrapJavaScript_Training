const points = [70, 76, 47, 34, 23, 88, 10];

const newPoints = points.map(point=>{
    return point+10;
});

console.log(newPoints);

const students = [
    {name: 'berk', point: 83},  
    {name: 'batuhan', point: 87}, 
    {name: 'neymar', point:43}, 
    {name: 'mbappe', point: 32},   
    {name: 'mbappe', point: 76},   

];

const newStudentsPoints = students.map(student=>{
    if(student.point < 50){
        //  return {name : student.name , point : student.point+16};
        student.point += 16;
        return student;
    }
    else{
        return student;
    }
});

console.log(newStudentsPoints);