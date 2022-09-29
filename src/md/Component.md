# React Component For HTML
給html使用的react component
## 前置作業
``` js
<head>
  <!-- bootstrap(5.1.1) 引用處 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin="anonymous"></script>

  <!-- react(16) & babel 引用處 -->
  <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- mui(5.10.6) 引用處 -->
  <script src="https://unpkg.com/@mui/material@5.10.6/umd/material-ui.production.min.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</head>
```

## Button API

### 引用
使用一般js檔的引入方法
``` js
<script type="text/babel" src="./component/statics/Button.jsx"></script>
```
在有用ReactDOM.render()的component裡使用
``` js
<Button/>
```

### 屬性(prop)

| 名稱 | 類型 | 默認值 | 描述 |
| :---: | :---: | :---: | :---: | 
| children | node |  | 按鈕文字 | 
| variant | 'contained' , 'outlined' , 'text' , string | 'text' | 按鈕型式 | 
| color | 'primary' , 'secondary' , 'standard' , string | 'standard' | 按鈕顏色 | 
| onclick |  |  |  | 

---

## Pagination API

### 引用
使用一般js檔的引入方法
``` js
<script type="text/babel" src="./component/Pagination.jsx"></script>
```
在有用ReactDOM.render()的component裡使用
``` js
<Pagination/>
```

### 屬性(prop)

| 名稱 | 類型 | 默認值 | 描述 |
| :---: | :---: | :---: | :---: | 
| children | node |  | 按鈕文字 | 
| variant | 'contained' , 'outlined' , 'text' , string | 'text' | 按鈕型式 | 
| color | 'primary' , 'secondary' , 'standard' , string | 'standard' | 按鈕顏色 | 
| onclick |  |  |  | 

---
