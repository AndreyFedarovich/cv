import { useEffect, useState } from 'react';

const getMenuPosition = ({
  scrollRef,
  triggerRef,
  menuRef,
}) => {
  const { current: trigger } = triggerRef;
  const { current: menu } = menuRef;

  if (!trigger || !menu) return '';
  const { top } = trigger.getBoundingClientRect();
  const { height: menuHeight } = menu.getBoundingClientRect();
  let scrollHeight = document.documentElement.clientHeight;

  if (scrollRef) {
    const { current: scroll } = scrollRef;
    if (!scroll) return '';
    scrollHeight = scroll.clientHeight;
  }
  if (scrollHeight - menuHeight < top) return 'upward';
  return '';
};

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  scrollRef,
  isOpen,
}) {
  const [menuPosition, setMenuPosition] = useState('');
  useEffect(() => {
    setMenuPosition(
      getMenuPosition({
        isOpen,
        menuRef,
        triggerRef,
        scrollRef,
      }),
    );
  }, [menuRef, triggerRef, scrollRef, isOpen]);
  return { menuPosition };
}
