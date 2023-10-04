import React from 'react'

function UseCallbackChild({func}) {
    console.log('printing....')
    return(
        <>
        <h3>Child Component --- {func()}</h3>
        </>
    )
}

// export default (UseCallbackChild)
export default React.memo(UseCallbackChild)
