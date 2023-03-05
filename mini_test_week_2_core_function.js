// Bài 1-------------------------------------------------
function factorCal() {
    let x, i, factorial;
    factorial = 1
    x = parseInt(prompt("Nhập 1 số nguyên dương vào đây", 1));
    for (i = 1; i <= x; i++) {
        factorial = factorial * i;
    }
    alert("Giai thừa của " + x + " là " + factorial);
}

document.getElementById("btnFactorial").addEventListener("click", factorCal);


// Bài 2------------------------------------------------------
function divFindFirst() {
    let dividend, quantity, c, i;
    dividend = parseInt(prompt("nhập số bị chia", 3));
    quantity = parseInt(prompt("Nhập số lượng số đầu tiên chia hết cho " + dividend + " mà bạn muốn tìm", 15));
    document.write(quantity + " số đầu tiên chia hết cho " + dividend + " là: <br>");
    for (i = 0; i <= (quantity - 1); i++) {
        c = i * dividend;
        document.write(c + "<br>");
    }
}

document.getElementById("btnDivisible").addEventListener("click", divFindFirst);


// Bài 3---------------------------------------------------------
function totalDiv5() {
    let expArr = [0, 5, 6, 8, 12, 15, 24, 30, 99, 100];
    let i, total;
    total = 0;
    for (i = 0; i < expArr.length; i++) {
        if (expArr[i] %5=== 0) {
            total += expArr[i];
            console.log(total);
        }
    }
    document.getElementById("displayTotal").innerHTML = total;
}

document.getElementById("btnTotalDiv5").addEventListener("click", totalDiv5);
