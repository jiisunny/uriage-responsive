[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://app.netlify.com/sites/focused-feynman-42ddb9/deploys)

# Uriage 유리아쥬 💧 💧

유리아쥬 반응형 페이지 제작

[유리아쥬 반응형 페이지](https://focused-feynman-42ddb9.netlify.app/)

![유리아쥬](https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/_assets/main_screenshot.png)

## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정한다.<br />
모바일 환경에서 적용 된다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0` : 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no` : 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1` : 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북, 카카오톡 등)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/_assets/kakao_opengraph_example.png)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Uriage" />
<meta property="og:title" content="Uriage Korea" />
<meta property="og:description" content="프랑스 더모코스메틱 브랜드, 유리아쥬! 민감성 피부를 위한 프랑스 온천수 함유." />
<meta property="og:image" content="./images/uriage_seo.png" />
<meta property="og:url" content="#" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정한다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Uriage" />
<meta property="twitter:title" content="Uriage Korea" />
<meta property="twitter:description" content="프랑스 더모코스메틱 브랜드, 유리아쥬! 민감성 피부를 위한 프랑스 온천수 함유." />
<meta property="twitter:image" content="./images/uriage_seo.png" />
<meta property="twitter:url" content="#" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정한다.<br/>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />`를 작성할 필요가 없다. `favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성해야한다.

> 파비콘 이미지는 루트 경로에 있어야 한다
```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/favicon.png" alt="uriage" width="16" /><br />
<img src="https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/favicon.png" alt="uriage" width="200" />

### .ico 파일 제작

이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있다.

[iconifier.net](https://iconifier.net/)

## Reset.css

각 브라우저의 기본 스타일을 초기화 할 수 있는 css 파일 링크

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## CSS 미디어쿼리(Media Query)

1. 기본 사용법

```css
@media (조건문) { 실행코드 }
```

```html
<link rel="stylesheet" media="all and (조건)" href="desktop.css" >
```

- `<link>`를 사용하는 방법은 용량이 커지기 때문에 권장하지 않는다.

<br />

2. 모바일우선 - min-width 사용 (최소 ~ 부터 적용)

- 작은 가로폭부터 큰 가로폭 순서로 만드는 방법

```css
/* 기본으로 작성되는 CSS는 576px보다 작은 화면에서 작동 된다. */
/* 가로모드 모바일 디바이스 (가로 해상도가 576px 보다 큰 화면에 적용) */

@media (min-width: 576px) { ... } 
 
/* 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
@media (min-width: 768px) { ... } 
 
/* 테스크탑 (가로 해상도가 992px 보다 큰 화면에 적용) */
@media (min-width: 992px) { ... } 
 
/* 큰화면 데스크탑 (가로 해상도가 1200px 보다 큰 화면에 적용) */
@media (min-width: 1200px) { ... }
```

<br />

3. 데스트탑우선 - max-width 사용 (최대 ~ 까지 적용)

- 큰 가로폭부터 작은 가로폭 순서로 만드는 것

```css
/* 기본으로 작성되는 CSS는 1199px보다 큰 화면에서 작동 된다. */
/* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
@media (max-width: 575px) { ... } 
 
/* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
@media (max-width: 767px) { ... } 
 
/* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
@media (max-width: 991px) { ... } 
 
/* 테스크탑 (가로 해상도가 1200px 보다 작은 화면에 적용) */
@media (max-width: 1199px) { ... } 
```