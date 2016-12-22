### Install dependencies and modules:
````
npm install
````

### Start the server:
````
npm start
````

Open your browser and navigate to http://localhost:8000
Click on the "View 2" link and a dummy slider component will be initialized.

### How it works?
- The angular app has a dependency of cms.components.slider
- The view2.html file contains a reference to a custom directive:
````
<cms-slider code="home"></cms-slider>
````
- Within the "components" folder, we have the "components.module.js", which defines the componentService service. 
- The service calls the backend, by passing two parameters - component type and component code (kind of id).
- Within the "components" folder, we have our custom cms components. Each one of them is a module, which depends on the main components.module, like 
````
angular.module('cms.components.slider', ['cms.components'])
````

and then we have our custom directive - cmsSlider. It obviously knows that the component type is "slider", it also reads the "code" attribute and is able to perform a call to the backend, to retreive the component data and to use its own template to build the final result.


