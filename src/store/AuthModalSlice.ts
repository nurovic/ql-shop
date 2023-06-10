import { create } from 'zustand';

interface AuthModalStore {
  auth: IAuth;
  checkAuth: Boolean
}

interface IAuth {
  name: string
}

const sliceAuthModal = create<AuthModalStore>((set) => ({
  auth: {
    name: ""
  },
  checkAuth: false

}));


export default sliceAuthModal;
