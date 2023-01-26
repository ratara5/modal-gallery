import { createContext} from "react";

export const ImageContext = createContext();

export function ImageContextProvider(props) {
 
  const IMAGES = [
        { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
        { id: 1, title: "Lime Green", color: "LimeGreen" },
        { id: 2, title: "Tomato", color: "Tomato" },
        { id: 3, title: "Seven Ate Nine", color: "#789" },
        { id: 4, title: "Crimson", color: "Crimson" }
  ];
  return (
    <ImageContext.Provider
      value={{
        images:IMAGES
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
}
