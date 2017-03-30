window.addEventListener('load', function(){
	/*var canvas = {
		me: document.getElementById('canvas'),
		context :function(){return this.me.getContext("2d");},
		color : '#010101',
		size : document.getElementById('size').value,
		tool : document.getElementById('tool').value,
		action : false,
		gomme : false,
		bg_color : '#FFFFFF',
		btn_color : document.getElementById('color'),
		btn_clear: document.getElementById('clear'),
		btn_size  : document.getElementById('size'),
		btn_restart : document.getElementById('restart'),
		btn_tool  : document.getElementById('tool'),
		btn_bg_color: document.getElementById('bg_color'),
		
		

		down:function () {
			this.action=true;
		},
		up:function () {
			this.action=false;
		},
		 draw : function () {

			var canX = this.me.offsetLeft;
			var canY = this.me.offsetTop;
			var mouseX = event.clientX - canX;
			var mouseY = event.clientY - canY,
			size=this.size;

			this.context().fillStyle = this.color;
			if (this.action==true) {
				if (this.tool=='square'){

					this.context().fillRect(mouseX - (size / 2), mouseY - (size / 2), size, size);

				}
				else {
					this.context().beginPath();
					this.context().arc(mouseX, mouseY, (size/2), 0, 2 * Math.PI);
					this.context().fill();
				}
			}
		},
		changeColor: function () {
			this.color = this.btn_color.value;
		},

		//Activation ou désactivation de la gomme
		changeClear : function () {
			this.gomme = this.gomme?false:true;
			this.color = this.gomme === true ? this.bg_color:this.btn_color.value;
			this.btn_clear.value = this.gomme===true?'Stop':'Gomme';
		},

		//Change le taille du pointeur
		changeSize:function () {
			this.size = this.btn_size.value;
		},

		//Effacer tout le canvas
		restart :function () {
			this.context().clearRect(0, 0, this.me.width, this.me.height);
		},

		//Changer l'outil (la forme selctionné
		changeTool :function () {
			this.tool = this.btn_tool.value;
		},

		//Changer le fond du canvas
		changeBgColor :function () {
			this.bg_color = this.btn_bg_color.value;
			this.me.setAttribute('style', 'background-color: '+this.bg_color+';');
		},		
		initEvents:function(){
			console.log(this)
			this.me.addEventListener('mousedown',function(){
	
				canvas.down.call(canvas);
			});
			this.me.addEventListener('mousemove', function(){
	
				canvas.draw.call(canvas);
			});
			this.me.addEventListener('mouseup', function(){
	
				canvas.up.call(canvas);
			});

			this.btn_color.addEventListener('change', this.changeColor);
			this.btn_clear.addEventListener('click', this.changeClear);
			this.btn_size.addEventListener('change', this.changeSize);
			this.btn_restart.addEventListener('click', this.restart);
			this.btn_tool.addEventListener('change', this.changeTool);
			this.btn_bg_color.addEventListener('change', this.changeBgColor);
			this.me.setAttribute('style', 'background-color: '+this.bg_color+';');
		}
		
	};
	canvas.initEvents();
});*/

function Canvas2(){
	this.me = document.getElementById('canvas');
	this.context= this.me.getContext("2d");
	this.color = '#010101';
	this.size = document.getElementById('size').value;
	this.tool = document.getElementById('tool').value;
	this.action = false;
	this.gomme = false;
	this.bg_color = '#FFFFFF';
	this.btn_color= document.getElementById('color');
	this.btn_clear= document.getElementById('clear');
	this.btn_size  = document.getElementById('size');
	this.btn_restart = document.getElementById('restart');
	this.btn_tool  = document.getElementById('tool');
	this.btn_bg_color= document.getElementById('bg_color');
	this.initEvents();
	return this;
}

Canvas2.prototype.initEvents=function(){
	var me = this;
	this.me.addEventListener('mousedown',function(){
		me.down.call(me);
	});
	this.me.addEventListener('mousemove', function(){
		me.draw.call(me);
	});
	this.me.addEventListener('mouseup', function(){
		me.up.call(me);
	});

	this.btn_color.addEventListener('change',  function(){
		me.changeColor.call(me);
	});
	this.btn_clear.addEventListener('click', function(){
		me.changeClear.call(me);
	});
	this.btn_size.addEventListener('change',  function(){
		me.changeSize.call(me);
	});
	this.btn_restart.addEventListener('click', function(){
		me.restart.call(me);
	} );
	this.btn_tool.addEventListener('change',  function(){
		me.changeTool.call(me);
	});
	this.btn_bg_color.addEventListener('change',  function(){
		me.changeBgColor.call(me);
	});
	this.me.setAttribute('style', 'background-color: '+this.bg_color+';');
};


Canvas2.prototype.down=function () {
	this.action=true;
};
Canvas2.prototype.up=function () {
	this.action=false;
};
 Canvas2.prototype.draw = function () {

	var canX = this.me.offsetLeft;

	var canY = this.me.offsetTop;
	var mouseX = event.clientX - canX;
	var mouseY = event.clientY - canY,
	size=this.size;

	this.context.fillStyle = this.color;
	if (this.action==true) {
		if (this.tool=='square'){

			this.context.fillRect(mouseX - (size / 2), mouseY - (size / 2), size, size);

		}
		else {
			this.context.beginPath();
			this.context.arc(mouseX, mouseY, (size/2), 0, 2 * Math.PI);
			this.context.fill();
		}
	}
};
Canvas2.prototype.changeColor= function () {
	this.color = this.btn_color.value;
},

//Activation ou désactivation de la gomme
Canvas2.prototype.changeClear = function () {
	this.gomme = this.gomme?false:true;
	this.color = this.gomme === true ? this.bg_color:this.btn_color.value;
	this.btn_clear.value = this.gomme===true?'Stop':'Gomme';
},


Canvas2.prototype.changeSize=function () {
	this.size = this.btn_size.value;
};

//Effacer tout le canvas
Canvas2.prototype.restart=function () {
	this.context.clearRect(0, 0, this.me.width, this.me.height);
};

//Changer l'outil (la forme selctionné
Canvas2.prototype.changeTool =function () {
	this.tool = this.btn_tool.value;
};

//Changer le fond du canvas
Canvas2.prototype.changeBgColor =function () {
	this.bg_color = this.btn_bg_color.value;
	this.me.setAttribute('style', 'background-color: '+this.bg_color+';');
};	


var can = new Canvas2();


});