import type { Lang } from "./types";

export function getLang(): Lang {
  let lang = "en";
  if (document.documentElement.lang !== undefined) {
    lang = document.documentElement.lang.split("-")[0];
  }
  return lang as Lang;
}

export async function loadInfoJson(id: URL) {
  let url: string;

  if (!id.toString().endsWith("/info.json")) {
    if (!id.toString().endsWith("/")) {
      url = id.toString() + "/info.json";
    } else {
      url = id.toString() + "info.json";
    }
  } else {
    url = id.toString();
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return await response.json();
}
