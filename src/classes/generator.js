export default function generatorOfEl(
  tagName,
  className,
  typeValue,
  text,
  placeholderValue,
  ariaLabel,
) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (typeValue) element.setAttribute('type', typeValue);
  if (text) element.textContent = text;
  if (placeholderValue) element.setAttribute('placeholder', placeholderValue);
  if (ariaLabel) element.setAttribute('aria-label', ariaLabel);

  return element;
}
