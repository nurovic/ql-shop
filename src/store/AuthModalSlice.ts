import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes';
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
  },
  checkAuth: false

}));


export default sliceAuthModal;
