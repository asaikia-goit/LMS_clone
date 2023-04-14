import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchArticles } from '../../api/demo';

const allWords = [
    'academic',
    'accede',
    'accept',
    'acceptable',
    'acceptance',
    'access',
    'accident' ,
    'accolade',
    'accompany',
    'accomplish',
    'accord',
    'according',
    'account',
    'accountant',
    'accurate',
    'accuse',
    'ache',
]


const Demo = () => {
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState(['']);

    useEffect(() => {
        
        const filteredWords = allWords.filter(word => 
            word.toLowerCase().indexOf(inputText) >= 0
        )

        setResults(filteredWords);
        
    }, [inputText])
    

    // RETURNS JSX/HTML
    return (
        <div>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
            <ul>
                {
                results.map((result) => 
                    <li>
                        {result}
                    </li>
                )
                 }
            </ul>
      </div>
    );
}

export default Demo;