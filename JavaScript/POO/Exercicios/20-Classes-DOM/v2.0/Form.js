import { Component } from "./Component.js";

export class Form extends Component {
  constructor(_parent, _attributes = "") {
    super("form", _parent, _attributes);
  }
  add_children(...children) {
    children.forEach((child) => {
      if (child instanceof Component) {
        this.get_element().append(child.get_element());
      } else {
        this.get_element().append(child);
      }
    });
  }
}
