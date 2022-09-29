function Button(props) {
  const {
    variant, onclick, color, children, type
  } = props
  const { Button } = window['MaterialUI']
  return (
    <div>
      <Button type={type} variant={variant} color={color} onClick={onclick}>{children}</Button>
    </div>
  )
}
