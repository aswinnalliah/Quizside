import * as React from "react";

export type IconType = keyof typeof iconlib;

export const iconlib = {
  rightArrow: (
    <path d="M16.528 6.46731C16.2338 6.17573 15.7589 6.17784 15.4673 6.47204C15.1757 6.76624 15.1778 7.24111 15.472 7.53269L17.235 9.28C17.9505 9.98914 18.4413 10.4772 18.7734 10.8907C18.8813 11.0251 18.9655 11.1434 19.0309 11.25L4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L19.0309 12.75C18.9655 12.8566 18.8813 12.9749 18.7734 13.1093C18.4413 13.5228 17.9505 14.0109 17.235 14.72L15.472 16.4673C15.1778 16.7589 15.1757 17.2338 15.4673 17.528C15.7589 17.8222 16.2338 17.8243 16.528 17.5327L18.3227 15.7539C18.9987 15.084 19.5511 14.5364 19.9429 14.0485C20.3504 13.5412 20.6453 13.0263 20.7241 12.4082C20.7414 12.2726 20.75 12.1363 20.75 12C20.75 11.8637 20.7414 11.7274 20.7241 11.5918C20.6453 10.9737 20.3504 10.4588 19.9429 9.95146C19.5511 9.46358 18.9987 8.91604 18.3227 8.24609L16.528 6.46731Z" />
  ),
  check: (
    <path d="M20.576 7.48a.75.75 0 1 0-1.152-.96l-5.39 6.469c-1.084 1.3-1.845 2.21-2.506 2.807-.645.583-1.09.768-1.528.768-.437 0-.883-.185-1.528-.768-.66-.597-1.422-1.508-2.505-2.807l-1.39-1.67a.75.75 0 1 0-1.153.961l1.43 1.715c1.034 1.243 1.863 2.238 2.613 2.914.774.7 1.565 1.155 2.533 1.155s1.76-.456 2.533-1.155c.75-.676 1.579-1.671 2.614-2.914l5.43-6.515Z" />
  ),
  close: (
    <path d="M19.5304 5.53033C19.8232 5.23744 19.8232 4.76256 19.5304 4.46967C19.2375 4.17678 18.7626 4.17678 18.4697 4.46967L12 10.9394L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76257 4.17678 5.23744 4.46967 5.53033L10.9394 12L4.4697 18.4697C4.1768 18.7626 4.1768 19.2374 4.4697 19.5303C4.76259 19.8232 5.23746 19.8232 5.53036 19.5303L12 13.0607L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L13.0607 12L19.5304 5.53033Z" />
  ),
};