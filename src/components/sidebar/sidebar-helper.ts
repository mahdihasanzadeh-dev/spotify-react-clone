import type { ISetState } from '@common/common-interface';

export function sidebarHelper(setIsMenuMobileOpen:ISetState<boolean>) {
  function closeMobileMenu() {
    setIsMenuMobileOpen(false);
  }

  function openMobileMenu() {
    setIsMenuMobileOpen(true);
  }

  return {
    closeMobileMenu,
    openMobileMenu,
  };
}
