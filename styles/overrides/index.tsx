import Button from "./Button";

export default function componentsOverrides(theme: any) {
  return Object.assign(Button(theme), {
    // Other overrides for components can be added here
  });
}
