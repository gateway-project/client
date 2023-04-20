AFRAME.registerComponent("portal-open", {
  /*
랜드마크 클릭하면, 1) 포탈이 뿅 나타남
2) 그러면 부엉이가 포탈로 날아감
3) 그러면 해당 랜드마크.html로 주소 이동
*/

  init: function () {
    const teleport = document.getElementById("teleport");
    const owl = document.getElementById("owl2");

    this.showPortal = function (e) {
      const country = e.target.components["gltf-model"].attrValue.substring(1);

      let params = {
        property: "position",
        to: {
          x: 0,
          y: -1,
          z: -3,
        },
        dur: 4000,
        easing: "easeInCubic",
      };
      teleport.setAttribute("visible", "true");
      owl.setAttribute("animation", params);
      owl.addEventListener("animationcomplete", function () {
        window.location.href = `/${country}.html`;
      });
    };

    this.el.addEventListener("click", this.showPortal);
  },
});
