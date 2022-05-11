let last_mock_id = 0;
window.onload = function () {
    var checkbox = document.getElementById("customResponse");
    let t_body = document.getElementById('t_body');
    last_mock_id = t_body.getElementsByTagName('tr').length - 1;

    if (checkbox.checked) {
        document.getElementById("response_body").className = "disable";
        document.getElementById("custom_response").className = "enable";
    } else {
        document.getElementById("response_body").className = "enable";
        document.getElementById("custom_response").className = "disable";
    }

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
    let newComp = `<td> <input type="checkbox" id="customResponseDtoSet::.isHeader1" name="customResponseDtoSet[::].isHeader" value="true"><input type="hidden" name="_customResponseDtoSet[::].isHeader" value="on"> </td> <td> <textarea cols="59" placeholder="Enter the Request Body" rows="5" id="customResponseDtoSet::.requestValue" name="customResponseDtoSet[::].requestValue"></textarea> </td> <td> <textarea cols="59" placeholder="Enter the Response Body" rows="5" id="customResponseDtoSet::.responseBody" name="customResponseDtoSet[::].responseBody"></textarea> </td> <td> <input placeholder="Enter the Response Body" type="number" id="customResponseDtoSet::.statusCode" name="customResponseDtoSet[::].statusCode" value="200"> </td> <td> <button onclick="deleteCustomResponse(event, ::);">Delete</button> </td>`;

    event.preventDefault();
    let t_body = document.getElementById('t_body');
    let len = t_body.getElementsByTagName('tr').length;
    let clone = t_body.getElementsByTagName('tr')[0].cloneNode(true);
    clone.id = 't_row_'+last_mock_id++;
    clone.innerHTML = newComp.replaceAll("::", ""+last_mock_id);
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