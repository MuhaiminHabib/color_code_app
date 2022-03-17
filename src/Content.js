import { useState} from 'react';

import Display from './Display';
import Input from './Input';

const Content = () => {
    const [colorValue, setColorValue] = useState('');
    const [hexValue, setHexValue] = useState('');
    return (
       <section className="contentSection">
            <Display 
            colorValue={colorValue}
            hexValue={hexValue}/>
            <Input 
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}/>
       </section>
    )
}

export default Content;