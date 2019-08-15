var applicantData = {
    name: "",
    photo: "",
    scores: []
};

$(document).ready(function() {
    console.log("document ready");

    $("input[type='radio']").click(function() {
        var QA01 = $("input[name='QA01']:checked").val();
        if(QA01) {
            applicantData.scores[0] = QA01;
        };

        var QA02 = $("input[name='QA02']:checked").val();
        if(QA02) {
            applicantData.scores[1] = QA02;
        };

        var QA03 = $("input[name='QA03']:checked").val();
        if(QA03) {
            applicantData.scores[2] = QA03;
        };

        var QA04 = $("input[name='QA04']:checked").val();
        if(QA04) {
            applicantData.scores[3] = QA04;
        };

        var QA05 = $("input[name='QA05']:checked").val();
        if(QA05) {
            applicantData.scores[4] = QA05;
        };

        var QA06 = $("input[name='QA06']:checked").val();
        if(QA06) {
            applicantData.scores[5] = QA06;
        };

        var QA07 = $("input[name='QA07']:checked").val();
        if(QA07) {
            applicantData.scores[6] = QA07;
        };

        var QA08 = $("input[name='QA08']:checked").val();
        if(QA08) {
            applicantData.scores[7] = QA08;
        };

        var QA09 = $("input[name='QA09']:checked").val();
        if(QA09) {
            applicantData.scores[8] = QA09;
        };

        var QA10 = $("input[name='QA10']:checked").val();
        if(QA10) {
            applicantData.scores[9] = QA10;
        };
    });

    $("#submit-answers").click(function(event) {
        event.preventDefault();

        applicantData.name = $("#applicant-name").val().trim();
        applicantData.photo = $("#applicant-photo").val().trim();

        console.log(applicantData);

        if(applicantData.name==="") {
            alert("You did not provide a name.");
        }
        else if(applicantData.photo==="") {
            alert("You did not provide a photo link.");
        }
        else if(applicantData.scores.length<10) {
            alert("Please provide an answer to all 10 questions.");
        }
        else {
            matchFriends();

            $.post("/api/friends", applicantData)
                .then(function(data) {
                    if(data) {
                        alert("You submitted your answers.");
                        console.log(data);
                    }
                    else {
                        alert("Friend data did not send.");
                    };
                });
        };
    });
});


function matchFriends() {
    $.get("/api/friends", function(data) {
        console.log(data);
        var potentialFriendScoreAnswer = 50;
        var potentialFriendScoreComparison = 0;
        var potentialFriend;

        for(var i=0; i<data.length; i++) {
            console.log(data[i].name);

            for(var j=0; j<10; j++) {
                potentialFriendScoreComparison += Math.abs(applicantData.scores[j]-data[i].scores[j]);
            };

            if(data[i].name===applicantData.name) {
                potentialFriendScoreComparison = 0;
            }
            else if(potentialFriendScoreComparison<potentialFriendScoreAnswer) {
                potentialFriendScoreAnswer = potentialFriendScoreComparison;
                potentialFriend = data[i].name;
                potentialFriendScoreComparison = 0;
            }
            else {
                potentialFriendScoreComparison = 0;
            };
        };

        alert("Your best match is " + potentialFriend);
    })
};