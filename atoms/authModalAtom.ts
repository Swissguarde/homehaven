import { atom } from "recoil";
import { RecoilEnv } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

interface authModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultModalState: authModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<authModalState>({
  key: "authModalState",
  default: defaultModalState,
});
