export function print(arg1){console.log(arg1);}
export function newline(){print("-------------------");}

export function println(arg1){
    for (var idx = 0; idx < arguments.length; idx++) {
        console.log(arguments[idx]);
    }
    print("-------------------------")
}
