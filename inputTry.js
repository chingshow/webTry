const input = {
    "headTitle" : "\"Activity Title\"",
    "topboardLeft" : ["Activity Title", "1095"],
    "content" : {
        "imageKV" : "./images/imageKV.png",
        "gradient" : {
            "background" : "./images/background.png",
            "session1" :  "​introduction of the activity." +
                "Good Morning Everyone!",
            "session2" : [{
                "name" : "Your Name",
                "photo" : "./images/javascript.jpg",
                "title" : "Where you are from, what you can do",
                "description" : "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself."
            },{
                "name" : "Your Name",
                "photo" : "./images/html.jpg",
                "title" : "Where you are from, what you can do",
                "description" : "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself."
            },{
                "name" : "Your Name",
                "photo" : "./images/css.jpg",
                "title" : "Where you are from, what you can do",
                "description" : "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself." +
                    "Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself. Introduce yourself."
            }],
            "agenda" : "./images/Agenda.png",
            "session3" : [{
                "title" : "Questions1",
                "content" : "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. "
            },{
                "title" : "Questions2",
                "content" : "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. "
            },{
                "title" : "Questions3",
                "content" : "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. "
            },{
                "title" : "Questions4",
                "content" : "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. "
            },{
                "title" : "Questions5",
                "content" : "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. " +
                    "Answers. Answers. Answers. Answers. Answers. Answers. Answers. Answers. "
            }],
            "session4" : [{
                "link" : "https://www.accupass.com/go/Avatar2023",
                "img" : "./images/signUpWebsite1.png"
            },{
                "link" : "https://www.eventbrite.com/e/avatar-medicine-forum-2023-tickets-697936054527?aff=oddtdtcreator",
                "img" : "./images/signUpWebsite2.png"
            }]
        },
        "whiteboard" : {
            "session2" : "./images/co-org.png",
            "session3" : "./images/sponsor.png"
        }
    }
}

TextandImageInput()
showSpeakers();
showFaq();

function createFaq(index, session){
    var newQa = document.createElement("li");

    newQa.innerHTML = '<div class="qa-title">' + session[index].title + '</div>'
        + '<div class="qa-content">' + session[index].content + '</div>';
    return newQa;
}

function showFaq(){
    const session = input.content.gradient.session3;
    const len = session.length;
    const all = document.getElementById("qas");
    var height = 17 + 8*len;
    document.getElementById("faq").style.height = `${height}vw`;

    for(let i = 0; i < len; i++){
        var newQa = createFaq(i, session);
        all.appendChild(newQa);
    }
}

function createIntro(mode, index, session){
    var newIntro = document.createElement("div");
    newIntro.id = `intro${index}`;

    if(mode === 0){
        newIntro.className = "vip_intro normal-direction";
    } else{ newIntro.className = "vip_intro reverse-direction"}

    newIntro.innerHTML = '<div class="vip_photo"> <img id="speakerImg' + index + '" src="' + session[index].photo + '" alt="VIP Photo"></div>'
        + '<div class="vip_margin"> <div class="vip_name">' + session[index].name + '</div>'
        + '<div class="vip_title">' + session[index].title + '</div>'
        + '<div class="vip_description">' + session[index].description + '</div></div>';
    return newIntro;
}

function showSpeakers(){
    const session = input.content.gradient.session2;
    const len = session.length;
    const all = document.getElementById("speakers");
    for(let i = 0; i < len; i++){
        var newSpeaker = createIntro((i%2), i, session);
        all.appendChild(newSpeaker);
    }
}

function TextandImageInput(){
    document.getElementById("headTitle").text = input.headTitle;
    // topboard
    document.getElementsByClassName("topboard-left-1").item(0).textContent = input.topboardLeft[0];
    document.getElementsByClassName("topboard-left-2").item(0).textContent = input.topboardLeft[1];
    // content
    document.getElementsByClassName("imageKV").item(0).style.backgroundImage = `url(${input.content.imageKV})`;
    document.getElementsByClassName("gradient-background").item(0).style.backgroundImage = `url(${input.content.gradient.background})`;
    document.getElementById("IM_content").textContent = input.content.gradient.session1;
    //agenda
    document.getElementById("media").srcset = input.content.gradient.agenda;
    document.getElementById("agendaImage").src = input.content.gradient.agenda;
    //registration(看之後數量看是否需要改成迴圈)
    document.getElementById("linkLeft").href = input.content.gradient.session4[0].link;
    document.getElementById("imageLeft").src = input.content.gradient.session4[0].img;
    document.getElementById("linkRight").href = input.content.gradient.session4[1].link;
    document.getElementById("imageRight").src = input.content.gradient.session4[1].img;
    //co-organizer
    document.getElementById("co-organizerImage").src = input.content.whiteboard.session2;
    //sponsor
    document.getElementById("sponsorImage").src = input.content.whiteboard.session3;
}

$(".qa-title").click(function () {
    $(".qa-content").slideUp();
    $(".qa-title.on").removeClass("on");
    $(this).next().stop().slideDown();
    $(this).stop().addClass("on");
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();

            var offset = 130;

            $('html, body').stop().animate({
                scrollTop: target.offset().top - offset
            }, 1000);
        }
    });
});

document.addEventListener('touchstart', function (e) {
    let startX = e.touches[0].pageX;
    let startY = e.touches[0].pageY;

    document.addEventListener('touchmove', function (e) {
        let moveX = e.touches[0].pageX;
        let moveY = e.touches[0].pageY;

        if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
            e.preventDefault();
        }
    }, { passive: false });
}, { passive: false });

