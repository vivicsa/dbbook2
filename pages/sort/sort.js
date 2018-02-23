 import { Home } from 'sort-model.js';
 var home = new Home();
Page({
  data:{
    // tagArr:[

      // {title:"文学",tags:["小说","外国文学","文学","随笔","中国文学","经典","日本文学","散文","村上春树","诗歌","童话","杂文","王小波","儿童文学","古典文学","张爱玲","名著","余华","当代文学","钱钟书","鲁迅","外国名著","诗词","茨威格","米兰·昆德拉","杜拉斯","港台"]},
      // {title:"流行",tags:["漫画","绘本","推理","青春"," 言情","科幻","东野圭吾","悬疑"," 武侠","奇幻","韩寒","日本漫画","耽美","亦舒","三毛","网络小说","安妮宝贝","推理小说","郭敬明","穿越"," 金庸","轻小说","阿加莎·克里斯蒂","几米","魔幻","张小娴","幾米","青春文学"," 科幻小说","J.K.罗琳","高木直子","古龙"," 沧月","落落","张悦然","蔡康永"]},
      // {title:"历史文化",tags:["历史","心理学","哲学","传记","文化","社会学","艺术","设计政治","社会","建筑","宗教","电影","数学","政治学","回忆录思想","中国历史","国学","音乐人文","人物传记","戏剧","绘画","艺术史","佛教","军事","西方哲学","近代史","二战","考古","自由主义美术"]},
      // {title:"生活",tags:["爱情","旅行","生活","成长","励志","心理","摄影","女性","职场","美食","教育","游记","灵修","健康","情感","手工","养生","两性","人际关系","家居","自助游"]}
      //
      // { title: "烟机", tags: ["张娜", "小猪", "老孙", "2姐", "大妈"] },
      //  ]
  },
 

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id
    this._loadData(id);
  },

  _loadData: function (id) {
    // var id = 1;
    home.getBannerData(id, (res) => {

      this.setData(
        {
          'bannerArr': res
        }
      );
    });
   
    home.getProductsData((data) => {
        this.setData({
          'productsArr': data
      });

    });

  },
  onProductsItemTap: function (event) {
    // console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../product/product?id=' + id
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})