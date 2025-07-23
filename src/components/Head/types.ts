import { NavigationItem } from './navigation'

export const hasChildren = (item: NavigationItem): item is Extract<NavigationItem, { children: any }> => 'children' in item
export const hasTarget = (item: NavigationItem): item is Extract<NavigationItem, { target: string }> => 'target' in item