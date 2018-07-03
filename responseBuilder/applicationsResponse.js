
var express = require('express');

 var applications = [
    {name:"Bullet strike:sniper", company:"horun entertainement", status:"coming soon", image:"https://i.kinja-img.com/gawker-media/image/upload/t_original/npyezrggapq52j9bk9cc.jpg"},
    {name:"Hitman Sniper", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Px4BIRxwBFTGNamYcy8ooQfoe3tMbEIqtt0Bkp9opy5tbEaKBA"},
    {name:"Command", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfnDejkNxINYLO1Ssd6dHxtBqcmf2IrNJndzxyV26f-wS_E5YTQ"},
    {name:"Hero Hunters", company:"desiny", status:"coming soon", image:"https://boyslifeorg.files.wordpress.com/2017/03/chess-1.jpg?w=620&h=465"},
    {name:"Life is Strange", company:"desiny", status:"coming soon", image:"https://i.kinja-img.com/gawker-media/image/upload/t_original/npyezrggapq52j9bk9cc.jpg"},
    {name:"Giatans War", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuVnq0ykZnOsxFgvM9D3KvHFb844DG-Xfp5Khr3nfbMOceDCi"},
    {name:"Trade Island", company:"desiny", status:"coming soon", image:"http://kkio.com/wp-content/uploads/2018/06/Summer-Games-Done-Quick-donations-will-determine-a-new-skin-for-Prey.jpg"},
    {name:"Marvel Strike", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K0ao9pytDoLS8wI3TxIXMAnz-GmFEBS-n5EEGYfvXUiGSk_v"},
    {name:"Dead Rivals", company:"desiny", status:"coming soon", image:"https://i.kinja-img.com/gawker-media/image/upload/t_original/npyezrggapq52j9bk9cc.jpg"},
    {name:"infinity OPS", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxeexRX7hlHS6TQfaCrxIlAVrMBa4keiTRCYmTrQysZQE_XRh"},
    {name:"Gardius Empire", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfnDejkNxINYLO1Ssd6dHxtBqcmf2IrNJndzxyV26f-wS_E5YTQ"},
    {name:"Royal Blood", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Px4BIRxwBFTGNamYcy8ooQfoe3tMbEIqtt0Bkp9opy5tbEaKBA"},
    {name:"Boxinf Star", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuVnq0ykZnOsxFgvM9D3KvHFb844DG-Xfp5Khr3nfbMOceDCi"},
    {name:"Lest dance", company:"desiny", status:"coming soon", image:"http://kkio.com/wp-content/uploads/2018/06/Summer-Games-Done-Quick-donations-will-determine-a-new-skin-for-Prey.jpg"},
    {name:"Fentastic Beats", company:"desiny", status:"coming soon", image:"https://i.kinja-img.com/gawker-media/image/upload/t_original/npyezrggapq52j9bk9cc.jpg"},
    {name:"UNCHAINED", company:"desiny", status:"coming soon", image:"https://boyslifeorg.files.wordpress.com/2017/03/chess-1.jpg?w=620&h=465"},
    {name:"Injustice 2", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfnDejkNxINYLO1Ssd6dHxtBqcmf2IrNJndzxyV26f-wS_E5YTQ"},
    {name:"Cross Fire", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K0ao9pytDoLS8wI3TxIXMAnz-GmFEBS-n5EEGYfvXUiGSk_v"},
    {name:"Futurama", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuVnq0ykZnOsxFgvM9D3KvHFb844DG-Xfp5Khr3nfbMOceDCi"},
    {name:"Taichi Panda 3", company:"desiny", status:"coming soon",  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Px4BIRxwBFTGNamYcy8ooQfoe3tMbEIqtt0Bkp9opy5tbEaKBA"},
    {name:"Havana", company:"desiny", status:"coming soon",  image:"https://boyslifeorg.files.wordpress.com/2017/03/chess-1.jpg?w=620&h=465"},
    {name:"Doodle Jump", company:"desiny", status:"coming soon",  image:"http://kkio.com/wp-content/uploads/2018/06/Summer-Games-Done-Quick-donations-will-determine-a-new-skin-for-Prey.jpg"},
    {name:"Jordan Dunk", company:"desiny", status:"coming soon",  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxeexRX7hlHS6TQfaCrxIlAVrMBa4keiTRCYmTrQysZQE_XRh"},
    {name:"Ziba Hitz", company:"desiny", status:"coming soon", image:"https://i.kinja-img.com/gawker-media/image/upload/t_original/npyezrggapq52j9bk9cc.jpg"},
    {name:"Roll the Ball", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K0ao9pytDoLS8wI3TxIXMAnz-GmFEBS-n5EEGYfvXUiGSk_v"},
    {name:"Love Quotes", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuVnq0ykZnOsxFgvM9D3KvHFb844DG-Xfp5Khr3nfbMOceDCi"},
    {name:"Biker 123", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfnDejkNxINYLO1Ssd6dHxtBqcmf2IrNJndzxyV26f-wS_E5YTQ"},
    {name:"mini militia", company:"desiny", status:"coming soon", image:"http://kkio.com/wp-content/uploads/2018/06/Summer-Games-Done-Quick-donations-will-determine-a-new-skin-for-Prey.jpg"},
    {name:"Tic Tac Toe", company:"desiny", status:"coming soon", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Px4BIRxwBFTGNamYcy8ooQfoe3tMbEIqtt0Bkp9opy5tbEaKBA"},
  ];

 var applicationsData = function(callback) {
      callback({meta:{count: applications.length,
                        code: 200},
                applications:applications})
  }

  module.exports = {"applicationsData" : applicationsData};