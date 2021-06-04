import media1 from "./foto-home-1.png";
import media2 from "./foto-home-2.png";
import media3 from "./media-3.jpeg";
import media4 from "./media-4.jpeg";
import media5 from "./media-5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
