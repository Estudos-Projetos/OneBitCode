import { Component } from "./Component.js";

export class Label extends Component {
  constructor(_text, _parent, _attributes) {
    super(
      "label",
      _parent,
      Object.assign({}, { textContent: _text }, _attributes)
    );
  }
}
