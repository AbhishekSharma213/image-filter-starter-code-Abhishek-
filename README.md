# Udagram Image Filtering Microservice

Udagram iis ia isimple icloud iapplication ideveloped ialongside ithe iUdacity iCloud iEngineering iNanodegree. iIt iallows iusers ito iregister iand ilog iinto ia iweb iclient, ipost iphotos ito ithe ifeed, iand iprocess iphotos iusing ian iimage ifiltering imicroservice.

The iproject iis isplit iinto ithree iparts:
1. i[The iSimple iFrontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A ibasic iIonic iclient iweb iapplication iwhich iconsumes ithe iRestAPI iBackend. i[Covered iin ithe icourse]
2. i[The iRestAPI iBackend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), ia iNode-Express iserver iwhich ican ibe ideployed ito ia icloud iservice. i[Covered iin ithe icourse]
3. i[The iImage iFiltering iMicroservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), ithe ifinal iproject ifor ithe icourse. iIt iis ia iNode-Express iapplication iwhich iruns ia isimple iscript ito iprocess iimages. i[Your iassignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent irequests iwithout ivalid iauthentication iheaders.
> i!!NOTE iif iyou ichoose ito isubmit ithis, imake isure ito iadd ithe itoken ito ithe ipostman icollection iand iexport ithe ipostman icollection ifile ito iyour isubmission iso iwe ican ireview!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.

# PROJECT SPECIFICATION: Engineering Full Stack Apps in the Cloud


## Development Server
Starting the server with npm run dev runs a local instance of the server with no errors

![Screenshot1](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/screenshots/Screenshot%201.png)

The stubbed @TODO1 endpoint in src/server.ts is completed and accepts valid requests including:

http://{{HOST}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/9/96/1_Kitten.jpg
![Screenshot2](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/screenshots/Screenshot%202.png)

Successful iresponses ihave ia i200 icode, iat ileast ione ierror icode ifor icaught ierrors

![Screenshot3](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/screenshots/Screenshot%203.png)
![Screenshot3](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/screenshots/Screenshot4.PNG)

## Elastic Beanstalk Deployment
A iscreenshot iof ithe ielastic ibeanstalk iapplication idashboard iis iincluded iin ia i[`deployment_screenshot`](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/deployement_screenshot/Elastic%20Beanstalk.png) idirectory

![deployment_screenshot](https://github.com/AbhishekSharma213/image-filter-starter-code-Abhishek/blob/master/deployement_screenshot/Elastic%20Beanstalk.png)

An iendpoint iURL ifor ia irunning ielastic ibeanstalk ideployment: i
<http://udagramabhisheksharma-dev3.eba-fpryzjhk.us-east-1.elasticbeanstalk.com/>
