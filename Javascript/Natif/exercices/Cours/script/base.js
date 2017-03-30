/**Ma Bibliothèque**/

Window.prototype.attachCustomEvent=function(Element,EventName,fonction){
    if (Element.addEventListener){
        Element.addEventListener(EventName, fonction);
    }else if(Element.attachEvent){
        element.attachEvent(EventName,fonction);
    }
};
//sinsgleton
var crispi = crispi || {};


function User(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}
//crée variable crispi, objet vide si il n'existe pas.

//
crispi.init=function () {
    console.log(new User('Gasquez','Prénom',28));
};
crispi.init();
console.log(crispi);

/*Meéthode qui console log les arguments*/
//
crispi.log=function () {
    if (console!=undefined){
        console.log(arguments);
    }
};

/*Méthode qui recoit un paramètre binaire et le transforme en nombre*/
//
crispi.numberToBinary=function(number){
    //Initialisation de la variable res de type chaine
    var binary="";
    //Tant que nombre est différent de 0, on boucle
    while (number != 0){
        //Var binary devient  l'entier de modulo de nombre incrémenté de binary
        binary = parseInt(number%2) + binary;
        //Var nombre devient l'entier de la division par 2 de nombre
        number = parseInt(number/2);
    }
    //On retourne le résultat en binaire
    return binary;
};


/*Méthode qui renvoie le binaire en nombre*/
//
crispi.binaryToNumber=function(binary) {
    //Initialisation de variables
    var i;
    var table = [];
    //Transformation du binaire en tableau
    table = (""+binary).split("");
    console.log(table);
    var res=0;
    //Boucle sur la longeur du tableau binaire
    for (i=table.length - 1; i >= 0 ;i--){
        if(table[i]!=0) {res+= Math.pow(2,table.length-1-i);}
    }
    return res;
};