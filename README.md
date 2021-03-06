[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://app.netlify.com/sites/focused-feynman-42ddb9/deploys)

# Uriage μ λ¦¬μμ₯¬ π§ π§

μ λ¦¬μμ₯¬ λ°μν νμ΄μ§ μ μ

[μ λ¦¬μμ₯¬ λ°μν νμ΄μ§](https://focused-feynman-42ddb9.netlify.app/)

![μ λ¦¬μμ₯¬](https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/_assets/main_screenshot.png)

## λ·°ν¬νΈ(Viewport) λ λλ§ λ°©μ μ€μ 

μΉνμ΄μ§κ° νλ©΄(Viewport)μ ννλλ λ°©μμ μ€μ νλ€.<br />
λͺ¨λ°μΌ νκ²½μμ μ μ© λλ€.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width` : νλ©΄μ κ°λ‘ λλΉλ₯Ό κ° λλ°μ΄μ€(Device)μ κ°λ‘ λλΉμ λμΌνκ² μ μ©
- `initial-scale=1.0` : νλ©΄μ μ΄κΈ° νλ©΄ λ°°μ¨(νλ μ λ)μ μ€μ 
- `user-scalable=no` : μ¬μ©μκ° λλ°μ΄μ€ νλ©΄μ νλ(`yes`)/μΆμ(`no`)ν  μ μλμ§ μ€μ 
- `maximum-scale=1` : μ¬μ©μκ° νλ©΄μ νλν  μ μλ μ΅λκ°
- `minimum-scale=1`: μ¬μ©μκ° νλ©΄μ μΆμν  μ μλ μ΅μκ°

## μ€ν κ·Έλν(The Open Graph protocol)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νμ΄μ€λΆ, μΉ΄μΉ΄μ€ν‘ λ±)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ νλ€.

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/_assets/kakao_opengraph_example.png)

[λ λ§μ μ€ν κ·Έλν μμ± λ³΄κΈ°](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Uriage" />
<meta property="og:title" content="Uriage Korea" />
<meta property="og:description" content="νλμ€ λλͺ¨μ½μ€λ©ν± λΈλλ, μ λ¦¬μμ₯¬! λ―Όκ°μ± νΌλΆλ₯Ό μν νλμ€ μ¨μ²μ ν¨μ ." />
<meta property="og:image" content="./images/uriage_seo.png" />
<meta property="og:url" content="https://focused-feynman-42ddb9.netlify.app/" />
```

- `og:type`: νμ΄μ§μ μ ν(E.g, `website`, `video.movie`)
- `og:site_name`: μν μ¬μ΄νΈμ μ΄λ¦
- `og:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `og:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `og:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `og:url`: νμ΄μ§ μ£Όμ(URL)

## νΈμν° μΉ΄λ(Twitter Cards)

μΉνμ΄μ§κ° μμ λ―Έλμ΄(νΈμν°)λ‘ κ³΅μ λ  λ μ°μ μ μΌλ‘ νμ©λλ μ λ³΄λ₯Ό μ§μ νλ€.

[λ λ§μ νΈμν° μΉ΄λ λ³΄κΈ°](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Uriage" />
<meta property="twitter:title" content="Uriage Korea" />
<meta property="twitter:description" content="νλμ€ λλͺ¨μ½μ€λ©ν± λΈλλ, μ λ¦¬μμ₯¬! λ―Όκ°μ± νΌλΆλ₯Ό μν νλμ€ μ¨μ²μ ν¨μ ." />
<meta property="twitter:image" content="./images/uriage_seo.png" />
<meta property="twitter:url" content="https://focused-feynman-42ddb9.netlify.app/" />
```

- `twitter:card`: νμ΄μ§(μΉ΄λ)μ μ ν(E.g. `summary`, `player`)
- `twitter:site`: μν μ¬μ΄νΈμ μ΄λ¦
- `twitter:title`: νμ΄μ§μ μ΄λ¦(μ λͺ©)
- `twitter:description`: νμ΄μ§μ κ°λ¨ν μ€λͺ
- `twitter:image`: νμ΄μ§μ λν μ΄λ―Έμ§ μ£Όμ(URL)
- `twitter:url`: νμ΄μ§ μ£Όμ(URL)

## Favicon(νλΉμ½, favorites icon)

μΉνμ΄μ§λ₯Ό λνλ΄λ μμ΄μ½, μΉνμ΄μ§μ λ‘κ³ λ₯Ό μ€μ νλ€.<br/>
λλΆλΆμ κ²½μ° λ£¨νΈ κ²½λ‘μ `favicon.ico` νμΌμ μμΉνλ©΄ μλμΌλ‘ λ‘λ©νκΈ° λλ¬Έμ `<link />`λ₯Ό μμ±ν  νμκ° μλ€. `favicon.png` νμΌμ μ¬μ©νλ €λ©΄ λ€μκ³Ό κ°μ΄ `<link />`λ₯Ό μμ±ν΄μΌνλ€.

> νλΉμ½ μ΄λ―Έμ§λ λ£¨νΈ κ²½λ‘μ μμ΄μΌ νλ€
```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) λλ 32 x 32 λλ 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/favicon.png" alt="uriage" width="16" /><br />
<img src="https://raw.githubusercontent.com/jiisunny/uriage-responsive/master/favicon.png" alt="uriage" width="200" />

### .ico νμΌ μ μ

μ΄λ―Έμ§λ₯Ό μλ‘λνλ©΄ μμ½κ² `.ico` νμΌμ μ μν  μ μλ€.

[iconifier.net](https://iconifier.net/)

## Reset.css

κ° λΈλΌμ°μ μ κΈ°λ³Έ μ€νμΌμ μ΄κΈ°ν ν  μ μλ css νμΌ λ§ν¬

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## CSS λ―Έλμ΄μΏΌλ¦¬(Media Query)

1. κΈ°λ³Έ μ¬μ©λ²

```css
@media (μ‘°κ±΄λ¬Έ) { μ€νμ½λ }
```

```html
<link rel="stylesheet" media="all and (μ‘°κ±΄)" href="desktop.css" >
```

- `<link>`λ₯Ό μ¬μ©νλ λ°©λ²μ μ©λμ΄ μ»€μ§κΈ° λλ¬Έμ κΆμ₯νμ§ μλλ€.

<br />

2. λͺ¨λ°μΌμ°μ  - min-width μ¬μ© (μ΅μ ~ λΆν° μ μ©)

- μμ κ°λ‘ν­λΆν° ν° κ°λ‘ν­ μμλ‘ λ§λλ λ°©λ²

```css
/* κΈ°λ³ΈμΌλ‘ μμ±λλ CSSλ 576pxλ³΄λ€ μμ νλ©΄μμ μλ λλ€. */
/* κ°λ‘λͺ¨λ λͺ¨λ°μΌ λλ°μ΄μ€ (κ°λ‘ ν΄μλκ° 576px λ³΄λ€ ν° νλ©΄μ μ μ©) */

@media (min-width: 576px) { ... } 
 
/* νλΈλ¦Ώ λλ°μ΄μ€ (κ°λ‘ ν΄μλκ° 768px λ³΄λ€ ν° νλ©΄μ μ μ©) */
@media (min-width: 768px) { ... } 
 
/* νμ€ν¬ν (κ°λ‘ ν΄μλκ° 992px λ³΄λ€ ν° νλ©΄μ μ μ©) */
@media (min-width: 992px) { ... } 
 
/* ν°νλ©΄ λ°μ€ν¬ν (κ°λ‘ ν΄μλκ° 1200px λ³΄λ€ ν° νλ©΄μ μ μ©) */
@media (min-width: 1200px) { ... }
```

<br />

3. λ°μ€νΈνμ°μ  - max-width μ¬μ© (μ΅λ ~ κΉμ§ μ μ©)

- ν° κ°λ‘ν­λΆν° μμ κ°λ‘ν­ μμλ‘ λ§λλ κ²

```css
/* κΈ°λ³ΈμΌλ‘ μμ±λλ CSSλ 1199pxλ³΄λ€ ν° νλ©΄μμ μλ λλ€. */
/* μΈλ‘λͺ¨λ λͺ¨λ°μΌ λλ°μ΄μ€ (κ°λ‘ ν΄μλκ° 576px λ³΄λ€ μμ νλ©΄μ μ μ©) */
@media (max-width: 575px) { ... } 
 
/* κ°λ‘λͺ¨λ λͺ¨λ°μΌ λλ°μ΄μ€ (κ°λ‘ ν΄μλκ° 768px λ³΄λ€ μμ νλ©΄μ μ μ©) */
@media (max-width: 767px) { ... } 
 
/* νλΈλ¦Ώ λλ°μ΄μ€ (κ°λ‘ ν΄μλκ° 992px λ³΄λ€ μμ νλ©΄μ μ μ©) */
@media (max-width: 991px) { ... } 
 
/* νμ€ν¬ν (κ°λ‘ ν΄μλκ° 1200px λ³΄λ€ μμ νλ©΄μ μ μ©) */
@media (max-width: 1199px) { ... } 
```