
var a = prompt("Введите первое число task 1","");
var b = prompt("Введите второе число task 1","");
var c = prompt("Введите третье число task 1","");

var d = (Math.max(a, b, c));

alert(d);

var rs;

for (let index = 1; index <= 20; index++) {
    
  rs = String(rs) + String(index**2);    
  
}

 document.getElementById("rts").innerHTML = rs; 


var aa = prompt("Введите первое число task 3","");
var bb = prompt("Введите второе число task 3","");

if (aa > bb) {
console.log(aa);    
} else {
document.getElementById("ts3").innerHTML = aa;   
}

var aaa = prompt("Введите первое число task 4","");
var bbb = prompt("Введите второе число task 4","");
var ccc = prompt("Введите первое число task 4","");
var D;

D = b * b - 4 * a * c;
if (D > 0) {
    var x1;
    var x2;
    x1 = (-b - Math.sqrt(D)) / (2 * a);
    x2 = (-b + Math.sqrt(D)) / (2 * a);

    document.getElementById("ts4").innerHTML = String("Корни уравнения: x1 = " + x1 + ", x2 = " + x2);
   
    }
else if (D == 0) {
    var x;
    x = -b / (2 * a);
    
    document.getElementById("ts4").innerHTML = String("Корни уравнения: x1 = " + x);
}
else {
    
    document.getElementById("ts4").innerHTML = String("Уравнение не имеет действительных корней!");
}