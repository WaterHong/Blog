/**
 * 贪心算法：
 * 把问题分为若干个子问题，对每个子问题求解，从而得到局部最优解，
 * 再合并局部最优解从而得到全局最优解
 * 
 * 实现框架
 * while （能朝给定总目标前进一步）{
 *  利用可行的决策，求出可行解的一个解元素；
 * }
 */

 /**
  * 经典题一：【最大整数】设有n个正整数，将它们连接成一排，组成一个最大的多位整数。
  * eg：
  * n=3时，3个整数13，312，343，连成的最大整数为34331213。
  * n=4时，4个整数7，13，4，246，连成的最大整数为7424613。
  * 思路：
  * 先把整数转换成字符串，然后在比较a+b和b+a，如果a+b>=b+a，就把a排在b的前面，反之则把a排在b的后面。
  */
