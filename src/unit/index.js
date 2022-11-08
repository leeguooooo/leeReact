class Unit {
  constructor(element) {
    this._currentElement = element;
  }
}

class ReactTextUnit extends Unit {
  getMarkUp(rootId) {
    this._rootId = rootId;
    return `<span data-reactid="${rootId}">${this._currentElement}</span>`;
  }
}

function createReactUnit(element) {
  if (typeof element === "string" || typeof element === "number") {
    return new ReactTextUnit(element);
  }
}

export default createReactUnit;
