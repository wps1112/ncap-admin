import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children),
    } : {},
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  { path: '/info', title: '系统信息', icon: 'cloud' },
  { path: '/news', title: '今日新闻', icon: 'sort-amount-desc' },
  { path: '/task', title: '任务管理', icon: 'tasks' },
  { path: '/model', title: '模型管理', icon: 'magic' },
])

export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  { path: '/info', title: '系统信息', icon: 'cloud' },
  { path: '/news', title: '今日新闻', icon: 'sort-amount-desc' },
  { path: '/task', title: '任务管理', icon: 'tasks' },
  { path: '/model', title: '模型管理', icon: 'magic' },
])
