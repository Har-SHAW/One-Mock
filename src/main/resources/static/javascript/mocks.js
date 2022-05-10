window.onload = function () {
    let doc = document.getElementById('request_scroll');
    var scrollpos = localStorage.getItem('mock_scrollpos');
    if (scrollpos) doc.scrollTo(0, scrollpos);
};

function redirect(id) {
    let doc = document.getElementById('request_scroll');
    localStorage.setItem('mock_scrollpos', doc.scrollTop);
    location.href = '/dashboard/mocks?id=' + id;
}