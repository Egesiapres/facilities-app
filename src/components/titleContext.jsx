import { createContext } from 'react';

export const TitleContext = createContext(null);

// NOTES:
// 1. separate file with .createContext() and a new context variable exported
// 2. import the exported variable
// 2. wrap (usually inside App.js) the istances that share the context
// 3. in the same file, define a variable you want to share
// (veru useful when it stores state, setState)
// 4. pass the variable as a prop (necessary named value)
// 5. import useContext() and reuse the variable in the file that needed it
