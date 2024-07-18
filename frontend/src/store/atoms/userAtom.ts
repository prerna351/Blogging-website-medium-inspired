import {atom} from 'recoil'
import { SignupInput } from "@presha/common_blog";

export const userCredentialAtom = atom<SignupInput>({
    key:"userCredential",
    default: {
        name: "",
        email: "",
        password: ""
    }
})