AFRAME.registerComponent("information", {
  init: function () {
    let lastIndex = -1;
    const TEXTS = [
      "First, click on the landmarks of each country on the 3D globe.",
      "Second, rotate the camera and enjoy a tour of the new country.",
      "Third, when you want to go back to the home screen, click the portal you came from.",
      "Fourth, it's time to enjoy your trip! :)",
    ];
    /*
설명문,
1) 첫째, 지구본에 있는 랜드마크를 클릭하면 해당 나라로 이동하는 포탈이 열립니다.
2) 둘째, 카메라를 돌리면서 새로운 나라에 대한 여행을 즐깁니다.
3) 셋째, 들어왔던 portal을 다시 클릭하면 홈화면으로 이동합니다. 
4) Enjoy your trip!

1) First, click on the landmarks of each country on the 3D globe. 
2) Second, rotate the camera and enjoy a tour of the new country.
3) Third, when you want to go back to the home screen, click the portal you came from.
4) Enjoy your trip!
*/

    const el = this.el;
    el.addEventListener("click", function (evt) {
      console.log("last index1", lastIndex);
      lastIndex = (lastIndex + 1) % TEXTS.length;
      console.log("last index2", lastIndex);

      el.setAttribute("value", TEXTS[lastIndex]);
    });
  },
});
