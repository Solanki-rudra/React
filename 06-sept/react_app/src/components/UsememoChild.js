import React,{memo} from 'react'

function UsememoChild() {
    console.log('child')
    return(
      <h1>This is child</h1>
    )
}

// export default UsememoChild
export default memo(UsememoChild)
