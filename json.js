angular.module("Customer",[])
.controller("Cust",function($scope)
{
    var details=[
        {"customer_id":2001,"Name":"Teyash Basu","Address":"3,Bose Para Road","Phone_No":9477069393,"order_id":101,"Total_bill":500,"payment_id":406},
        {"customer_id":2002,"Name":"Alok Mehra","Address":"6,Chandi Charan Road","Phone_No":9473459393,"order_id":102,"Total_bill":600,"payment_id":408},
        {"customer_id":2003,"Name":"Suman Verma","Address":"5,Ballygaunge Street","Phone_No":9753269393,"order_id":103,"Total_bill":1250,"payment_id":416},
        {"customer_id":2004,"Name":"Isha Gupta","Address":"23,Parkstreet","Phone_No":9456769393,"order_id":104,"Total_bill":1000,"payment_id":407},
        {"customer_id":2005,"Name":"Anubhav Saha","Address":"8,M.G Road","Phone_No":9471234393,"order_id":105,"Total_bill":820,"payment_id":440},
        {"customer_id":2006,"Name":"Poorvi Singh","Address":"11,Bose Pukur Road","Phone_No":9477056783,"order_id":106,"Total_bill":690,"payment_id":456},
        {"customer_id":2007,"Name":"Vani Kohli","Address":"6,Thankurpur","Phone_No":9477065678,"order_id":107,"Total_bill":300,"payment_id":407},
        {"customer_id":2008,"Name":"Ashoke Kumar","Address":"8,B.K Street","Phone_No":9477067890,"order_id":108,"Total_bill":700,"payment_id":432}
    ];
    $scope.details=details;
    $scope.rowlimit=6;
});