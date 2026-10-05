"use client";
import { useSyncExternalStore } from "react";
const eventName = "coffee-query-change";
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(eventName, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(eventName, callback);
  };
}
/** Render the complete catalogue on the server, then hydrate URL filters. */
export function useQueryParams() {
  const query = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  return new URLSearchParams(query);
}
export function replaceQuery(url: string) {
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(eventName));
}
