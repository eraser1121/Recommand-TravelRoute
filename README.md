## Subject
Kakao 지도 API를 이용한 여행 경로 추천 서비스
출발지와 도착지를 설정하면 사이 경로의 유명 관광지/음식점/카페 등을 카테고리 별로 반환
원하는 장소를 경유지로 추가하여 경로를 재검색

## How to build
### npm

    ~$ npm install

### Kakao 지도 API
<https://apis.map.kakao.com/web/>
카카오계정을 통해 APP KEY를 발급받은 후 views/main.ejs, views/search.ejs의 아래 부분에 추가
src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=APPKEY&libraries=services"

## How to use
- 메인 페이지 지도상에서 출발지와 도착지를 선택하고 검색버튼 클릭
- 검색된 페이지에서 이동 경로에 있는 카테고리 별 장소(관광명소, 숙박, 카페, 음식점)를 검색 가능
- 지도 상에 마커와 인포윈도우를 통해 결과를 출력
- 원하는 경유지를 선택하여 경로 재검색 가능
 
## License
MIT License

Copyright (c) 2020 Jiwoo Choi
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.