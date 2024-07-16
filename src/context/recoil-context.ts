import { Career, Education, FindTeamInterface, TeamProfile } from '@/lib/types'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const educationListState = atom<Education[]>({
  key: 'educationListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const emailState = atom({
  key: 'emailState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
})

export const careerListState = atom<Career[]>({
  key: 'careerListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const accessTokenState = atom<string | null>({
  key: 'accessTokenState',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const myDataState = atom({
  key: 'myDataState',
  default: {},
})

export const authState = atom<boolean>({
  key: 'authState',
  default: false, // Default to not logged in
})

// context/recoil-context.ts

import { PrivateProfile } from '@/lib/types'

export const filteredProfilesState = atom<PrivateProfile[]>({
  key: 'filteredProfilesState',
  default: [],
})
export const filteredTeamsState = atom<FindTeamInterface[]>({
  key: 'filteredTeamsState',
  default: [],
})
