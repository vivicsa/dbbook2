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

}
export { Home };
