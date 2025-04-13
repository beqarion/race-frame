export function router(routes, container) {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    const route = routes[hash];
    if (route) {
      container.replaceChildren(route);
    } else {
      container.innerHTML = "404 page not found";
    }
  });
}
