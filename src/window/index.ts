export enum topLogoImgType {

  /**
   * 静态, 本地图片
   */
  static,

  /**
   * 网络图片
   */
  network,

}

export interface topDataInterface {

  /**
   * `logo` 图片
   */
  logoImg: string

  /**
   * `logo` 图片类型
   */
  logoImgType: topLogoImgType
}

export interface leftMenuItemInterface {

  /**
   * 图标
   */
  icon: string

  /**
   * 标题
   */
  title: string

  /**
   * 子菜单
   */
  children?: any[]

  /**
   * 路由
   */
  router: string
}