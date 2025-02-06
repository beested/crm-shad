import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage<any>('user', undefined, undefined, {
  getOnInit: true,
});
