import React, {useRef, useState, useEffect} from 'react'

const UseRefHook = () => {
    const [name, setName] = useState('');
    const inputRef=useRef();
    // const renderCount=useRef(0);

    function focus(){
        inputRef.current.focus();
    }

    // useEffect(()=>{

        // renderCount.current=renderCount.current+1;
    // })
  return (
    <>
      <div className="container">
        <div>
            <input ref={inputRef} type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <div>
                My Name is {name}
            </div>
            <button className='btn btn-outline-info' onClick={focus}> Focus </button>
            {/* <div>I render {renderCount.current} times.</div> */}
        </div>
      </div>
    </>
  )
}

export default UseRefHook
