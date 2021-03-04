import { useEffect, useState } from 'react';

const getMenuPosition = ({ scrollRef, triggerRef, menuRef }) => {
  const { top } = triggerRef
    .current.getBoundingClientRect();
  const { height: menuHeight } = menuRef
    .current.getBoundingClientRect();
  const scrollHeight = scrollRef
    ? scrollRef.current.clientHeight
    : document.clientHeight;
  if (scrollHeight - menuHeight < top) {
    return 'upward';
  }
  return '';
};

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  scrollRef,
}) {
  const [menuPosition, setMenuPosition] = useState('');
  useEffect(() => {
    setMenuPosition(getMenuPosition({
      menuRef,
      triggerRef,
      scrollRef,
    }));
  }, [menuRef, triggerRef, scrollRef]);
  return { menuPosition };
}
