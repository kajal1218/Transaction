
fetch('https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2')
.then((apidata)=> {
    // console.log(apidata);
    return apidata.json();
})
.then ( (actualdata) => {
   var paid_ammount= actualdata.transactions[0].amount;
    var req_ammount =actualdata.transactions[1].amount;
    var recive_ammount =actualdata.transactions[2].amount;
    var recive_req =actualdata.transactions[3].amount;
    document.querySelector("#paid_ammount").innerHTML =paid_ammount ;
    document.querySelector("#req_ammount").innerHTML = req_ammount;
    document.querySelector("#recive_ammount").innerHTML =recive_ammount;
    document.querySelector("#recive_req").innerHTML =recive_req;
})
.catch ( (error) => {
    console.log(error);
})


