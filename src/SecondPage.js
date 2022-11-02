import React, {useEffect, useState} from 'react';
import './secondpage.css'

function SecondPage() {
  const [lvl, setLvl] = useState(1);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [info, setInfo] = useState("");
  const [word, setWord] = useState("");
  const [correct, setCorrect] = useState(0);
  const [userWord, setUserWord] = useState("");
  const [correctWord, setCorrectWord] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);
  const [infoColor, setInfoColor] = useState("");
  const [nextBtnDisable, setNextBtnDisable] = useState(true);
  const [notRandomKeyAgain, setNotRandomKeyAgain] = useState([]);

  useEffect(() => {
    setLevel();
  }, [setLvl]);
  useEffect(() => {
    if (correct === 10) {
      setCorrect(0);
      setLvl(lvl + 1);
    }
    if (attempts === 5) {
      setInfoColor("red");
      setInfo("lose");
      setBtnDisable(true);
      setNextBtnDisable(true);
    }
    if (lvl === 4) {
      setInfoColor("green");
      setInfo("won");
      setBtnDisable(true);
      setNextBtnDisable(true);
    }

  }, [attempts, correct, lvl]);

  const lvlOne = {
    tap: ["tap", "pat", "apt"],
    aim: ["aim"],
    ace: ["ace"],
    bed: ["bed"],
    bee: ["bee"],
    buy: ["buy"],
    can: ["can"],
    cow: ["cow"],
    cod: ["cod"],
    cur: ["cur"],
    did: ["did"],
    duo: ["duo"],
    die: ["die"],
    dry: ["dry"],
    dug: ["dug"],
    elf: ["elf"],
    egg: ["egg"],
    elk: ["elk"],
    fat: ["fat"],
    fix: ["fix"],
    fin: ["fin"],
    few: ["few"],
    gym: ["gym"],
    guy: ["guy"],
    goo: ["goo"],
    hen: ["hen"],
    hag: ["hag"],
    hic: ["hic"],
    hut: ["hut"],
    ill: ["ill"],
    ice: ["ice"],
    imp: ["imp"],
    ink: ["ink", "kin"],
    ivy: ["ivy"],
    jet: ["jet"],
    job: ["job"],
    jaw: ["jaw"],
    jab: ["jab"],
    keg: ["keg"],
    kid: ["kid", "kin"],
    lip: ["lip"],
    leg: ["leg"],
    lad: ["lad"],
    let: ["let"],
    led: ["led"],
    law: ["law"],
    lid: ["lid"],
    mut: ["mut"],
    mat: ["mat"],
    mud: ["mud"],
    mid: ["mid", "dim"],
    nit: ["nit", "tin"],
    nog: ["nog"],
    now: ["now", "won"],
    oil: ["oil"],
    owl: ["owl", "low"],
    oar: ["oar"],
    off: ["off"],
    oat: ["oat"],
    one: ["one"],
    pry: ["pry"],
    pal: ["pal", "lap"],
    peg: ["peg"],
    pea: ["pea"],
    pen: ["pen"],
    pus: ["pus"],
    rad: ["rad"],
    rem: ["rem"],
    rig: ["rig"],
    rob: ["rob"],
    saw: ["saw"],
    sob: ["sob"],
    sec: ["sec"],
    shy: ["shy"],
    sly: ["sly"],
    tan: ["tan", "ant", "nat"],
    the: ["the"],
    tic: ["tic"],
    try: ["try"],
    cop: ["cop"],
    uke: ["uke"],
    ugh: ["ugh"],
    ups: ["ups", "sup", "pus"],
    vat: ["vat"],
    van: ["van"],
    vet: ["vet"],
    woo: ["woo"],
    wow: ["wow"],
    wry: ["wry"],
    wok: ["wok"],
    yah: ["yah", "hay"],
    yak: ["yak"],
    yay: ["yay"],
    you: ["you"],
    yep: ["yep"],
    zit: ["zit"],
    zap: ["zap"],
    zig: ["zig"],
    zag: ["zag"],
    zip: ["zip"],
  };

  

  const lvlTwo = {
    able: ["able", "beal", "blae"],
    aced: ["aced", "dace", "cade"],
    acid: ["acid", "caid"],
    ally: ["ally"],
    also: ["also"],
    arcs: ["arcs"],
    area: ["area"],
    arch: ["arch"],
    aunt: ["aunt"],
    axis: ["axis"],
    baby: ["baby"],
    back: ["back"],
    ball: ["ball"],
    babe: ["babe"],
    bass: ["bass"],
    bell: ["bell"],
    bets: ["bets", "best"],
    bind: ["bind"],
    bios: ["bios"],
    book: ["book"],
    cabs: ["cabs"],
    case: ["case"],
    chef: ["chef"],
    curl: ["curl"],
    chat: ["chat"],
    chap: ["chap"],
    chin: ["chin"],
    chum: ["chum"],
    chop: ["chop"],
    coal: ["coal"],
    dabs: ["dabs"],
    dame: ["dame"],
    damp: ["damp"],
    dart: ["dart"],
    dash: ["dash"],
    dark: ["dark"],
    deck: ["deck"],
    deep: ["deep"],
    diva: ["diva"],
    dice: ["dice"],
    easy: ["easy"],
    ends: ["ends"],
    epic: ["epic"],
    etch: ["etch", "tech"],
    evil: ["evil"],
    expo: ["expo"],
    exam: ["exam"],
    face: ["face"],
    fact: ["fact"],
    fail: ["fail"],
    fair: ["fair"],
    fall: ["fall"],
    farm: ["farm"],
    fave: ["fave"],
    fart: ["fart"],
    gain: ["gain"],
    gays: ["gays"],
    gets: ["gets", "gest"],
    germ: ["germ"],
    glad: ["glad"],
    hams: ["hams"],
    haze: ["haze"],
    help: ["help"],
    head: ["help"],
    hers: ["hers"],
    hike: ["hike"],
  };
  
  const lvlThree = {
    abide: ["abide"],
    about: ["about"],
    above: ["above"],
    adapt: ["adapt"],
    array: ["array"],
    aglow: ["aglow"],
    aisle: ["aisle"],
    angry: ["angry"],
    apart: ["apart"],
    ansty: ["ansty"],
    apple: ["apple"],
    april: ["april"],
    basic: ["basic"],
    beers: ["beers"],
    bikes: ["bikes"],
    birds: ["birds"],
    black: ["black"],
    blank: ["blank"],
    brisk: ["brisk"],
    broad: ["broad"],
    bends: ["bends"],
    berry: ["berry"],
    below: ["below"],
    birdy: ["birdy"],
    blush: ["blush"],
    bluff: ["bluff"],
    bolts: ["bolts"],
    cable: ["cable"],
    champ: ["champ"],
    chalk: ["chalk"],
    clams: ["clams"],
    coded: ["coded"],
    comet: ["comet"],
    crack: ["crack"],
    crags: ["crags"],
    cramp: ["cramp"],
    crank: ["crank"],
    crays: ["crays"],
    creak: ["creak"],
    creed: ["creed"],
    cycle: ["cycle"],
    daddy: ["daddy"],
    dance: ["dance"],
    darts: ["darts"],
    dated: ["dated"],
    denim: ["denim"],
  };

  function randomWord(lvl) {
    const keys = Object.keys(lvl);

    let temp = keys[Math.floor(Math.random() * keys.length)];
    let arr = [];
    if(notRandomKeyAgain.includes(temp)) {
      randomWord(lvl);
    } else {
      setNotRandomKeyAgain([...notRandomKeyAgain, temp]);
      for (let i = 0; i < lvl[temp].length; i++) {
        arr.push(lvl[temp][i])
      }
      let sWord = scrambleWord(temp);
      setCorrectWord(arr);
      setWord(sWord);
    }
  }
  function resetGame() {
    setLvl(1);
    setInfo("");
    setCorrect(0);
    setScore(0);
    setAttempts(0);
  }

 function scrambleWord(word) {
   let letters = word.split("");
   let currentIndex = letters.length,
   temporaryValue,
   randomIndex;

   while(0 !== currentIndex) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
    
     temporaryValue = letters[currentIndex];
     letters[currentIndex] = letters[randomIndex];
     letters[randomIndex] = temporaryValue;

   }
   let letterjoin = letters.join("");
  return letterjoin;

 }

 function checkAnswer(uWord) {
   uWord = userWord.toLowerCase();

   if (attempts === 5) {
     resetGame();
   }

   if(correctWord.includes(uWord)) {
     setCorrect(correct + 1);
     setScore(score + 1);
     setAttempts(0);
     setInfoColor("green");
     setInfo("correct");
     setNextBtnDisable(false)
     setBtnDisable(true)
   } else {
     setAttempts(attempts + 1);
     setInfoColor("red");
     setInfo("incorrect");
   }

 }

 function setLevel() {
   if (lvl === 1) {
     randomWord(lvlOne);
   } else if (lvl === 2) {
     randomWord(lvlTwo);
   } else if (lvl === 3) {
     randomWord(lvlThree);
   }
 }

function nextBtn() {
  setLevel();
  setInfo("");
  setUserWord("");
  setAttempts(0);
  setBtnDisable(false);
  setNextBtnDisable(true)
}

return (
  <div className="secondpage-container">
  <div id="page-container">
    <div className="scores-info">
     <p>
      level : <span id="level">{lvl}</span>
       </p>
     <p>
       score: <span id="score">{score}</span>
       </p>
       <p>
       attempts: <span id="attempts">{attempts}</span>
         </p>

      </div>
     <p id="info" style={{ color: `${infoColor}`}}>
      {info}

       </p>
       <div id="guess-container">
        <p id="scrambled-word">{word}</p>
        <input 
         autoComplete="off"
         id="user-guess"
         type="text"
         value={userWord}
         onChange= {(e) => setUserWord(e.target.value)}
         placeholder="enter"


        />
        <button 
        type="button"
        disabled={btnDisable}
        onClick={checkAnswer}
        id="submit"
        >
          submit
          </button>
          <button 
            type="button"
            disabled={nextBtnDisable}
            onClick={nextBtn}
            id="next-btn"
          >
             next
            </button>
         </div>
  
    </div>

    </div>
)
}



export default SecondPage;