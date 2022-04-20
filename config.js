modules: [
    {
		module: "alert",
	},
	{
		module: "clock",
		position: "top_right"
	},
	{
		module: 'MMM-CalendarExt2',
		config: {
			roatateInterval: 0,
			updateInterval: 1000*60*15,
			calendars : [
			{
				url: "MyFamilyCalendarURL",
			},
			{
				url: "https://www.google.com/calendar/ical/en.usa%23holiday@group.v.calendar.google.com/public/basic.ics",
			},
			],
		views: [
			{
				name: "view1",
				mode: "month",
				maxItems: 1000,
				hideOverflow: false,
				slotMaxHeight: 100px,
				monthFormat: "MMMM YYYY",
				timeFormat: "h:mm A",
				position: "top_left",
			},
			],
		scenes: [
			{
				name: "DEFAULT",
			},
			],
		},
	},
	{
		module: "weather",
		position: "top_right",
		config: {
			weatherProvider: "openweathermap",
			type: "current",
			showHumidity: true,
			location: "Walker, US",
			locationID: "5013924", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
			apiKey: "Replace with your own free api from openweathermap.org"
		}
	},
	{
		module: "weather",
		position: "top_right",
		header: "Weather Forecast",
		config: {
			weatherProvider: "openweathermap",
            type: "forecast",
            colored: false,
            fade: false,
            ignoreToday: true,
            location: "Walker, US",
            locationID: "5013924", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
            apiKey: "replace with your own free api from openweathermap.org"
            }
    },
    {
        module: "newsfeed",
        position: "bottom_bar",
        config: {
            feeds: [
                {
                    title: "New York Times",
                    url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                },
                {
                    title: "NPR",
                    url: "https://feeds.npr.org/1001/rss.xml"
                },
                {
                    title: "WOOD TV 8",
                    url: "https://www.woodtv.com/feed/"
                },
            ],
            showSourceTitle: true,
            showPublishDate: true,
            broadcastNewsFeeds: true,
            broadcastNewsUpdates: true,
            ignoreOldItems: true,
            ignoreOlderThan: 604800000
        }
    },
    {
		module: 'MMM-MicrosoftToDo',
		position: 'top_right',      // This can be any of the regions. Best results in left or right regions.
		header: 'groceries', // This is optional
		config: {
			oauth2ClientSecret: 'YourSecretID',
			oauth2RefreshToken: 'yourRefreshToken',
			oauth2ClientId: 'yourClientID',
			listName: 'groceries', // optional parameter: if not specified displays tasks from default "Tasks" list, if specified will look for a task list with the specified name (exact spelling), don't specify if you want to make use of the>      refreshSeconds: 60, // optional parameter: every how many seconds should the list be updated from the remote service, default value is 60
		}
	},
        ]
};
