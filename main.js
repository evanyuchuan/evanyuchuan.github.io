@@ -0,0 +1,358 @@
var schedule;
var ahead = document.getElementById('ahead');
var aheadValue;

window.onload = init();

function init()
{
	schedule = getTodaysSchedule();
	getAheadValueFromCookie();
	interval = setInterval(main, 100);
	checkForUpdate();
}

function checkForUpdate()
{
	window.applicationCache.addEventListener('updateready', updateApplication);
}

function updateApplication(event)
{
	if (window.applicationCache.status != 4)
	{
		return;
	}

	window.applicationCache.removeEventListener('updateready', updateApplication);
	window.applicationCache.swapCache();
	window.location.reload();
}

function main()
{
	displaySchoolTime();
	displayCurrentPeriod();
	displayCountdowns();
}

function getAheadValueFromCookie()
{
	ahead.value = 0;

	if (getCookie("ahead") !== null && !isNaN(getCookie("ahead"))) // run if the cookie exists and it's a number (not a NaN)
	{
		ahead.value = getCookie("ahead");
	}

	aheadValue = parseFloat(ahead.value);
}

function setAheadValue()
{
	aheadValue = parseFloat(ahead.value);
	setCookie("ahead", aheadValue, 9999);
}

function getSchoolTime()
{
	var milisecondsAhead = aheadValue * 1000;

	if (isNaN(milisecondsAhead))
	{
		milisecondsAhead = 0;
	}

	var deviceTimeObject = new Date();
	var schoolTimeInMs = deviceTimeObject.getTime() + milisecondsAhead;
	var schoolTimeObject = new Date(schoolTimeInMs);

	return schoolTimeObject;
}

function displaySchoolTime()
{
	var schoolTimeObject = getSchoolTime();
	var schoolTimeFormatted = formatTime(schoolTimeObject);
	var clock = document.getElementById('clock');
	clock.innerHTML = schoolTimeFormatted;
}

function getTodaysSchedule()
{
	var schoolTimeObject = getSchoolTime();
	var weekday = schoolTimeObject.getDay();
	//var month = schoolTimeObject.getMonth();
	//var day = schoolTimeObject.getDate();
	
	if (weekday === 1)
	{
		return mondaySchedule;
	}

	else
	{
		return normalSchedule;
	}
}

function getCurrentPeriod()
{
	var schoolTimeObject = getSchoolTime();
	var periodBeginnings = [];
	var currentPeriod = schedule[schedule.length - 1];

	for (i = 0; i < schedule.length; i++) // goes through all variables in the schdule array
	{
		var periodBeginningString = schedule[i].beginning; // get all the period beginnings in their string format
		var periodBeginningObject = convertStringToDateObject(periodBeginningString); // convert all the strings into date objects
		periodBeginnings.push(periodBeginningObject); // add each date object to the end of the list of period beginnings
		periodBeginnings[i] = schoolTimeObject - periodBeginnings[i]; // convert all the variables into how much in ms the current time is after these beginnings

		if (periodBeginnings[i] < 0 && schedule[i-1].enabled) // find the first negative result, and return the previous one, which is the period beginning that is before and closest to the current time. only check the period beginnings that are enabled
		{
			currentPeriod = schedule[i-1];
			break; // stop the loop once the current period is found
		}
	}

	return currentPeriod;
}

function displayCurrentPeriod()
{
	var currentPeriod = getCurrentPeriod();
	var period = document.getElementById('period');
	period.innerHTML = currentPeriod.name;
}

function displayCountdowns()
{
	var currentPeriod = getCurrentPeriod();

	var warning_1 = document.getElementById('warning_1');
	var warning_2 = document.getElementById('warning_2');
	var beginning = document.getElementById('beginning');
	var end = document.getElementById('end');

	if (currentPeriod.warningBellOne !== 0)
	{
		if (isBefore(currentPeriod.warningBellOne))
		{
			warning_1.innerHTML = timeUntil(convertStringToDateObject(currentPeriod.warningBellOne)) + " until " + currentPeriod.warningBellOneName;
		}

		else if (isBefore(currentPeriod.bell))
		{
			warning_1.innerHTML = currentPeriod.warningBellOneName + " already rang";
		}

		else
		{
			warning_1.innerHTML = "";
		}
	}

	else
	{
		warning_1.innerHTML = "";
	}



	if (currentPeriod.warningBellTwo !== 0)
	{
		if (isBefore(currentPeriod.warningBellTwo))
		{
			warning_2.innerHTML = timeUntil(convertStringToDateObject(currentPeriod.warningBellTwo)) + " until " + currentPeriod.warningBellTwoName;
		}

		else if (isBefore(currentPeriod.bell))
		{
			warning_2.innerHTML = currentPeriod.warningBellTwoName + " already rang";
		}

		else
		{
			warning_2.innerHTML = "";
		}
	}

	else
	{
		warning_2.innerHTML = "";
	}



	if (currentPeriod.bell !== 0)
	{
		if (isBefore(currentPeriod.bell))
		{
			beginning.innerHTML = timeUntil(convertStringToDateObject(currentPeriod.bell)) + " until period starts";
			end.innerHTML = "";
		}

		else
		{
			beginning.innerHTML = "";
			end.innerHTML = timeUntil(convertStringToDateObject(currentPeriod.end)) + " until period ends";
		}
	}

	else
	{
		beginning.innerHTML = "";
		end.innerHTML = "";
	}
}

function timeUntil(futureTime)
{
	var schoolTimeObject = getSchoolTime();
	var differenceInMs = futureTime - schoolTimeObject;
	var differenceFormatted = formatMs(differenceInMs);

	return differenceFormatted;
}

function isBefore(time)
{
	var schoolTimeObject = getSchoolTime();

	if (convertStringToDateObject(time) > schoolTimeObject)
	{
		return true;
	}

	else
	{
		return false;
	}
}

function formatMs(ms)
{
	var seconds = Math.round(ms / 1000);
	var hour = 0;
	var minute = 0;
	var second = 0;

	if (seconds >= 3600)
	{
		hour = Math.floor(seconds / 3600);
		seconds = seconds - hour * 3600;
	}

	if (seconds >= 60)
	{
		minute = Math.floor(seconds / 60);
		seconds = seconds - minute * 60;
	}

	second = seconds;

	if (hour !== 0)
	{
		return hour + ":" + addZero(minute) + ":" + addZero(second);
	}

	else
	{
		return addZero(minute) + ":" + addZero(second);
	}
}

function convertStringToDateObject(string)
{
	var schoolTimeObject = getSchoolTime();
	schoolTimeObject.setSeconds(0);

	var positionOfColon = string.search(":");
	schoolTimeObject.setHours(string.substr(0, positionOfColon));
	schoolTimeObject.setMinutes(string.substr(positionOfColon + 1, 2));

	return schoolTimeObject;
}

function formatTime(dateObject)
{
	hour = dateObject.getHours();
	minute = dateObject.getMinutes();
	second = dateObject.getSeconds();
	timeString = twelveHourClock(hour) + ":" + addZero(minute) + ":" + addZero(second);

	return timeString;
}

function addZero(time)
{
	if (time < 10)
	{
		return "0" + time;
	}

	else
	{
		return time;
	}
}

function twelveHourClock(hour)
{
	if (hour > 12)
	{
		return hour - 12;
	}

	else
	{
		return hour;
	}
}

function toggleSettings()
{
	var inputs = document.getElementById('inputs');

	if (inputs.style.getPropertyValue('display') === null || inputs.style.getPropertyValue('display') == 'none')
	{
		inputs.style.setProperty('display', 'block');
	}

	else
	{
		inputs.style.setProperty('display', 'none');
	}
}

function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++)
	{
        var c = ca[i];

        while (c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}

        if (c.indexOf(name) != -1)
		{
			return c.substring(name.length, c.length);
		}
    }

    return "";
}
