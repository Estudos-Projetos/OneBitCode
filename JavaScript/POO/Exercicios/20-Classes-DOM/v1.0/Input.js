import Component from "./Component.js";

class Input extends Component {
  constructor(_type = "text", _id = "", _class = "", _name = "", _value = "") {
    super(_value, "input", _id, _class, _name);
    this.element = this.build(_type, _id, _class, _name, _value);
  }
  build(_type = "text", _id = "", _class = "", _name = "", _value = "") {
    const input = super.build(_value, "input", _id, _class, _name);

    input.setAttribute("type", _type);
    return input;
  }
}
export default Input;
