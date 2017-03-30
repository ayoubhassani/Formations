window.addEventListener('load',function () {

    /*
    * Fonction Création de Cokies
     * reçoit en paramètre le nombre de jours de validité
    */
    function getCookie(id, name, jours) {
        var now =  Date.now();
        var joursMS = jours * 24*60*60*1000;
        var futur = new Date(now + joursMS);

        document.cookie =id+"="+name +";expires="+futur+"; path=/;";
    }

    /*
    * Fonction lire les cookies
    * Reçoit le nom du cookie a lire, renvoit un tableau de valeaurs
     */
    function  setCookie(nameCookie) {

        readCookies = document.cookie.split('; ');
        var cookie;
        var result;
        for (var i=0;i<readCookies.length;i++){
           cookie = readCookies[i].split('=');

           if (cookie[0] == nameCookie){
               result = cookie[1];
           }
        }
    return result;
    }

    /*
    * Fonction Supprimer un Cookie
    * Reçoite le nom du cookie à supprimer
     */
    function deleteCookies(nameCookie) {
       readCookies = document.cookie.split('; ');
       name = nameCookie + '=';
       var cookie;

       for (var i=0; i<readCookies.length;i++){

           cookie = readCookies[i].split('=');

           if (cookie[0]==nameCookie){
               var exDate = Date.now();
               getCookie(nameCookie, '',-1);
           }
       }


    }


    /*
    * Fonction qui prend les valeurs du formulaire et crée un ccokie si valide.
     */
    function formCreateCookie() {
        var valid = true
        var id = document.getElementById('nameCookie').value;
        var name = document.getElementById('valueCookie').value;
        var jour = document.getElementById('dateExpire').value;

        if (id==''){
            valid = false;
        }
        if (name==''){
            valid = false
        }
        if (jour == '' || jour<0 || jour >175 ){
            valid = false;
        }
        if (valid == true) {
            getCookie(id, name, jour)
        }
    }
    //Initialisation de la fonction form create avec le formulaire
    var form = document.getElementById('createCookie');
    form.addEventListener('click', formCreateCookie);
    form.addEventListener('click', function () {
        listeCookies('maListe');
    });


    /*
    * Fonction qui liste tous les cookies
    */
        function listeCookies(maListe) {
        var tag = document.getElementById(maListe);
        tag.innerHTML = '';

        var liste = document.cookie.split('; ');
        var btn =[] ;

        for (i=0; i<liste.length && liste[0]!='';i++){

            var li = document.createElement('ul');
            li.innerHTML = '<li>Name : ' +
                ''+(liste[i].split('='))[0]
                +' </li><li>Valeur : ' +
                ''+ (liste[i].split('='))[1]
                +'</li><li><button id="'+
                (liste[i].split("="))[0]+
                '">Effacer</button></li>';
            tag.appendChild(li);

            btn[i] = document.getElementById((liste[i].split("="))[0]);
            btn[i].addEventListener('click', function () {
                deleteCookies(this.id);
                setTimeout(function () {
                    listeCookies('maListe');
                },500);

            })



        }

        // tag.appendChild(place);

    }
    listeCookies('maListe');



});