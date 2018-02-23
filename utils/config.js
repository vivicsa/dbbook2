/**api链接 */
const apiUrl = "https://douban.uieee.com/v2/book/";
//一个开发者提供的路由
//与 "https://api.douban.com/v2/book/";作用一样
module.exports = { 
    getBookById: apiUrl,
    searchBook: apiUrl + "search",
    getBookList: apiUrl + "series/:id/books" }
class Config {
constructor() {

}
}
Config.restUrl = 'https://www.bjccyanji.top/zerg/public/index.php/api/v1/';
export { Config };
