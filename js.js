'use strict'

const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
let li;

function retourInput() {
    return input.value.length;
}

function createLi() {
    li = document.createElement("li");
}

function GetLiOnEnter(enter) {
    if (enter.keyCode === 13) {
        AddContentElement();
    }
}

function createList() {
    ul.append(li);
}

function addTextContent() {
    li.append(document.createTextNode(input.value));
    input.value = "";
}

function AddContentElement() {
    if (retourInput() > 0) {
        createLi();
        addTextContent();
        createList();
    }
}

button.addEventListener("click", AddContentElement);

button.addEventListener("click", AddContentElement);