import { RunGoogleScript } from "./Utils";

// ユーザーID取得用
export const getUserId = async () => {
    return RunGoogleScript("getUserIdApi");
};
