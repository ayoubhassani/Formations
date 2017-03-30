window.addEventListener('load', function () {

    //Mon Json d'images
    var images = [
        {url:'img/Chrysanthemum.jpg'},
        {url:'img/Desert.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'}
    ];

    //Mes variables

    var add_big_box = document.createElement('div');
    var big_box;

    var add_btn_left = document.createElement('button');
    var btn_left;

    var add_btn_right = document.createElement('button');
    var btn_right;

    var section = document.querySelector('section#light_box');
    var img_list ='';
    var img_box ;

    var i_min = 0;
    var i=i_min;
    var i_max = images.length -1;

    //Création dynamique d'une div big box
    add_big_box.setAttribute('id','big_box');
    document.body.appendChild(add_big_box);
    big_box = document.getElementById('big_box');

    //Création dynamique du btn
    add_btn_left.setAttribute('id', 'btn_left');
    add_btn_left.innerHTML = '<-';

    add_btn_right.setAttribute('id', 'btn_right');
    add_btn_right.innerHTML = '->';
    // big_box.appendChild(add_btn_left);
    // btn_left = document.getElementById('btn_left');




    //Mise en place des images du Json dans le html
    for (i=0;i<=i_max;i++){
        img_list += '<img id="img_'+i+'" src="'+images[i].url+'" alt="image '+i+'" class="img_list">';
    }
    section.innerHTML += img_list;

    //Appel de la fonction qui crée les évennements pour toutes les images chargées
    for (i=0;i<=i_max;i++){
        var img_read= document.getElementById('img_'+i);
        img_read.addEventListener('click', openBox);
        // addClickOnImg(i);
    }


//Mes Fonctions

    //Fonction qui crée la div foltante light box
    function openBox() {

        //on supprime les images déja ouverte
        deleteImageOpen();
        //On Récupère la fin de l'id de l'image cliqué
        var lenth = this.id.length;
        // var this_i = this.id.substr(lenth-1,lenth);

        var this_i = this.id.split('_');
        this_i = this_i[1];


        var add = document.createElement('img');

        //On crée l'id de l'image ouverte en Light Box
        add.setAttribute('id', this_i);
        add.setAttribute('src', images[this_i].url);
        add.setAttribute('class', 'box_open');

        //On balance l'élément dans la section
        big_box.appendChild(add);
        //on appel la function qui crée les btn
        createBtn();

        //On appel la fonction qui ajoute l'évennement y l'imaqe ouverte
        addEventOnOpenBox(add);
    }

    //Fonction qui suprime l'image ouverte
    function deleteImageOpen() {
        //On cherche toute les images ayant un id de type light_box
        for (i=0; i<=i_max; i++){
            if(document.getElementById(i)){
                ex_img = document.getElementById(i);
                ex_img.parentNode.removeChild(ex_img);
                ex_btn_left = document.getElementById('btn_left');
                ex_btn_left.parentNode.removeChild(ex_btn_left);
                ex_btn_right = document.getElementById('btn_right');
                ex_btn_right.parentNode.removeChild(ex_btn_right);
            }
        }
    }

    //Founction qui ajoute un évennement click sur l'imaque ouverte et qui appelle la fonction de suppression de l'image
    function addEventOnOpenBox(img) {
        img.addEventListener('click', deleteImageOpen);
    }

    //Fonction qui crée les btn du slider
    function createBtn() {
        big_box.appendChild(add_btn_left);
        btn_left = document.getElementById('btn_left');
        big_box.appendChild(add_btn_right);
        btn_right = document.getElementById('btn_right');

        btn_right.addEventListener('click',slide_right);
        btn_left.addEventListener('click',slide_left);
    }

    //Fonction qui fait défiler les images gauche
    function slide_left() {

        // console.log(current_img);
        console.log('test btn left');

        var current_img = document.getElementsByClassName('box_open');
        current_img = current_img[0];
        current_img.id = current_img.id ==i_min  ? i_max:parseInt(current_img.id)-1;
        current_img.setAttribute('src',images[current_img.id].url);



    }
    //Fonction qui fait défiler les images droite
    function slide_right() {
            var current_img = document.getElementsByClassName('box_open');
            current_img = current_img[0];
            current_img.id = current_img.id ==i_max  ? i_min:parseInt(current_img.id)+1;
            current_img.setAttribute('src',images[current_img.id].url);
        }
});