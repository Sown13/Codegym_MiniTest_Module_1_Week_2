// Bài 1-------------------------------------------------
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
// Bài 3---------------------------------------------------------
function totalDiv5() {
    let expArr = [0, 5, 6, 8, 12, 15, 24, 30, 99, 100];
    let i, total;
    total = 0;
    for (i = 0; i < expArr.length; i++) {
        if (expArr[i] % 5 === 0) {
            total += expArr[i];
            console.log(total);
        }
    }
    document.getElementById("displayTotal").innerHTML = total;
}

document.getElementById("btnTotalDiv5").addEventListener("click", totalDiv5);

// Bài 4 ---------------------------------------------------------
// Bài 4 ---------------------------------------------------------
let arr = [];

function initializeArr() {
    let i;
    arr.length = parseInt(prompt("Nhập độ dài của mảng (Không nên nhập mảng quá lớn, sẽ rất mệt!!!)"));
    for (i = 0; i < arr.length; i++) {
        arr[i] = prompt("Nhập phần tử có 'index = " + i + "' vào");
    }
    document.getElementById("displayArr").innerHTML = "arr = [" + arr + " ]";
}

function countEven() {
    console.log(arr);
    let i, count;
    count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    document.getElementById('displayEven').innerHTML = "số lượng số chẵn trong mảng của bạn là " + count;
}

function totalEven() {
    let i, total;
    total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            total += parseInt(arr[i]);
        }
    }
    document.getElementById('displayEvenTotal').innerHTML = "Tổng các số chẵn trong mảng của bạn là " + total;
}

function checkPrime(isPrime) {
    if (isPrime <= 1) {
        return false
    }
    let i;
    for (i = 2; i <= Math.sqrt(isPrime); i++) {
        if (isPrime % i === 0) {
            return false
        }
    }
    return true
}

function totalPrime() {
    console.log(arr)
    let i, total;
    total = 0;
    for (i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            total += parseInt(arr[i]);
        }
    }
   return document.getElementById("displayPrimeTotal").innerHTML = total;
}

document.getElementById("btnInit").addEventListener("click", initializeArr);
document.getElementById("btnEven").addEventListener("click", countEven);
document.getElementById("btnEvenTotal").addEventListener("click", totalEven);
document.getElementById("btnPrimeTotal").addEventListener("click", totalPrime);


// Nothing important------------------------------------
// Nothing important------------------------------------
function dontTouch(){
    alert("Don't touch me,plz")
}
function thankYou(){
    alert("Thank you for touching <3!")
}
function getOut(){
    alert("Leave me alone!")
}
function boring(){
    alert("Focus on your work, please ^_^")
}
