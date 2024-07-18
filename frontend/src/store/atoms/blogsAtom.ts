import {atom} from 'recoil'
import { Blog } from '../../types/BlogsTypes';



export const loadingAtom = atom({
    key: 'loadingState',
    default: true
})


export const blogsAtom = atom<Blog[]>({
    key: 'blogsState',
    default: [],
});

