import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let media = window.matchMedia(query);

    if(media.match !== matches){
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    }

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  },[matches, query]);

  return matches;

}