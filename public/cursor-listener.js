AFRAME.registerComponent("cursor-listener", {
  init: function () {
    let lastIndex = -1;
    const COLORS = ["red", "green", "blue"];
    this.el.addEventListener("click", function (evt) {
      console.log("last index1", lastIndex);
      lastIndex = (lastIndex + 1) % COLORS.length;
      console.log("last index2", lastIndex);

      this.setAttribute("material", "color", COLORS[lastIndex]);
      console.log("I was clicked at: ", evt.detail.intersection.point);
    });
  },
});
