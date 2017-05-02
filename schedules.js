
var normal0 = {
	name: "Period 0",
	beginning: "0:01",
	warningBellOne: 0,
	warningBellTwo: "6:47",
	warningBellTwoName: "3 min bell",
	bell: "6:50",
	end: "7:45",
	enabled: false,
};

var normal1 = {
	name: "Period 1",
	beginning: "7:45",
	warningBellOne: "7:45",
	warningBellOneName: "10 min bell",
	warningBellTwo: "7:52",
	warningBellTwoName: "3 min bell",
	bell: "7:55",
	end: "8:50",
	enabled: true,
};

var normal2 = {
	name: "Period 2",
	beginning: "8:50",
	warningBellOne: 0,
	warningBellTwo: "8:54",
	warningBellTwoName: "3 min bell",
	bell: "8:57",
	end: "9:52",
	enabled: true,
};

var normal3 = {
	name: "Period 3",
	beginning: "9:52",
	warningBellOne: "10:02",
	warningBellOneName: "break ends",
	warningBellTwo: "10:06",
	warningBellTwoName: "3 min bell",
	bell: "10:09",
	end: "11:09",
	enabled: true,
};

var normal4 = {
	name: "Period 4",
	beginning: "11:09",
	warningBellOne: 0,
	warningBellTwo: "11:13",
	warningBellTwoName: "3 min bell",
	bell: "11:16",
	end: "12:11",
	enabled: true,
};

var normal5 = {
	name: "Period 5",
	beginning: "12:11",
	warningBellOne: "12:41",
	warningBellOneName: "lunch ends",
	warningBellTwo: "12:45",
	warningBellTwoName: "3 min bell",
	bell: "12:48",
	end: "13:43",
	enabled: true,
};

var normal6 = {
	name: "Period 6",
	beginning: "13:43",
	warningBellOne: 0,
	warningBellTwo: "13:47",
	warningBellTwoName: "3 min bell",
	bell: "13:50",
	end: "14:45",
	enabled: true,
};

var normalAfterSchool = {
	name: "After School",
	beginning: "14:45",
	warningBellOne: 0,
	warningBellTwo: 0,
	bell: 0,
	end: 0,
	enabled: true,
};

var normalSchedule = [
	normal0,
	normal1,
	normal2,
	normal3,
	normal4,
	normal5,
	normal6,
	normalAfterSchool
	];

var monday0 = {
	name: "Period 0",
	beginning: "0:01",
	warningBellOne: "6:40",
	warningBellOneName: "10 min bell",
	warningBellTwo: "6:47",
	warningBellTwoName: "3 min bell",
	bell: "6:50",
	end: "7:30",
	enabled: false,
};

var monday1 = {
	name: "Period 1",
	beginning: "7:30",
	warningBellOne: "8:15",
	warningBellOneName: "10 min bell",
	warningBellTwo: "8:22",
	warningBellTwoName: "3 min bell",
	bell: "8:25",
	end: "9:15",
	enabled: true,
};

var monday2 = {
	name: "Period 2",
	beginning: "9:15",
	warningBellOne: 0,
	warningBellTwo: "9:19",
	warningBellTwoName: "3 min bell",
	bell: "9:22",
	end: "10:12",
	enabled: true,
};

var monday3 = {
	name: "Period 3",
	beginning: "10:12",
	warningBellOne: "10:22",
	warningBellOneName: "break ends",
	warningBellTwo: "10:26",
	warningBellTwoName: "3 min bell",
	bell: "10:29",
	end: "11:24",
	enabled: true,
};

var monday4 = {
	name: "Period 4",
	beginning: "11:24",
	warningBellOne: 0,
	warningBellTwo: "11:28",
	warningBellTwoName: "3 min bell",
	bell: "11:31",
	end: "12:21",
	enabled: true,
};

var monday5 = {
	name: "Period 5",
	beginning: "12:21",
	warningBellOne: "12:51",
	warningBellOneName: "lunch ends",
	warningBellTwo: "12:55",
	warningBellTwoName: "3 min bell",
	bell: "12:58",
	end: "13:48",
	enabled: true,
};

var monday6 = {
	name: "Period 6",
	beginning: "13:48",
	warningBellOne: 0,
	warningBellTwo: "13:52",
	warningBellTwoName: "3 min bell",
	bell: "13:55",
	end: "14:45",
	enabled: true,
};

var mondayAfterSchool = {
	name: "After School",
	beginning: "14:45",
	warningBellOne: 0,
	warningBellTwo: 0,
	bell: 0,
	end: 0,
	enabled: true,
};

var mondaySchedule = [
	monday0,
	monday1,
	monday2,
	monday3,
	monday4,
	monday5,
	monday6,
	mondayAfterSchool
	];
/*
var assemblyA0 = {
	name: "Period 0",
	beginning: "0:01",
	warningBellOne: "6:40",
	warningBellOneName: "10 min bell",
	warningBellTwo: "6:47",
	warningBellTwoName: "3 min bell",
	bell: "6:50",
	end: "7:45",
	enabled: false,
};

var assemblyA1 = {
	name: "Period 1",
	beginning: "7:45",
	warningBellOne: "7:45",
	warningBellOneName: "10 min bell",
	warningBellTwo: "7:52",
	warningBellTwoName: "3 min bell",
	bell: "7:55",
	end: "8:44",
	enabled: true,
};

var assemblyAAssembly = {
	name: "Assembly A",
	beginning: "8:44",
	warningBellOne: 0,
	warningBellTwo: "8:48",
	warningBellTwoName: "3 min bell",
	bell: "8:51",
	end: "9:24",
	enabled: true,
};

var assemblyA2 = {
	name: "Period 2",
	beginning: "9:24",
	warningBellOne: 0,
	warningBellTwo: "9:29",
	warningBellTwoName: "3 min bell",
	bell: "9:32",
	end: "10:21",
	enabled: true,
};

var assemblyA3 = {
	name: "Period 3",
	beginning: "10:21",
	warningBellOne: "10:31",
	warningBellOneName: "break ends",
	warningBellTwo: "10:35",
	warningBellTwoName: "3 min bell",
	bell: "10:38",
	end: "11:27",
	enabled: true,
};

var assemblyA4 = {
	name: "Period 4",
	beginning: "11:27",
	warningBellOne: 0,
	warningBellTwo: "11:31",
	warningBellTwoName: "3 min bell",
	bell: "11:34",
	end: "12:23",
	enabled: true,
};

var assemblyA5 = {
	name: "Period 5",
	beginning: "12:23",
	warningBellOne: "12:53",
	warningBellOneName: "lunch ends",
	warningBellTwo: "12:57",
	warningBellTwoName: "3 min bell",
	bell: "13:00",
	end: "13:49",
	enabled: true,
};

var assemblyA6 = {
	name: "Period 6",
	beginning: "13:49",
	warningBellOne: 0,
	warningBellTwo: "13:53",
	warningBellTwoName: "3 min bell",
	bell: "13:56",
	end: "14:45",
	enabled: true,
};

var assemblyAAfterSchool = {
	name: "Period 6",
	beginning: "13:49",
	warningBellOne: 0,
	warningBellTwo: "13:53",
	warningBellTwoName: "3 min bell",
	bell: "13:56",
	end: "14:45",
	enabled: true,
};

var assemblyA = [
	assemblyA0,
	assemblyA1,
	assemblyAAssembly,
	assemblyA2,
	assemblyA3,
	assemblyA4,
	assemblyA5,
	assemblyA6,
	assemblyAAfterSchool
	];

var assemblyB0 = {
	name: "Period 0",
	beginning: "0:01",
	warningBellOne: 0,
	warningBellTwo: "6:47",
	warningBellTwoName: "3 min bell",
	bell: "6:50",
	end: "7:45",
	enabled: false,
};

var assemblyB1 = {
	name: "Period 1",
	beginning: "7:45",
	warningBellOne: "7:45",
	warningBellOneName: "10 min bell",
	warningBellTwo: "7:52",
	warningBellTwoName: "3 min bell",
	bell: "7:55",
	end: "8:44",
	enabled: true,
};

var assemblyB2 = {
	name: "Period 2",
	beginning: "8:44",
	warningBellOne: 0,
	warningBellTwo: "8:48",
	warningBellTwoName: "3 min bell",
	bell: "8:51",
	end: "9:40",
	enabled: true,
};

var assemblyBAssembly = {
	name: "Assembly B",
	beginning: "9:40",
	warningBellOne: 0,
	warningBellTwo: "9:44",
	warningBellTwoName: "3 min bell",
	bell: "9:47",
	end: "10:21",
	enabled: true,
};

var assemblyB3 = {
	name: "Period 3",
	beginning: "10:21",
	warningBellOne: "10:31",
	warningBellOneName: "break ends",
	warningBellTwo: "10:35",
	warningBellTwoName: "3 min bell",
	bell: "10:38",
	end: "11:27",
	enabled: true,
};

var assemblyB4 = {
	name: "Period 4",
	beginning: "11:27",
	warningBellOne: 0,
	warningBellTwo: "11:31",
	warningBellTwoName: "3 min bell",
	bell: "11:34",
	end: "12:23",
	enabled: true,
};

var assemblyB5 = {
	name: "Period 5",
	beginning: "12:23",
	warningBellOne: "12:53",
	warningBellOneName: "lunch ends",
	warningBellTwo: "12:57",
	warningBellTwoName: "3 min bell",
	bell: "13:00",
	end: "13:49",
	enabled: true,
};

var assemblyB6 = {
	name: "Period 6",
	beginning: "13:49",
	warningBellOne: 0,
	warningBellTwo: "13:53",
	warningBellTwoName: "3 min bell",
	bell: "13:56",
	end: "14:45",
	enabled: true,
};

var assemblyBAfterSchool = {
	name: "Period 6",
	beginning: "13:49",
	warningBellOne: 0,
	warningBellTwo: "13:53",
	warningBellTwoName: "3 min bell",
	bell: "13:56",
	end: "14:45",
	enabled: true,
};

var assemblyB = [
	assemblyB0,
	assemblyB1,
	assemblyB2,
	assemblyBAssembly,
	assemblyB3,
	assemblyB4,
	assemblyB5,
	assemblyB6,
	assemblyBAfterSchool
	];
