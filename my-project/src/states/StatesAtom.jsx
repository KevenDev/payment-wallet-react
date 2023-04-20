import { atom } from "jotai";
  

const localData = JSON.parse(localStorage.getItem('data'))
export const dataAtom = atom(localData || [])
