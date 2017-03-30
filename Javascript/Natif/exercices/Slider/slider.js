window.addEventListener('load', function () {

//Mon Json d'images
    var images = [
            {url:'img/Chrysanthemum.jpg'},
            {url:'img/Desert.jpg'},
            {url:'img/Hydrangeas.jpg'},
            {url:'img/Jellyfish.jpg'},
            {url:'img/Koala.jpg'}
        ];

//Mes Variables
    var slider = document.getElementById('slider');

    var btn_left = document.getElementById('btn_left');
    var btn_right = document.getElementById('btn_right');

    var img_featured = document.getElementById('img_featured');
    var animation = '';

    var i_max = images.length;
    var i_min = 0;
    var i = 0;

//Initialisation slider
    img_featured.setAttribute('src',images[i].url);

//Mes Évennements

    btn_left.addEventListener('click',function () {
        if(i<i_max){slideLeft();
        }
    });
    btn_right.addEventListener('click',function () {
        if(i>i_min){slideRight();
        }
    } );

//Mes Fonctions

    //Fonction du bouton de gauche
    function slideLeft() {
        //on crée les div
        animation = '<div id="btn_left"><-</div>' +
            '<div id="btn_right">-></div>' +
            '<img id="img_featured" src="'+images[i].url+'" alt="">' +
            '<img id="img_ex" src="'+images[i+1].url+'" alt="">' +
            '<img id="img_animation" src="'+images[i].url+'" alt="">';
        //on les injecte dans le html
        slider.innerHTML =animation;

        //on attend l'animation
        setTimeout(function () {
            //On modifie les div
            i++;
            animation = '<div id="btn_left"><-</div>' +
                '<div id="btn_right">-></div>' +
                '<img id="img_featured" src="'+images[i].url+'" alt="">';
            //on les balance dans le html
            slider.innerHTML =animation;

            //on attend que le navigateur soit ok
            setTimeout(function () {
                //on récupère les nouveaux btn et on leur remet l'evenemen
                btn_left = document.getElementById('btn_left');
                btn_right = document.getElementById('btn_right');
                btn_left.addEventListener('click',slideLeft);
                btn_right.addEventListener('click',slideRight);
            },500);
        },990);
    }

    //fonction du bouton de droite
    function slideRight() {
        console.log('slide right');

        //on crée les divs images et btns
        animation = '<div id="btn_left"><-</div>' +
            '<div id="btn_right">-></div>' +
            '<img id="img_featured" src="'+images[i].url+'" alt="">' +
            '<img id="img_ex2" src="'+images[i-1].url+'" alt="">' +
            '<img id="img_animation2" src="'+images[i].url+'" alt="">';
        //on les injecte dans le html dans les balise div#slider
        slider.innerHTML =animation;

        //on attend l'animation qui dure une seconde
        setTimeout(function () {
            //On modifie les div à injecter dans les divs sliders
            i--;
            animation = '<div id="btn_left"><-</div>' +
                '<div id="btn_right">-></div>' +
                '<img id="img_featured" src="'+images[i].url+'" alt="">';
            //on les balance dans le html entre les div#slider
            slider.innerHTML =animation;

            //on attend que le navigateur et interprété le changement de l'image et le chargement des boutons pendant 0,5 secondes
            setTimeout(function () {
                //on récupère les nouveaux btn et on leurs remet l'evenement qui n'était plus valide pour le JS
                btn_left = document.getElementById('btn_left');
                btn_right = document.getElementById('btn_right');
                btn_left.addEventListener('click',slideLeft);
                btn_right.addEventListener('click',slideRight);
            },500);
        },990);
    }
});