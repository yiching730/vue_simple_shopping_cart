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
        itemName:'骷髏手短黑T',
        imgUrl:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price:'790',
        count:'1'
      },
      {
        id:'3',
        itemName:'超時尚牛仔庫',
        imgUrl:'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
        price:'1200',
        count:'1'
      },
      {
        id:'4',
        itemName:'質感褐色系大衣服',
        imgUrl:'https://images.unsplash.com/photo-1491998664548-0063bef7856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
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