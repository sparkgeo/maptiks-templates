[FinderPreview]: http://www.arcgis.com/apps/Solutions/s2.html?app=apps2/Finder
[FinderThumbnail]: local-government-online-apps.png "Preview the Local Government Online App using the 'Finder' configuration"
[FEFPreview]: http://www.arcgis.com/apps/Solutions/s2.html?app=apps2/FindEditFilter
[FEFThumbnail]: local-government-online-apps2.png "Preview the Local Government Online App using the 'Find, Edit, and Filter' configuration"

[Getting Started with Finder]: doc/GettingStartedWithFinder.md
[Getting Started with Find, Edit, and Filter]: doc/GettingStartedWithFindEditFilter.md
[FAQ]: doc/FAQ.md
[Background information about web application templates]: http://resources.arcgis.com/en/help/arcgisonline/index.html#/About_web_application_templates/010q000000nt000000/
[Esri's ArcGIS Online Help]: http://resources.arcgis.com/en/help/arcgisonline/

[ArcGIS for Local Government maps and apps]: http://solutions.arcgis.com/local-government/
[Local Government GitHub repositories]: http://esri.github.io/#Local-Government
[LGInfoModel]: http://www.arcgis.com/home/item.html?id=ae175b36c4154dda987127dff879350d

[Esri's ArcGIS API for JavaScript]: http://help.arcgis.com/en/webapi/javascript/arcgis/
[supported browsers]: http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#supported_browsers
[ArcGISDesktop]: http://www.esri.com/software/arcgis/arcgis-for-desktop
[ArcGISServer]: http://www.esri.com/software/arcgis/arcgisserver

[New to Github? Get started here.]: http://htmlpreview.github.com/?https://github.com/Esri/esri.github.com/blob/master/help/esri-getting-to-know-github.html
[Finder help]: http://solutions.arcgis.com/local-government/help/finder/
[FEF help]: http://solutions.arcgis.com/local-government/help/find-edit-filter/
[guidelines for contributing]: https://github.com/esri/contributing
[LICENSE.txt]: LICENSE.txt

# local-government-online-apps

Two applications use the code in this repository. Finder is a configurable web app template that searches and queries attributes of feature layers. Find, Edit, and Filter also has this functionality, with the addition of filtering and editing features. These apps are two configurations of the code found in this repository.

[![Image of Local Government Online App using the 'Finder' configuration][FinderThumbnail]][FinderPreview] [![Image of Local Government Online App using the 'Find, Edit, and Filter' configuration][FEFThumbnail]][FEFPreview]

## Features

* Search for features using location or feature attributes
* Include additional values in the list search results
* Use the filter widget to restrict visible features to those with a specific value in a field - for example view only features on the 3rd floor of a building by filtering on the value '3' in the floor number field.
* Use the edit widget to edit and create features. New features with the filter field take on the current filter value by default - for example, if the filter is currently set to show only items on the 3rd floor, and new features will have their floor value set to 3 as well.

## Instructions

### General Help
Preview the apps:
* Finder (formerly called Parcel Viewer) *[preview the application][FinderPreview]*
* Find, Edit, and Filter *[preview the application][FEFPreview]*
* [New to Github? Get started here.][]
* [Want more info on Finder? Check out the documentation.][Finder help]
* [Want more info on Find, Edit, and Filter? Check out the documentation.][FEF help]

### Deploying

1. To deploy this application, download the template from Portal/ArcGIS Online and unzip it.
2. Copy the unzipped folder containing the web app template files to your web server. You can rename the folder to change the URL through which users will access the application. By default the URL to Finder will be `http://<Your Web Server>/<app folder name>/s2.html?app=apps2/Finder` and to Find, Edit, and Filter will be `http://<Your Web Server>/<app folder name>/s2.html?app=apps2/FindEditFilter`.
3. Change the sharing host, found in defaults.js inside the config folder for the application, to the sharing URL for ArcGIS Online or Portal. For ArcGIS Online users, keep the default value of www.arcgis.com or specify the name of your organization.
  - ArcGIS Online Example:  `"sharinghost": location.protocol + "//" + “<your organization name>.maps.arcgis.com`
  - Portal Example where `arcgis` is the name of the Web Adaptor: `"sharinghost": location.protocol + "//" + "webadaptor.domain.com/arcgis"`
4. If you are using Portal or a local install of the ArcGIS API for JavaScript, change all references to the ArcGIS API for JavaScript in index.html to refer to your local copy of the API. Search for the references containing `"//js.arcgis.com/3.15"` and replace this portion of the reference with the url to your local install.
  - For example: `"//webadaptor.domain.com/arcgis/jsapi/jsapi"` where `arcgis` is the name of your Web Adaptor.
5. Copy an item ID from Portal/ArcGIS Online and replace the default ID in the application’s configuration file - either Finder.json or FindEditFilter.json in the apps2 folder.
6. Complete the configuration of the application using the help ([Finder][Finder help] or [Find, Edit, and Filter][FEF help]) as a reference.
You can now run the application on your web server or configure the application further.

> **Note:** If your application edits features in a feature service, contains secure services or web maps that aren't shared publicly, or generate requests that exceed 200 characters, you may need to set up and use a proxy page. Common situations where you may exceed the URL length are using complex polygons as input to a task or specifying a spatial reference using well-known text (WKT). For details on installing and configuring a proxy page see [Using the proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html). If you do not have an Internet connection, you will need to access and deploy the ArcGIS API for JavaScript documentation from [developers.arcgis.com](https://developers.arcgis.com/).


## Requirements

### Experience

* Authoring maps
* Configuring ArcGIS Online/Portal web app templates

### Software
* ArcGIS Online subscription or ArcGIS Portal

### Browser Compatibility
* Finder is optimized for display on smartphones, desktops and tablet devices using [all browsers supported by ArcGIS Online][supported browsers].
* Find, Edit, and Filter is optimized for display on desktops and tablet devices using [all browsers supported by ArcGIS Online][supported browsers].

## Resources

Additional documentation about these apps:
* [FAQ][]

Learn more about Esri's [ArcGIS for Local Government maps and apps][].

Show me a list of other [Local Government GitHub repositories][].

This application uses the 3.15 version of [Esri's ArcGIS API for JavaScript][]; see the site for concepts, samples, and a reference for using the API to create mapping web sites.

[Esri's ArcGIS Online Help][] site describes how to create web maps and web map applications in the ArcGIS Online ecosystem.

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing][].

## Licensing

Copyright 2013 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE.txt][] file.

[](Esri Tags: ArcGISSolutions Local-Government Local Government Online Apps Parcel Viewer)
[](Esri Language: JavaScript)
