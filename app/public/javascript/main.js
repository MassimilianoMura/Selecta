
(function() {
    var cx = '016844719156761315131:vmev40tl4gq';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();



function handler(e){
    if(e.target.className=="gs-title" || e.target.className=='gs-image') {
        e.preventDefault();
        var embedCode = e.target.getAttribute('data-ctorig').split('=')[1];
        $.post('/link', {url: embedCode, user_id: '1'});
        location.reload();
    } else if (e.target.nodeName=='B') {
        e.preventDefault();
        var embedCode = e.target.parentNode.getAttribute('data-ctorig').split('=')[1];
        $.post('/link', {url: embedCode, user_id: '1'});
        location.reload();
    };
};

document.addEventListener("click", handler, true);
