
function Conditional() {
    let isLoggd = true
    // if (isLoggd) {
    //     note = 'Logged in successfully'
    // }else{
    //     note = 'you need to log in'
    // }
  return (
    <div>
        <h2>{isLoggd ? ('Logged in successfully') : ('you need to log in')}</h2>


        {/* never work  
            <h2>
                {if (isLoggd) {
                    ('logged in successfully')
                }else{
                    ('you need to log in')
                }}
            </h2> */}
         
    </div>
  )
}

export default Conditional
