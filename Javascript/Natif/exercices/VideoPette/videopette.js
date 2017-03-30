window.addEventListener('load', function () {

    var ifram = document.getElementById('mon_iframe');
    var liste = document.querySelectorAll('li');
    var buton = document.getElementById('mon_bouton');
    var i=0;
    var i_max = liste.length;
    // premier affichage
    if (ifram.src == ""){
        ifram.src = liste[i].innerHTML;
    }
    //Changement au click
    buton.addEventListener('click', function () {
        i++;
        if (i==i_max){i=0;}
        ifram.src = liste[i].innerHTML;
    })
});