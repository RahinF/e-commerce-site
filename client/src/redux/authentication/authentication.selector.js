export const getUser = (state) => state.user.data;
export const getUserLoading = (state) => state.user.isLoading;
export const getLoginError = (state) => state.user.error.login;
export const getRegisterError = (state) => state.user.error.register;