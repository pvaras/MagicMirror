/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
    address: "localhost",
    port: 8080,
    basePath: "/",
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",
    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Added "DEBUG" for more logging
    timeFormat: 12,
    units: "imperial",
    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left",
            config: {
				timezone: "America/New_York",
				displaySeconds: "false",
				showPeriodUpper: "false",
				showWeek: "true",
				displayType: "both"
					}
        },
        {
            module: "calendar",
            header: "US Holidays",
            position: "top_left",
            config: {
                calendars: [
                    {
                        fetchInterval: 7 * 24 * 60 * 60 * 1000,
                        symbol: "calendar-check",
                        url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
                    }
                ]
            }
        },
        {
            module: 'MMM-OnThisDay',
            position: 'bottom_right',                     
            config: {
                // See below for configurable options, this is optional
					}
        
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: 'MMM-connection-status',
            header: "Internet Connection",
            position: 'top_left',
            config: {}
        },
        {
            module: "MMM-network-signal",
            position: "bottom_right",
            config: {
                // Add configuration options if any
				}

        },
	    {
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				units: "imperial",
				lat:  "41.5048",
				lon:  "-73.9696",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "3b2b6884991b8cfabefeba8edd700b14"

			}
        },
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				units: "imperial",
				lat:  "41.5048",
				lon:  "-73.9696",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "3b2b6884991b8cfabefeba8edd700b14"
				
			},
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

