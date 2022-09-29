function Pagination(props) {
    const { Pagination } = window['MaterialUI']
    const { Stack } = window['MaterialUI']
    const {
        spacing, count, shape, page, totalPage, firstRecord, lastRecord, totalRecord
    } = props
    return (
        <div className="d-flex">
            <div className="me-auto">
                <Stack spacing={spacing}>
                    <Pagination count={count} shape={shape} showFirstButton showLastButton />
                </Stack>
            </div>
            <div className="">
                第 {page} 頁，共 {totalPage} 頁，第 {firstRecord} 筆到第 {lastRecord} 筆，共 {totalRecord} 筆
            </div>
        </div>
    )
}

