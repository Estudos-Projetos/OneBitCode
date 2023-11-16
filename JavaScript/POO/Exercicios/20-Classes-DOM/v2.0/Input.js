import { Component } from "./Component.js";

export class Input extends Component {
  constructor(_parent, _type = "text", _attributes = "") {
    super("input", _parent, Object.assign({}, { type: _type }, _attributes));
  }
}
