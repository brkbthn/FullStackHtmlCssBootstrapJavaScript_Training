const points = [70, 76, 47, 34, 23, 88, 10];

// koşulu sağlayan ilk elemeni getirir diğerlerine bakmaz..

const highPoint = points.find(point =>{
    return point > 70;
});

console.log(highPoint);