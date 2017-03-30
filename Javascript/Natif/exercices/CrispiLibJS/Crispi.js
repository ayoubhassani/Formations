/**
 * @class Crispi
 * @singleton
 *
 * @author Gasquez Christoph <christophe@gasquez.fr>
 *
 * ##Bibliothèque de fonction en js
 *
 * Ensemble des fonctions que je crée au fur et à mesure de mon apprentissage du langage Javascript:
 *
 */
var Crispi = Crispi || {};


/**
 * @method addEvent Permet de gérer l'ajout d'évennements suivant le navigateur de l'utilisatueur.
 * @param {String} Element Id de la Div visé pal le add Event.
 * @param {String} EventName Évennement à ajouter ('load', 'click', 'change'…).
 * @param {Function} fonction Fonction à appeler à l'évennement.
 *
 * ##Utilisation :
 *
 * Work in progress!
 *
 * ## Fonction :
 *
 *      crispi.addEvent = function () {
 *          if (Element.addEventListener){
 *          }else if(Element.attachEvent){
 *              element.attachEvent(EventName,fonction);
 *          }
 *      };
 *
 */
Crispi.addEvent = function (Element, EventName, fonction) {
    if (Element.addEventListener) {
        Element.addEventListener(EventName, fonction);
    } else if (Element.attachEvent) {
        element.attachEvent(EventName, fonction);
    }
    return true;

};


/**
 * @method ajaxEvent Methode de création d'évennement Ajax
 * @param {String} method Type de la méthode employé (POST, GET, PUT, DELETE).
 * @param {String} file Fichier appelé par la méthode ajax (ex : ajax/myajax.php).
 * @param {String} element ID de l'élément ou insérer le resultat de l'appel ajax.
 * @param {Function/String} success Fonction ou Autre, en cas de xmlHttpRequest.status == 200.
 * @param {Function/String} error Fonction ou Autre, en cas de xmlHttpRequest.status != 200.
 * @param {boolean} sync Synchronisation true par défault.
 *
 *      Crispi.ajaxEvent('post', 'ajax.php', 'myDiv', XMLHttpRequest.reponseText
 */
Crispi.ajaxEvent = function (method, file, element, success, error, sync) {

    var xmlHttp = new XMLHttpRequest(); //Création d'objet GMLHttpRequest
    var is_sync = sync || true;
    var succes = success || xmlHttp.reponseText;
    var errorr = error || 'Erreur l\'ors du chargement';
    xmlHttp.open(method, file, is_sync);
    xmlHttp.onreadystatechange = function () {

        if (xmlHttp.readyState == 4) {//request finish

            if (xmlHttp.status == 200) {//Statu OK
                //tout est ok
                if (succes instanceof Function) {
                    succes(this);
                } else {
                    document.getElementById(element).innerHTML = xmlHttp.responseText;
                }
            } else {
                if (errorr instanceof Function) {
                    errorr(this);
                } else {
                    alert(errorr + xmlHttp.status);
                }
            }
        }

    };
    xmlHttp.send();
};


/**
 * @method addForm Creation d'un formulaire dans le tag id envoyé en param.
 * @param {string} idTag Id de la balise dans la quelle insérer le formulaire.
 * @param {string} method Methode de validation du formulaire.
 * @param {string} action Action du formulaire.
 * @param {string} inputs Objet d'inputs à envoyé à la fonction pour définir les widgets.
 *
 *      ObjetInputsAEnvoyer = [{'id':'number',
 *      'label':'Number',
 *      'type':'number',
 *      'min':'0',
 *      'max':'100',
 *      'step':'10',
 *      'value':'',
 *      'value': [{'value':'Value1','inner':'inner 1', 'checked':false},
 *                {'value':'Value2','inner':'inner 2', 'checked':true},
 *                {'value':'Value3','inner':'inner 3'}],
 *       'option':[{'value':'Value1','inner':'inner 1'},
 *                {'value':'Value2','inner':'inner 2'},
 *                {'value':'Value3','inner':'inner 3'},
 *      'checked':'',
 *      'placeholder':'',
 *      'checked': ''}];
 *
 */
Crispi.addForm = function (idTag, method, action, inputs) {
    var tag = document.getElementById(idTag);
    var form = document.createElement('form');
    form.setAttribute('method', method);
    form.setAttribute('action', action);
    tag.appendChild(form);
    var submit = document.createElement('button');
    submit.setAttribute('id', 'submit_' + idTag);
    submit.setAttribute('value', 'Valider');
    submit.innerHTML = 'Valider';

    for (var i = 0; i < inputs.length; i++) {

        var data = inputs[i];
        var group = document.createElement('div');
        var mylabel = document.createElement('label');
        var myinput = document.createElement('input');
        var myradio = [];
        var myoption;
        var text = [];

        group.setAttribute('class', 'groupForm');
        form.appendChild(group);

        mylabel.setAttribute('id', 'label_' + data.id);
        mylabel.setAttribute('for', data.id);
        mylabel.innerHTML = data.label + ' :';
        group.appendChild(mylabel);

        myinput.setAttribute('id', data.id);
        myinput.setAttribute('type', data.type);
        myinput.setAttribute('name', data.id);

        switch (data.type) {
            case 'text'://ok
            case 'email'://ok
            case 'password'://ok
            case 'tel': //ok
                if (data.placeholder == '' || data.placeholder == null) {
                    myinput.setAttribute('placeholder', data.label);
                }
                else {
                    myinput.setAttribute('placeholder', data.placeholder);
                }
                group.appendChild(myinput);
                break;

            case 'color'://ok
            case 'time'://ok
                group.appendChild(myinput);
                break;

            case 'number'://ok
                if (data.step != '' || data.step != null) {
                    myinput.setAttribute('step', data.step);
                }
                if (data.min != '' || data.min != null) {
                    myinput.setAttribute('min', data.min);
                }
                if (data.min != '' || data.min != null) {
                    myinput.setAttribute('max', data.max);
                }
                group.appendChild(myinput);
                break;
            case 'range'://ok
                myinput.setAttribute('step', data.step);
                myinput.setAttribute('min', data.min);
                myinput.setAttribute('max', data.max);
                group.appendChild(myinput);
                break;

            case 'textarea'://ok
                myinput = document.createElement('textarea');
                if (data.rows != '' || data.rows != null){
                myinput.setAttribute('rows', data.rows);
                }
                if (data.cols != '' || data.cols != null){
                    myinput.setAttribute('cols', data.cols);
                }

                group.appendChild(myinput);
                break;

            case 'select':
                myinput = document.createElement('select');
                for (o=0;o<data.option.length; o++){
                    myoption = document.createElement('option');
                    myoption.setAttribute('id', data.option[o].value);
                    myoption.setAttribute('name', data.id);
                    myoption.innerHTML = data.option[o].inner;

                    myinput.appendChild(myoption);
                }
                group.appendChild(myinput);
                break;

            case 'radio':
                for (v=0;v<data.value.length; v++){
                    myradio[v] = document.createElement('input');
                    myradio[v].setAttribute('type', data.type);
                    myradio[v].setAttribute('id', data.value[v].value);
                    myradio[v].setAttribute('name', data.id);
                    if (data.value[v].checked == true){
                        myradio[v].setAttribute('checked','true');
                    }

                    text[v] = document.createTextNode(data.value[v].inner);

                    group.appendChild(myradio[v]);
                    group.appendChild(text[v]);

                }
                // group.appendChild(myvalue);
                console.log('test');
                break;



        }

        form.appendChild(submit);
    }

};


//MES TESTS DE FONCTIONS
//Crispi.addEvent(window, 'load', function () {
//
//    Crispi.addForm('idDiv', 'post', '#', [{
//        'id': 'nom',
//        'label': 'Nom',
//        'type': 'text',
//        'min': '',
//        'max': '',
//        'step': '',
//        'value': '',
//        'checked': '',
//        'placeholder': ''
//    },
//        {
//            'id': 'prenom',
//            'label': 'Prénom',
//            'type': 'text',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': true,
//            'placeholder': ''
//        },
//        {
//            'id': 'email',
//            'label': 'Email',
//            'type': 'email',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': true,
//            'placeholder': 'email@domain.fr'
//        },
//        {
//            'id': 'password',
//            'label': 'Mot de passe',
//            'type': 'password',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': true,
//            'placeholder': ''
//        },
//        {
//            'id': 'color',
//            'label': 'Couleur',
//            'type': 'color',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': true,
//            'placeholder': ''
//        },
//        {
//            'id': 'tel',
//            'label': 'Téléphone',
//            'type': 'tel',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': true,
//            'placeholder': ''
//        },
//        {
//            'id': 'time',
//            'label': 'Heure',
//            'type': 'time',
//            'min': '',
//            'max': '',
//            'step': '',
//            'value': '',
//            'checked': '',
//            'placeholder': ''
//        },
//        {
//            'id': 'range',
//            'label': 'Range',
//            'type': 'range',
//            'min': '0',
//            'max': '100',
//            'step': '1',
//            'value': '',
//            'checked': '',
//            'placeholder': ''
//        },
//        {
//            'id': 'number',
//            'label': 'Number',
//            'type': 'number',
//            'min': '0',
//            'max': '100',
//            'step': '10',
//            'value': '',
//            'checked': '',
//            'placeholder': ''
//        },
//        {
//            'id': 'select',
//            'label': 'Select',
//            'type': 'select',
//            'min': '0',
//            'max': '100',
//            'step': '10',
//            'value': '',
//            'checked': '',
//            'placeholder': '',
//            'option':[{'value':'Value1','inner':'inner 1'},
//                {'value':'Value2','inner':'inner 2'},
//                {'value':'Value3','inner':'inner 3'}]
//        },
//        {
//            'id': 'textarea',
//            'label': 'Textarea',
//            'type': 'textarea',
//            'rows': '5',
//            'cols': '',
//            'step': '',
//            'value': 'Exemple textarea',
//            'checked': '',
//            'placeholder': ''
//        },
//        //{
//            'id': 'radio',
//            'label': 'Radio',
//            'type': 'radio',
//            'value': [{'value':'Value1','inner':'inner 1', 'checked':false},
//                {'value':'Value2','inner':'inner 2', 'checked':true},
//                {'value':'Value3','inner':'inner 3'}]
//        }
//        ]);
//
//});
//Pour mettre à jour la documentation : $ jsduck Sites/firstjavascript/CrispiLibJS/ --builtin-classes --output Sites/firstjavascript/CrispiLibJS/Docs