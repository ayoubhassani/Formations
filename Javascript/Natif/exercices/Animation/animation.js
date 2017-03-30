//On attend le chargement de windows
window.addEventListener('load', function () {
    //On récupère le boutton
    var button = document.getElementById('button1');
    //On ajoute l'évennement on click au boutton et il déclenche la function()
    button.addEventListener('click', function () {
        //On ajoute des classe et des styles a nos éléments
        document.getElementById('div1').setAttribute('class','rotation');
        document.getElementById('div2').setAttribute('class','boule');
        document.getElementById('div3').setAttribute('class','bazar');
        document.querySelector('body').classList.add('bodybg');
        document.querySelector('h1').classList.add('h1c');
        button.style.backgroundColor = '#ff7674';
        button.style.transition = '5s';
        //On attend 5 secondes avant pour réinitialiser
        setTimeout(function () {
            //On supprime les classes et les styles ajoutés plus haut
            document.getElementById('div1').classList.remove('rotation');
            document.getElementById('div2').classList.remove('boule');
            document.getElementById('div3').classList.remove('bazar');
            document.querySelector('body').classList.remove('bodybg');
            document.querySelector('h1').classList.remove('h1c');
            button.removeAttribute('style');
        },5000);
    })
});