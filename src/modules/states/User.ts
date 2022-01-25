import { UserDataProps } from "@interfaces/User";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const UserDataListState = atom<UserDataProps[]>({
  key: "USER/DATA_LIST",
  effects_UNSTABLE: [persistAtom],
  default: [],
});

const User = { UserDataListState };
export default User;
