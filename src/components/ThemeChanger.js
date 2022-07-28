import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeFontColor } from '../features/themeSlice';

export const ThemeChanger = () => {

    const dispatch = useDispatch();
    const inputRef = useRef();
    // OR
    // const [color, setColor] = useState("");

    // function handleClick(e) {
    //     e.preventDefault();
    //     dispatch(changeFontColor(inputRef.current.value)) // color
    // }

    return (
        <div>
            <input type="text" ref={inputRef} />  {/* onChange={(e) => setColor(e.target.value)} */}
            <button onClick={() => dispatch(changeFontColor(inputRef.current.value))}>Change Color</button>
        </div>

        // OR: using form, you can submit with enter key but you have to use e.preventDefault(); to prevent re-rendering
        // <div>
        //     <form action="">
        //         <input type="text" ref={inputRef} />
        //         <button onClick={handleClick}>Change Color</button>
        //     </form>
        // </div>
    )
}

/**
 * (i) You can use useState() hooks also while using redux! because there are some states that you want to handle locally (useState) and some globally (Redux)
 * useState example is commented
 */