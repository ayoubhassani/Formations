var ayoub = ayoub || {};


ayoub.decToBinary=function(dec){
    var res = "";
    while (dec != 0) {
        res += dec % 2;
        dec = parseInt(dec / 2);
    }
    return res.split("").reverse().join("");
};

ayoub.BinaryToDecimal= function(d) {
    var t = ("" + d).split("");
    var res = 0;
    for (var i = 0; i < t.length; i++) {
        if (t[t.length - i - 1] == "1") res += Math.pow(2, i);
    }
    return res;
}


var ecran = document.getElementById('ecran');

var boutons = document.getElementsByTagName('button');

console.log(boutons);

var nombre = '';
var result = '';
var affich;

for(i=0; i<boutons.length;i++) {
    boutons[i].addEventListener('click', function () {
        var btn = this.innerHTML;

        switch (btn){
            case 'HH':
                var date = new Date(Date.now()).toLocaleTimeString();
                ecran.innerHTML = date;
                break;
            case 'C':
                nombre = '';
                ecran.innerHTML = '0';
                break;
            case 'bin':
                nombre = ayoub.decToBinary(nombre);
                ecran.innerHTML = nombre;
                break;
            case 'dec':
                nombre = ayoub.BinaryToDecimal(nombre);
                ecran.innerHTML = nombre;
                break;
            case '√':
                nombre = Math.sqrt(nombre);
                ecran.innerHTML = nombre;
                break;
            case '²':
                nombre = Math.pow(nombre,2);
                ecran.innerHTML = nombre;
                break;
            case '=':
                var percent = nombre.search("%");
                if(percent > 0) {
                    var eclat = nombre.split("%").reverse().join("*");

                    nombre =  eclat + "/100" ;
                }
                console.log(percent);
                console.log(nombre);

                result = eval(nombre);
                ecran.innerHTML = result;
                break;
            default:
                nombre += btn;
                ecran.innerHTML = nombre;
                break;
        }
    });
}