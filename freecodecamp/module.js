export function print(arg1){console.log(arg1);}
export function newline(){print("-------------------");}


export function println(arg1){
    console.log(arg1);    
    console.log("-------------------------");
};
// var println={
//     count:0,
//     set println(arg1){
//         this.println(arg1);
//     },
//     println(arg1){
//         for (var idx = 0; idx < arguments.length; idx++) {
//             console.log(`${this.count}: `+ arguments[idx]);

//             this.count++;
//         }
//         print("-------------------------")
//     }
// };

// export function println(arg1){
//     var zxc=0;
//     for (var idx = 0; idx < arguments.length; idx++) {
//         console.log(zxc+":\t"+ arguments[idx]);
//         zxc++;
//     }
//     console.log("-------------------------")
// };

// var print={
//     _calledTimes:0,
//     call: function(...arg){println(this._calledTimes, arg);}
// } 
//! Need to pass calledTimes in println by reference else no use