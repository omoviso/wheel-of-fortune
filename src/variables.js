let canvas = document.getElementById("spinwheel");
let c = canvas.getContext("2d");
let pi = Math.PI;
(canvas.width = screen.availWidth), (canvas.height = innerHeight);

//Create prerender element -> reduce load time
let preRender = document.createElement("canvas");
preRender.width = canvas.width;
preRender.height = canvas.height;
let preC = preRender.getContext("2d");

//State of spinning wheel: on or off (usually after power measuring is completed)
let startSpinning = false;

//State of measuring power: on or off.
let powerMeasure = false;

//Power bar: base bar and active bar
let power = {};

//Center point parameters
let centerPoint = [];

//Array of lightbulbs on wheel sections
let lights = [];

//Max velocity that wheel can reach per frame, velocity will be assigned to a value based on maxVelocity and power level
let maxVelocity = 0.35;
let velocity = maxVelocity;

//Contents on the spinning wheel
let wheelContents = {
  color: ["#EB504E", "#49ab81", "#C83373", "#3578BF", "#F8B409", "#05B2C0"],
  content: [
    "GET INTERVIEWED",
    "GET HIRED",
    "GET CONTACTED",
    "GET SECOND CHANCE",
    "OUT OF IDEAS",
    '"WE ARE SORRY TO..."'
  ]
};

//IMAGES SHOWN CORRESPONDENT TO THE SECTION POINTED BY THE POINTER
let urls = [
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/54434291_2200985883295496_415710657673953280_o.jpg?_nc_cat=107&_nc_ht=scontent-arn2-1.xx&oh=7479a031cd245bfe03355f208c18fa03&oe=5D26356B",
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/53734533_2200985876628830_1116203777653735424_o.jpg?_nc_cat=100&_nc_ht=scontent-arn2-1.xx&oh=787c9ca0f16eff984b0b5cac1d82e40f&oe=5CDC7350",
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/53535843_2200986023295482_7699622836867956736_o.jpg?_nc_cat=103&_nc_ht=scontent-arn2-1.xx&oh=94a2a691e92b70b2bb65343351fb005b&oe=5D13AAA6",
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/53788266_2200986016628816_8030594927958163456_o.jpg?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=19fbea71e5fad5099e2951ec86109075&oe=5D15E54B",
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/53899648_2200986029962148_7263518192708878336_o.jpg?_nc_cat=106&_nc_ht=scontent-arn2-1.xx&oh=8ab23fb88af79f09b30a7993c56ad756&oe=5D082280",
  "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/53806341_2200985889962162_5451906261475917824_o.jpg?_nc_cat=103&_nc_ht=scontent-arn2-1.xx&oh=008ce39537d01a7ead6e4c038e95ad24&oe=5D0A9130"
];
