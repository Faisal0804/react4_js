import React, { Fragment,useEffect, useState} from 'react'

const Validation = () => {
     const [input, setInput] = useState('');
     const [ isValid,setIsValid] = useState('');

     const inputHandler = (e) => {
        setInput(e.target.value);
    };
   useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
        setIsValid(false);
        } else {
        setIsValid(true);
       }
         }, [input]);
        
        




  return (
    <Fragment>

          <form>
            <label>Write something (more than 5 non numerical characters is a valid input)</label><br></br>
            <input type="text"  id="input"  onChange={inputHandler} />
            </form>
            <br></br>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>

      

    </Fragment>
  )
}

export default Validation