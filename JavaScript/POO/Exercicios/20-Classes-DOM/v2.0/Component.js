export class Component {
  #refElement = null;

  constructor(_tag, _parent, _attributes) {
    this.tag = _tag;
    this.parent = _parent;
    this.attributes = _attributes;
    this.build();
  }

  get_element() {
    return this.#refElement;
  }

  build() {
    this.#refElement = document.createElement(this.tag);
    Object.assign(this.#refElement, this.attributes);
    return this;
  }

  render() {
    if (this.#refElement instanceof Component) {
      this.parent.get_element().append(this.#refElement);
    } else {
      document.querySelector(this.parent).append(this.#refElement);
    }
  }
}
