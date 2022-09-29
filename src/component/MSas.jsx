function MSas() {
  const { Table } = window['MaterialUI']
  const { Paper } = window['MaterialUI']

  const [post, setPost] = React.useState({})
  async function api() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    const object = await resp.json()
    console.log(object)
    setPost(object)
  }

  async function search() {
    const object = {}
    const json = JSON.stringify(object)
    fetch()
  }
  React.useEffect(() => {
    console.log(123132)
    api()
  }, [])
  console.log({ post }, JSON.stringify(post))
  if (JSON.stringify(post) == '{}') return <div>空物件</div>
  return (
    <>
      <form>
        <Paper className='m-4 p-3'>
          <div className="m-3 container">
            <div className="text-danger fw-bold fs-5">
              請先選擇日期區間!，如果沒有設定，僅會查詢最近一千筆。
            </div>
            <div className="row align-items-center">
              <div className="col">
                <input type="text" className="form-control col" defaultValue={tt} />
              </div>
              <div className="col">
                <Button type='submit' variant='contained' color='primary'>設置</Button>
              </div>
            </div>

            <table className="table table-bordered table-striped border-primary my-3">
              <thead>
                <tr>
                  <th>使用者ID</th>
                  <th>ID</th>
                  <th>記事</th>
                  <th>測試</th>
                </tr>
              </thead>
              <tbody>
                {
                  !(post)
                    ?
                    (
                      <tr>
                        <td className="text-center" colSpan='4'>沒有資料</td>
                      </tr>
                    )
                    :
                    (
                      post.map((d, index) => (
                        <tr key={index}>
                          <td>{d.userId}</td>
                          <td>{d.id}</td>
                          <td>{d.title}</td>
                          <td>{d.completed}</td>
                        </tr>
                      ))
                    )
                }
              </tbody>
            </table>
            <Pagination page='1' totalPage='1' firstRecord='1' lastRecord='1' totalRecord={post.length} spacing='2' count={post.length} shape='rounded' />
          </div>
        </Paper>
      </form>
    </>
  )
}


ReactDOM.render(<MSas />, document.getElementById("MSas"));
