import $ from "jquery";

const React = {
  render,
  nextRootIndex: 0,
};

function render(element, container) {
  const markup = `<${element.type} data-reactid="${React.nextRootIndex}" >${element.props.children}</${element.type}>`;
  $(container).append(element);
}

export default React;
