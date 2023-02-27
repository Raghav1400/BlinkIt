export function init(Model,Controller,View) {
    const modal = new Model();
    const view = new View();
    const controller = new Controller({
      modal,
      view,
    });
    return controller;
}

export var controls={};