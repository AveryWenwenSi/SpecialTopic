// pages/index/index.js
Page({

  /**
   * Page initial data
   * should seperate trump and biden
   */
  data: {
    showtitle : false,
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    weeklyMovieList: [
      {
        name: "金灿荣\n",
        comment: "美国政治运行质量下降缘于党争\n",
        imagePath: "/images/jcr.jpg",
        isHighlyRecommended: false,
        id: 1292722,
        content: "“三权分立”一直是美国政治制度的最主要特征之一，也被美国政治精英认为是其民主政治的先进之处和优势所在。不过，最近美国国内政治却出现了不小的问题。由于美国总统特朗普宣布国家进入紧急状态，在民主党依靠其多数优势控制的众议院通过一项取消国家紧急状态的决议后，佩洛西等人正寻求参议院也能通过这一决议。不过，特朗普对此表示他将毫不犹豫否决议会的这个决议，而这似乎仍不是“终点站”。"
      },
      {
        name: "金灿荣\n",
        comment: "“武统台湾”警告的指向性非常清晰\n",
        imagePath: "/images/jcr.jpg",
        isHighlyRecommended: false,
        id: 1295644,
        content: "距离中国驻美公使李克新有关“武统台湾”的表态过去好几天了，但国际舆论尤其岛内的关注仍未平息。不少分析人士先是对这一表态感到意外，随后又做出种种猜测，但我觉得它的指向和用意其实非常清晰。一方面是警告美国。美国现在能对中国打的牌越来越少，比如军事威慑，因为中国军事现代化的快速推进而大为减弱;经济制裁，因为中国经济块头变大、中美经济更加交融而不敢轻易启用."
      },
      {
        name: "沈逸\n",
        comment: "“冷战活化石”注定难阻历史前行\n",
        imagePath: "/images/shenyi.jpg",
        isHighlyRecommended: true,
        id: 1291841,
        content: "他们使用与当今世界格格不入的僵化、刻板的陈词滥调，从冷战时期的美国意识形态出发，被人们称为“一群从历史尘埃中重新聚集起来的冷战活化石”。这封信，据称由退役海军上校、美军太平洋舰队情报和信息行动前主管詹姆斯·E·法内尔执笔，签名者包括美国退役军人、前情报官员、学者、智库成员各色人等。信中说，中国所表露的野心与美国的战略利益背道而驰，中国正日益采取危及美国及其盟友的行动。"
      },
    ],
    showShare: false,
    options: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],
    value: 3,
    clouds:[
      "/images/cloud1.jpg",
      "/images/cloud2.gif",
      "/images/cloud3.jpg",
    ],
  },

  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1,
      cloudIndex: 0
    })
  },

  f0: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f1: function(event) {
    var movieId = event.currentTarget.dataset.movieId
    //console.log(movieId);
    
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId
    })
  },
  onClick(event) {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  onReady: function () {
    var interval = setInterval(() => {
      if (this.data.cloudIndex < this.data.clouds.length - 1) {
        this.setData({
          cloudIndex : this.data.cloudIndex + 1
        })
      } else {
       // clearInterval(interval);
       this.setData({
        cloudIndex: 0
       })
      }
      }, 3000)
  },
  
})