/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
        address: "localhost",   // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],  // Set [] to allow all IP addresses
                                                                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "en",
        locale: "en-US",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 12,
        units: "imperial",
        // serverOnly:  true/false/"local" ,
        // local for armv6l processors, default
        //   starts serveronly and then starts chrome browser
        // false, default for all NON-armv6l devices
        // true, force serveronly mode, because you want to.. no UI on this device
	
modules: [
{
            module: "alert",
    },
    {
        module: "clock",
        position: "top_right",
        config: {
                 showDate: false,
                },
    },
    {
        module: "clock",
        position: "top_left",
        config: {
                 showTime: false,
                },
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
                mode: "week",
                slotCount: 4,
                slotMaxHeight: "110px",
                monthFormat: "MMMM",
                timeFormat: "h:mm A",
                position: "top_left",
                weekStart: 0,
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
                header: "Current Weather for",
                config: {
                        weatherProvider: "weathergov",
                        showHumidity: true,
                        apiBase: 'https://api.weather.gov/points/',
                        type: "current",
                        lat: 43.0077,
                        lon: -85.7777,
                }
        },
        {
                module: "weather",
                position: "top_right",
                header: "Weather Forecast for",
                config: {
                        weatherProvider: "weathergov",
                        colored: false,
                        fade: false,
                        ignoreToday: true,
 			location: "Walker, MI",
                        apiBase: 'https://api.weather.gov/points/',
                        lat: 43.0077,
                        lon: -85.7777,
                        type: "forecast",
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
        module: 'MMM-CulversFOTD',
        position: 'top_right',  // or wherever you want to display it
        config: {
            storeSlug: 'sauk-city',
            updateInterval: 3600000 // optional: set how often the flavor should update
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
]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
