AFRAME.registerComponent("toggle", {
  init: function () {
    this._clickCount = 0;
    this.el.addEventListener("click", this.onClick.bind(this));
  },
  onClick: function () {
    this._clickCount = this._clickCount + 1;
    if (this._clickCount % 2 == 0) {
      this.el.emit("toggle_off");
    } else {
      this.el.emit("toggle_on");
    }
  },
});
