/**
 * New typescript file
 */

export class Menu {
  private name: string;
  private icon: string;
  private hasSubMenu: boolean;
  private subMenus: Menu[];
  private route: string;
  private isExpanded: boolean;

  constructor(name: string, icon: string, hasSubMenu: boolean, subMenus: Menu[], route: string, isExpanded: boolean) {
    this.name = name;
    this.icon = icon;
    this.hasSubMenu = hasSubMenu;
    this.subMenus = subMenus;
    this.route = route;
    this.isExpanded = isExpanded;
   }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getIsExpanded(): boolean {
    return this.isExpanded;
  }

  public setIsExpanded(isExpanded: boolean) {
    this.isExpanded = isExpanded;
  }

  public getIcon(): string {
    return this.icon;
  }

  public setIcon(icon: string) {
    this.icon = icon;
  }

  public getHasSubMenu(): boolean {
    return this.hasSubMenu;
  }

  public setHasSubMenu(hasSubMenu: boolean) {
    this.hasSubMenu = hasSubMenu;
  }

  public getSubMenus(): Menu[] {
    return this.subMenus;
  }

  public setSubMenus(menu: Menu[]) {
    this.subMenus = menu;
  }

  public addSubMenu(menu: Menu) {
    this.subMenus.push(menu);
  }

  public getRoute(): string {
    return this.route;
  }

  public setRoute(route: string) {
    this.route = route;
  }

}
