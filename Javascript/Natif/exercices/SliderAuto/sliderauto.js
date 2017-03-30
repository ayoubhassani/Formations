window.addEventListener('load', function () {

//MON JSON
    var images = [
        {url:'img/Chrysanthemum.jpg'},
        {url:'img/Desert.jpg'},
        {url:'img/Hydrangeas.jpg'},
        {url:'img/Jellyfish.jpg'},
        {url:'img/Koala.jpg'}
    ];

//Mon body
    var body    = document.body;

//CLASSES
    //classe creation du html
    function CreateHtml(images) {

        this.createHtmlVar();
        this.createHtmlId();
        this.createHtmlStyle();
        this.createHtmlContent();
        this.createHtmlImgSrc();
        this.createHtmlEvent();


        this.affichageHtml();
    }

    CreateHtml.prototype.createHtmlVar = function () {
    this.min_i   = 0;
    this.max_i   = images.length-1;
    this.is_play = true;
    //Var de div
    this.div_screen      = document.createElement('div');
    this.div_img         = document.createElement('img');
    this.div_btn_right   = document.createElement('div');
    this.div_btn_left    = document.createElement('div');
    this.div_btn_middle  = document.createElement('div');
};
    CreateHtml.prototype.createHtmlId = function () {
        this.div_screen.id       = 'div_screen';
        this.div_img.id          = 'div_img'+this.min_i;
        this.div_btn_right.id    = 'div_btn_right';
        this.div_btn_left.id     = 'div_btn_left';
        this.div_btn_middle.id      = 'div_btn_middle';
    };
    CreateHtml.prototype.createHtmlStyle = function () {
        //Add STYLE
        body.style  ='min-width: 350px;' +
            'max-width: 800px;' +
            'margin:auto;' +
            'background-color: #404040;';

        this.div_screen.style    ='text-align: center;' +
            'position: relative;' +
            'overflow: hidden;';
        this.div_img.style       ='width:100%;';

        this.div_btn_right.style ='position: absolute;' +
            'padding-top:2%;'+
            // 'height:10%;' +
            'width:10%;' +
            'top:0;' +
            'right:0;' +
            'background-color: rgba(255, 255, 255, 0.5);' +
            'color :#ffffff;' +
            'font-size:1.6em;' +
            'font-family: "Helvetica Neue", sans-serif;' +
            'border-radius:0 0 0 8px;' +
            'transform: translateY(-10px);' +
            'padding-bottom:5px;';
        this.div_btn_right.style.zIndex = 999;

        this.div_btn_left.style  ='position: absolute;' +
            'padding-top:2%;'+
            // 'height:10%;' +
            'width:10%;' +
            'top:0;' +
            'left:0;' +
            'background-color: rgba(255, 255, 255, 0.5);' +
            'color :#ffffff;' +
            'font-size:1.6em;' +
            'font-family: "Helvetica Neue", sans-serif;' +
            'border-radius: 0 0 8px 0;' +
            'transform: translateY(-10px);' +
            'padding-bottom:5px;';
        this.div_btn_left.style.zIndex = 999;

        this.div_btn_middle.style ='position: absolute;' +
            'padding-top:2%;'+
            // 'height:10%;' +
            'width:10%;' +
            'top:0;' +
            'left:45%;' +
            'background-color: rgba(255, 255, 255, 0.5);' +
            'color :#ffffff;' +
            'font-size:1.5em;' +
            'font-family: "Helvetica Neue", sans-serif;' +
            'border-radius: 0 0 8px 8px;' +
            'transform: translateY(-10px);' +
            'padding-bottom:5px;';
        this.div_btn_middle.style.zIndex = 999;
    };
    CreateHtml.prototype.createHtmlContent = function () {
        //Ajout de contenu dans les div
        this.div_btn_right.innerHTML     = '&rarr;';
        this.div_btn_left.innerHTML      = '&larr;';
        this.div_btn_middle.innerHTML    ='||';
    };
    CreateHtml.prototype.createHtmlImgSrc = function () {
        this.div_img.src = images[this.min_i].url;
    };
    CreateHtml.prototype.affichageHtml = function () {
        document.body.appendChild(this.div_screen);
        div_screen.appendChild(this.div_img);
        div_screen.appendChild(this.div_btn_right);
        div_screen.appendChild(this.div_btn_left);
        div_screen.appendChild(this.div_btn_middle);
    };

    CreateHtml.prototype.createHtmlEvent = function () {
        this.div_btn_right.addEventListener('click', function () {
            my_html.slideRight();
        },false);
        this.div_btn_left.addEventListener('click', function () {
            my_html.slideLeft();
        },false);
        this.div_btn_middle.addEventListener('click',  function () {
            my_html.slideMiddle();
        },false);
        this.div_screen.addEventListener('mousemove', function () {
            my_html.slideMouseOver();
        });
        this.div_screen.addEventListener('mouseout',function () {
            my_html.slideMouseOut();
        })
    };

    CreateHtml.prototype.slideRight = function() {
        var cur_img = document.createElement('img');
        var ex_img = document.createElement('img');

        cur_img.src = this.div_img.src;
        ex_img.src  = this.div_img.src;
        cur_img.style ='width:100%;' +
        'visibility: hidden;';
        cur_img.style.zIndex = '-1';
        ex_img.style  ='width:100%;' +
            'position:absolute;' +
            'top:0;' +
            'left:0px;';
        ex_img.style.zIndex ='0';

        this.div_screen.appendChild(cur_img);
        this.div_screen.appendChild(ex_img);

        i = (parseInt((this.div_img.id.split('div_img')[1]))+1);
        i = i>this.max_i?0:i;

        this.div_img.id = 'div_img'+i;
        this.div_img.src = images[i].url;

        var z = 100;
        var w = 0;
        animation();
        function animation() {
            setTimeout(function () {
                if (z>0){
                    z--;
                    w++;
                    my_html.div_img.style ='width:100%;' +
                        'position:absolute;' +
                        'top:0;' +
                        'left:'+z+'%;';
                    ex_img.style ='width:100%;' +
                        'position:absolute;' +
                        'top:0;' +
                        'right:'+w+'%;';
                    ex_img.style.zIndex = '0';
                    animation();
                }else{
                    my_html.div_img.style ='width:100%;';
                    cur_img.parentNode.removeChild(cur_img);
                    ex_img.parentNode.removeChild(ex_img);
                }
            });
        }
    };
    CreateHtml.prototype.slideLeft = function() {
        var cur_img = document.createElement('img');
        var ex_img = document.createElement('img');

        cur_img.src = this.div_img.src;
        ex_img.src  = this.div_img.src;
        cur_img.style ='width:100%;' +
            'visibility: hidden;';
        cur_img.style.zIndex = '-1';
        ex_img.style  ='width:100%;' +
            'position:absolute;' +
            'top:0;' +
            'left:0px;';
        ex_img.style.zIndex ='0';

        this.div_screen.appendChild(cur_img);
        this.div_screen.appendChild(ex_img);

        i = (parseInt((this.div_img.id.split('div_img')[1])));
        i = i==this.min_i?this.max_i:i-1;

        this.div_img.id = 'div_img'+i;
        this.div_img.src = images[i].url;

        var z = 100;
        var w = 0;
        animation();
        function animation() {
            setTimeout(function () {
                if (z>0){
                    z--;
                    w++;
                    my_html.div_img.style ='width:100%;' +
                        'position:absolute;' +
                        'top:0;' +
                        'right:'+z+'%;';
                    ex_img.style ='width:100%;' +
                        'position:absolute;' +
                        'top:0;' +
                        'left:'+w+'%;';
                    ex_img.style.zIndex = '0';
                    animation();
                }else{
                    my_html.div_img.style ='width:100%;';
                    cur_img.parentNode.removeChild(cur_img);
                    ex_img.parentNode.removeChild(ex_img);
                }
            });
        }
    };
    CreateHtml.prototype.slideMiddle = function () {
        clearTimeout(myTime);
        clearTimeout(myTime2);
        clearTimeout(myTime3);
        this.div_btn_middle.innerHTML =this.is_play==true?'||':'&gt;';
        // this.is_play = this.is_play==true?false:true;
        if (this.is_play==true){
            this.is_play=false;
        }else {
            this.is_play=true;
            counter();
            player();
        }
    };

    CreateHtml.prototype.slideMouseOver = function () {

        my_html.div_btn_middle.style.backgroundColor = ('rgba(255, 255, 255, 0.5)');
        my_html.div_btn_middle.style.color = '#ffffff';
        my_html.div_btn_left.style.backgroundColor = ('rgba(255, 255, 255, 0.5)');
        my_html.div_btn_left.style.color = '#ffffff';
        my_html.div_btn_right.style.backgroundColor = ('rgba(255, 255, 255, 0.5)');
        my_html.div_btn_right.style.color = '#ffffff';
    };

    CreateHtml.prototype.slideMouseOut = function () {
        my_html.div_btn_middle.style.backgroundColor = ('rgba(255, 255, 255, 0.2)');
        my_html.div_btn_middle.style.color = 'rgba(255, 255, 255, 0.5)';
        my_html.div_btn_left.style.backgroundColor = ('rgba(255, 255, 255, 0.2)');
        my_html.div_btn_left.style.color = 'rgba(255, 255, 255, 0.5)';
        my_html.div_btn_right.style.backgroundColor = ('rgba(255, 255, 255, 0.2)');
        my_html.div_btn_right.style.color = 'rgba(255, 255, 255, 0.5)';
    };

//MES OBJETS
var my_html = new CreateHtml();

//Mon Scipt
    player();
    counter();

    var myTime;
    var myTime2;
    var myTime3;

    function player() {

        myTime = setTimeout(function () {
            if (my_html.is_play == true){
                counter();
                player();
                my_html.slideRight();
            }

        },2100);
    }
    function counter() {
        my_html.div_btn_middle.innerHTML = '3';
        myTime2 = setTimeout(function () {
            my_html.div_btn_middle.innerHTML = '2';
            myTime3 = setTimeout(function () {
                my_html.div_btn_middle.innerHTML = '1';
            },700);
        },700);
    }
});