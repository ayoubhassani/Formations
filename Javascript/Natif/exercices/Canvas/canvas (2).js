window.addEventListener('load', function(){

    //Mes Variables
    var canvas  = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    var color = '#010101';
    var size = document.getElementById('size').value;
    var tool = document.getElementById('tool').value;

    var action = false;
    var gomme = false;
    var bg_color = '#FFFFFF';

    var btn_color = document.getElementById('color');
    var btn_clear = document.getElementById('clear');
    var btn_size  = document.getElementById('size');
    var btn_restart = document.getElementById('restart');
    var btn_tool  = document.getElementById('tool');
    var btn_bg_color = document.getElementById('bg_color');

    //Mes Évennements
    canvas.addEventListener('mousedown',down);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', up);

    btn_color.addEventListener('change', changeColor);
    btn_clear.addEventListener('click', changeClear);
    btn_size.addEventListener('change', changeSize);
    btn_restart.addEventListener('click', restart);
    btn_tool.addEventListener('change', changeTool);
    btn_bg_color.addEventListener('change', changeBgColor);

    //Initialisation couleur canvas
    canvas.setAttribute('style', 'background-color: '+bg_color+';');


    //Mes Fonctions
    function down() {
        action=true;
    }
    function up() {
        action=false;
    }

    function draw() {

        var canX = canvas.offsetLeft;
        var canY = canvas.offsetTop;
        var mouseX = event.clientX - canX;
        var mouseY = event.clientY - canY;

        context.fillStyle = color;
        if (action==true) {
            if (tool=='square'){

                context.fillRect(mouseX - (size / 2), mouseY - (size / 2), size, size);

            }
            else {
                // console.log('outil indisponible');
                // context.arc(mouseX, mouseY, size, 0, 2 * Math.PI, true);
                context.beginPath();
                context.arc(mouseX, mouseY, (size/2), 0, 2 * Math.PI);
                context.fill();
            }
        }
    }
    
    //Modification de la couleur
    function changeColor() {
        color = btn_color.value;
    }

    //Activation ou désactivation de la gomme
    function changeClear() {
        gomme = gomme?false:true;
        color = gomme === true ? bg_color:btn_color.value;
        btn_clear.value = gomme===true?'Stop':'Gomme';
    }

    //Change le taille du pointeur
    function changeSize() {
        size = btn_size.value;
    }

    //Effacer tout le canvas
    function restart() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    //Changer l'outil (la forme selctionné
    function changeTool() {
        tool = btn_tool.value;
    }

    //Changer le fond du canvas
    function changeBgColor() {
        bg_color = btn_bg_color.value;
        canvas.setAttribute('style', 'background-color: '+bg_color+';');
    }




});