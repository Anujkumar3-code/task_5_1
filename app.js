let argv = process.argv.slice(2);
 let operation = argv[1];
 let num = new Array();
 argv=argv.slice(2);
 argv.forEach(element => {
     num.push(Number(element));
 });
 argv=num;
if(operation == "division" || operation == "substraction"){
    if(argv.length == 2){
        if(operation == "division")
        console.log(argv[0] / argv[1]);
        else
        console.log(argv[0]-argv[1]);
    }else{
        console.log("operation not valid");
    }
}
else if(operation == "addition" || operation == "multiply"){
    let ans=0;
    if(operation == "multiply")ans=1;
    for(let i=0;i<argv.length;i++){
        if(operation == "addition")
        ans=ans+argv[i];
        else
        ans=ans*argv[i];
    }
    console.log(ans);
}
else
console.log("operation not valid");