/**
 * Created by kpihu_000 on 27.01.2016.
 */

//Test data
var data = [
    {
        id: 1,
        recipient: "John Smith",
        amount: "300",
        account: "BH67BMAG00001299123456",
        description: "Just for fun",
        status: "done"
    },
    {
        id:2,
        recipient: "Jane Smith",
        amount: "500",
        account: "BH67BMAG34501299123456",
        description: "Cinema",
        status: "pending"
    },
    {
        id: 3,
        recipient: "Jane Doe",
        amount: "500",
        account: "BH67BMAG34501299123456",
        description: "Cinema",
        status: "pending"
    }
];

var moneyServices = angular.module('moneyServices',[]);

moneyServices.factory('comm',['storage',
function(storage){
    return{
        get: function(id){
            if (!storage.get('data')) {
                storage.set('data', data);
            }

            var items = storage.get('data');
            if(id){
                for(var i = 0; i<items.length; i++){
                    var item = items[i];
                    if(item.id == id){
                        return item;
                    }
                }
                return null;
            }
            return items;
        },
        save: function(item){
            if(item){
                var items = storage.get('data');
                item.id = items[items.length-1].id+1;

                items.push(item);
                storage.set('data', items);
                return true;
            }
            return false;
        },
        clear: function(){
            storage.clearAll();
            return true;
        }
    }
}])


