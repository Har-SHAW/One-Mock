window.onload = function () {
    let doc = document.getElementById('request_scroll');
    var scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) doc.scrollTo(0, scrollPos);
};

function redirect(id) {
    let doc = document.getElementById('request_scroll');
    localStorage.setItem('scrollPos', doc.scrollTop);
    location.href = '/dashboard/capture?id=' + id;
}

function toggleCapture(){
    let doc = document.getElementById('request_scroll');
    if(doc != null){
        localStorage.setItem('scrollPos', doc.scrollTop);
    }
    location.href = '/dashboard/capture/toggle-capture';
}