const names = ['berk', 'batuhan', 'neymar','messi'];
names.sort(); //alfabetik sıralama yapar
console.log(names);
names.reverse();
console.log(names);

console.log('---------------------------------------------');

const points = [70, 76, 47, 34, 36, 8, 10];
points.sort();
console.log(points);//sadece ilk rakama göre sıralam yapıldı
points.reverse();
console.log(points);





console.log('---------------------------------------------');

const students = [
    {name: 'berk', point: 83},  
    {name: 'batuhan', point: 87}, 
    {name: 'neymar', point:43}, 
    {name: 'mbappe', point: 32},   
    {name: 'messi', point: 76},   

];


students.sort((a,b) => {
    if(a.point > b.point){
        return -1;
    }
    else if(a.point < b.point){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(students);

console.log('daha kısa bir yöntem');

students.sort((a,b) => {
    return b.point -a.point;
})


students.sort((a,b) => {
    return b.point -a.point;
})
