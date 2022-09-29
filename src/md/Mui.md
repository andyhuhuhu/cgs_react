# MUI組件
本專案用的mui組件引用方式

## 引用

在react component裡宣告要用的組件
``` js
function Button() {
  //要用的組件
  const { Button } = window['MaterialUI']
}
```
接著就可以使用組件
``` js
function Button(props) {
  const {
    variant, onclick, color, children, type
  } = props
  const { Button } = window['MaterialUI']
  return (
    <div>
      //使用組件Button
      <Button type={type} variant={variant} color={color} onClick={onclick}>{children}</Button>
    </div>
  )
}
```
