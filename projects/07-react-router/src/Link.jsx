import { EVENTS } from "./consts.js";

export const navigate = (href) => {
  window.history.pushState({}, "", href);
  // crear un evento presonalizado para avisar cambios
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
};

export const Link = ({ target, to, ...props }) => {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // 0 = primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === "_self" || target === undefined;
    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
};
