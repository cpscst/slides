import { b as base } from "../../../chunks/paths.js";
const load = async ({ fetch }) => {
  const response = await fetch(`${base}/api/slides`);
  const slides = await response.json();
  return {
    slides
  };
};
export {
  load
};
