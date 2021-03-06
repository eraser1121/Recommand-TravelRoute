## Subject
Kakao 지도 API를 이용한 여행 경로 추천 서비스  
출발지와 도착지를 설정하면 사이 경로의 유명 관광지/음식점/카페 등을 카테고리 별로 반환  
원하는 장소를 경유지로 추가하여 경로를 재검색  

Travel route recommendation service using Kakao Maps API.
If you set the departure and destination, the famous spots/restaurants/cafes on the route are returned by category.
Re-search the route by adding the desired place as a waypoint.

## How to use
* 메인 페이지에서 '여행 경유지 추천' 서비스와 '주변 장소' 서비스 선택 가능

- '여행 경유지 추천' 서비스는 출발지와 도착지를 설정하고 검색된 페이지에서 이동 경로에 있는 카테고리 별 장소(관광명소, 숙박, 카페, 음식점)를 검색 가능
- 지도 상에 마커와 인포윈도우를 통해 결과를 출력
- 원하는 경유지를 선택하여 경로 재검색 가능

+ '주변 장소 검색' 서비스는 현재 위치를 설정해주면 주변 카테고리 별 장소(관광명소, 숙박, 카페, 음식점, 마트, 은행)를 검색 가능
+ 지도 상에 마커와 인포윈도우를 통해 결과를 출력
+ 마커를 클릭하면 해당 장소의 정보 조회 가능

## How to build
### npm

    ~/oss_project$ npm install
    
### Connect

    localhost:3000 로 접속

### Kakao 지도 API
<https://apis.map.kakao.com/web/>  
카카오계정을 통해 APP KEY를 발급받은 후 views/main.ejs, views/search.ejs, views/near.ejs의 아래 부분에 추가  
src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY 입력&libraries=services"  
