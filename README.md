# CI/CD Sample
This is meant to kickstart anyone who wants to setup a ci/cd pipline. It is a simple project containing the basic nestjs source code.

## Steps
1. Create your application.
2. Ensure you have a build script in your package.json as shown below
```json
{
  "name": "ci-cd-sample",
  "version": "0.0.1",
  "scripts": {
    "build": "nest build",
    "start:prod": "node dist/main"
  }
}
```
>> In the example above the build script is "nest build" run with by the command "build".
4. Ensure that the package.json also has a run script that is able to run your built code.
>> In the example above it is represented by the "node dist/main" which is run by the "start:prod" command.
You can manually test the steps above to see if they are working correctly then proceed with the rest. It is important
to **test at every step** so that you are certain that the program runs before moving to later steps. 
5. Create a Dockerfile that incorporates your build and run step as shown below. Also ensure that you have a .dockerignore file
```Dockerfile
FROM node:16.14

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE $PORT

RUN pnpm run build
CMD pnpm run start:prod
```
>> Our build step is run then our run step is run as shown in the last two lines

>>You should test whether docker file is able to build correctly. Example is as shown below

This builds a docker image using the Dockerfile in the current folder.
```bash
  docker build ./
  
```  
This runs the docker image an example is shown below of how it would look like with the correct values.
```bash
  docker run --env-file=<environment-variable-file-name>.env -p <internal_docker_port>:<machine_port> <docker_image_id> 

  docker run --env-file=.env -p 5000:5000 e31f4c2694445e8b3d38a09ca8847a7ecb2c956fc10fbaf3932ec9a71df9177d
```
6. If everything works upto that point then you can proceed to build 