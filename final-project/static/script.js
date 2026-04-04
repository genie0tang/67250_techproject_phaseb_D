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
    let greetingEl = document.getElementById("greeting");
    if (!greetingEl) return;

    if (h < 5 || h >= 20){
        greetingEl.innerHTML = "Good night.";
    }
    else if (h < 12){
        greetingEl.innerHTML = "Good morning.";
    }
    else if (h < 18){
        greetingEl.innerHTML = "Good afternoon.";
    }
    else{
        greetingEl.innerHTML = "Good evening.";
    }
}

function addYear(){
    let year = new Date().getFullYear();
    let copyYearEl = document.getElementById("copyYear");
    if (copyYearEl) {
        copyYearEl.innerHTML = "© " + year + " MonoMuse. All rights reserved.";
    }
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

function toggleMenu() {
    let nav = document.getElementById("myNavBar");

    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}

if (document.getElementById("map") && typeof L !== "undefined") {
    let map = L.map('map').setView([40.4433, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup("MonoMuse Museum")
        .openPopup();
}

ActiveNav();

if (typeof $ !== "undefined") {
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
}

function showPurchaseForm() {
    document.getElementById("purchaseForm").style.display = "block";
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}

function updateTotal() {
    const qtyInput = document.getElementById("ticketQty");
    const totalDisplay = document.getElementById("totalPrice");

    if (!qtyInput || !totalDisplay) return;

    const qty = parseInt(qtyInput.value) || 0;
    const total = qty * 18;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

function clearErrors() {
    const errorIds = ["dateError", "typeError", "qtyError", "emailError", "zipError"];
    for (let id of errorIds) {
        const el = document.getElementById(id);
        if (el) el.textContent = "";
    }
}

function validateCheckoutForm() {
    clearErrors();

    let isValid = true;

    const visitDate = document.getElementById("visitDate");
    const ticketType = document.getElementById("ticketType");
    const ticketQty = document.getElementById("ticketQty");
    const email = document.getElementById("email");
    const zipCode = document.getElementById("zipCode");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const zipPattern = /^\d{5}$/;

    if (!visitDate.value) {
        document.getElementById("dateError").textContent = "Please select a visit date.";
        isValid = false;
    }

    if (!ticketType.value) {
        document.getElementById("typeError").textContent = "Please select a ticket type.";
        isValid = false;
    }

    const qty = parseInt(ticketQty.value);
    if (!ticketQty.value || isNaN(qty) || qty < 1 || qty > 10) {
        document.getElementById("qtyError").textContent = "Please enter a quantity from 1 to 10.";
        isValid = false;
    }

    if (!email.value) {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (zipCode.value && !zipPattern.test(zipCode.value)) {
        document.getElementById("zipError").textContent = "Zip code must be exactly 5 digits.";
        isValid = false;
    }

    return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
    const qtyInput = document.getElementById("ticketQty");
    const ticketType = document.getElementById("ticketType");
    const checkoutForm = document.getElementById("checkoutForm");

    if (qtyInput) {
        qtyInput.addEventListener("input", updateTotal);
    }

    if (ticketType) {
        ticketType.addEventListener("change", updateTotal);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!validateCheckoutForm()) return;

            const qty = parseInt(document.getElementById("ticketQty").value);
            const total = (qty * 18).toFixed(2);
            const visitDate = document.getElementById("visitDate").value;
            const ticketTypeValue = document.getElementById("ticketType").value;

            const params = new URLSearchParams({
                total: total,
                qty: qty,
                date: visitDate,
                type: ticketTypeValue
            });

            window.location.href = `confirmation.html?${params.toString()}`;
        });
    }

    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmationTotal = document.getElementById("confirmationTotal");

    if (confirmationMessage && confirmationTotal) {
        const params = new URLSearchParams(window.location.search);
        const total = params.get("total");
        const qty = params.get("qty");
        const date = params.get("date");
        const type = params.get("type");

        confirmationMessage.textContent =
            `Your ${type} ticket order for ${qty} ticket(s) on ${date} has been placed successfully.`;
        confirmationTotal.textContent = `Total Paid: $${total}`;
    }

    const dateField = document.getElementById("visitDate");
    if (dateField) {
        const params = new URLSearchParams(window.location.search);
        const selectedDate = params.get("date");
        if (selectedDate) {
            dateField.value = selectedDate;
        }
    }
});

const galleryImages = [
    {
        src: "../static/museumone.png",
        title: "Exhibition 1: Band in a Bar",
        desc: "This exhibition is an exploration of a colorful image describing a jazz band in a bar. It is a piece of artistry open for interpretation and featuring interesting social commentary."
    },
    {
        src: "../static/museumtwo.png",
        title: "Exhibition 2: Butterfly Garden",
        desc: "This piece of artwork shows an elegant, burgundy butterfly amidst a beige and mundane background, using contrast to draw emphasis to the artistry."
    },
    {
        src: "../static/museumthree.png",
        title: "Exhibition 3: Digital Reflections",
        desc: "This exhibition highlights layered color, abstraction, and modern visual storytelling to reflect the museum’s focus on art and technology."
    }
];

let currentImageIndex = 0;

function showGalleryImage(index) {
    const imageEl = document.getElementById("galleryImage");
    const titleEl = document.getElementById("galleryTitle");
    const descEl = document.getElementById("galleryDescription");

    if (!imageEl || !titleEl || !descEl) return;

    imageEl.src = galleryImages[index].src;
    imageEl.alt = galleryImages[index].title;
    titleEl.textContent = galleryImages[index].title;
    descEl.textContent = galleryImages[index].desc;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showGalleryImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(currentImageIndex);
}