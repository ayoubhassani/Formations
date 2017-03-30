window.addEventListener('load', function () {

    var liste2 = [
        {titre:"Star Wars : The old republic",url:"https://www.youtube.com/embed/5aedX24Fha4?autoplay=1"},
        {titre:"6 minutes pour se cultiver",url:"https://www.youtube.com/embed/fmiMC7qZOWc?autoplay=1"},
        {titre:"Pixelmon Go",url:"https://www.youtube.com/embed/V1eHX4Lzp-A?autoplay=1"},
        {titre:"Dragon Quest Builder",url:"https://www.youtube.com/embed/az1e8BDs1yk?autoplay=1"}
    ];

    var ifram = document.getElementById('mon_iframe');
    var buton = document.getElementById('mon_bouton');
    var titles = document.getElementById('mon_title')
    var i=0;
    var i_max = liste2.length;


    // premier affichage
    if (ifram.src == ""){
        ifram.src = liste2[i].url;
        titles.innerHTML = liste2[i].titre;
    }
    //Changement au click
    buton.addEventListener('click', function () {
        i++;
        if (i==i_max){i=0;}
        ifram.src = liste2[i].url;
        titles.innerHTML = liste2[i].titre;
    })
});