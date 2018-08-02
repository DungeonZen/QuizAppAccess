'use strict';
//variables
let quesCount = 0;
let score = 0;
let lives = 5;
let right = "<img src='http://i1378.photobucket.com/albums/ah109/timmsparksDM/PipRight_zpsw37ia9bu.jpg'>";
let wrong = "<img src='http://i1378.photobucket.com/albums/ah109/timmsparksDM/bf2e8b3f-79f7-4a0b-9acf-ebccf5709774_zps3u0ecf1x.jpg'>";

//question data
const STATE = [{
    question: "In the 1998 game for the Playstation, METAL GEAR SOLID, you take on the role of this legendary infiltrator. Who was it?",
    answer: ['Psycho Mantis', 'Decoy Octopus', 'Solid Snake', 'Vulcan Raven'],
    explain: 'The protagonist is Solid Snake, a legendary infiltrator and saboteur.',
    correct: 'Solid Snake'
}, {
    question: 'In the Dungeons & Dragons game for the PC, Planescape: Torment, you play as The Nameless One. The Nameless One wakes up realizing one strange thing about himself...',
    answer: ['He cannot die', 'His name is Adahn', "He's doomed to a life of torment", "He doesn't have a name"],
    explain: 'The player takes the role of "The Nameless One", an immortal being on a quest to learn why he cannot die',
    correct: 'He cannot die'
}, {
    question: 'In Fallout 3, the nations capitol is a post-apocalyptic wasteland with danger at every turn. Downtown D.C. is even more treacherous because its absolutely infested with...',
    answer: ['RadRoaches', 'Super Mutants', 'Geckos', 'A legion of clones from an underground vault, all named "Todd"'],
    explain: "Super mutants are mutated humans, products of infection by the Forced Evolutionary Virus (FEV)....oh and they're the answer",
    correct: "Super Mutants"
}, {
    question: "In the N64 game, Starfox 64, one of Fox's squadmates radios in the iconic line 'Do A Barrel Roll!'. Who was it?",
    answer: ['Peppy Hare', 'Slippy Toad', 'Falco Lombardi', 'General Pepper'],
    explain: 'During the opening tutorials, it was Peppy Hare, a rabbit and member of the original Star Fox team who told Fox "Do a Barrel Roll"',
    correct: 'Peppy Hare'
}, {
    question: "You're playing The Legend of Zelda: The Ocarina of Time, you pull out your ocarina and you press you press C-right, C-down, C-up twice. What happens?",
    answer: ['Your horse Epona finds you', 'The sun comes out', 'You become a kid again', 'You get into The Forest Temple'],
    explain: 'The Sun Song is composed by the Composer Brothers, Flat and Sharp. Assigned by the Royal Family of Hyrule to study the mystic powers of the family, this melody is the result of Flat and Sharp each studying a different song: one to summon the sun, and another to summon the moon',
    correct: 'The sun comes out'
}, {
    question: 'The game Dark Souls is known for its brutal difficulty. There is only one time where you can find a brief respite....',
    answer: ['The Temple of the Fallen', 'A treehouse', 'Inside of the Dark Soul', 'A bonfire'],
    explain: 'Central to Dark Souls are Bonfires. Bonfires are scattered throughout the world and serve as checkpoints for each level. When rested at, the player is healed to full, healing charges are restored',
    correct: 'A bonfire'
}, {
    question: 'In the fist-flying fighting game Street Fighter, what character is from Brazil?',
    answer: ['E. Honda', 'Adon', 'Blanka', 'Sagat'],
    explain: "Blanka's backstory is that he was once human, but after a plane crash in Brazil he mutated (resulting in his green coloring and his ability to generate electricity)",
    correct: 'Blanka'
}, {
    question: "You're playing Contra and its waaaay too hard!! You decide you want 30 lives by putting in Konami's legendary cheat code. Is it...",
    answer: ['up, up, up, Select', 'Hold all the buttons down for 30 seconds', 'up up down down left right left right b a start', 'a b a c a b b'],
    explain: "The Konami Code is a sequence of keystrokes that allows players to enable special features in video games made by the Japanese company Konami. It became widely known among American gamers thanks to Contra, a video game that was released for the Nintendo Entertainment System in 1988. It's Up Up Down Down Left Right Left Right B A Start",
    correct: 'up up down down left right left right b a start'
}, {
    question: "In Oddworld Abe's Oddysee for the Playstation, the game starts when Abe finds out a shocking secret. What's the problem?",
    answer: ["He has to build an Ark because his home planet is going to flood",
        "His bosses are planning to sell all of their employees for meat",
        "That his dog Joey can talk",
        "He was dead all along"
    ],
    explain: "The ingredients of the corporation's three major 'Tasty Treats' (Scrab Cakes, Paramite Pies, and Meech Munchies) are quickly running out, with the Meeches already extinct. While working late, Abe(a Mudokon) overhears Molluck's plan to use the Mudokon slaves as meat products called 'Mudokon Pops!', which frightens Abe into escaping from the factory",
    correct: "His bosses are planning to sell all of their employees for meat"
}, {
    question: "Who is indisputably the most important person in Vault 101: He who shelters us from the harshness of the atomic wasteland, and to whom we owe everything we have, including our lives? ",
    answer: ['The Overseer', 'The Overseer', 'The Overseer', 'The Overseer'],
    explain: '....The Overseer',
    correct: 'The Overseer',

}];






//blinking insert coin
function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);

function scoreAdd() {
    $('#score').text(`Score:${score}`);
    score += 500;
}

function liveSubtract() {
    $('#lives').text(`Lives:${lives}`)
    lives -= 1;


}

function youWin() {
    if (quesCount >= 9) {
        $('content').hide();
        $('.questionAnswers').append(`
            <h1 id='y_w'>You Win!! Play Again?!</h1><br>
            <img id='triforce' src='http://i1378.photobucket.com/albums/ah109/timmsparksDM/TriforceFull_zpshoq9jh79.jpg'> <br><br>
            <button id='retry'>Retry</button>`);
        $('#retry').on('click', function() {
            $('.questionAnswers').hide();
            location.reload();
        })
        lives = 5;
        score = 0;
    }
}





//landing page
function startPage() {
    $('#coin').on('click', function() {
        $('#landing').hide();
        nextQuestion();

    });
}

function gameOver() {
    $('content').hide();
    $('.questionAnswers').append(`
            <h1 id='g_o'>GAME OVER. Continue?</h1><br>
            <button id='retry'>Retry</button>`);
    $('#retry').on('click', function() {
        $('.questionAnswers').hide();
        location.reload();
    })
    lives = 5;
    score = 0;



}

function nextQuestion() {
    if (lives === -1) {
        gameOver();
    } else if (quesCount === 10) {
        youWin();
    } else {
        $('.questionText').text(STATE[quesCount].question);
        for (var i = 0; i < 4; i++) {
            $('.questionAnswers').append(`<li> ${STATE[quesCount].answer[i]} </li>`);



        }
    }
}
function rightWrong() {
    $('.questionAnswers').on('click', 'li', function(e) {
        if (e.target.innerText === STATE[quesCount].correct) {
            correctScreen();

        } else {
            wrongScreen();

        }

    });
}

function correctScreen() {
    $('.questionText').text('');
    $('#quizBanner').hide();
    $('li').hide();

    var correctText = `
	<div class="correctScreen"> 
	<h1 id='rightColor'>RIGHT!!!</h1>  
	 	${right}
	 <p>${STATE[quesCount].explain}</p> 
	  <button class='nextbutton'> NEXT </button>
	 </div> `;
    $('.question').append(correctText);
    $('.nextbutton').on('click', function() {
        $('.correctScreen').hide();
        nextQuestion();
    });

    scoreAdd();
    quesCount++;

}



function wrongScreen() {
    $('.questionText').text('');
    $('#quizBanner').hide();
    $('li').hide();
    var wrongText = `

    <div class="wrongScreen"> 
    <h1 id='wrongColor'>WRONG!!!</h1>  
        ${wrong}
     <p>${STATE[quesCount].explain}</p> 
     <button class='nextbutton'> NEXT </button>
    </div> `;
    $('.question').append(wrongText);
    $('.nextbutton').on('click', function() {
        $('.wrongScreen').hide()
        nextQuestion();


    });
    liveSubtract()
    quesCount++;

}





function allFunc() {
    blink_text();
    startPage();
    rightWrong();
    scoreAdd();
    liveSubtract();
    youWin();



};

$(allFunc);