function downloadFile(fileUrl, fileName) {
    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//hidden div effect
function showDiv() {
    document.getElementById("contactpage").style.display = "flex";
}
function hideDiv() {
    document.getElementById("contactpage").style.display = "none";
}

//hidden div for services options

//graphic designer
function showDivG(){
    document.getElementById("contactpage2").style.display = "flex";s
}
function hideDiv2() {
    document.getElementById("contactpage2").style.display = "none";
}
//web designer
function showDivG2(){
    document.getElementById("contactpage3").style.display = "flex";s
}
function hideDiv3() {
    document.getElementById("contactpage3").style.display = "none";
}
//responsable marketing
function showDivG3(){
    document.getElementById("contactpage4").style.display = "flex";s
}
function hideDiv4() {
    document.getElementById("contactpage4").style.display = "none";
}

//button contact whatsapp for graphic designer
function contactSeller2() {
    let phoneNumber = "+2250173659493"; // Replace with the actual phone number
    let message = encodeURIComponent("Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services de GRAPHIC DESIGNER, merci!");
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

//email for graphic designer services
function sendEmail2() {
    // Replace with your email address
    let email = "eskadebelair@gmail.com";
    let subject = "Un entretien";
    let body = "Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services de GRAPHIC DESIGNER, merci!";

    // Format the mailto link
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}

//button contact whatsapp for web designer
function contactSeller3() {
    let phoneNumber = "+2250173659493"; // Replace with the actual phone number
    let message = encodeURIComponent("Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services de WEB DESIGNER, merci!");
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

//email for graphic web services
function sendEmail3() {
    // Replace with your email address
    let email = "eskadebelair@gmail.com";
    let subject = "Un entretien";
    let body = "Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services de WEB DESIGNER, merci!";

    // Format the mailto link
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}

//button contact whatsapp for responsable marketing
function contactSeller4() {
    let phoneNumber = "+2250173659493"; // Replace with the actual phone number
    let message = encodeURIComponent("Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services de RESPONSABLE MARKETING, merci!");
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

//email for graphic responsable marketing
function sendEmail4() {
    // Replace with your email address
    let email = "eskadebelair@gmail.com";
    let subject = "Un entretien";
    let body = "Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services RESPONSABLE MARKETING, merci!";

    // Format the mailto link
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}





//button contact whatsapp
function contactSeller() {
    let phoneNumber = "+2250173659493"; // Replace with the actual phone number
    let message = encodeURIComponent("Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services, merci!");
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

//for email
function sendEmail() {
    // Replace with your email address
    let email = "eskadebelair@gmail.com";
    let subject = "Un entretien";
    let body = "Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus sur vos services, merci!";

    // Format the mailto link
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}



//dropdownn menu
const togglebtn = document.querySelector('.burger_menu')
const togglebtnMenu = document.querySelector('.burger_menu i')
const dropdownmenu = document.querySelector('.dropdown-menu')

togglebtn.onclick = function () {
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

    togglebtnMenu.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
