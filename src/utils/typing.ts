/*
 * @Author: C.C.
 * @Date: 2021-07-14 17:06:49
 * @Last Modified by: C.C.
 * @Last Modified time: 2021-07-14 17:21:59
 */

export interface timestampTransformresultType {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}

export interface timestampTransformType {
    (timestamp: number): timestampTransformresultType;
}
