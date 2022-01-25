import { UserDataProps } from "@interfaces/User";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const UserDataListState = atom<UserDataProps[]>({
  key: "USER/DATA/LIST",
  effects_UNSTABLE: [persistAtom],
  default: [],
});

const UserDataCountState = atom<number>({
  key: "USER/DATA/COUNT",
  effects_UNSTABLE: [persistAtom],
  default: 0,
});

const User = { UserDataListState, UserDataCountState };
export default User;
