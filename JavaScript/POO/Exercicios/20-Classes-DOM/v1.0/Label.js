import Component from "./Component.js";

class Label extends Component {
  constructor(_content = "", _id = "", _class = "", _name = "", _valeu = "") {
    super(_valeu, "label", _id, _class, _name);
    this.element = this.build(_content, _id, _class, _name, _valeu);
  }
  build(_content = "", _id = "", _class = "", _name = "", _valeu = "") {
    const label = super.build(_valeu, "label", _id, _class, _name);

    label.innerText = _content;
    return label;
  }
}

export default Label;
