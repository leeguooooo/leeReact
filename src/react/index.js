import $ from "jquery";
import createReactUnit from "../unit";
import createElement from "./element";

const React = {
  render,
  nextRootIndex: 0,
  createElement,
};

function render(element, container) {
  const createReactUnitInstance = createReactUnit(element);
  const markup = createReactUnitInstance.getMarkUp(React.nextRootIndex);
  $(container).append(markup);
}

export default React;
