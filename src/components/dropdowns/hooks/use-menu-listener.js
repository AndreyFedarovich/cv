import { useEffect, useCallback } from 'react';

export default function useMenuListener({
  menuRef,
  triggerRef,
  toggleOpen,
}) {
  const handleClick = useCallback(
    (e) => {
      const { current: trigger } = triggerRef;
      const { current: menu } = menuRef;
      if (menu?.contains(e.target) || trigger?.contains(e.target)) return;
      toggleOpen(false);
    },
    [menuRef, triggerRef, toggleOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
}
