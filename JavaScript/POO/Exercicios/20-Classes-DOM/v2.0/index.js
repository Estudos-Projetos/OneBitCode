import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Login" });
const input = new Input("body", "number", { id: "nameInput" });
const label = new Label("Nome: ", "body", { htmlFor: "nameInput" });

const form = new Form("body");

form.add_children(title, label, input);
form.render();
