# Gateway


3D 랜드마크를 클릭하여 다른 나라로 이동하는 WebXR

가끔 어디론가 훌쩍 떠나고 싶은 마음이 들때가 있는데, AR과 VR을 이용해서 잠시 그 나라에 간 것 같은 효과를 주어 사용자들에게 즐거움을 주고싶다는 생각에서 프로젝트를 시작하게 되었습니다.

<br>
<br>

# 📖 목차
- 💻 Development
  - Webcam Error 발생. 원인은 HTTP.
  - Webpack 최적화
  - 웹컴포넌트 / MVC 디자인패턴
- 📅 Timeline
- 🛠 Tech Stacks
- 🔗 Repository Link


<br>
<br>


# 💻 Development
## 1. Webcam Error 발생. 원인은 HTTP.
WebXR API는 카메라 및 웹캠에 대한 접근 권한 문제를 해결하기 위해 HTTPS 프로토콜로 서비스되는 웹 페이지에서만 사용이 가능했습니다.
초반에는 Express에서 HTTPS를 설정하려고 했으나, local 환경에서 local-ssl-proxy를 사용하여 HTTPS 환경으로 세팅할 수 있는 것을 알게 되었습니다. 

로컬 SSL 프록시는 클라이언트와 서버 간의 통신에서 중간에서 암호화를 해제하고 조작하는 데 사용되는 프록시입니다. 이를 통해 프록시는 인터넷 트래픽을 캡처하고 클라이언트와 서버 간의 모든 데이터를 볼 수 있습니다.

로컬 SSL 프록시의 작동 방식은 일반적으로 다음과 같습니다:

1. 클라이언트가 서버에 연결하려고 시도합니다.
2. 로컬 SSL 프록시는 이 연결을 가로채고 클라이언트로부터 수신한 SSL/TLS 요청을 분석합니다.
3. 프록시는 서버로부터 수신한 인증서와 서버의 공개 키를 가져와 클라이언트에게 이를 전달합니다.
4. 클라이언트는 이 인증서를 검증하고 서버의 신원을 확인합니다. 클라이언트는 이제 서버와 안전하게 통신할 수 있습니다.
5. 클라이언트와 서버 사이의 모든 트래픽이 프록시를 통해 전송됩니다. 프록시는 이 트래픽을 복호화하고 필요한 경우 데이터를 수정한 다음 다시 암호화하여 서버로 전송합니다.
6. 서버가 응답을 반환하면 프록시는 이를 클라이언트로 전달합니다.

<br>

## 2. Webpack으로 최적화
다수의 script와 3D glb 파일, panorama image 로딩.
webpack 번들링 _ loader, plugin

이미지 최적화 (webpack asset)

네트워크 탭에 오는거 상세 설명 → 수치적인 설명

<br>

## 3. Webcomponent / MVC 디자인패턴

<br>

# 📅 Timeline

### 프로젝트 기간: 2023.04.03(월) ~ 2023.04.22(금)

- 1 주차: 기획 및 설계
- 2~3 주차: 기능 개발

<br>
<br>

# 🛠 Tech stack

### Frontend

- HTML
- Javascript
- Aframe
- Ar.js

<br>
<br>

# 🔗 Repository Link
* [Frontend](https://github.com/gateway-project/client)
* [Gateway deploy]()

<br>
<br>
