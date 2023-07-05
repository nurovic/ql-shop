import { create } from 'zustand';

interface ViewNavbar {
  isOpen: boolean;
  toggle: () => void;
}

const NavbarViewSlice = create<ViewNavbar>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state?.isOpen })),
}));


export default NavbarViewSlice;
