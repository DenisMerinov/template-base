import { atom } from 'jotai';

// Атом для состояния боковой панели фильтров (свернута/развернута)
export const sidebarCollapsedAtom = atom<boolean>(false);

// Атом для состояния навигационной панели (свернута/развернута)
export const navSidebarCollapsedAtom = atom<boolean>(false);
