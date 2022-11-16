# Vue.js와 axios를 사용해서 API 서버로 요청을 보내 데이터를 응답 받고, 응답받은 데이터를 이미지 형태로 화면에 뿌려보기

> 1. axios를 사용해 API 서버와 통신해서 이미지 데이터 받기 [🔗]()<br>2.받아온 이미지를 화면에 뿌리기

## axios로 API 서버와 통신해 받아온 이미지를 화면에 뿌리기

서버에서 내려주는 이미지를 axios를 사용해 받아와서 콘솔에 찍어보면 다음과 같이 바이너리 데이터로 찍힌다.
![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://k.kakaocdn.net/dn/CXOZI/btq8attiha0/ejf4DLXo5gocACp2GpXXM1/img.png)
내려주는 이미지를 바이너리 데이터가 아닌 이미지로 화면에 뿌리기 위해서는 `responseType`을 json이 아닌 `blob`으로 설정하고, response data(즉, url)을 window.createObjectURL을 사용해 이미지로 변환시켜 준다.

### 바이너리 데이터

### window.createObjectURL

---

# References.

<https://webcorgi.tistory.com/40>
