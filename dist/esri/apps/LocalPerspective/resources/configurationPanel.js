{
   "configurationSettings": [
   {
       "category":"<b>Configure Maptiks</b>",
       "fields":[  
         {
           "type": "string",
           "fieldName": "maptiks_trackcode",
           "label": "Maptiks Trackcode",
           "tooltip": "Enter your Maptiks Tracking Code that you got from analytics.maptiks.com"
         },
         {
           "type": "string",
           "fieldName": "maptiks_id",
           "label": "Maptiks Map Name",
           "tooltip": "Enter a name for your map"
         },
         {
           "type": "paragraph",
           "value": "If you require a tracking code, you can get one <a target=\"_blank\" href=\"https://analytics.maptiks.com/login/arcgis/?next=/\">here.</a>"
         }
       ]
   }, {  
      "category": "<b>General</b>",
      "fields": [{
         "type": "webmap"
      }, {
         "type": "string",
         "fieldName": "title",
         "label": "Title",
         "tooltip": "Title",
         "placeHolder": "Title"
      }, {
         "type": "appproxies",
         "serviceProxies": [{
            "title": "Route",
            "name": "route"
         }]
      }]
   }, {
      "category": "<b>Theme</b>",
      "fields": [{
         "type": "subcategory",
         "label": "Colors"
      }, {
         "type": "paragraph",
         "value": "The color theme for this app can be defined in a few ways: Use the color picker to select a global color for the app; or check 'Cycle colors for layers' to show a different color for each of the layers in the map.  This option will cycle through a set of predefined colors when you scroll through the different operational layers in the map."
      }, {
         "type": "boolean",
         "fieldName": "cycleColors",
         "label": "Cycle colors for layers (uncheck this if your organization has configured a shared theme.)",
         "tooltip": "Cycle colors for layers"
      }, {
         "type": "color",
         "fieldName": "color",
         "label": "Color",
         "tooltip": "Color",
         "sharedThemeProperty": "header.background"
      }, {
         "type": "string",
         "fieldName": "logo",
         "label": "Logo URL",
         "tooltip": "Logo",
         "placeHolder": "Logo URL",
         "sharedThemeProperty": "logo.small"
      }]
   }, {
      "category": "<b>Options</b>",
      "fields": [{
         "type": "boolean",
         "fieldName": "showDirections",
         "label": "Enable routing directions",
         "tooltip": "Enable routing directions"
      }, {
         "type": "subcategory",
         "label": "Data Options"
      }, {
         "type": "boolean",
         "fieldName": "showDemographics",
         "label": "Show US demographics",
         "tooltip": "Show US demographics"
      }, {
         "type": "boolean",
         "fieldName": "showLifestyle",
         "label": "Show US lifestyle information",
         "tooltip": "Show US lifestyle information"
      }, {
         "type": "boolean",
         "fieldName": "showWeather",
         "label": "Show weather information",
         "tooltip": "Show weather information"
      }, {
         "type": "string",
         "fieldName": "weatherUnits",
         "tooltip": "Weather units",
         "label": "Weather units",
         "options": [{
            "label": "F",
            "value": "F"
         }, {
            "label": "C",
            "value": "C"
         }]
      }, {
         "type": "subcategory",
         "label": "Buffer Settings"
      }, {
         "type": "boolean",
         "fieldName": "defaultToCenter",
         "label": "Use map center as default location",
         "tooltip": "Use map center as default location"
      }, {
         "type": "string",
         "fieldName": "distanceUnits",
         "tooltip": "Distance units",
         "label": "Distance units",
         "options": [{
            "label": "Miles",
            "value": "miles"
         }, {
            "label": "Kilometers",
            "value": "kilometers"
         }, {
            "label": "Meters",
            "value": "meters"
         }]
      }, {
         "type": "number",
         "fieldName": "maxDistance",
         "label": "Maximum distance",
         "tooltip": "Maximum distance",
         "constraints": {
            "min": 10,
            "places": 0
         }
      }, {
         "type": "number",
         "fieldName": "defaultDistance",
         "label": "Default distance",
         "tooltip": "Default distance",
         "constraints": {
            "min": 1,
            "places": 0
         }
      }]
   }],
   "values": {
      "title": "Local Perspective",
      "logo": "images/logo.png",
      "color": "#80ab00",
      "cycleColors": true,
      "defaultToCenter": true,
      "showDemograpics": true,
      "showLifestyle": true,
      "showWeather": true,
      "weatherUnits": "F",
      "showDirections": false,
      "distanceUnits": "miles",
      "maxDistance": 10,
      "defaultDistance": 3
   }
}