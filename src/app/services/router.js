export function router(routes, container) {
  const routeChangeHandler = async () => {
    const hash = window.location.hash.substring(1);
    const route = routes[hash] || routes["garage"];

    container.innerHTML = "";

    const component =
      typeof route === "function" ? await new route().element : route;

    container.append(component.element || component);
  };
  window.addEventListener("hashchange", routeChangeHandler);
  routeChangeHandler();
}
