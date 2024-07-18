let base ;
let height ;
let area ;

base = window.prompt("enter base value :");

height = window.prompt("enter height value :");

area = areaOfTrio(base,height);
console.log("the area of the triangle is :",area);

function areaOfTrio(base,height){
    let res = 0.5 * base * height ;
    return res;
}