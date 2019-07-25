import {useLocalStorage} from './useLocalStorage';
import React, { useEffect, useState } from "react";


const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
        useEffect(() => {
          const toggleDark = document.querySelector('body')
            if (someValue) toggleDark.classList.add('dark-mode'); 

            else toggleDark.classList.remove('dark-mode'); 
         },[someValue])

         return [someValue, setSomeValue];
}

export default useDarkMode;
