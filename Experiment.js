/******************* 
 * Experiment Test *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Experiment';  // from the Builder filename that created this script
let expInfo = {
    'Add meg az életkorodat:': '',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from init
const n = 32;

let tx1 = "Köszöntjük kísérletünkben! A kutatásban olyan 18 és 70 év közötti személyek vehetnek részt, akik nem rendelkeznek neurológiai és/vagy pszichiátriai előtörténettel. A részvétel önkéntes és anonim. A vizsgálat során bármikor, indoklás és hátrányos következmények nélkül megszakíthatja a részvételt az ESC billentyűvel, ez esetben az addig rögzített adatok nem kerülnek felhasználásra. A kísérletben bemutatott szöveges leírások fiktív megállapítások. Kérjük, hogy a vizsgálatot kipihent állapotban kezdje meg! A kutatással kapcsolatos kérdések esetén a kutatás koordinátora az alábbi e-mail címen érhető el: balog.lea.szilvia@gmail.com (A kutatás szakmai mentorai: Séllei Beatrix és Pajkossy Péter)\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx2 = "A továbblépéssel és a kísérlet megkezdésével Ön kijelenti, hogy:\n\n18 és 70 év közötti életkorú\n\nMagyar anyanyelvű\n\nKellő tájékoztatást kapott, hogy eldönthesse, részt kíván-e venni a vizsgálatban\n\nKapott lehetőséget és/vagy elérhetőséget ahhoz, hogy kérdéseit feltegye\n\nMegértette, hogy részvételét bármikor, indoklás és hátrányos következmények nélkül visszavonhatja\n\nA vizsgálat megkezdéséhez kérjük, nyomja meg az Szóköz (Space) billentyűt!";
let tx3 = "A következőkben hangulati fogalmak közül válassza ki, hogy mostanában milyen mértékben vonatkoznak Önre!
Ezt 1-től 5-ig terjedő skálán adja meg (1 a legkevésbé jellemző, 5 a leginkább jellemző), az adott fogalom melletti megfelelő körbe kattintva adja meg válaszait! Amint mindegyik fogalomra bejelölte válaszát, a szóköz (space) billentyűvel tud majd továbblépni.\n\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx4 = "A következőkben egy szöveget kell majd nagyon figyelmesen elolvasnia.\nKoncentráljon minden részletére!\nElolvasása után egy billentyű megnyomásával tud majd továbblépni.\n\n\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx5 = "A következőkben különböző szavak, fogalmak fognak felvillanni a képernyőn nagyon rövid időtartammal. Ha az előző szövegben található vagy a szöveggel kapcsolatos szót, fogalmat észlel, nyomja meg a szóköz (space) billentyűt, törekedve a leggyorsabb válaszadásra!\n\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx6 = "A következőkben a képernyőn egyjegyű számok fognak felvillanni egymást követően, kérjük adja össze az aktuális értéket a közvetlenül előtte megjelenővel!
Az eredményt a billentyűzete segítségével tudja majd begépelni a villogó kurzor által jelzett helyre, majd ezt követően kattintson a Tovább gombra!\nFontos, hogy a lehető leggyorsabban válaszoljon!\nElőször egy példa ábra szemlélteti a feladatot.\n\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx7 = "A következőkben a képernyőn felvillanó négyzetet fog látni, a képernyő közepéhez képest időnként feljebb, időnként lejjebb. A feljebb felvillanó négyzetek esetén nyomja le a szóköz (space) billentyűt a lehető leggyorsabban, viszont a lejjebb felvillanók esetén nem szabad semmilyen billentyűt megnyomnia.\nA következőkben a feladatot egy ábra szemlélteti.\n\nA továbblépéshez nyomjon meg egy tetszőleges billentyűt!";
let tx8 = "Ön a vizsgálat végére ért. A kutatás során gyűjtött adatok kezelése anonim módon történik, személyes adatok rögzítésére nem kerül sor. Az adatkezelés a hatályos adatvédelmi jogszabályokkal összhangban valósul meg, különös tekintettel az Európai Parlament és a Tanács (EU) 2016/679 rendeletére (GDPR). Az adatok biztonságos módon kerülnek tárolásra, és kizárólag tudományos célokra, összesített (aggregált) formában kerülnek feldolgozásra, amely nem teszi lehetővé az egyéni résztvevők azonosítását. Amennyiben továbbra is úgy dönt, hogy részt kíván venni a kutatásban, kérjük, kattintson a „Beleegyezem” gombra, amellyel végleges hozzájárulását adja az adatok kutatási célú felhasználásához. Az ESC billentyű megnyomásával a vizsgálat megszakad, és az eddig rögzített adatok nem kerülnek felhasználásra.\n\n\n\n\nKöszönjük a kísérletben való részvételét!";

let txA = "Mostanában úgy érzem, hogy a dolgok többnyire rendben mennek.\nKépes vagyok megbirkózni a mindennapi feladataimmal.\nEgyre több helyzetben érzem magam magabiztosnak.\nJó érzés, hogy haladok a céljaim felé.\nÉszreveszem és értékelem a kisebb sikereimet is.\nÚgy érzem, számíthatok magamra a nehezebb helyzetekben is.\nA dolgok gyakran jobban alakulnak, mint ahogy előre vártam.\nKépes vagyok élvezni azt, amit csinálok.\nBizakodva tekintek a közeljövőre.\nÚgy érzem, hogy van értelme annak, amit csinálok.\nEgyre inkább úgy látom, hogy jó irányba halad az életem.\nÖsszességében elégedett vagyok azzal, ahogy alakul az életem";
let txB = "Mostanában úgy érzem, hogy a dolgok nehezebben mennek.\nGyakran érzem úgy, hogy lemaradok másokhoz képest.\nNem igazán vagyok elégedett azzal, amit csinálok.\nSokszor kételkedem a saját döntéseimben.\nNehéznek tűnik előrelépni a dolgaimban.\nGyakran érzem magam bizonytalannak.\nMintha a dolgok nem úgy alakulnának, ahogy szeretném.\nKevésbé találok örömöt a mindennapokban.\nNehéz pozitívan látni a közeljövőt.\nGyakran érzem úgy, hogy nincs igazán kontrollom a helyzetek felett.\nEgyre inkább úgy érzem, hogy rossz irányba haladnak a dolgok.\nÖsszességében elégedetlen vagyok azzal, ahogy alakul az életem.";


// Run 'Before Experiment' code from code_6

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InitializationRoutineBegin());
flowScheduler.add(InitializationRoutineEachFrame());
flowScheduler.add(InitializationRoutineEnd());
flowScheduler.add(InstructionGlobalRoutineBegin());
flowScheduler.add(InstructionGlobalRoutineEachFrame());
flowScheduler.add(InstructionGlobalRoutineEnd());
flowScheduler.add(AgreementRoutineBegin());
flowScheduler.add(AgreementRoutineEachFrame());
flowScheduler.add(AgreementRoutineEnd());
flowScheduler.add(GenderChoiceRoutineBegin());
flowScheduler.add(GenderChoiceRoutineEachFrame());
flowScheduler.add(GenderChoiceRoutineEnd());
flowScheduler.add(InstructionPANASRoutineBegin());
flowScheduler.add(InstructionPANASRoutineEachFrame());
flowScheduler.add(InstructionPANASRoutineEnd());
flowScheduler.add(PANASRoutineBegin());
flowScheduler.add(PANASRoutineEachFrame());
flowScheduler.add(PANASRoutineEnd());
flowScheduler.add(InstructionTextRoutineBegin());
flowScheduler.add(InstructionTextRoutineEachFrame());
flowScheduler.add(InstructionTextRoutineEnd());
flowScheduler.add(TEXTRoutineBegin());
flowScheduler.add(TEXTRoutineEachFrame());
flowScheduler.add(TEXTRoutineEnd());
flowScheduler.add(InstructionRoutineBegin());
flowScheduler.add(InstructionRoutineEachFrame());
flowScheduler.add(InstructionRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
flowScheduler.add(InstructionPASATRoutineBegin());
flowScheduler.add(InstructionPASATRoutineEachFrame());
flowScheduler.add(InstructionPASATRoutineEnd());
flowScheduler.add(TaskPres1RoutineBegin());
flowScheduler.add(TaskPres1RoutineEachFrame());
flowScheduler.add(TaskPres1RoutineEnd());
flowScheduler.add(MessageRoutineBegin());
flowScheduler.add(MessageRoutineEachFrame());
flowScheduler.add(MessageRoutineEnd());
flowScheduler.add(FirstNumRoutineBegin());
flowScheduler.add(FirstNumRoutineEachFrame());
flowScheduler.add(FirstNumRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(InstructionTOVARoutineBegin());
flowScheduler.add(InstructionTOVARoutineEachFrame());
flowScheduler.add(InstructionTOVARoutineEnd());
flowScheduler.add(TaskPres2RoutineBegin());
flowScheduler.add(TaskPres2RoutineEachFrame());
flowScheduler.add(TaskPres2RoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Impulses.xlsx', 'path': 'Impulses.xlsx'},
    {'name': 'pic2.png', 'path': 'pic2.png'},
    {'name': 'pic1.png', 'path': 'pic1.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  //expInfo['expName'] = expName;
  //expInfo['psychopyVersion'] = '2022.2.5';
  //expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var InitializationClock;
var InstructionGlobalClock;
var text;
var key_resp;
var AgreementClock;
var text_15;
var key_resp_9;
var GenderChoiceClock;
var text_6;
var gender;
var InstructionPANASClock;
var text_14;
var key_resp_8;
var PANASClock;
var Pan_T0;
var Pan_T1;
var Pan_S1;
var Pan_T2;
var Pan_S2;
var Pan_T3;
var Pan_S3;
var Pan_T4;
var Pan_S4;
var Pan_T5;
var Pan_S5;
var Pan_T6;
var Pan_S6;
var Pan_T7;
var Pan_S7;
var Pan_T8;
var Pan_S8;
var Pan_T9;
var Pan_S9;
var Pan_T10;
var Pan_S10;
var Pan_T02;
var Pan_T11;
var Pan_S11;
var Pan_T12;
var Pan_S12;
var Pan_T13;
var Pan_S13;
var Pan_T14;
var Pan_S14;
var Pan_T15;
var Pan_S15;
var Pan_T16;
var Pan_S16;
var Pan_T17;
var Pan_S17;
var Pan_T18;
var Pan_S18;
var Pan_T19;
var Pan_S19;
var Pan_T20;
var Pan_S20;
var Pan_Key;
var InstructionTextClock;
var text_2;
var key_resp_2;
var TEXTClock;
var actual;
var act;
var mainText;
var TextResp;
var InstructionClock;
var text_7;
var key_resp_5;
var WordImpulsesClock;
var text_12;
var text_13;
var BlankClock;
var Blank1;
var InstructionPASATClock;
var text_3;
var key_resp_3;
var TaskPres1Clock;
var image1;
var key_resp_6;
var MessageClock;
var text_9;
var FirstNumClock;
var text_10;
var FollowingClock;
var text_11;
var PASATClock;
var text_8;
var textbox;
var button;
var InstructionTOVAClock;
var text_4;
var key_resp_4;
var TaskPres2Clock;
var image2;
var key_resp_7;
var TOVA_Block1Clock;
var g;
var h;
var target;
var blackout1;
var TOVAresp_1;
var TOVA_Block2Clock;
var j;
var k;
var non_target;
var blackout2;
var TOVAresp_2;
var GoodbyeClock;
var text_5;
var button_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Initialization"
  InitializationClock = new util.Clock();
  // Initialize components for Routine "InstructionGlobal"
  InstructionGlobalClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: tx1,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Agreement"
  AgreementClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: tx2,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GenderChoice"
  GenderChoiceClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Kérljük adja meg a nemét a megfelelő szóra kattintva az alábbi mezőben!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  gender = new visual.Slider({
    win: psychoJS.window, name: 'gender',
    startValue: undefined,
    size: [0.209, 0.1], pos: [0, (- 0.055)], ori: 0.0, units: 'height',
    labels: ["F\u00e9rfi", "N\u0151"], fontSize: 0.05, ticks: [1, 2],
    granularity: 0.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color([(- 1.0), (- 1.0), 0.0902]), markerColor: new util.Color('Red'), lineColor: new util.Color([0.1294, 0.8666, 0.1294]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: true,
  });
  
  // Initialize components for Routine "InstructionPANAS"
  InstructionPANASClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: tx3,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PANAS"
  PANASClock = new util.Clock();
  Pan_T0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T0',
    text: '1     2     3     4     5',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Pan_T1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T1',
    text: 'Érdeklődő',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Pan_S1 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S1',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), 0.4], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  Pan_T2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T2',
    text: 'Szorongó',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.31], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Pan_S2 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S2',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), 0.31], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  Pan_T3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T3',
    text: 'Izgatott',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.22], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  Pan_S3 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S3',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), 0.22], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  Pan_T4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T4',
    text: 'Zaklatott',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.13], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  Pan_S4 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S4',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), 0.13], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  Pan_T5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T5',
    text: 'Erős',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.04], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  Pan_S5 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S5',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), 0.04], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -11, 
    flip: false,
  });
  
  Pan_T6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T6',
    text: 'Bűntudatos',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.05)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  Pan_S6 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S6',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -13, 
    flip: false,
  });
  
  Pan_T7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T7',
    text: 'Rémült',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.14)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -14.0 
  });
  
  Pan_S7 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S7',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), (- 0.14)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -15, 
    flip: false,
  });
  
  Pan_T8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T8',
    text: 'Ellenséges',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -16.0 
  });
  
  Pan_S8 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S8',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), (- 0.23)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -17, 
    flip: false,
  });
  
  Pan_T9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T9',
    text: 'Lelkes',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.32)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -18.0 
  });
  
  Pan_S9 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S9',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), (- 0.32)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -19, 
    flip: false,
  });
  
  Pan_T10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T10',
    text: 'Büszke',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.41)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -20.0 
  });
  
  Pan_S10 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S10',
    startValue: undefined,
    size: [0.25, 0.06], pos: [(- 0.3), (- 0.41)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -21, 
    flip: false,
  });
  
  Pan_T02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T02',
    text: '1     2     3     4     5',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.45], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -22.0 
  });
  
  Pan_T11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T11',
    text: 'Érzékeny',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -23.0 
  });
  
  Pan_S11 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S11',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, 0.4], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -24, 
    flip: false,
  });
  
  Pan_T12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T12',
    text: 'Éber',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0.31], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -25.0 
  });
  
  Pan_S12 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S12',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, 0.31], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -26, 
    flip: false,
  });
  
  Pan_T13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T13',
    text: 'Szégyenkező',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0.22], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -27.0 
  });
  
  Pan_S13 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S13',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, 0.22], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -28, 
    flip: false,
  });
  
  Pan_T14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T14',
    text: 'Ihletett',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0.13], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -29.0 
  });
  
  Pan_S14 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S14',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, 0.13], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -30, 
    flip: false,
  });
  
  Pan_T15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T15',
    text: 'Ideges',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, 0.04], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -31.0 
  });
  
  Pan_S15 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S15',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, 0.04], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -32, 
    flip: false,
  });
  
  Pan_T16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T16',
    text: 'Eltökélt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.05)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -33.0 
  });
  
  Pan_S16 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S16',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, (- 0.05)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -34, 
    flip: false,
  });
  
  Pan_T17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T17',
    text: 'Gondos',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.14)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -35.0 
  });
  
  Pan_S17 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S17',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, (- 0.14)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -36, 
    flip: false,
  });
  
  Pan_T18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T18',
    text: 'Nyugtalan',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -37.0 
  });
  
  Pan_S18 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S18',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, (- 0.23)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -38, 
    flip: false,
  });
  
  Pan_T19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T19',
    text: 'Tevékeny',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.32)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -39.0 
  });
  
  Pan_S19 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S19',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, (- 0.32)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -40, 
    flip: false,
  });
  
  Pan_T20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pan_T20',
    text: 'Riadt',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.1, (- 0.41)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -41.0 
  });
  
  Pan_S20 = new visual.Slider({
    win: psychoJS.window, name: 'Pan_S20',
    startValue: undefined,
    size: [0.25, 0.06], pos: [0.4, (- 0.41)], ori: 0.0, units: 'height',
    labels: undefined, fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -42, 
    flip: false,
  });
  
  Pan_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "InstructionText"
  InstructionTextClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: tx4,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TEXT"
  TEXTClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  actual = "";
  act = "";
  
  mainText = new visual.TextStim({
    win: psychoJS.window,
    name: 'mainText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  TextResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction"
  InstructionClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: tx5,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WordImpulses"
  WordImpulsesClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  Blank1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Blank1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "InstructionPASAT"
  InstructionPASATClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: tx6,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TaskPres1"
  TaskPres1Clock = new util.Clock();
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : undefined, 
    image : 'pic1.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Message"
  MessageClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Az első szám:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "FirstNum"
  FirstNumClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Following"
  FollowingClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "PASAT"
  PASATClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.2)], letterHeight: 0.05,
    size: [0.5, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Tovább',
    fillColor: [0.1294, 0.8667, 0.1294],
    borderColor: null,
    color: [0.2941, (- 0.6706), (- 0.6706)],
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.08]
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "InstructionTOVA"
  InstructionTOVAClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: tx7,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TaskPres2"
  TaskPres2Clock = new util.Clock();
  image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2', units : undefined, 
    image : 'pic2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TOVA_Block1"
  TOVA_Block1Clock = new util.Clock();
  // Run 'Begin Experiment' code from code
  g = 0;
  h = 0;
  
  target = new visual.Rect ({
    win: psychoJS.window, name: 'target', 
    width: [0.09, 0.09][0], height: [0.09, 0.09][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  blackout1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blackout1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  TOVAresp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TOVA_Block2"
  TOVA_Block2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_5
  j = 0;
  k = 0;
  
  non_target = new visual.Rect ({
    win: psychoJS.window, name: 'non_target', 
    width: [0.09, 0.09][0], height: [0.09, 0.09][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  blackout2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blackout2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  TOVAresp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: tx8,
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_2',
    text: 'Beleegyezem',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'red',
    colorSpace: 'rgb',
    pos: [0, (- 0.26)],
    letterHeight: 0.02,
    size: [0.4, 0.06]
  });
  button_2.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InitializationComponents;
function InitializationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Initialization' ---
    t = 0;
    InitializationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    InitializationComponents = [];
    
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InitializationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Initialization' ---
    // get current time
    t = InitializationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitializationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InitializationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Initialization' ---
    for (const thisComponent of InitializationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Initialization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var InstructionGlobalComponents;
function InstructionGlobalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstructionGlobal' ---
    t = 0;
    InstructionGlobalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    InstructionGlobalComponents = [];
    InstructionGlobalComponents.push(text);
    InstructionGlobalComponents.push(key_resp);
    
    for (const thisComponent of InstructionGlobalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionGlobalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstructionGlobal' ---
    // get current time
    t = InstructionGlobalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionGlobalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionGlobalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstructionGlobal' ---
    for (const thisComponent of InstructionGlobalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "InstructionGlobal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var AgreementComponents;
function AgreementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Agreement' ---
    t = 0;
    AgreementClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    AgreementComponents = [];
    AgreementComponents.push(text_15);
    AgreementComponents.push(key_resp_9);
    
    for (const thisComponent of AgreementComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AgreementRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Agreement' ---
    // get current time
    t = AgreementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AgreementComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AgreementRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Agreement' ---
    for (const thisComponent of AgreementComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Agreement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GenderChoiceComponents;
function GenderChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GenderChoice' ---
    t = 0;
    GenderChoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    gender.reset()
    // keep track of which components have finished
    GenderChoiceComponents = [];
    GenderChoiceComponents.push(text_6);
    GenderChoiceComponents.push(gender);
    
    for (const thisComponent of GenderChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GenderChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GenderChoice' ---
    // get current time
    t = GenderChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *gender* updates
    if (t >= 0.0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }

    
    // Check gender for response to end routine
    if (gender.getRating() !== undefined && gender.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GenderChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GenderChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GenderChoice' ---
    for (const thisComponent of GenderChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gender.response', gender.getRating());
    // the Routine "GenderChoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var InstructionPANASComponents;
function InstructionPANASRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstructionPANAS' ---
    t = 0;
    InstructionPANASClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    InstructionPANASComponents = [];
    InstructionPANASComponents.push(text_14);
    InstructionPANASComponents.push(key_resp_8);
    
    for (const thisComponent of InstructionPANASComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionPANASRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstructionPANAS' ---
    // get current time
    t = InstructionPANASClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: [], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionPANASComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionPANASRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstructionPANAS' ---
    for (const thisComponent of InstructionPANASComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "InstructionPANAS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Pan_Key_allKeys;
var PANASComponents;
function PANASRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PANAS' ---
    t = 0;
    PANASClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Pan_S1.reset()
    Pan_S2.reset()
    Pan_S3.reset()
    Pan_S4.reset()
    Pan_S5.reset()
    Pan_S6.reset()
    Pan_S7.reset()
    Pan_S8.reset()
    Pan_S9.reset()
    Pan_S10.reset()
    Pan_S11.reset()
    Pan_S12.reset()
    Pan_S13.reset()
    Pan_S14.reset()
    Pan_S15.reset()
    Pan_S16.reset()
    Pan_S17.reset()
    Pan_S18.reset()
    Pan_S19.reset()
    Pan_S20.reset()
    Pan_Key.keys = undefined;
    Pan_Key.rt = undefined;
    _Pan_Key_allKeys = [];
    // keep track of which components have finished
    PANASComponents = [];
    PANASComponents.push(Pan_T0);
    PANASComponents.push(Pan_T1);
    PANASComponents.push(Pan_S1);
    PANASComponents.push(Pan_T2);
    PANASComponents.push(Pan_S2);
    PANASComponents.push(Pan_T3);
    PANASComponents.push(Pan_S3);
    PANASComponents.push(Pan_T4);
    PANASComponents.push(Pan_S4);
    PANASComponents.push(Pan_T5);
    PANASComponents.push(Pan_S5);
    PANASComponents.push(Pan_T6);
    PANASComponents.push(Pan_S6);
    PANASComponents.push(Pan_T7);
    PANASComponents.push(Pan_S7);
    PANASComponents.push(Pan_T8);
    PANASComponents.push(Pan_S8);
    PANASComponents.push(Pan_T9);
    PANASComponents.push(Pan_S9);
    PANASComponents.push(Pan_T10);
    PANASComponents.push(Pan_S10);
    PANASComponents.push(Pan_T02);
    PANASComponents.push(Pan_T11);
    PANASComponents.push(Pan_S11);
    PANASComponents.push(Pan_T12);
    PANASComponents.push(Pan_S12);
    PANASComponents.push(Pan_T13);
    PANASComponents.push(Pan_S13);
    PANASComponents.push(Pan_T14);
    PANASComponents.push(Pan_S14);
    PANASComponents.push(Pan_T15);
    PANASComponents.push(Pan_S15);
    PANASComponents.push(Pan_T16);
    PANASComponents.push(Pan_S16);
    PANASComponents.push(Pan_T17);
    PANASComponents.push(Pan_S17);
    PANASComponents.push(Pan_T18);
    PANASComponents.push(Pan_S18);
    PANASComponents.push(Pan_T19);
    PANASComponents.push(Pan_S19);
    PANASComponents.push(Pan_T20);
    PANASComponents.push(Pan_S20);
    PANASComponents.push(Pan_Key);
    
    for (const thisComponent of PANASComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PANASRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PANAS' ---
    // get current time
    t = PANASClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Pan_T0* updates
    if (t >= 0.0 && Pan_T0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T0.tStart = t;  // (not accounting for frame time here)
      Pan_T0.frameNStart = frameN;  // exact frame index
      
      Pan_T0.setAutoDraw(true);
    }

    
    // *Pan_T1* updates
    if (t >= 0.0 && Pan_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T1.tStart = t;  // (not accounting for frame time here)
      Pan_T1.frameNStart = frameN;  // exact frame index
      
      Pan_T1.setAutoDraw(true);
    }

    
    // *Pan_S1* updates
    if (t >= 0.0 && Pan_S1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S1.tStart = t;  // (not accounting for frame time here)
      Pan_S1.frameNStart = frameN;  // exact frame index
      
      Pan_S1.setAutoDraw(true);
    }

    
    // *Pan_T2* updates
    if (t >= 0.0 && Pan_T2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T2.tStart = t;  // (not accounting for frame time here)
      Pan_T2.frameNStart = frameN;  // exact frame index
      
      Pan_T2.setAutoDraw(true);
    }

    
    // *Pan_S2* updates
    if (t >= 0.0 && Pan_S2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S2.tStart = t;  // (not accounting for frame time here)
      Pan_S2.frameNStart = frameN;  // exact frame index
      
      Pan_S2.setAutoDraw(true);
    }

    
    // *Pan_T3* updates
    if (t >= 0.0 && Pan_T3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T3.tStart = t;  // (not accounting for frame time here)
      Pan_T3.frameNStart = frameN;  // exact frame index
      
      Pan_T3.setAutoDraw(true);
    }

    
    // *Pan_S3* updates
    if (t >= 0.0 && Pan_S3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S3.tStart = t;  // (not accounting for frame time here)
      Pan_S3.frameNStart = frameN;  // exact frame index
      
      Pan_S3.setAutoDraw(true);
    }

    
    // *Pan_T4* updates
    if (t >= 0.0 && Pan_T4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T4.tStart = t;  // (not accounting for frame time here)
      Pan_T4.frameNStart = frameN;  // exact frame index
      
      Pan_T4.setAutoDraw(true);
    }

    
    // *Pan_S4* updates
    if (t >= 0.0 && Pan_S4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S4.tStart = t;  // (not accounting for frame time here)
      Pan_S4.frameNStart = frameN;  // exact frame index
      
      Pan_S4.setAutoDraw(true);
    }

    
    // *Pan_T5* updates
    if (t >= 0.0 && Pan_T5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T5.tStart = t;  // (not accounting for frame time here)
      Pan_T5.frameNStart = frameN;  // exact frame index
      
      Pan_T5.setAutoDraw(true);
    }

    
    // *Pan_S5* updates
    if (t >= 0.0 && Pan_S5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S5.tStart = t;  // (not accounting for frame time here)
      Pan_S5.frameNStart = frameN;  // exact frame index
      
      Pan_S5.setAutoDraw(true);
    }

    
    // *Pan_T6* updates
    if (t >= 0.0 && Pan_T6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T6.tStart = t;  // (not accounting for frame time here)
      Pan_T6.frameNStart = frameN;  // exact frame index
      
      Pan_T6.setAutoDraw(true);
    }

    
    // *Pan_S6* updates
    if (t >= 0.0 && Pan_S6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S6.tStart = t;  // (not accounting for frame time here)
      Pan_S6.frameNStart = frameN;  // exact frame index
      
      Pan_S6.setAutoDraw(true);
    }

    
    // *Pan_T7* updates
    if (t >= 0.0 && Pan_T7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T7.tStart = t;  // (not accounting for frame time here)
      Pan_T7.frameNStart = frameN;  // exact frame index
      
      Pan_T7.setAutoDraw(true);
    }

    
    // *Pan_S7* updates
    if (t >= 0.0 && Pan_S7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S7.tStart = t;  // (not accounting for frame time here)
      Pan_S7.frameNStart = frameN;  // exact frame index
      
      Pan_S7.setAutoDraw(true);
    }

    
    // *Pan_T8* updates
    if (t >= 0.0 && Pan_T8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T8.tStart = t;  // (not accounting for frame time here)
      Pan_T8.frameNStart = frameN;  // exact frame index
      
      Pan_T8.setAutoDraw(true);
    }

    
    // *Pan_S8* updates
    if (t >= 0.0 && Pan_S8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S8.tStart = t;  // (not accounting for frame time here)
      Pan_S8.frameNStart = frameN;  // exact frame index
      
      Pan_S8.setAutoDraw(true);
    }

    
    // *Pan_T9* updates
    if (t >= 0.0 && Pan_T9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T9.tStart = t;  // (not accounting for frame time here)
      Pan_T9.frameNStart = frameN;  // exact frame index
      
      Pan_T9.setAutoDraw(true);
    }

    
    // *Pan_S9* updates
    if (t >= 0.0 && Pan_S9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S9.tStart = t;  // (not accounting for frame time here)
      Pan_S9.frameNStart = frameN;  // exact frame index
      
      Pan_S9.setAutoDraw(true);
    }

    
    // *Pan_T10* updates
    if (t >= 0.0 && Pan_T10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T10.tStart = t;  // (not accounting for frame time here)
      Pan_T10.frameNStart = frameN;  // exact frame index
      
      Pan_T10.setAutoDraw(true);
    }

    
    // *Pan_S10* updates
    if (t >= 0.0 && Pan_S10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S10.tStart = t;  // (not accounting for frame time here)
      Pan_S10.frameNStart = frameN;  // exact frame index
      
      Pan_S10.setAutoDraw(true);
    }

    
    // *Pan_T02* updates
    if (t >= 0.0 && Pan_T02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T02.tStart = t;  // (not accounting for frame time here)
      Pan_T02.frameNStart = frameN;  // exact frame index
      
      Pan_T02.setAutoDraw(true);
    }

    
    // *Pan_T11* updates
    if (t >= 0.0 && Pan_T11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T11.tStart = t;  // (not accounting for frame time here)
      Pan_T11.frameNStart = frameN;  // exact frame index
      
      Pan_T11.setAutoDraw(true);
    }

    
    // *Pan_S11* updates
    if (t >= 0.0 && Pan_S11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S11.tStart = t;  // (not accounting for frame time here)
      Pan_S11.frameNStart = frameN;  // exact frame index
      
      Pan_S11.setAutoDraw(true);
    }

    
    // *Pan_T12* updates
    if (t >= 0.0 && Pan_T12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T12.tStart = t;  // (not accounting for frame time here)
      Pan_T12.frameNStart = frameN;  // exact frame index
      
      Pan_T12.setAutoDraw(true);
    }

    
    // *Pan_S12* updates
    if (t >= 0.0 && Pan_S12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S12.tStart = t;  // (not accounting for frame time here)
      Pan_S12.frameNStart = frameN;  // exact frame index
      
      Pan_S12.setAutoDraw(true);
    }

    
    // *Pan_T13* updates
    if (t >= 0.0 && Pan_T13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T13.tStart = t;  // (not accounting for frame time here)
      Pan_T13.frameNStart = frameN;  // exact frame index
      
      Pan_T13.setAutoDraw(true);
    }

    
    // *Pan_S13* updates
    if (t >= 0.0 && Pan_S13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S13.tStart = t;  // (not accounting for frame time here)
      Pan_S13.frameNStart = frameN;  // exact frame index
      
      Pan_S13.setAutoDraw(true);
    }

    
    // *Pan_T14* updates
    if (t >= 0.0 && Pan_T14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T14.tStart = t;  // (not accounting for frame time here)
      Pan_T14.frameNStart = frameN;  // exact frame index
      
      Pan_T14.setAutoDraw(true);
    }

    
    // *Pan_S14* updates
    if (t >= 0.0 && Pan_S14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S14.tStart = t;  // (not accounting for frame time here)
      Pan_S14.frameNStart = frameN;  // exact frame index
      
      Pan_S14.setAutoDraw(true);
    }

    
    // *Pan_T15* updates
    if (t >= 0.0 && Pan_T15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T15.tStart = t;  // (not accounting for frame time here)
      Pan_T15.frameNStart = frameN;  // exact frame index
      
      Pan_T15.setAutoDraw(true);
    }

    
    // *Pan_S15* updates
    if (t >= 0.0 && Pan_S15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S15.tStart = t;  // (not accounting for frame time here)
      Pan_S15.frameNStart = frameN;  // exact frame index
      
      Pan_S15.setAutoDraw(true);
    }

    
    // *Pan_T16* updates
    if (t >= 0.0 && Pan_T16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T16.tStart = t;  // (not accounting for frame time here)
      Pan_T16.frameNStart = frameN;  // exact frame index
      
      Pan_T16.setAutoDraw(true);
    }

    
    // *Pan_S16* updates
    if (t >= 0.0 && Pan_S16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S16.tStart = t;  // (not accounting for frame time here)
      Pan_S16.frameNStart = frameN;  // exact frame index
      
      Pan_S16.setAutoDraw(true);
    }

    
    // *Pan_T17* updates
    if (t >= 0.0 && Pan_T17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T17.tStart = t;  // (not accounting for frame time here)
      Pan_T17.frameNStart = frameN;  // exact frame index
      
      Pan_T17.setAutoDraw(true);
    }

    
    // *Pan_S17* updates
    if (t >= 0.0 && Pan_S17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S17.tStart = t;  // (not accounting for frame time here)
      Pan_S17.frameNStart = frameN;  // exact frame index
      
      Pan_S17.setAutoDraw(true);
    }

    
    // *Pan_T18* updates
    if (t >= 0.0 && Pan_T18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T18.tStart = t;  // (not accounting for frame time here)
      Pan_T18.frameNStart = frameN;  // exact frame index
      
      Pan_T18.setAutoDraw(true);
    }

    
    // *Pan_S18* updates
    if (t >= 0.0 && Pan_S18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S18.tStart = t;  // (not accounting for frame time here)
      Pan_S18.frameNStart = frameN;  // exact frame index
      
      Pan_S18.setAutoDraw(true);
    }

    
    // *Pan_T19* updates
    if (t >= 0.0 && Pan_T19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T19.tStart = t;  // (not accounting for frame time here)
      Pan_T19.frameNStart = frameN;  // exact frame index
      
      Pan_T19.setAutoDraw(true);
    }

    
    // *Pan_S19* updates
    if (t >= 0.0 && Pan_S19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S19.tStart = t;  // (not accounting for frame time here)
      Pan_S19.frameNStart = frameN;  // exact frame index
      
      Pan_S19.setAutoDraw(true);
    }

    
    // *Pan_T20* updates
    if (t >= 0.0 && Pan_T20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_T20.tStart = t;  // (not accounting for frame time here)
      Pan_T20.frameNStart = frameN;  // exact frame index
      
      Pan_T20.setAutoDraw(true);
    }

    
    // *Pan_S20* updates
    if (t >= 0.0 && Pan_S20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_S20.tStart = t;  // (not accounting for frame time here)
      Pan_S20.frameNStart = frameN;  // exact frame index
      
      Pan_S20.setAutoDraw(true);
    }

    
    // *Pan_Key* updates
    if (t >= 0.0 && Pan_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pan_Key.tStart = t;  // (not accounting for frame time here)
      Pan_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Pan_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Pan_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Pan_Key.clearEvents(); });
    }

    if (Pan_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Pan_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Pan_Key_allKeys = _Pan_Key_allKeys.concat(theseKeys);
      if (_Pan_Key_allKeys.length > 0) {
        Pan_Key.keys = _Pan_Key_allKeys[_Pan_Key_allKeys.length - 1].name;  // just the last key pressed
        Pan_Key.rt = _Pan_Key_allKeys[_Pan_Key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PANASComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PANASRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PANAS' ---
    for (const thisComponent of PANASComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from Pan_code
    psychoJS.experiment.addData("PA", (((((((((Pan_S1.getRating() + Pan_S3.getRating()) + Pan_S5.getRating()) + Pan_S9.getRating()) + Pan_S10.getRating()) + Pan_S12.getRating()) + Pan_S14.getRating()) + Pan_S16.getRating()) + Pan_S17.getRating()) + Pan_S19.getRating()));
    psychoJS.experiment.addData("NA", (((((((((Pan_S2.getRating() + Pan_S4.getRating()) + Pan_S6.getRating()) + Pan_S7.getRating()) + Pan_S8.getRating()) + Pan_S11.getRating()) + Pan_S13.getRating()) + Pan_S15.getRating()) + Pan_S18.getRating()) + Pan_S20.getRating()));
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Pan_Key.corr, level);
    }
    //psychoJS.experiment.addData('Pan_Key.keys', Pan_Key.keys);
    if (typeof Pan_Key.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('Pan_Key.rt', Pan_Key.rt);
        routineTimer.reset();
        }
    
    Pan_Key.stop();
    // the Routine "PANAS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var InstructionTextComponents;
function InstructionTextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstructionText' ---
    t = 0;
    InstructionTextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    InstructionTextComponents = [];
    InstructionTextComponents.push(text_2);
    InstructionTextComponents.push(key_resp_2);
    
    for (const thisComponent of InstructionTextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionTextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstructionText' ---
    // get current time
    t = InstructionTextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionTextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionTextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstructionText' ---
    for (const thisComponent of InstructionTextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "InstructionText" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rd;
var x;
var _TextResp_allKeys;
var TEXTComponents;
function TEXTRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TEXT' ---
    t = 0;
    TEXTClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    rd = util.randint(1, 3);
    if ((rd === 1)) {
        actual = txA;
        act = "poz";
        x = util.range(0, 11);
    } else {
        if ((rd === 2)) {
            actual = txB;
            act = "neg";
            x = util.range(11, 22);
        }
    }
    
    mainText.setText(actual);
    TextResp.keys = undefined;
    TextResp.rt = undefined;
    _TextResp_allKeys = [];
    // keep track of which components have finished
    TEXTComponents = [];
    TEXTComponents.push(mainText);
    TEXTComponents.push(TextResp);
    
    for (const thisComponent of TEXTComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TEXTRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TEXT' ---
    // get current time
    t = TEXTClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mainText* updates
    if (t >= 0.0 && mainText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainText.tStart = t;  // (not accounting for frame time here)
      mainText.frameNStart = frameN;  // exact frame index
      
      mainText.setAutoDraw(true);
    }

    
    // *TextResp* updates
    if (t >= 0.0 && TextResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TextResp.tStart = t;  // (not accounting for frame time here)
      TextResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TextResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TextResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TextResp.clearEvents(); });
    }

    if (TextResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = TextResp.getKeys({keyList: [], waitRelease: false});
      _TextResp_allKeys = _TextResp_allKeys.concat(theseKeys);
      if (_TextResp_allKeys.length > 0) {
        TextResp.keys = _TextResp_allKeys[_TextResp_allKeys.length - 1].name;  // just the last key pressed
        TextResp.rt = _TextResp_allKeys[_TextResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TEXTComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TEXTRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TEXT' ---
    for (const thisComponent of TEXTComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_6
    x = x;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(TextResp.corr, level);
    }
    //psychoJS.experiment.addData('TextResp.keys', TextResp.keys);
    if (typeof TextResp.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('TextResp.rt', TextResp.rt);
        routineTimer.reset();
        }
    
    TextResp.stop();
    // the Routine "TEXT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var InstructionComponents;
function InstructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction' ---
    t = 0;
    InstructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    InstructionComponents = [];
    InstructionComponents.push(text_7);
    InstructionComponents.push(key_resp_5);
    
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction' ---
    // get current time
    t = InstructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: [], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction' ---
    for (const thisComponent of InstructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Impulses.xlsx', x),
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(WordImpulsesRoutineBegin(snapshot));
      trials_4LoopScheduler.add(WordImpulsesRoutineEachFrame());
      trials_4LoopScheduler.add(WordImpulsesRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          //psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        //psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n/2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(FollowingRoutineBegin(snapshot));
      trialsLoopScheduler.add(FollowingRoutineEachFrame());
      trialsLoopScheduler.add(FollowingRoutineEnd(snapshot));
      trialsLoopScheduler.add(PASATRoutineBegin(snapshot));
      trialsLoopScheduler.add(PASATRoutineEachFrame());
      trialsLoopScheduler.add(PASATRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TOVA_Block1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(TOVA_Block1RoutineEachFrame());
      trials_2LoopScheduler.add(TOVA_Block1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(TOVA_Block2RoutineBegin(snapshot));
      trials_3LoopScheduler.add(TOVA_Block2RoutineEachFrame());
      trials_3LoopScheduler.add(TOVA_Block2RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var WordImpulsesComponents;
function WordImpulsesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WordImpulses' ---
    t = 0;
    WordImpulsesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    text_12.setPos([((0.5 * Math.random()) - 0.25), ((0.5 * Math.random()) - 0.25)]);
    text_12.setText(imp);
    text_13.setText('');
    // keep track of which components have finished
    WordImpulsesComponents = [];
    WordImpulsesComponents.push(text_12);
    WordImpulsesComponents.push(text_13);
    
    for (const thisComponent of WordImpulsesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function WordImpulsesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordImpulses' ---
    // get current time
    t = WordImpulsesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WordImpulsesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WordImpulsesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WordImpulses' ---
    for (const thisComponent of WordImpulsesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlankComponents;
function BlankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blank' ---
    t = 0;
    BlankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    BlankComponents = [];
    BlankComponents.push(Blank1);
    
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blank' ---
    // get current time
    t = BlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Blank1* updates
    if (t >= 0.0 && Blank1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank1.tStart = t;  // (not accounting for frame time here)
      Blank1.frameNStart = frameN;  // exact frame index
      
      Blank1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Blank1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blank' ---
    for (const thisComponent of BlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var InstructionPASATComponents;
function InstructionPASATRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstructionPASAT' ---
    t = 0;
    InstructionPASATClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    InstructionPASATComponents = [];
    InstructionPASATComponents.push(text_3);
    InstructionPASATComponents.push(key_resp_3);
    
    for (const thisComponent of InstructionPASATComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionPASATRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstructionPASAT' ---
    // get current time
    t = InstructionPASATClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionPASATComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionPASATRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstructionPASAT' ---
    for (const thisComponent of InstructionPASATComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "InstructionPASAT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var TaskPres1Components;
function TaskPres1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TaskPres1' ---
    t = 0;
    TaskPres1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    TaskPres1Components = [];
    TaskPres1Components.push(image1);
    TaskPres1Components.push(key_resp_6);
    
    for (const thisComponent of TaskPres1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TaskPres1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TaskPres1' ---
    // get current time
    t = TaskPres1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image1* updates
    if (t >= 0.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: [], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TaskPres1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TaskPres1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TaskPres1' ---
    for (const thisComponent of TaskPres1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "TaskPres1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var MessageComponents;
function MessageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Message' ---
    t = 0;
    MessageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    MessageComponents = [];
    MessageComponents.push(text_9);
    
    for (const thisComponent of MessageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function MessageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Message' ---
    // get current time
    t = MessageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MessageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MessageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Message' ---
    for (const thisComponent of MessageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var r;
var s;
var a;
var FirstNumComponents;
function FirstNumRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FirstNum' ---
    t = 0;
    FirstNumClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    r = util.randint(1, 10);
    s = 0;
    a = 0;
    
    text_10.setText(r);
    // keep track of which components have finished
    FirstNumComponents = [];
    FirstNumComponents.push(text_10);
    
    for (const thisComponent of FirstNumComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FirstNumRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FirstNum' ---
    // get current time
    t = FirstNumClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FirstNumComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FirstNumRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FirstNum' ---
    for (const thisComponent of FirstNumComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FollowingComponents;
function FollowingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Following' ---
    t = 0;
    FollowingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    text_11.setText('A következő szám:');
    // Run 'Begin Routine' code from code_4
    s = r;
    
    // keep track of which components have finished
    FollowingComponents = [];
    FollowingComponents.push(text_11);
    
    for (const thisComponent of FollowingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FollowingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Following' ---
    // get current time
    t = FollowingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FollowingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FollowingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Following' ---
    for (const thisComponent of FollowingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PASATComponents;
function PASATRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PASAT' ---
    t = 0;
    PASATClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    r = util.randint(1, 10);
    a = (s + r);
    
    text_8.setText(r);
    textbox.setText('');
    textbox.refresh();
    textbox.setText('');
    // keep track of which components have finished
    PASATComponents = [];
    PASATComponents.push(text_8);
    PASATComponents.push(textbox);
    PASATComponents.push(button);
    
    for (const thisComponent of PASATComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PASATRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PASAT' ---
    // get current time
    t = PASATClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // *textbox* updates
    if (t >= 1.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          button.numClicks += 1;
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PASATComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PASATRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PASAT' ---
    for (const thisComponent of PASATComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('eredm', a);
    psychoJS.experiment.addData('textbox.text',textbox.text)
    //psychoJS.experiment.addData('button.numClicks', button.numClicks);
    //psychoJS.experiment.addData('button.timesOn', button.timesOn);
    //psychoJS.experiment.addData('button.timesOff', button.timesOff);
    psychoJS.experiment.addData('buttonLast', button.timesOn[button.timesOn.length-1]);

    // the Routine "PASAT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var InstructionTOVAComponents;
function InstructionTOVARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InstructionTOVA' ---
    t = 0;
    InstructionTOVAClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    InstructionTOVAComponents = [];
    InstructionTOVAComponents.push(text_4);
    InstructionTOVAComponents.push(key_resp_4);
    
    for (const thisComponent of InstructionTOVAComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionTOVARoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InstructionTOVA' ---
    // get current time
    t = InstructionTOVAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: [], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionTOVAComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionTOVARoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InstructionTOVA' ---
    for (const thisComponent of InstructionTOVAComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "InstructionTOVA" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_7_allKeys;
var TaskPres2Components;
function TaskPres2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TaskPres2' ---
    t = 0;
    TaskPres2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    TaskPres2Components = [];
    TaskPres2Components.push(image2);
    TaskPres2Components.push(key_resp_7);
    
    for (const thisComponent of TaskPres2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TaskPres2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TaskPres2' ---
    // get current time
    t = TaskPres2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image2* updates
    if (t >= 0.0 && image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2.tStart = t;  // (not accounting for frame time here)
      image2.frameNStart = frameN;  // exact frame index
      
      image2.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: [], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TaskPres2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TaskPres2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TaskPres2' ---
    for (const thisComponent of TaskPres2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    //psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        //psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "TaskPres2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _TOVAresp_1_allKeys;
var TOVA_Block1Components;
function TOVA_Block1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TOVA_Block1' ---
    t = 0;
    TOVA_Block1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    g = util.randint(1, (n + 1));
    if ((g < ((n / 4) + 1))) {
        h = 1;
    } else {
        h = (- 1);
    }
    
    target.setPos([0, (h * 0.2)]);
    TOVAresp_1.keys = undefined;
    TOVAresp_1.rt = undefined;
    _TOVAresp_1_allKeys = [];
    // keep track of which components have finished
    TOVA_Block1Components = [];
    TOVA_Block1Components.push(target);
    TOVA_Block1Components.push(blackout1);
    TOVA_Block1Components.push(TOVAresp_1);
    
    for (const thisComponent of TOVA_Block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TOVA_Block1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TOVA_Block1' ---
    // get current time
    t = TOVA_Block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target* updates
    if (t >= 0.0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    // *blackout1* updates
    if (t >= 0.0 && blackout1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blackout1.tStart = t;  // (not accounting for frame time here)
      blackout1.frameNStart = frameN;  // exact frame index
      
      blackout1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blackout1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blackout1.setAutoDraw(false);
    }
    
    // *TOVAresp_1* updates
    if (t >= 0.0 && TOVAresp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TOVAresp_1.tStart = t;  // (not accounting for frame time here)
      TOVAresp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TOVAresp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TOVAresp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TOVAresp_1.clearEvents(); });
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TOVAresp_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TOVAresp_1.status = PsychoJS.Status.FINISHED;
  }

    if (TOVAresp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = TOVAresp_1.getKeys({keyList: ['space'], waitRelease: false});
      _TOVAresp_1_allKeys = _TOVAresp_1_allKeys.concat(theseKeys);
      if (_TOVAresp_1_allKeys.length > 0) {
        TOVAresp_1.keys = _TOVAresp_1_allKeys[_TOVAresp_1_allKeys.length - 1].name;  // just the last key pressed
        TOVAresp_1.rt = _TOVAresp_1_allKeys[_TOVAresp_1_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TOVA_Block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TOVA_Block1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TOVA_Block1' ---
    for (const thisComponent of TOVA_Block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(TOVAresp_1.corr, level);
    }
    psychoJS.experiment.addData('jovalasz', h); // 1 is correct answer -1 is wrong
    psychoJS.experiment.addData('TOVAresp_1.keys', TOVAresp_1.keys);
    if (typeof TOVAresp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TOVAresp_1.rt', TOVAresp_1.rt);
        }
    
    TOVAresp_1.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _TOVAresp_2_allKeys;
var TOVA_Block2Components;
function TOVA_Block2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TOVA_Block2' ---
    t = 0;
    TOVA_Block2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    j = util.randint(1, (n + 1));
    if ((j < ((n / 4) + 1))) {
        k = (- 1);
    } else {
        k = 1;
    }
    
    non_target.setPos([0, (k * 0.2)]);
    TOVAresp_2.keys = undefined;
    TOVAresp_2.rt = undefined;
    _TOVAresp_2_allKeys = [];
    // keep track of which components have finished
    TOVA_Block2Components = [];
    TOVA_Block2Components.push(non_target);
    TOVA_Block2Components.push(blackout2);
    TOVA_Block2Components.push(TOVAresp_2);
    
    for (const thisComponent of TOVA_Block2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TOVA_Block2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TOVA_Block2' ---
    // get current time
    t = TOVA_Block2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *non_target* updates
    if (t >= 0.0 && non_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      non_target.tStart = t;  // (not accounting for frame time here)
      non_target.frameNStart = frameN;  // exact frame index
      
      non_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (non_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      non_target.setAutoDraw(false);
    }
    
    // *blackout2* updates
    if (t >= 0.0 && blackout2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blackout2.tStart = t;  // (not accounting for frame time here)
      blackout2.frameNStart = frameN;  // exact frame index
      
      blackout2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blackout2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blackout2.setAutoDraw(false);
    }
    
    // *TOVAresp_2* updates
    if (t >= 0.0 && TOVAresp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TOVAresp_2.tStart = t;  // (not accounting for frame time here)
      TOVAresp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TOVAresp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TOVAresp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TOVAresp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TOVAresp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TOVAresp_2.status = PsychoJS.Status.FINISHED;
  }

    if (TOVAresp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = TOVAresp_2.getKeys({keyList: ['space'], waitRelease: false});
      _TOVAresp_2_allKeys = _TOVAresp_2_allKeys.concat(theseKeys);
      if (_TOVAresp_2_allKeys.length > 0) {
        TOVAresp_2.keys = _TOVAresp_2_allKeys[_TOVAresp_2_allKeys.length - 1].name;  // just the last key pressed
        TOVAresp_2.rt = _TOVAresp_2_allKeys[_TOVAresp_2_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TOVA_Block2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TOVA_Block2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TOVA_Block2' ---
    for (const thisComponent of TOVA_Block2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(TOVAresp_2.corr, level);
    }
    psychoJS.experiment.addData('jovalasz', k); // 1 is correct answer -1 is wrong
    psychoJS.experiment.addData('TOVAresp_2.keys', TOVAresp_2.keys);
    if (typeof TOVAresp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TOVAresp_2.rt', TOVAresp_2.rt);
        }
    
    TOVAresp_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    GoodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(text_5);
    GoodbyeComponents.push(button_2);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *button_2* updates
    if (t >= 0 && button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_2.tStart = t;  // (not accounting for frame time here)
      button_2.frameNStart = frameN;  // exact frame index
      
      button_2.setAutoDraw(true);
    }

    if (button_2.status === PsychoJS.Status.STARTED) {
      // check whether button_2 has been pressed
      if (button_2.isClicked) {
        if (!button_2.wasClicked) {
          // store time of first click
          button_2.timesOn.push(button_2.clock.getTime());
          button_2.numClicks += 1;
          // store time clicked until
          button_2.timesOff.push(button_2.clock.getTime());
        } else {
          // update time clicked until;
          button_2.timesOff[button_2.timesOff.length - 1] = button_2.clock.getTime();
        }
        if (!button_2.wasClicked) {
          // end routine when button_2 is clicked
          continueRoutine = false;
        }
        // if button_2 is still clicked next frame, it is not a new click
        button_2.wasClicked = true;
      } else {
        // if button_2 is clicked next frame, it is a new click
        button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_2 hasn't started / has finished
      button_2.clock.reset();
      // if button_2 is clicked next frame, it is a new click
      button_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //psychoJS.experiment.addData('button_2.numClicks', button_2.numClicks);
    //psychoJS.experiment.addData('button_2.timesOn', button_2.timesOn);
    //psychoJS.experiment.addData('button_2.timesOff', button_2.timesOff);
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
