import { create } from 'zustand';

interface AuthModalStore {
  auth: IAuth;
}

interface IAuth {
  name: string
}

const sliceAuthModal = create<AuthModalStore>((set) => ({
  auth: {
    name: ""
  }

}));


export default sliceAuthModal;
