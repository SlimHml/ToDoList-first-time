'use strict'

const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
let li;

function returnInputLength() {
    return input.value.length;
}

function addLi() {
    li = document.createElement("li");
}

function addLiOnkeypress(enter) {
    if (returnInputLength() > 0 && enter.keyCode === 13) {
        callbacksToCreateLi();
    }
}

function lowerCaseTheString() {
    return input.value.slice(1, input.value.length).toLowerCase();
}

function insertLiInsideDom() {
    ul.append(li);
}

function addTextNodeInLi() {
    li.append(document.createTextNode(lowerCaseTheString()));
}

function emptyTheInput() {
    input.value = "";
}

function callbacksToCreateLi() {
    if (returnInputLength() > 0) {
        addLi();
        addTextNodeInLi();
        insertLiInsideDom();
        emptyTheInput();
    }
}

button.addEventListener("click", callbacksToCreateLi);

input.addEventListener("keypress",  addLiOnkeypress);