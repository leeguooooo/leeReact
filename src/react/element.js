class Element {
  constructor(type, props) {
    this.type = type;
    this.props = props;
  }
}

/**
 * description: 创建虚拟 dom
 * @param {string|function} type
 * @param {object} [props]
 * @param {object} [children]
 * */
function createElement(type, props, ...children) {
  props = props || {};
  props.children = children;
  return new Element(type, props);
}

export default createElement;
