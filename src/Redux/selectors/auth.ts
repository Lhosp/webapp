
export function getAuthUser(state: any) {
  if (state.user.status) {
    return true;
  }
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}
