import { useState} from 'react';

import Display from './Display';
import Input from './Input';


const Content = () => {
    const [colorValue, setColorValue] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] = useState(true);
    return (
       <section className="contentSection">
            <Display 
                colorValue={colorValue}
                hexValue={hexValue}
                isDarkText={isDarkText}/>
            <Input 
                colorValue={colorValue}
                setColorValue={setColorValue}
                setHexValue={setHexValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}/>
            
       </section>
    )
}

export default Content;