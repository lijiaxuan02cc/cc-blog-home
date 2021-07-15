/*
 * @Author: C.C.
 * @Date: 2021-07-14 17:04:42
 * @Last Modified by: C.C.
 * @Last Modified time: 2021-07-14 17:32:47
 */
import * as TYPE from './typing';

/**
 *
 *
 * @param {number} timestamp 10位数时间戳记得自己 * 1000; E.g  timestampTransform(1626254538 * 1000)
 * @return {*}  {TYPE.timestampTransformresultType}
 */

export const timestampTransform: TYPE.timestampTransformType = function (
    timestamp: number
): TYPE.timestampTransformresultType {
    const time = new Date(timestamp);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    return {
        year,
        month,
        hour,
        minute,
        day,
        second
    };
};
