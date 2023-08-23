import { create } from 'zustand';

interface ProductSearchModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const sliceProductSearchModal = create<ProductSearchModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default sliceProductSearchModal;
