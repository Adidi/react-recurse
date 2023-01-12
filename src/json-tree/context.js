import React, { useContext } from 'react';

export const TreeContext = React.createContext({});

export const useTreeContext = () => useContext(TreeContext);
