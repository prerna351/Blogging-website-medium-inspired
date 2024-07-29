// src/recoil/atoms.ts
import { atom } from 'recoil';

export const blogAtom = atom({
  key: 'blogState',
  default: {
    title: '',
    content: '',
    blogId: null as number | null,
  },
});
