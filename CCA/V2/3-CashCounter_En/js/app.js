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
        } else {

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
            ht += '<tr><td><b>Coins:</b></td><td align="right">' + filtered2[i].Coin + '</td></tr>';
            ht += '<tr><td><b>Bills:</b></td><td align="right">' + filtered2[i].Notes + '</td></td>';
            ht += '<tr><td><b>Total:</b></td><td align="right" style="color:#d40410; font-weight: bold">' + filtered2[i].Total + '</td></tr>';
            ht += '</table>';

        }

        $("#historytable").html(ht);



    }
}

$(".settings").click(function() {
    $(".back").show(), $(".homepage").hide(), $("#settings").show(), $("#settings_email").hide(), $("#currency").hide(), $("#history_list").hide()
});

$("#timetoday").text(moment().format("HH:mm"));
$("#datetoday").text(moment().format("DD/MM/YYYY"));


var value = localStorage.getItem('Cur');
var history_val = localStorage.getItem('history');
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
            window.sessionStorage.setItem($("#vals").text(), $("#coinsandbanks").val())

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
            window.sessionStorage.setItem($("#vals").text(), $("#coinsandbanks_b").val())
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


    for (var key in sessionStorage) {



        if (key <= lt) {
            coin = coin * 1 + (key * sessionStorage[key]);
            sknv += key + 'x' + sessionStorage[key] + '=' + Math.round(key * sessionStorage[key] * 100) / 100 + ' ' + localStorage.getItem('Cur') + '\n';

            localStorage.setItem('1Notes', coin + ' ' + value);
        }

        if (key > lt) {
            notes = notes * 1 + (key * sessionStorage[key]);
            skv += key + 'x' + sessionStorage[key] + '=' + Math.round(key * sessionStorage[key] * 100) / 100 + ' ' + localStorage.getItem('Cur') + '\n';

            localStorage.setItem('2Coin', notes + ' ' + value);
            localStorage.setItem('3Total', (coin + notes + ' ' + value));
        }

        if (key <= lt) {
            cmt += (sessionStorage[key]) * 1;
        }

        if (key > lt) {
            nmt += (sessionStorage[key]) * 1;
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

    // var myObj = {
    //     'b': 'asdsadfd',
    //     'c': 'masdasaf',
    //     'a': 'dsfdsfsdf'
    //   },
    //   ordered = {};
    // 		Object.keys(myObj).sort().forEach(function(key) {
    //   ordered[key] = myObj[key];
    // });
    // 		console.log(ordered)


    for (var key in sessionStorage) {

        if (sessionStorage[key] != 0) {
            if (key <= lt) {
                coins += "<tr>";
                coins += '<td width="40%">' + key + ' ' + $("#symb").text() + '</td>';

                coins += '<td width="20%" class="text-center">x' + sessionStorage[key] + '</td>';

                coins += '<td width="40%" class="text-right">' + (key * sessionStorage[key]).toFixed(2) + ' ' + $("#symb").text() + '</td></tr>';

                coin = coin * 1 + (key * sessionStorage[key]);

                localStorage.setItem('1Notes', coin + ' ' + value);
                total1 += Number((key * sessionStorage[key]).toFixed(2));
                t2 += Number((sessionStorage[key]) * 1);
            } else if (key > lt) {
                banks += "<tr>";
                banks += '<td width="40%">' + key + ' ' + $("#symb").text() + '</td>';

                banks += '<td width="20%" class="text-center">x' + sessionStorage[key] + '</td>';

                banks += '<td width="40%" class="text-right">' + (key * sessionStorage[key]).toFixed(2) + ' ' + $("#symb").text() + '</td></tr>';
                notes = notes * 1 + (key * sessionStorage[key]);
                localStorage.setItem('2Coin', notes + ' ' + value);
                total2 += Number((key * sessionStorage[key]).toFixed(2));
                t3 += Number((sessionStorage[key]) * 1);

                localStorage.setItem('3Total', (coin + notes + ' ' + value));

            }
        }

    }

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
    for (var key in sessionStorage) {
        if (key != null) {
            var someStr = sessionStorage.getItem(key);
            if (key > lt) {
                theCoins.push({
                    checkK: key,
                    valsK: someStr
                });
            } else if (key <= lt) {
                theNotes.push({
                    checkK: key,
                    valsK: someStr
                });
            }
        }
    }

    coins = localStorage.getItem('1Notes') != null ? parseFloat(localStorage.getItem('1Notes')).toFixed(2):0,
    notes = localStorage.getItem('2Coin') != null ? parseFloat(localStorage.getItem('2Coin')).toFixed(2): 0,
    total = localStorage.getItem('3Total') != null ? localStorage.getItem('3Total') : (coins+notes),

    $.ajax({
        type: 'GET',
        url: 'https://www.wylog.com/ingenico/ws/weather/index.php/emailsend?authID=ce0cf133c8e40246ec816cef2375ca4b&lang=en',
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
	localStorage.removeItem("2Coin"), localStorage.removeItem("1Notes"), localStorage.removeItem("3Total"), sessionStorage.clear(), window.location.reload();
});

$(".cancel").click(function() {
    document.getElementById($(this).attr("data-info")).style.display = 'none';
    return false;
})
$("#back").click(function(e) {

	if(null !== localStorage.getItem("1Notes") || null !== localStorage.getItem("2Coin") || null !== localStorage.getItem("3Total")){
			 document.getElementById('id07').style.display='block';
	}else{
		window.location.reload();
	}
    
});

$("#close").click(function() {
    $window.close()
});

