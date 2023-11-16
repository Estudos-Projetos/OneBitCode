class Component {
  #refElement;
  constructor(_value, _nameTag = "div", _id = "", _class = "", _name = "") {
    this.build(_value, _nameTag, _id, _class, _name);
  }

  get_element_value() {
    return this.#refElement.value;
  }

  build(_value, _nameTag = "div", _id = "", _class = "", _name = "") {
    const element = document.createElement(`${_nameTag}`);
    element.setAttribute("value", _value);
    element.setAttribute("id", _id);
    element.setAttribute("class", _class);
    element.setAttribute("name", _name);

    this.#refElement = element;
    return element;
  }

  render() {
    return this.#refElement;
  }
}

export default Component;
