AFRAME.registerComponent("zoom", {
  init: function () {
    let el = this.el;
    let isZoomed = false;

    this.animateMove = function () {
      let currPosition = el.getAttribute("position");
      let targetPosition = isZoomed
        ? { x: currPosition.x, y: currPosition.y, z: currPosition.z - 8 }
        : { x: currPosition.x, y: currPosition.y, z: currPosition.z + 8 };
      let params = {
        property: "position",
        to: targetPosition,
        dur: 1000,
        easing: "easeOutQuad",
      };
      el.setAttribute("animation", params);
      isZoomed = !isZoomed;
    };

    this.el.addEventListener("click", this.animateMove);
  },
  remove: function () {
    this.el.removeEventListener("click", this.animateMove);
  },
});
