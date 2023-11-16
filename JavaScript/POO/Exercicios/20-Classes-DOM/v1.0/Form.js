import { Component } from "./Component.js";

class Forms extends Component {
  constructor(_id = "", _class = "", _action = "", _name = "", _valeu = "") {
    super(_valeu, "form", _id, _class, _name);
    this.build(_id, _class, _action, _name, _valeu);
  }
  build(_id = "", _class = "", _action = "", _name = "", _valeu = "") {
    const form = super.build(_valeu, "form", _id, _class, _name);

    form.setAttribute("action", _action);
  }
  add_elements(_elementAdd) {
    super.render().append(_elementAdd);
  }
}

export default Forms;
