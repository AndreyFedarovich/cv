export default function onBlurMenu({
  e,
  menuRef,
  toggleOpen,
}) {
  const { current: menu } = menuRef;
  if (menu?.contains(e.relatedTarget)) return;
  toggleOpen(false);

}
