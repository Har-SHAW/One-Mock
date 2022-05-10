let last_mock_id = 0;
window.onload = function () {
    var checkbox = document.getElementById("customResponse");
    last_mock_id = 0;

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById("response_body").className = "disable";
            document.getElementById("custom_response").className = "enable";
        } else {
            document.getElementById("response_body").className = "enable";
            document.getElementById("custom_response").className = "disable";
        }
    });
};

function addCustomResponse(event){
    event.preventDefault();
    let t_body = document.getElementById('t_body');
    let len = t_body.getElementsByTagName('tr').length;
    let clone = t_body.getElementsByTagName('tr')[0].cloneNode(true);
    let str = clone.innerHTML;
    last_mock_id++;
    str = str.replaceAll(clone.id.split("_")[2], ""+last_mock_id);
    clone.id = 't_row_'+last_mock_id
    clone.innerHTML = str;
    t_body.appendChild(clone);
}

function deleteCustomResponse(event, index){
    event.preventDefault();
    let t_body = document.getElementById('t_body');
    let list = t_body.getElementsByTagName('tr');

    if(list.length == 1){
        document.getElementById("customResponse").checked = false;
        document.getElementById("response_body").className = "enable";
        document.getElementById("custom_response").className = "disable";
        return;
    }

    for(let i=0;i<list.length;i++){
        if(list[i].id == 't_row_'+index){
            list[i].remove();
        }
    }
}