function ex1() {
    var n = 0;
    var m = 0;

    while (n < 10000) {
        m++;
        n = n + m

        document.getElementById("ketqua").innerHTML = "số nguyên dương nhỏ nhất là: " + m;
    }
}
ex1()


function ex2() {
    var x = document.getElementById("txtX").value;
    var n = document.getElementById("txtN").value;
    var total = 0;

    for (var i = 1; i <= n; i++) {
        total += Math.pow(x, i);
    }
    document.getElementById("tong").innerHTML = total;
}
ex2()


function ex3() {
    var n = +document.getElementById("num").value;
    var total1 = 1;
    for (var i = 1; i <= n; i++) {
        total1 *= i;
    }
    document.getElementById("ketqua1").innerHTML = total1;
    // console.log(total1)
}
ex3()

function ex4() {
    var cnt = " ";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            cnt += '<div style="background-color: blue; color: white ;"> chẵn </div>';
        } else {
            cnt += '<div style="background-color: red; color: white ;"> lẻ </div>';
        }
    }
    document.getElementById("divMore").innerHTML = cnt;
}
ex4()



