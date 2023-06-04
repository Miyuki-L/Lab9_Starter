let logButton = document.getElementById("consoleLog");
logButton.addEventListener("click", () => {
   console.log("Console Log Demo");
});

let errorButton = document.getElementById("consoleError");
errorButton.addEventListener("click", () => {
   console.error("Console Error Demo");
});

let countButton = document.getElementById("consoleCount");
countButton.addEventListener("click", ()=> {
   console.count("Console Count");
});

let warnButton = document.getElementById("consoleWarn");
warnButton.addEventListener("click", () => {
   console.warn("Console Warning");
});

let assertButton = document.getElementById("consoleAssert");
assertButton.addEventListener("click", () => {
   let isTrue = false;
   let reason = "isTrue should be true"
   console.assert(isTrue===true, {isTrue, reason})
});

let clearButton = document.getElementById("consoleClear");
clearButton.addEventListener("click", () => {
   console.clear();
});

let dirButton = document.getElementById("consoleDir");
dirButton.addEventListener("click", () => {
   console.dir(document.head);
});

let dirXMLButton = document.getElementById("consoleDirxml");
dirXMLButton.addEventListener("click", () => {
   console.dirxml(document);
});

let groupStartButton = document.getElementById("consoleGroupStart");
groupStartButton.addEventListener("click", () => {
   console.group("Console Group Demo");
});

let groupEndButton = document.getElementById("consoleGroupEnd");
groupEndButton.addEventListener("click", () => {
   console.groupEnd("Console Group Demo");
});

let tableButton = document.getElementById("consoleTable");
tableButton.addEventListener("click", () => {
   var labs = [
      {
         lab: "1",
         content: "VSCode, Markdown, and Git"
      },
      {
         lab: "2",
         content: "HTML and DevTools"
      },
      {
         lab: "3",
         content: "CSS and Agile Intro"
      },
      {
         lab: "4",
         content: "JS Language Intro, Diagraming and DevTools"
      },
      {
         lab: "5",
         content: "JavaScript DOM Basics and Github Actions"
      },
   ];

   //Logs and array of objects as a table
   console.table(labs);
});

let startTimerButton = document.getElementById("consoleStartTimer");
startTimerButton.addEventListener("click", () => {
   console.time("timer");
});

let endTimerButton = document.getElementById("consoleEndTimer");
endTimerButton.addEventListener("click", () => {
   console.timeEnd("timer");
});

let traceButton = document.getElementById("consoleTrace");
traceButton.addEventListener("click", () => {
   function callTrace() {
      console.trace();
   }
   
   callTrace();
})

let globalErrorButton = document.getElementById("consoleGlobalError");
globalErrorButton.addEventListener("click", () => {
   globalError()
});