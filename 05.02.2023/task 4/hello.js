let width = Number(prompt("write a width"));
let height = Number(prompt("write a height"));

function area(params) {
    if (width && height > 0) {
        areaOfRectangle = width * height
        alert ( `area = ${areaOfRectangle}`)
    } else {
        alert ("write a number")
    }
}
area();