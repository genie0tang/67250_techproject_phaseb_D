var x = 5;
var y = 7;
var z = x + y;
console.log(z);
A = "Hello";
B = "World";
var C = A + B;
console.log(C);


function sumnPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
    if (C.length < z) {
        console.log(z);
    }
} else {
    console.log("Good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == "Banana") {
            alert("Banana Found.");
        }
    }
}

// rewrite with forEach()

function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (arr[i] == "Banana") {
            alert("Banana Found.");
        }
    });
}


var now = new Date();
var hour = now.getHours();

function greeting(h){
    if (h < 5 || h >= 20){
        document.getElementById("greeting").innerHTML = "Good night.";
    }
    else if (h < 12){
        document.getElementById("greeting").innerHTML = "Good morning.";
    }
    else if (h < 18){
        document.getElementById("greeting").innerHTML = "Good afternoon.";
    }
    else{
        document.getElementById("greeting").innerHTML = "Good evening.";
    }
}

function addYear(){
    let year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML =
        "© " + year + " MonoMuse. All rights reserved.";
}

greeting(hour);

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function showPurchaseForm() {
    document.getElementById("purchaseForm").style.display = "block";
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}