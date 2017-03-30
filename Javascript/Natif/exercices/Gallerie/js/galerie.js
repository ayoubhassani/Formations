//On atteund que le Dom et toutes les ressources soient chargées.
window.addEventListener('load',function () {

    //Récupération dans la var images d'une matrice de toutes les images pésentes dans le document
    var images = document.querySelectorAll('img');
    //Parcour du tableau d'image pour ajouter des évenement.
    for (var i=0; i<images.length; i++){

        //On ajoute un évennement : Au click, exécute la function
        images[i].addEventListener('click', function () {

            //on récupère la source de l'élément en cours dans la variable src
            var src = this.getAttribute('src');

            //On récupère la div # big image
            var div_big = document.querySelector('div #big_image');

            // On écrit dans la div # big image la balise image avec la source récupéré.
            div_big.innerHTML='<img src="'+src+'">';
        })
    }

    //On affiche une image si aucune n'a été séctionnée
    var div = document.querySelector('div #big_image');
    if (div.innerHTML.trim() == ''){

        //On récupère la première image et ca source
        var first_scr = document.querySelector('img').getAttribute('src');

        //On écrit dans la div big_img
        div.innerHTML = '<img src="'+first_scr+'">';
    }



    //On cherche la position de l'image en Big


    //Image en cours
    var img_top =  document.querySelector('img');




    document.addEventListener('keydown', function (key) {

        // console.log(key.keyCode);
        //si j'appuie sur la flèche de droite
        if (key.keyCode == 39){
            // console.log('j\'ai appuyé sur la flèche de droite');


            for (z=0; z<images.length; z++){
                img_top = document.querySelector('img');

                if (img_top.getAttribute('src') == images[z].getAttribute('src') &&  (z!=images.length-1)){

                    // console.log('voici l\'image en cours '+images[z].getAttribute('src'));

                    src = images[z+1].getAttribute('src');
                    div_big = document.querySelector('div #big_image');
                    div_big.innerHTML='<img src="'+src+'">';
                    z=images.length;
                }

            }
        }
        //si j'appuie sur la fleche de gauche
        if (key.keyCode == 37){
            // console.log('j\'ai appuyé sur la flèche de gauche');

            for (z=0; z<images.length; z++){
                img_top = document.querySelector('img');
                if (img_top.getAttribute('src') == images[z].getAttribute('src') &&  (z!=0)){

                    // console.log('voici l\'image en cours '+images[z-1].getAttribute('src'));

                    src = images[z-1].getAttribute('src');
                    div_big = document.querySelector('div #big_image');
                    div_big.innerHTML='<img src="'+src+'">';
                }
            }
        }



        // if (img_top.getAttribute('src') == images[y].getAttribute('src')){
        //
        //     console.log('voici l\'image en cours '+images[y+1]);
        // }
    })




});