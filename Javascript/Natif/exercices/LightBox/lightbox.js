window.addEventListener('load', function () {

    //Mon Json d'images
    var images = [
        {url:'img/Chrysanthemum.jpg'},
        {url:'img/Desert.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'},
        {url:'img/Desert.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'},
        {url:'img/Desert.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'}
    ];

    //Mes variables

    var section = document.querySelector('section#light_box');
    var img_list ='';
    var img_box ;

    var i_min = 0;
    var i=i_min;
    var i_max = images.length;


    //Mise en place des images du Json dans le html
    for (i=0;i<i_max;i++){
        img_list += '<img id="img_'+i+'" src="'+images[i].url+'" alt="image '+i+'" class="img_list">';
    }
    section.innerHTML += img_list;

    //Appel de la fonction qui crée les évennements pour toutes les images chargées
    for (i=0;i<i_max;i++){
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
        var this_i = this.id.substr(lenth-1,lenth);
        var add = document.createElement('img');
        //On crée l'id de l'image ouverte en Light Box
        add.setAttribute('id', this_i);
        add.setAttribute('src', images[this_i].url);
        add.setAttribute('class', 'box_open');
        section.appendChild(add);

        //On appel la fonction qui ajoute l'évennement y l'imaqe ouverte
        addEventOnOpenBox(add);
    }

    //Fonction qui suprime l'image ouverte
    function deleteImageOpen() {
        //On cherche toute les images ayant un id de type light_box
        for (i=0; i<i_max; i++){
            if(document.getElementById(i)){
                ex_img = document.getElementById(i);
                ex_img.parentNode.removeChild(ex_img);
            }
        }
    }

    //Founction qui ajoute un évennement click sur l'imaque ouverte et qui appelle la fonction de suppression de l'image
    function addEventOnOpenBox(img) {
        console.log(img);
        img.addEventListener('click', deleteImageOpen);
    }

});