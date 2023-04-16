AFRAME.registerComponent("target-marker", {
  init: function () {
    let el = this.el;

    this.addMarker = function (e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector("a-scene");

      let newMark = document.createElement("a-entity");
      newMark.setAttribute("geometry", {
        primitive: "sphere",
      });
      newMark.setAttribute("material", "color:red");
      newMark.setAttribute("scale", "0.2 0.2 0.2");
      //세계 좌표 공간을 특정객체의 로컬 좌표로 변환 가능
      newMark.setAttribute("position", el.object3D.worldToLocal(p));
      //추가한 구에 또 연속적으로 추가..
      newMark.setAttribute("target-marker", {});
      newMark.setAttribute("position", p);
      //애니메이션 없이 새로운 마커 추가할때(독립적인 좌표로 추가됨)
      scene.appendChild(newMark);
      //애니메이션이 같이 적용되게 할때
      el.appendChild(newMark);
    };
    this.el.addEventListener("click", this.addMarker);
  },
  remove: function () {
    this.el.removeEventListener("click", this.addMarker);
  },
});
