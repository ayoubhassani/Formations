/**
 *  #Classe CreateForm :
 *  Classe permettant d'instancier un nouveau formulaire et ensemble de méthodes pour modifier, surcharger et publier celui-ci.
 *
 * Gasquez Christoph <christophe@gasquez.fr>
 *
 * @class CreateForm
 * @constructor Création d'un Element de type form.
 *
 * ##Utilisation :
 * Création d'un formulaire à l'aide de la classe CreateForm, de CrispiLib.js
 *
 *      var f = new Crispi.CreateForm();
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm = function () {
 *          this.form = document.createElement('form');
 *      };
 *
 */
Crispi.CreateForm = function (methode, action) {
    this.form = document.createElement('form');
    this.form.setAttribute('method', methode);
    this.form.setAttribute('action', action);

};


/**
 * @method publishForm Placer le formulaire dans le tag ou l'Id est le paramètre envoyé:
 * @param {String} idTag Id de l'élément dans le quel placer le formulaire.
 *
 * ##Utilisation :
 *
 *      var f = new Crispi.CreateForm();
 *      f.publishForm('idTag');
 *
 * ##Fonction :
 *      Crispi.CreateForm.prototype.publishForm = function (idTag) {
 *          tag = document.getElementById(idTag);
 *          tag.appendChild(this.form);
 *      };
 */
Crispi.CreateForm.prototype.publishForm = function (idTag) {
    var tag = document.getElementById(idTag);

    //Pour Test
    var button = document.createElement('button');
    button.innerHTML = 'button for test';
    this.form.appendChild(button);
    //Fin pour test

    tag.appendChild(this.form);
};


/**
 * @method inputText Ajouter un Input de type text à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} placeholder Ignoré si false. Si placeholder, ajout de l'attribut placeholder à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre.
 * @param {Number} maxlength Ingnoré si false ou not Integer. Si maxlength, ajout de l'attribut à l'élément créé avec la valeur de l'integer envoyé en paramètre.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputText('id', 'name', 'label', 'palceholder', Int);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputText =function (id, name, label, placeholder, maxlength) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'text';
 *          input.id = id;
 *          input.name = name;
 *          if (placeholder){
 *              input.placeholder = placeholder;
 *          }
 *          if (maxlength && Number.isInteger(maxlength)){
 *              input.maxLength = maxlength;
 *          }
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputText = function (id, name, label, placeholder, maxlength) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
    var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.name = name;
    if (placeholder){
        input.placeholder = placeholder;
    }
    if (maxlength && Number.isInteger(maxlength)){
        input.maxLength = maxlength;
    }
    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputEmail Ajouter un Input de type email à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {string} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} placeholder Ignoré si false. Si placeholder, ajout de l'attribut placeholder à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre.
 * @param {Number} maxlength Ingnoré si false ou not Integer. Si maxlength, ajout de l'attribut à l'élément créé avec la valeur de l'integer envoyé en paramètre.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputEmail('id', 'name', 'label', 'palceholder', Int);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputEmail =function (id, name, label, placeholder, maxlength) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'email';
 *          input.id = id;
 *          input.name = name;
 *          if (placeholder){
 *              input.placeholder = placeholder;
 *          }
 *          if (maxlength && Number.isInteger(maxlength)){
 *              input.maxLength = maxlength;
 *          }
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputEmail = function (id, name, label, placeholder, maxlength) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'email';
    input.id = id;
    input.name = name;
    if (placeholder){
        input.placeholder = placeholder;
    }
    if (maxlength && Number.isInteger(maxlength)){
        input.maxLength = maxlength;
    }
    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputPassword Ajouter un Input de type passwond à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} placeholder Ignoré si false. Si placeholder, ajout de l'attribut placeholder à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre.
 * @param {Number} maxlength Ingnoré si false ou not Integer. Si maxlength, ajout de l'attribut à l'élément créé avec la valeur de l'integer envoyé en paramètre.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputPassword('id', 'name', 'label', 'palceholder', Int);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputPassword =function (id, name, label, placeholder, maxlength) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'password';
 *          input.id = id;
 *          input.name = name;
 *          if (placeholder){
 *              input.placeholder = placeholder;
 *          }
 *          if (maxlength && Number.isInteger(maxlength)){
 *              input.maxLength = maxlength;
 *          }
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputPassword = function (id, name, label, placeholder, maxlength) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'password';
    input.id = id;
    input.name = name;
    if (placeholder){
        input.placeholder = placeholder;
    }
    if (maxlength && Number.isInteger(maxlength)){
        input.maxLength = maxlength;
    }
    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputTel Ajouter un Input de type tel à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} placeholder Ignoré si false. Si placeholder, ajout de l'attribut placeholder à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre.
 * @param {Number} maxlength Ingnoré si false ou not Integer. Si maxlength, ajout de l'attribut à l'élément créé avec la valeur de l'integer envoyé en paramètre.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputTel('id', 'name', 'label', 'palceholder', Int);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputTel =function (id, name, label, placeholder, maxlength) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'tel';
 *          input.id = id;
 *          input.name = name;
 *          if (placeholder){
 *              input.placeholder = placeholder;
 *          }
 *          if (maxlength && Number.isInteger(maxlength)){
 *              input.maxLength = maxlength;
 *          }
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputTel = function (id, name, label, placeholder, maxlength) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'tel';
    input.id = id;
    input.name = name;
    if (placeholder){
        input.placeholder = placeholder;
    }
    if (maxlength && Number.isInteger(maxlength)){
        input.maxLength = maxlength;
    }
    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputColor Ajouter un Input de type couleur à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} value Ignoré si false. Si value, ajout de l'attribut value à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre, ex : #FFFFFF pour le blanc.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputColor('id', 'name', 'label', 'value');
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputColor =function (id, name, label, value) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'tel';
 *          input.id = id;
 *          input.name = name;
 *          if (value){
 *              input.value = value;
 *          }
 *
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputColor = function (id, name, label, value) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'color';
    input.id = id;
    input.name = name;
    if (value){
        input.value = value;
    }

    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputTime Ajouter un Input de type time à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} value Ignoré si false. Si value, ajout de l'attribut value à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre, ex : '12:30:05'.
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputTime('id', 'name', 'label', 'value');
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputTime =function (id, name, label, value) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'time';
 *          input.id = id;
 *          input.name = name;
 *          if (value){
 *              input.value = value;
 *          }
 *
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputTime = function (id, name, label, value) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'time';
    input.id = id;
    input.name = name;
    if (value){
        input.value = value;
    }

    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputNumber Ajouter un Input de type number à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {Number/String} value Ignoré si false. Si value, ajout de l'attribut value à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre, ex : '12:30:05'.
 * @param {Number/String} min Ignoré si false. Si min, ajout de l'attribut min à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '0'.
 * @param {Number/String} max Ignoré si false. Si max, ajout de l'attribut max à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '100'.
 *
 * ATTENTION : Si Min, Max ou Value sont égale à 0, alors, envoyer le carractère 0 (ex : '0'):
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputNumber('id', 'name', 'label', 'value', min, max);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputNumber =function (id, name, label, value, min, max) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'number';
 *          input.id = id;
 *          input.name = name;
 *          if (value){
 *              input.value = value;
 *          }
 *          if (min){
 *              input.min = min;
 *          }
 *          if (max){
 *              input.max = max;
 *          }
 *
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputNumber = function (id, name, label, value, min, max) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'number';
    input.id = id;
    input.name = name;
    if (value){
        input.value = value;
    }
    if (min){
        input.min = min;
    }
    if (max){
        input.max = max;
    }

    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputRange Ajouter un Input de type Range à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {Number/String} value Ignoré si false. Si value, ajout de l'attribut value à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre, ex : '12:30:05'.
 * @param {Number/String} min Ignoré si false. Si min, ajout de l'attribut min à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '0'.
 * @param {Number/String} max Ignoré si false. Si max, ajout de l'attribut max à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '100'.
 * @param {Number/String} step Ignoré si false. Si step, ajout de l'attribut step à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '1'.
 *
 * ATTENTION : Si Min, Max, Value ou Step sont égale à 0, alors, envoyer le carractère 0 (ex : '0'):
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputRange('id', 'name', 'label', 'value', min, max, step);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputRange =function (id, name, label, value, min, max, step) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('input');
 *          input.type = 'range';
 *          input.id = id;
 *          input.name = name;
 *          if (value){
 *              input.value = value;
 *          }
 *          if (min){
 *              input.min = min;
 *          }
 *          if (max){
 *              input.max = max;
 *          }
 *          if (step){
 *              input.step = step;
 *          }
 *
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputRange = function (id, name, label, value, min, max, step) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.name = name;
    if (value){
        input.value = value;
    }
    if (min){
        input.min = min;
    }
    if (max){
        input.max = max;
    }
    if (step){
        input.step = step;
    }

    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputTextarea Ajouter un Input de type textarea à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux élément créé (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {String} text Ignoré si false. Si text, ajout du text aver innen.html à l'élément input créé avac la valeur de la chaine de carractère envoyé en paramètre, ex : 'Début du text'.
 * @param {Number/String} rows Ignoré si false. Si rows, ajout de l'attribut rows à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '0'.
 * @param {Number/String} cols Ignoré si false. Si cols, ajout de l'attribut cols à l'élément input créé avac la valeur de l'integer envoyé en paramètre, ex : '100'.
 *
 * ATTENTION : Si Rows ou Cols sont égale à 0, alors, envoyer le carractère 0 (ex : '0'):
 *
 * ##Utilisation :
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputTextarea('id', 'name', 'label', 'text', rows, cols);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputTextarea =function (id, name, label, text, rows, cols) {
 *          var group = document.createElement('div');
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          var input = document.createElement('textarea');
 *          input.id = id;
 *          input.name = name;
 *          if (text){
 *              input.innerHTML = text;
 *          }
 *          if (rows){
 *              input.rows = rows;
 *          }
 *          if (cols){
 *              input.cols = cols;
 *          }
 *
 *          group.appendChild(input);
 *          this.form.appendChild(group);
 *          };
 *
 */
Crispi.CreateForm.prototype.inputTextarea = function (id, name, label, text, rows, cols) {
    var group = window.document.createElement('div');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';

    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    var input = document.createElement('textarea');
    input.id = id;
    input.name = name;
    if (text){
        input.innerHTML = text;
    }
    if (rows){
        input.rows = rows;
    }
    if (cols){
        input.cols = cols;
    }


    group.appendChild(input);
    this.form.appendChild(group);
};


/**
 * @method inputRadios Ajouter un ensemble d'Input type radio à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux éléments créés (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {Object} liste Liste des valeur, text et checked de chaque input radio créer.
 *
 * ##Utilisation :
 *
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputRadio('idRadio', 'MyRadios', 'Faites votre chois :',
 *          [{
 *              'value': 'radio1',
 *              'text': '1er Radio'
 *          },{
 *              'value': 'radio2',
 *              'text': 'Radio 2',
 *              'checked': true
 *          }]);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputRadios = function (id, name, label, liste) {
 *          var group = window.document.createElement('div');
 *          var input = [];
 *          var text = [];
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          for (var i=0; i<liste.length; i++){
 *          input[i] = document.createElement('input');
 *          input[i].type = 'radio';
 *          input[i].id = id+i;
 *          input[i].name = name;
 *          input[i].value = liste[i].value;
 *          text[i]=document.createTextNode(liste[i].text);
 *          if (liste[i].checked){
 *              input[i].setAttribute('checked', 'true');
 *          }
 *          group.appendChild(input[i]);
 *          group.appendChild(text[i]);
 *          }
 *          this.form.appendChild(group);
 *      };
 *
 *
 */
Crispi.CreateForm.prototype.inputRadios = function (id, name, label, liste) {
    var group = window.document.createElement('div');
    var input = [];
    var text = [];
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';
    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    for (var i=0; i<liste.length; i++){
        input[i] = document.createElement('input');
        input[i].type = 'radio';
        input[i].id = id+i;
        input[i].name = name;
        input[i].value = liste[i].value;
        text[i]=document.createTextNode(liste[i].text);
        if (liste[i].checked){
            input[i].setAttribute('checked', 'true');
        }
        group.appendChild(input[i]);
        group.appendChild(text[i]);
    }
    this.form.appendChild(group);
};


/**
 * @method inputSelect Ajouter un ensemble d'Input type Select < Option à l'objet CreatForm.
 * @param {String} id ID à ajouter à l'élément créé.
 * @param {String} name Nom à ajouter aux éléments créés (à l'attribut name de l'input et, si label, au for de l'élément label).
 * @param {String} label Ignoré si false. Si label, ajout de l'élément label avec inner.html du paramètre envoyé.
 * @param {Object} liste Liste des valeur et text de chaque input option créer.
 *
 * ##Utilisation :
 *
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputSelect('idSelect', 'MySelect', 'Faites votre chois :',
 *          [{
 *              'value': 'select1',
 *              'text': '1er select'
 *          },{
 *              'value': 'select2',
 *              'text': 'select 2'
 *          }]);
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.inputRadios = function (id, name, label, liste) {
 *          var group = window.document.createElement('div');
 *          var input = [];
 *          var text = [];
 *          group.id = 'form_group_'+id;
 *          group.className = 'c_from_group';
 *          if (label){
 *              var lab = document.createElement('label');
 *              lab.id = 'label_'+id;
 *              lab.htmlFor = id;
 *              lab.innerHTML = label;
 *              group.appendChild(lab);
 *          }
 *          for (var i=0; i<liste.length; i++){
 *          input[i] = document.createElement('input');
 *          input[i].type = 'radio';
 *          input[i].id = id+i;
 *          input[i].name = name;
 *          input[i].value = liste[i].value;
 *          text[i]=document.createTextNode(liste[i].text);
 *          if (liste[i].checked){
 *              input[i].setAttribute('checked', 'true');
 *          }
 *          group.appendChild(input[i]);
 *          group.appendChild(text[i]);
 *          }
 *          this.form.appendChild(group);
 *      };
 *
 *
 */
Crispi.CreateForm.prototype.inputSelect = function (id, name, label, liste) {
    var group = window.document.createElement('div');
    var option = [];
    var text = [];
    var select = window.document.createElement('select');
    group.id = 'form_group_'+id;
    group.className = 'c_from_group';
    select.id = id;
    select.name = id;
    if (label){
        var lab = document.createElement('label');
        lab.id = 'label_'+id;
        lab.htmlFor = id;
        lab.innerHTML = label;
        group.appendChild(lab);
    }
    for (var o=0; o<liste.length; o++){
        option[o] = document.createElement('option');
        option[o].id = id+o;
        option[o].name = name;
        option[o].value = liste[o].value;
        option[o].innerHTML =liste[o].text;


        select.appendChild(option[o]);
        group.appendChild(select);
    }
    this.form.appendChild(group);
};




/**
 * @method labelUpInput Placer les Label au dessus des Inputs.
 *
 * ##Utilisation :
 *
 *      var f = new Crispi.CreateForm(method, action);
 *      f.inputNumber('id', 'name', 'label', 'value', min, max);
 *      f.labelUpInput();
 *      f.publishForm('idTag);
 *
 * ##Fonction :
 *
 *      Crispi.CreateForm.prototype.labelUpInput = function () {
 *          var br = [];
 *          var lab = this.form.getElementsByTagName('label');
 *          for (var i=0; i<lab.length;i++) {
 *          br[i]= document.createElement('br');
 *          lab[i].after(br[i]);
 *          }
 *      };
 *
 */
Crispi.CreateForm.prototype.labelUpInput = function () {
    var br = [];
    var lab = this.form.getElementsByTagName('label');
    for (var i=0; i<lab.length;i++) {
        br[i]= document.createElement('br');
        lab[i].after(br[i]);
    }
};

//end.