import React, { createContext } from 'react';
import ChildA from './childA';

const data1 = createContext()
const data2 = createContext()
function datas() {
    let name = 'Rudra'
    let age = 18
    return(
        <div>
            <data1.Provider value={name}>
                <data2.Provider value={age}>
                    <ChildA/>
                </data2.Provider>
            </data1.Provider>
        </div>
    )
}

export {data1, data2} 