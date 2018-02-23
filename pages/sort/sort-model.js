// pages/sort/sort.js
import { Base } from '../../utils/base.js';
class Home extends Base {
  constructor() {
    super();
  }
  getBannerData(id, callback) {
    var params = {
      url: 'banner/' + id,
      sCallback: function (res) {
        callback && callback(res.items);
      }

    }
    this.request(params);
  }
  getProductsData(callback) {
    var params = {
      // url: 'product/recent?count=5',
      url: 'product/recent',//默認15個商品
      sCallback: function (data) {
        callback && callback(data);
      }

    };
    this.request(params);
  }  
}
export { Home };
