import { atom } from "jotai";
 
const localData = JSON.parse(localStorage.getItem('data'))
export const dataAtom = atom(localData || [])

export const userNumberCard = atom('')
export const userCardName = atom('')
export const userDateCard = atom('')
export const userCvvCard = atom('')


