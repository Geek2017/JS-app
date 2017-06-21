$.fn.getSummary = function(t, a) {

if ("" == t) {
var t = $("#nameCustomer").val();$("#closeTable").show(); 
}
else{
$("#nameofCustomer").html(a);$("#closeTable").hide() ;
} 
var r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
s = new Date,
l = s.getMinutes();
s.getMinutes() < 9 && (l = "0" + s.getMinutes()), $(".times").html(s.getHours() + ":" + l), $(".dates").html(r[s.getMonth()] + " " + s.getDate() + ", " + s.getFullYear());
var i = JSON.parse(localStorage.getItem("orders"));

$("#homes").hide(), $("img.back").show(), $("#home").hide(), $("#getTheSummary").hide(), $("#customer").show(), $("#startt").hide(), $("#addCustomer").hide(), $("#listCustomers").hide(), $("#allOrders").hide(), $("#summarized").show();
var o = "",
d = 0;
for (e = 0; e < Object.keys(i).length; e++) i[e].id === t && (d += Number(i[e].total), o += '<tr><td style="width:100px; word-break: break-all; text-align: left;">' + i[e].label + '</td><td style="width:60px; word-break: break-all;">' + i[e].unitp + '</td><td style="width:44px; word-break: break-all;">' + i[e].qty + '</td><td style="width:75px; word-break: break-all; text-align: center;">' + i[e].total + "</td></tr>");
$(".gtotal").html(d), $("#summaryofOrders tbody").html(o)
},

$.fn.checkCust = function(e) {
$("#homes").hide(), $("#home").hide(), $("#customer").show(), $("#startt").hide(), $("img.back").show(), $("#addCustomer").hide(), $("#listCustomers").hide(), $("#summarized").hide(), 
(j = 0, t = JSON.parse(localStorage.getItem("orders")), $.map(t, function(t, a) {
t.id === e ? j++ : j += 0
}), 0 != j ? ($("#allOrders").show(), $.fn.getOrders(e)) : ( $("#allOrders").show(),$.fn.getOrders(0)));
var a = JSON.parse(localStorage.getItem("customers")),
r = e - 1;

$("#nameCustomer").val(e), $("#nameofCustomer").html(a[r].customer)
}, 

$.fn.closeModal=function(e){

    setTimeout(function() {
        document.getElementById(e).style.display = 'none'
    }, 2000)
},

$.fn.getOrders = function(t) {

if(t != 0){
var a = JSON.parse(localStorage.getItem("customers")),
s = JSON.parse(localStorage.getItem("orders"));
$("#homes").hide(), $("#home").hide(), $("#customer").show(), $("#startt").hide(), $("#addCustomer").hide(), $("#listCustomers").hide(),
$("#allOrders .myInput").val(""), $("#allOrders #label").val(""), $("#allOrders #qty").val(0);
var l = "";

for (e = 0; e < Object.keys(s).length; e++)
if (parseInt(s[e].id) == t) {
for (r = 0; r < Object.keys(a).length; r++)  t == a[r].id && ("closed" == a[r].status ? $.fn.getSummary(t, a[r].customer) : ($("#getTheSummary").show(), $(".allOrders").show(), $(".summarized").hide()));
l += '<tr id="' + s[e].orderid + '"><td style="text-align: left; width:50%" ><div class="myInput" style="width:80px;word-wrap: break-word;">' + s[e].label + '</div></td><td style="width:10%"><input class="myInput" style="text-align:center;" type="text" id="unitp' + s[e].orderid + '" value="' + s[e].unitp + '" size="4" readonly></td><td style="width:20%"><div class="row"><div class="col-xs-6"><input type="text" name="quantity" value="' + s[e].qty + '" id="qty' + s[e].orderid + '" class="qty myInput" readonly/></div><div class="col-xs-6"><div class="row"><input type="button" value="+"" class="qtyplus" name="plus" /></div><div class="row"><input type="button" value="-"" class="qtyminus" name="minus" /></div></div></div></td><td style="width:20%;"><input style="text-align:center;" type="text" size="5" class="myInput" id="total' + s[e].orderid + '" value="' + s[e].total + '" readonly></td></tr>'
}
}
else{
l= "";
$("#allOrders .myInput").val(""), $("#allOrders #label").val(""), $("#allOrders #qty").val(0);
}

$("#listofOrders tbody").html(l)
}, 

$("#listofCustomers").on("click", "tr", function() {
$.fn.checkCust($(this).closest("tr").attr("id"))
}), 

$.fn.getCustomers = function() {
var a = JSON.parse(localStorage.getItem("customers")),
r = JSON.parse(localStorage.getItem("orders"));
$("#homes").hide(), $("#getTheSummary").hide(), $("#home").hide(), $("#customer").hide(), $("#startt").show(), $("#addCustomer").hide(), $("#listCustomers").show(), $("#allOrders").hide(), $("#summarized").hide();
var s = "";
for (e = 0; e < Object.keys(a).length; e++) {
var l = 0;
if (null === localStorage.getItem("orders")) l = 0;
else
for (t = 0; t < Object.keys(r).length; t++) l += r[t].id == a[e].id ? Number(r[t].total) : 0;
s += "open" === a[e].status ? "<tr id=" + a[e].id + '><td style="text-align: left; width:70%;padding-left:5px" class="inputshere">' + a[e].customer + '</td><td>&nbsp;</td><td style="width:20%;text-align:right;" class="ot-text">' + l + '&nbsp;&euro;</td><td style="width:10%;"><img class="pull-right" style="margin-top:3px;" src="images/arrow-right.png"></td></tr>' : "<tr id=" + a[e].id + '><td style="text-align: left;padding-left:5px" class="ot-close">' + a[e].customer + '</td><td class="ot-close">Cerrado</td><td class="ot-text" style="text-align:right;">' + l + '&nbsp;&euro;</td><td><img src="images/arrow-right.png" class="checkCust pull-right" style="margin-left:5px;" name="' + a[e].id + '"></td></tr>'
}
$("#listofCustomers tbody").html(s)
}, 

$.fn.homepage = function() {
$("#customer").hide(), $("#getTheSummary").hide(), $("#addCustomer").hide(), $("#allOrders").hide(), $("#summarized").hide(), null === localStorage.getItem("customers") ? ($("#wrapps").attr("class", "wrapper"), $("#startt").hide(), $("#listCustomers").hide(), $("#home").show(), $("#homes").show()) : ($("#wrapps").attr("class", "wrappersecondBG"), $("#startt").show(), $("img.back").hide(), $("#listCustomers").show(), $("#home").hide(), $("#homes").hide(), $.fn.getCustomers())
}, $.fn.homepage(), 


$(".add_field_button").click(function(e) {
$("#homes").hide(), $("#getTheSummary").hide(), $("img.back").show(), $("#home").hide(), $("#customer").hide(), $("#startt").show(), $("#addCustomer").show(), $("#listCustomers").hide(), $("#allOrders").hide(), $("#summarized").hide()
}), 

$( "#adCust" ).click(function() {
var e = $.Event('keyup');
e.which = 13; 
$("#addCustomer #name").trigger(e);
});

$("#addCustomer #name").keyup(function(event){
if(event.which == 13){
if ("" === $("#addCustomer #name").val()) return document.getElementById('id02').style.display = 'block', $.fn.closeModal("id02"), !1;
var t = JSON.parse(localStorage.getItem("customers"));
if ($("#allOrders .myInput").val(), $("#allOrders #label").val(""), $("#allOrders #qty").val(0), null === localStorage.getItem("customers")) var a = [{
id: 1,
customer: $("#addCustomer #name").val(),
status: "open"
}];
else {
var r = {
id: Object.keys(t).length + 1,
customer: $(".addCustomer #name").val(),
status: "open"
},
a = JSON.parse(localStorage.getItem("customers"));
a.push(r)
}
$("#wrapps").attr("class", "wrappersecondBG"), $("input[id=name]").val(""), localStorage.setItem("customers", JSON.stringify(a)), $.fn.homepage()
}
}),


$("#listofOrders").on("click", "input[type='button']", function() {
var e = $(this).attr("name"),
t = $(this).closest("tr").attr("id");
if ("plus" === e) {
var a = parseInt($("#qty" + t).val());
$("#qty" + t).val(a + 1), $("#total" + t).val($("#unitp" + t).val() * $("#qty" + t).val())
} else {
var a = parseInt($("#qty" + t).val());
0 >= a ? $("#qty" + t).val(0) : $("#qty" + t).val(a - 1), $("#total" + t).val($("#unitp" + t).val() * $("#qty" + t).val())
}
for (var r = JSON.parse(localStorage.getItem("orders")), s = 0; s < r.length; s++)
if (t == r[s].orderid) {
r[s].qty = $("#qty" + t).val(), r[s].total = $("#total" + t).val();
break
}
localStorage.setItem("orders", JSON.stringify(r))
}), 

$("#endShift").click(function(e) {
document.getElementById('id04').style.display = 'block' 
}), 


$("#getTheSummary").click(function(e) {

if( $("#label").val() !="" && $("#unitp").val() != 0){
document.getElementById('id010').style.display = 'block' 
}
$.fn.getSummary("", "")
}), 

$('.payment').on('click',function(){
receipt = $('#receipt').text();
$('.payment').removeClass('btn-primary');
$('.payment').removeClass('btn-disabled');
$('.payment').addClass('btn-disabled');
$(this).addClass('btn-primary');

payway=$(this).attr("method-name");

}),


$("#summarized").keyup(function(event){
if (event.which == 13 && payway == "cb") {
event.preventDefault();

tetra
.service({
    service:  'local.transaction.engine',
    namespace: 'ingenico.transaction'
})
.reset()
.connect()
.call('ManageTransaction',{
    hide:true,
    data: {
        transaction: {
            currency: {
                code: 'EUR',
                numCode: 978,
                minorUnit: 2,
                minorUnitSeparator: ",",
                thousandSeparator: "",
                position: "CURRENCY_BEFORE_AMOUNT",
                symbol: "&amp;euro;"
            },
            value: receipt*100, //200 =2€           

            transactionType: "Payment"
        },
    }
}).success(function (e) {

$("#id11").css("display","none");
for (var t = JSON.parse(localStorage.getItem("customers")), a = 0; a < t.length; a++)
if ($("#nameCustomer").val() == t[a].id) {
t[a].status = "closed";
window.print();

}
localStorage.setItem("customers", JSON.stringify(t)), $.fn.homepage()

  }).error(function (e) {
    console.log('ERROR: ' + e.response.transactionDetails);
  })
.disconnect()

}
if (event.which == 13 && payway != "cb") {
//$("#message").text("Thank You");
$("#id11").css('display','none')

for (var t = JSON.parse(localStorage.getItem("customers")), a = 0; a < t.length; a++)
if ($("#nameCustomer").val() == t[a].id) {
t[a].status = "closed";
break
}
localStorage.setItem("customers", JSON.stringify(t)), window.print(), $.fn.homepage()
}

if(event.which == 8){
$(".imgback").trigger("click")
}

if(event.which == 27){
$.fn.getSummary("","")
}
}),

$("#closeTable").click(function(e) {
 document.getElementById("id07").style.display = 'block';


}), 

$('html').click(function (e) {
    if (e.target.id == 'id11') {
       
    document.getElementById("id11").style.display = 'none';
    } 
});

$("#allOrders #unitp").keyup(function(e) {

$("#total").val($("#unitp").val() * $("#qty").val()),
isNaN($("#unitp").val()) && $("#unitp").val("0")


}),

$("#allOrders #label").keydown(function(e) {
if(e.keyCode == 13){
$("#unitp").focus() 
}
}),

$("#allOrders").keyup(function(e){
if(e.which == 13 && $("#label").val() == "" && $("#listofOrders tbody").children().length == 0 ){
adOrder();
// $.fn.getSummary("","")
}

if(e.which == 13 && $("#label").val() == "" && $("#listofOrders tbody").children().length != 0 ){
$.fn.getSummary("","")
}

if(e.which == 13 && $("#label").val() != "" && $("#unitp").val() != 0 && $("#qty").val() != 0){
adOrder();
}

if(e.which == 8 && $("#label").val() == "" && $("#unitp").val() == 0){
$(".imgback").trigger("click")
}


})

adOrder = function()
{
    if ("" === $("input[name=label]").val()) return  document.getElementById('id03').style.display = 'block', $.fn.closeModal("id03"), !1;
if ("0" == $("input[name=unitp]").val()) return document.getElementById('id05').style.display = 'block', $.fn.closeModal("id05"), !1;
if ("" === $("input[name=unitp]").val()) return document.getElementById('id05').style.display = 'block', $.fn.closeModal("id05"),!1;
var t = JSON.parse(localStorage.getItem("orders"));
if (null === localStorage.getItem("orders")) var a = [{
id: $("#nameCustomer").val(),
orderid: 1,
label: $("#label").val(),
unitp: $("#unitp").val(),
qty: $("#qty").val(),
total: $("#total").val()
}];
else {
var r = {
id: $("#nameCustomer").val(),
orderid: Object.keys(t).length + 1,
label: $("#label").val(),
unitp: $("#unitp").val(),
qty: $("#qty").val(),
total: $("#total").val()
},
a = JSON.parse(localStorage.getItem("orders"));
a.push(r)
}
$("#allOrders #label").focus(),
localStorage.setItem("orders", JSON.stringify(a)), $.fn.getOrders($("#nameCustomer").val())
}


$(".prints").click(function(e) {
window.print()
}), 

$("#plus").click(function(e) {
var t = parseInt($("#qty").val());
$("#qty").val(t + 1), $("#total").val($("#unitp").val() * $("#qty").val())
}), 

$("#minus").click(function(e) {
var t = parseInt($("#qty").val());
0 >= t ? $("#qty").val(0) : $("#qty").val(t - 1), $("#total").val($("#unitp").val() * $("#qty").val())
}),

$(".imgback").click(function(e){
if( $("#label").val() !="" && $("#unitp").val() != 0){
document.getElementById("id01").style.display = 'block';

}
else{
   $.fn.homepage() 
}

}),


$("button").click(function(e){

    if($(this).attr("data-ta")=="yes"){
        adOrder(),document.getElementById($(this).attr("data-info")).style.display = 'none';

    }
    if($(this).attr("data-ta")=="no"){
        $.fn.homepage(),
        document.getElementById($(this).attr("data-info")).style.display = 'none';
    }
    if($(this).attr("data-ta")=="yes_table"){
          t = $("#nameCustomer").val();

        var i = JSON.parse(localStorage.getItem("orders"));
        d = 0;
        for (e = 0; e < Object.keys(i).length; e++) {
        if(i[e].id === t){
        d += Number(i[e].total)

            }
        }
        $("#id11 #receipt").text(d);

        $("#id11").css('display','block'), document.getElementById($(this).attr("data-info")).style.display = 'none';

        }
    

    if($(this).attr("data-ta")=="yes_shift"){
        localStorage.removeItem("customers"), localStorage.removeItem("orders"), $.fn.homepage(),
        document.getElementById($(this).attr("data-info")).style.display = 'none';
    }
    if($(this).attr("data-ta")=="yes_order"){
       adOrder(),$.fn.getSummary("", ""), $("#allOrders #label").val(""), $("#allOrders #qty").val(0) ,
       document.getElementById($(this).attr("data-info")).style.display = 'none';

    }
    if($(this).attr("data-ta")=="no_order"){
        $.fn.getSummary("", ""), $("#allOrders #label").val(""), $("#allOrders #qty").val(0),
        document.getElementById($(this).attr("data-info")).style.display = 'none';
    }

    

})
$(".cancel").click(function() {
    document.getElementById($(this).attr("data-info")).style.display = 'none';
    return false;
})


$("#id11 .close").click(function(e){

$("#id11").css("display","none")
})