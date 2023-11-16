import { Component, Label, Input, Forms } from "./Component.js";

const form = new Forms();
const input = new Input();
const label = new Label();

const label1 = label.build("Name: ");
const input1 = input.build();
form.add_elements(label1);
form.add_elements(input1);
console.log(form.render());

document.body.append(label1, input1);
