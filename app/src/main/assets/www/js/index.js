// Common functions
var $ = function (selector) {
    return document.querySelector(selector);
};

function id(element_id) {
    return document.getElementById(element_id);
}

function listener(element_id,action,callback) {
    if (id(element_id)) {
        id(element_id).addEventListener(action,callback);
    } else {
        console.log("Element does not exist in the HTML: " + element_id);
    }
}

function show(element_id) {
    id(element_id).style.display = "block";
}

function hide(element_id) {
    id(element_id).style.display = "none";
}

function showParent(element_id) {
    id(element_id).parentNode.style.display = "block";
}

function hideParent(element_id) {
    id(element_id).parentNode.style.display = "none";
}

function showAlert(page, title, message) {
    id(page + "-dialog-title").innerHTML = title;
    id(page + "-dialog-message").innerHTML = message;
    id(page + "-dialog").style.display = "block";
}

function editable(element_id, edit) {
    console.log(element_id);
    if (edit) {
        id(element_id).removeAttribute('readonly');
        id(element_id).classList.value = 'w3-input w3-block w3-pale-yellow';
    } else {
        id(element_id).setAttribute('readonly','readonly');
        id(element_id).classList.value = 'w3-input w3-block w3-light-grey';
    }
}

listener('success-dialog-ok','click',function(e){
    hide('success-dialog');
});

listener('error-dialog-ok','click',function(e){
    hide('error-dialog');
});
