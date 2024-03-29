import { createElement } from "react";

type SocialIcons = "github" | "twitter" | "linkedin" | "twitch" | "readcv";
type GeneralIcons = "arrow-right" | "list-tree" | "magic-wand" | "copy";
export type Icons = GeneralIcons | SocialIcons;

type IconProps = {
  icon: Icons;
  className?: string;
};

type IconComponentProps = {
  className?: string;
};

export default function Icon({ icon, className }: IconProps) {
  const props = { className: `h-4 w-4 fill-zinc-100 ${className}` };

  switch (icon) {
    case "arrow-right":
      return createElement(ArrowRight, props);
    case "github":
      return createElement(GitHub, props);
    case "twitter":
      return createElement(Twitter, props);
    case "linkedin":
      return createElement(LinkedIn, props);
    case "twitch":
      return createElement(Twitch, props);
    case "readcv":
      return createElement(ReadCV, props);
    case "list-tree":
      return createElement(ListTree, props);
    case "magic-wand":
      return createElement(MagicWand, props);
    case "copy":
      return createElement(Copy, props);
    default:
      return null;
  }
}

function ArrowRight(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
    </svg>
  );
}

function GitHub(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
  );
}

function Twitter(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
  );
}

function LinkedIn(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
  );
}

function Twitch(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M391.17 103.47h-38.63v109.7h38.63zM285 103h-38.63v109.75H285zM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93z"></path>
    </svg>
  );
}

function ReadCV(props: IconComponentProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 180 180"
    >
      <path
        fillRule="evenodd"
        d="M71.15 23.151l68.372 18.32c9.44 2.53 15.042 12.233 12.513 21.673l-21.755 81.192c-2.53 9.44-12.233 15.042-21.673 12.513l-68.372-18.321c-9.44-2.529-15.042-12.232-12.512-21.673l21.755-81.19c2.53-9.44 12.232-15.043 21.672-12.514zm-2.29 8.547a8.848 8.848 0 00-10.836 6.256l-21.755 81.192a8.848 8.848 0 006.256 10.836l68.372 18.32a8.847 8.847 0 0010.836-6.256l21.755-81.192a8.847 8.847 0 00-6.256-10.836l-68.371-18.32z"
        clipRule="evenodd"
      ></path>
      <path d="M67.409 54.21a4.424 4.424 0 015.418-3.129l51.279 13.74a4.423 4.423 0 11-2.29 8.547l-51.279-13.74a4.424 4.424 0 01-3.128-5.419zM61.684 75.575a4.424 4.424 0 015.418-3.128l51.279 13.74a4.424 4.424 0 01-2.29 8.547l-51.279-13.74a4.424 4.424 0 01-3.128-5.419zM55.959 96.941a4.424 4.424 0 015.418-3.128l29.913 8.015a4.424 4.424 0 01-2.29 8.547l-29.913-8.015a4.425 4.425 0 01-3.128-5.419z"></path>
    </svg>
  );
}

function ListTree(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32 112h32V80H32v32zM0 72c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-8v96h64v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H64v112c0 8.8 7.2 16 16 16h48v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-8H80c-26.5 0-48-21.5-48-48V144h-8c-13.3 0-24-10.7-24-24V72zm160 24c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm128 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16zm-128 16h32v-32h-32v32zm0-192v32h32v-32h-32z"></path>
    </svg>
  );
}

function MagicWand(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1 14.1 37.7c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2l-37.7-14.1L263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5l-14.1 37.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0l381.3-381.4c18.7-18.7 18.7-49.1 0-67.9l-34.6-34.5c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path>
    </svg>
  );
}

function Copy(props: IconComponentProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M272 0h124.1C408.8 0 421 5.1 430 14.1L497.9 82c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path>
    </svg>
  );
}
