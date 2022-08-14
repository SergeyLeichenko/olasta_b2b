export default function (instance) {
  return {
    signIn(payload) {
      return instance.post("user/login/", payload);
    },
    logout() {
      return instance.post("user/logout/");
    },
  };
}
