interface Point{
    x: number,
    y: number
}


let drawpoint=(point: {x: number, y: number})=>{ return x*y;}//inline annotation

// let drawpoint=(point: Point)=>{
//      return x*y;
// }

console.log(drawpoint(12,11));