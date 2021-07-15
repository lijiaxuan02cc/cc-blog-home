/*
 * @Author: C.C.
 * @Date: 2021-07-13 17:35:42
 * @Last Modified by: C.C.
 * @Last Modified time: 2021-07-13 21:13:58
 */

interface tabListItemType {
    name: string;
    path: string;
    seleted: boolean;
}

export interface indexConfigType {
    tabList: Array<tabListItemType>;
    coverImg: string;
}

export interface callMeListType {
    iconUrl: string;
    jumpUrl: string;
}

// export interface callMeListType {
//     tabList: Array<tabListItemType>;
//     coverImg: string;
// }
