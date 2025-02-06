import { atom } from 'jotai';

type FirstLoginAtomProps = {
  email?: string;
  password?: string;
};

export const FirstLoginAtom = atom<FirstLoginAtomProps>({
  email: '',
  password: '',
});
