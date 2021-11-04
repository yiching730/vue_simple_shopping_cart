var app = new Vue({
el:'#app',
data:{
itemList:[
    {
        id:'1',
        itemName:'文青白T恤',
        imgUrl: 'images/t-shirt.jpg',
        price:'500',
        count:'1'
    },
    {
        id:'2',
        itemName:'自信風藍T',
        imgUrl:'images/t-shirt2.jpg',
        price:'790',
        count:'1'
      },
      {
        id:'3',
        itemName:'超時尚牛仔褲',
        imgUrl:'images/jeans.jpg',
        price:'1200',
        count:'1'
      },
      {
        id:'4',
        itemName:'質感圓點系列洋裝',
        imgUrl:'images/dress.jpg',
        price:'2300',
        count:'1'
      },
]
},
methods:{
  handlePlus:function(item){
    console.log(item);
    item.count++;
  },
  handleSub:function(item){
    console.log(item);
    if(item.count>=1){
      item.count--;
    }
  },
  handledelete:function(index){
    let result = confirm(`確定刪除嗎?`);
    if(result){
      this.itemList.splice(index, 1);
    }
  },
},
computed:{
  totalPrice(){
    //  console.log(1);
     let totalPrice=0;
     for(let i=0;i<this.itemList.length;i++){
         totalPrice=totalPrice+this.itemList[i].price*this.itemList[i].count;
  
         }   
        return totalPrice; 
 }
}
})