export default function({ store, route, redirect }) {
  const user = store.state.users.isAuthenticated;
  const blockedRoute = /\/user\/[a-z]*/g;
  const loginRoute = "/auth";
  const registerRoute = "/auth/register";

  if (!user && route.path.match(blockedRoute)) {
    redirect("/");
  }

  if (
    (user && route.path === loginRoute) ||
    (user && route.path === registerRoute)
  ) {
    redirect("/user/account");
  }
}
