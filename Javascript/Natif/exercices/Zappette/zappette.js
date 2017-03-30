//On atteund que le Dom et toutes les ressources soient chargées.
window.addEventListener('load',function () {

    var select = document.querySelector('select');
    var options = document.querySelectorAll('option');
    var iframe = document.querySelector('iframe');

    console.log(select);

    select.addEventListener('change', function () {

        console.log(select.value);

        document.getElementById('mon_iframe').src = select.value;



    })

});