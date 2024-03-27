import React, {createContext, useState, useContext} from 'react';

type SelectedImageContextType = {
  selectedImageIndex: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const SelectedImageContext =
  createContext<SelectedImageContextType | null>(null);

export const SelectedImageProvider = ({children}: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  return (
    <SelectedImageContext.Provider
      value={{selectedImageIndex, setSelectedImageIndex}}>
      {children}
    </SelectedImageContext.Provider>
  );
};

export const useSelectedImage = () => {
  const context = useContext(SelectedImageContext);
  if (!context) {
    throw new Error(
      'useSelectedImage must be used within a SelectedImageProvider',
    );
  }
  return context;
};
