import {atom} from 'recoil'
import { UserBlogsState } from '../../types/BlogsTypes'


export const userBlogsAtom = atom<UserBlogsState>({
    key: "userBlogs",
    default: {
        user: {
            name: "",
            blog: []
        }
    }
})