document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    body.classList.add(currentTheme);
    toggleButton.classList.add(currentTheme);

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            toggleButton.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            toggleButton.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});


//btn js

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');
    var text = document.querySelector('.textButton');

    button.addEventListener('mouseover', function() {
        text.style.display = 'inline';
    });

    button.addEventListener('mouseout', function() {
        text.style.display = 'none';
    });
});

//popup js


        function showDetails(event, haberId) {
            event.preventDefault();
            var popup = document.getElementById(haberId);
            popup.classList.toggle('show');
        }

        window.onclick = function(event) {
            if (!event.target.matches('.read-more')) {
                var popups = document.getElementsByClassName('detail-popup');
                for (var i = 0; i < popups.length; i++) {
                    var openPopup = popups[i];
                    if (openPopup.classList.contains('show')) {
                        openPopup.classList.remove('show');
                    }
                }
            }
        }
   

        // login-form

        let btn = document.getElementById("btn")

let p = document.createElement("p")

document.body.appendChild(p)

let sonuc = document.querySelector("p")

btn.onclick=()=>{
    let isim = document.getElementById("isim").value
    let mail = document.getElementById("mail").value
    let parola = document.getElementById("parola").value
    let parolaTekrar = document.getElementById("parolaTekrar").value

    try{
        if(isim.length<5){
            throw "5den az olamaz"
        }
        if(!mail.includes("@")){
            throw "mail hatalı"
        }
        if(parola.length<6){
            throw "parola karakter az"
        }
        if(parola !=parolaTekrar){
            throw "parola uyumsuz"
        }
    }catch(e){
        sonuc.innerHTML=`<b>${e}</b>`
        setTimeout(()=>{
            sonuc.innerHTML=""
        },2000)
    }




    if(isim.length<6){
        alert("Kullanıcı adı 6 karakterden az olamaz")
    }
    else if (!mail.includes("@")){
        alert("hatalı mail adresi")
    }
    else if(parola.length<6){
        alert("Şifre 6 karakterden az olamaz")
    }
    else if(parola !=parolaTekrar){
        alert("Şifreler aynı olmak zorunda")
    }
    else{
        alert("Giriş Başarılı")
    }
}