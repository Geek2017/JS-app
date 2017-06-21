$.fn.homepage = function() {
    $("#settings").hide(), $("#settings_email").hide(), $("#history_list").hide(), $("#currency").hide(), $("#StorageController").hide(), $("#StorageList").hide(), $("#history").hide(), $(".homepage").show(), $(".back").hide()
};
$.fn.homepage();
$.fn.closeModal=function(e){

    setTimeout(function() {
        document.getElementById(e).style.display = 'none'
    }, 2000)
}

$.fn.history = function() {
    var hist = localStorage.getItem("history");
    var saveds = localStorage.getItem('tblstorage');
    var tblstorages = (localStorage.getItem('tblstorage') !== null) ? JSON.parse(saveds) : [];
    localStorage.setItem('tblstorage', JSON.stringify(tblstorages));


    if (hist != null) {
        if (hist == 1) {
            var startDate = moment().format("YYYY-MM-DD");
            var endDate = moment().format("YYYY-MM-DD");
        } else if (hist == 30) {
            var startDate = moment().subtract(1, "month").format("YYYY-MM-DD");
            var endDate = moment().subtract(1, "days").format("YYYY-MM-DD");
        } else if (hist == 180) {
            var startDate = moment().subtract(6, "months").format("YYYY-MM-DD");
            var endDate = moment().subtract(1, "days").format("YYYY-MM-DD");
        }
        else {

            var startDate = moment().subtract(hist, "days").format("YYYY-MM-DD");
            var endDate = moment().subtract(1, "days").format("YYYY-MM-DD");

        }

        var filtered2 = tblstorages.filter(function(val, i, arr) {
            return (val.Dates >= startDate || val.Dates <= endDate);
        });


        var ht = "";
        for (i = 0; i < filtered2.length; i++) {

            ht += '<table class="table"><thead class="cc-dt-head">';
            ht += '<tr><td><b>' + filtered2[i].Dates + '</b></td><td class="text-right"><b>' + filtered2[i].Time + '</b></td></tr></thead>';
            ht += '<tr><td><b>Monedas:</b></td><td align="right">' + filtered2[i].Coin + '</td></tr>';
            ht += '<tr><td><b>Billetes:</b></td><td align="right">' + filtered2[i].Notes + '</td></td>';
            ht += '<tr><td><b>Total:</b></td><td align="right" style="color:#d40410; font-weight: bold">' + filtered2[i].Total + '</td></tr>';
            ht += '</table>';

        }

        $("#historytable").html(ht);



    }
    else{
        var startDate = moment().subtract(6, "month").format("YYYY-MM-DD");
        var endDate = moment().subtract(1, "days").format("YYYY-MM-DD");
    }
}

$(".settings").click(function() {
    $(".back").show(), $(".homepage").hide(), $("#settings").show(), $("#settings_email").hide(), $("#currency").hide(), $("#history_list").hide()
});

$("#timetoday").text(moment().format("HH:mm"));
$("#datetoday").text(moment().format("DD/MM/YYYY"));


var value = localStorage.getItem('Cur');

if(localStorage.getItem('history') !== null){
    var history_val = localStorage.getItem('history');
}
else{
   var history_val = 180; 
   var value = localStorage.setItem('history',180);
}
$("input[name=currency][value='" + value + "']").prop("checked", true);
$("input[name=history][value='" + history_val + "']").prop("checked", true);

"EUR" === value && (lt = 2), "AUD" === value && (lt = 2), "CAD" === value && (lt = 2), "CHF" === value && (lt = 5), "CNY" === value && (lt = 1), "GBP" === value && (lt = 2), "INR" === value && (lt = 5), "JPY" === value && (lt = 500), "BRL" === value && (lt = 1), "MXN" === value && (lt = 20);

var symbol = localStorage.getItem("symbol");
$(".cash_all").click(function() {
    return null == localStorage.getItem("Cur") ? (document.getElementById("id01").style.display = 'block', !1) : ($(".back").show(), $(".homepage").hide(), $("#settings").hide(), $("#settings_email").hide(), $("#history_list").hide(), $("#currency").hide(), $("#StorageController").hide(), $("#StorageList").show(), $("#history").hide(), $("#coinsandbanks_b2").hide(), $("#coinsandbanks").focus(), $("#coinPanel").removeClass("cc-tab").addClass("cc-tab-active"), $("#bankPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#totalPanel").removeClass("cc-tab-active").addClass("cc-tab"), void $("#vals").html($("#listss").children().eq(0).text()))
});

$(".history").click(function() {
    $(".back").show(), $(".homepage").hide(), $("#settings").hide(), $("#settings_email").hide(), $("#history_list").hide(), $("#currency").hide(), $("#StorageController").hide(), $("#StorageList").hide(), $("#history").show(), $.fn.history()
});

$(".currency").click(function() {
   document.getElementById("id01").style.display = 'none', $(".back").show(),$(".homepage").hide(), $("#settings").hide(), $("#history_list").hide(), $("#settings_email").hide(), $("#currency").show()
});

var index = 0;

$("#coinsandbanks").keyup(function(e) {

    $("#coinsandbanks").focus();
    $("#coinsandbanks2").text($("#coinsandbanks").val());

    max = ($("#listss li").length) - 1;

    $("#valuescheck").html($("#vals").text() + "x" + $("#coinsandbanks").val() + "=<b>" + ($("#vals").text() * $("#coinsandbanks").val()).toFixed(2) + "</b>");

    if (e.which == 13) {
        if ($("#coinsandbanks").val() != "") {

             if($("#vals").text()< 1){
                var nums = "1"+$("#vals").text();
            }
            else{
                var nums = "2"+$("#vals").text();
            }
             var pusheds = {amt:nums, vals: $("#coinsandbanks").val()};
            
        

            window.sessionStorage.setItem($("#vals").text(), JSON.stringify(pusheds));


        }

        index++;
        $("#coinsandbanks").val("");
        $("#coinsandbanks2").text("");

        if (index <= max) {
            $("#vals").html($('#listss').children().eq(index).text());

        } else {
            index = 0;
            $("#bankPanel").trigger("click");
        }

    }

});

var index2 = 0;
$("#coinsandbanks_b").keyup(function(e) {

    $("#coinsandbanks_b").focus();
    $("#coinsandbanks_b2").text($("#coinsandbanks_b").val());
    max = ($("#listss_bank li").length) - 1;

    $("#valuescheck").html($("#vals").text() + "x" + $("#coinsandbanks_b").val() + "=<b>" + $("#vals").text() * $("#coinsandbanks_b").val() + "</b>");

    if (e.which == 13) {
        if ($("#coinsandbanks_b").val() != "") {
            if($("#vals").text().toString().length === 1){
                var nums = "3"+$("#vals").text();
            }
            if($("#vals").text().toString().length === 2){
                var nums = "4"+$("#vals").text();
            }
            if($("#vals").text().toString().length === 3){
                var nums = "5"+$("#vals").text();
            }

           // var last = sessionStorage[sessionStorage.length - 1];
          
           // jsoo = JSON.parse(jso);
           var pushed = {amt:nums, vals: $("#coinsandbanks_b").val()};
          

            window.sessionStorage.setItem($("#vals").text(), JSON.stringify(pushed));
        }

        index2++;
        $("#coinsandbanks_b").val("");
        $("#coinsandbanks_b2").text("");
    }
    if (index2 <= max) {
        $("#vals").text($('#listss_bank').children().eq(index2).text());

    } else {
        index2 = 0;
        $("#totalPanel").trigger("click");
    }

});


$(".email").click(function() {
    $(".back").show(), $(".homepage").hide(), $("#settings").hide(), $("#settings_email").show(), $("#currency").hide(), $("#history_list").hide()
});

$(".history_settings").click(function() {
    $(".back").show(), $(".homepage").hide(), $("#settings").hide(), $("#settings_email").hide(), $("#currency").hide(), $("#history_list").show()
});

$('input[name="currency"]').change(function() {

    var category = $(this).filter(':checked').val();
    localStorage.setItem("Cur", category);

    localStorage.removeItem('2Coin')
    localStorage.removeItem('1Notes')
    localStorage.removeItem('3Total')
    sessionStorage.clear();

    if (localStorage.getItem("email") == null) {
        $(".email").trigger("click")
    }

});

$('input[name="history"]').change(function() {
    var category = $(this).filter(':checked').val();

    if (category === "reset") {
        document.getElementById('id010').style.display = 'block'
                // confirm("Are you sure you want to remove all your transaction history?") ?
        //     (localStorage.removeItem("history"), localStorage.removeItem("tblstorage")) : !1;

    } else {
        localStorage.setItem("history", category);

    }

});

$("#okbuttonid010").click(function(e){
    localStorage.removeItem("history"), 
    localStorage.removeItem("tblstorage"),
    document.getElementById('id010').style.display = 'none'
});


$.get("app/data.json", function(data) {
    var filtered = data.filter(function(val, i, arr) {
        return val.code === value;
    });
    var pol = "";
    var pol2 = "";
    localStorage.setItem("symbol", filtered[0].symbol)
    for (i = 0; i < filtered.length; i++) {

        if (filtered[i].money_value <= lt) {
            pol += "<li>" + filtered[i].money_value + "</li>";
        } else {
            pol2 += "<li>" + filtered[i].money_value + "</li>";
        }

    }
    $("#symb").html(filtered[0].symbol)
    $("#listss").html(pol);
    $("#listss_bank").html(pol2);

});

$("#coinsandbanks2").click(function() {

    $("#coinsandbanks").focus();
    $("#coinsandbanks").val("");
    $("#coinsandbanks").val("");
});
$("#coinsandbanks_b2").click(function() {

    $("#coinsandbanks_b").focus();
});
$("#update_email").click(function() {
    if ("" != $("#useremail").val()) {
        var e = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i),
            a = e.test($("#useremail").val());
        if (!a) return document.getElementById('id03').style.display = 'block',$.fn.closeModal('id03'), !1;
        localStorage.setItem("email", $("#useremail").val()), document.getElementById('id04').style.display = 'block',$.fn.closeModal('id04')
    } else document.getElementById('id03').style.display = 'block',$.fn.closeModal('id03')
});

$("#useremail").val(localStorage.getItem("email"));

$("#saveAll").click(function(e) {

    if(sessionStorage.length == 0){
           document.getElementById('id05').style.display = 'block';

           $.fn.closeModal("id05");
           return false;
    }
    var saved = localStorage.getItem('tblstorage');
    tblstorage = (localStorage.getItem('tblstorage') !== null) ? JSON.parse(saved) : [];
    localStorage.setItem('tblstorage', JSON.stringify(tblstorage));

    var t11 = '0';
    var t2 = '0';
    var t3 = '0';
    var coin = 0;
    var notes = 0;
    var cmt = 0;

    var nmt = 0;

    var sknv = '';
    var sknv0 = '';
    var sknv1 = '';
    var skv = '';
    var product = '';



var output = [];

for (var key in sessionStorage) {
     var vali = JSON.parse(sessionStorage[key]);
    output.push(Number(vali["amt"]));
}

output.sort();
var result=output.join();
var len = result.length;

var chec = "";
var partsOfStr = result.split(',');
for (var i=0; i<partsOfStr.length; i++) {
var valz  = Number(partsOfStr[i].substring(1));
var nump = valz % 1 != 0 ? valz.toFixed(2) : valz;
//var nump = partsOfStr[i].substring(1).replace(/\./g,'');

var keyt = nump;

var vali = JSON.parse(sessionStorage[keyt]);


    // for (var key in sessionStorage) {
    //    //var ke = key.substring(4);

        if (keyt <= lt) {
            coin = coin * 1 + (keyt * vali['vals']);
            sknv += keyt + 'x' + vali['vals'] + '=' + Math.round(keyt * vali['vals'] * 100) / 100 + ' ' + localStorage.getItem('Cur') + '\n';
            localStorage.setItem('1Notes', coin + ' ' + value);
        }

        if (keyt > lt) {
            notes = notes * 1 + (keyt * vali['vals']);
            skv += keyt + 'x' + vali['vals'] + '=' + Math.round(keyt * vali['vals'] * 100) / 100 + ' ' + localStorage.getItem('Cur') + '\n';

            localStorage.setItem('2Coin', notes + ' ' + value);
            localStorage.setItem('3Total', (coin + notes + ' ' + value));
        }

        if (keyt <= lt) {
            cmt += (vali['vals']) * 1;
        }

        if (keyt > lt) {
            nmt += (vali['vals']) * 1;
        }


    }

    var date = new Date();
    var time;
    time = moment(new Date()).format('HH:mm');

    todoTime = time;
    todoDate = ('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();




    todoCoin = coin.toFixed(2);
    todoNotes = notes.toFixed(2);;
    todoTotal = (coin + notes);
    todoCsum = sknv;
    todoPsum = skv;


    tblstorage.push({
        Time: todoTime,
        Dates: todoDate,
        Coin: todoCoin + ' ' + value,
        CoinSummary: todoCsum,
        Notes: todoNotes + ' ' + value,
        NotesSummary: todoPsum,
        Total: todoTotal + ' ' + value

    });
    document.getElementById('id02').style.display = 'block';
    localStorage.setItem('tblstorage', JSON.stringify(tblstorage));
    localStorage.setItem('saved', 1);
    $.fn.closeModal("id02")
});



$.fn.getTotal = function() {
    var t2 = 0;
    var t3 = 0;
    var coin = 0;
    var notes = 0;

    var total1 = 0;
    var total2 = 0;
    var coins = "";
    var banks = "";

 var output = [];

for (var key in sessionStorage) {
     var vali = JSON.parse(sessionStorage[key]);
    output.push(Number(vali["amt"]));
}

output.sort();
var result=output.join();
var len = result.length;

var chec = "";
var partsOfStr = result.split(',');
for (var i=0; i<partsOfStr.length; i++) {
var valz  = Number(partsOfStr[i].substring(1));
var nump = valz % 1 != 0 ? valz.toFixed(2) : valz;
//var nump = partsOfStr[i].substring(1).replace(/\./g,'');

var keyt = nump;

var vali = JSON.parse(sessionStorage[keyt]);
        
        // var key = key.substring(4);
        if (vali['vals'] != 0) {
            if (keyt <= lt) {
                coins += "<tr>";
                coins += '<td width="40%">' + keyt + ' ' + $("#symb").text() + '</td>';

                coins += '<td width="20%" class="text-center">x' + vali['vals'] + '</td>';

                coins += '<td width="40%" class="text-right">' + (keyt * vali['vals']).toFixed(2) + ' ' + $("#symb").text() + '</td></tr>';

                coin = coin * 1 + (keyt * vali['vals']);

                localStorage.setItem('1Notes', coin + ' ' + value);
                total1 += Number((keyt * vali['vals']).toFixed(2));
                t2 += Number((vali['vals']) * 1);
            } else if (keyt > lt) {
                banks += "<tr>";
                banks += '<td width="40%">' + keyt + ' ' + $("#symb").text() + '</td>';

                banks += '<td width="20%" class="text-center">x' + vali['vals'] + '</td>';

                banks += '<td width="40%" class="text-right">' + (keyt * vali['vals']).toFixed(2) + ' ' + $("#symb").text() + '</td></tr>';
                notes = notes * 1 + (keyt * vali['vals']);
                localStorage.setItem('2Coin', notes + ' ' + value);
                total2 += Number((keyt * vali['vals']).toFixed(2));
                t3 += Number((vali['vals']) * 1);

                localStorage.setItem('3Total', (coin + notes + ' ' + value));

            }
        }

}

   
    // for (var key in sessionStorage) {
      
    // }

    $("#timetoday2").text(moment().format("HH:mm "));
    $("#datetoday2").text(moment().format("DD/MM/YYYY"));
    $("#sum-total-coins").html(total1.toFixed(2) + ' ' + $("#symb").text() + '</b>');
    $("#sum-total-banks").html(total2.toFixed(2) + ' ' + $("#symb").text() + '</b>');
    $("#numberofcoins").html("<b>" + t2 + "</b>");
    $("#numberofbanks").html("<b>" + t3 + "</b>");
    $("#sum-total").html((coin + notes).toFixed(2) + ' ' + $("#symb").text());

    $("#coins_tab tbody").html(coins);
    $("#banks_tab tbody").html(banks);

      // console.log( $(".data-controller-total-container").html())
},


$("#bankPanel").click(function(a) {
    $("#bankPanel").removeClass("cc-tab").addClass("cc-tab-active"), $("#coinPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#totalPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#totalPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#inputofnumber").show(), $("#forTotal").hide(), $("#coinsandbanks2").hide(), $("#coinsandbanks_b2").show(), $("#coinsandbanks_b").focus(), index2 = 0, $("#vals").html($("#listss_bank").children().eq(0).text())
}), $("#totalPanel").click(function(a) {
    $("#totalPanel").removeClass("cc-tab").addClass("cc-tab-active"), $("#coinPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#bankPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#inputofnumber").hide(), $("#forTotal").show(), $.fn.getTotal()
});

$("#coinPanel").click(function(a) {
    $("#coinPanel").removeClass("cc-tab").addClass("cc-tab-active"), $("#bankPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#totalPanel").removeClass("cc-tab-active").addClass("cc-tab"), $("#inputofnumber").show(), $("#forTotal").hide(), $("#coinsandbanks2").show(), $("#coinsandbanks_b2").hide(), $("#coinsandbanks").focus(), index = 0, $("#vals").html($("#listss").children().eq(0).text())
});

$("#print").click(function(e) {
    window.print();
});

$("#sendemail").click(function(e) {
     if(sessionStorage.length == 0){
       document.getElementById('id012').style.display = 'block';

       $.fn.closeModal("id012");
       return false;
}

    var theNotes = [{}];
    var theCoins = [{}];

    var output = [];

for (var key in sessionStorage) {
     var vali = JSON.parse(sessionStorage[key]);
    output.push(Number(vali["amt"]));
}

output.sort();
var result=output.join();
var len = result.length;

var chec = "";
var partsOfStr = result.split(',');
for (var i=0; i<partsOfStr.length; i++) {
var valz  = Number(partsOfStr[i].substring(1));
var nump = valz % 1 != 0 ? valz.toFixed(2) : valz;
//var nump = partsOfStr[i].substring(1).replace(/\./g,'');

var keyt = nump;

var vali = JSON.parse(sessionStorage[keyt]);

    // for (var key in sessionStorage) {
    //   //  var ke = key.substring(4);
        if (keyt != null) {
            //var someStr = sessionStorage.getItem(keyt);
            if (keyt > lt) {
                theCoins.push({
                    checkK: keyt,
                    valsK: vali['vals']
                });
            } else if (keyt <= lt) {
                theNotes.push({
                    checkK: keyt,
                    valsK: vali['vals']
                });
            }
        }
    }

    coins = localStorage.getItem('1Notes') != null ? parseFloat(localStorage.getItem('1Notes')).toFixed(2):0,
    notes = localStorage.getItem('2Coin') != null ? parseFloat(localStorage.getItem('2Coin')).toFixed(2): 0,
    total = localStorage.getItem('3Total') != null ? localStorage.getItem('3Total') : (coins+notes),

    $.ajax({
        type: 'GET',
        url: 'https://www.wylog.com/ingenico/ws/weather/index.php/emailsend?authID=ce0cf133c8e40246ec816cef2375ca4b&lang=es',
        data: {
                "email": localStorage.getItem('email'),
                "coins": notes,
                "theNotes": JSON.stringify(theCoins),
                "theCoins": JSON.stringify(theNotes),
                "notes": coins,
                "currency": localStorage.getItem('Cur'),
                "total":total,
                "dates": moment().format("DD/MM/YYYY"),
                "times": moment().format("HH:mm:ss"),
                "subject": "Ticket"
             },
         datatype : "application/json",
        contentType: 'text/plain',
            success: function(data) {
            
            $("#id08 p").text(data);
            
            document.getElementById('id08').style.display = 'block';
            $.fn.closeModal("id08");
            },
            error: function(data) {
                $("#id08 p").text("Error! Contact your administrator");
                
                document.getElementById('id08').style.display = 'block';
                $.fn.closeModal("id08");

            }
    });




});

$("#id07 .okbutton").click(function(){
    localStorage.removeItem("saved"),localStorage.removeItem("2Coin"), localStorage.removeItem("1Notes"), localStorage.removeItem("3Total"), sessionStorage.clear(), window.location.reload();
});

$(".cancel").click(function() {
    document.getElementById($(this).attr("data-info")).style.display = 'none';
    return false;
})
$("#back").click(function(e) {

    if(null !== localStorage.getItem("saved")){
         document.getElementById('id015').style.display='block';
         $.fn.closeModal("id015");
        setTimeout(function(){ $("#id07 .okbutton").trigger("click"); }, 2000);
         
    }
    else if(null === localStorage.getItem("saved") && (null !== localStorage.getItem("1Notes") || null !== localStorage.getItem("2Coin") || null !== localStorage.getItem("3Total"))){
             document.getElementById('id07').style.display='block';
    }
   
    else{
        window.location.reload();

    }
    
});

$("#close").click(function() {
    $window.close()
});

