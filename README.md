# VancouverSpecialRecognition

This repository holds code for the website behind my final thesis. The website is very easily run via Docker Compose (also found in the run file):

> GOOGLE_MAPS_API_KEY=$GOOGLE_MAPS_API_KEY POSTGRES_USER=myuser POSTGRES_DB=mydb POSTGRES_PASSWORD=password docker-compose -f docker-compose-dep.yml up --build

The repsitory used to train the faster RCNN algorithm can be found [here](https://github.com/jwyang/faster-rcnn.pytorch). I also trained [Joseph Redmon's YoloV3 algorithm](https://github.com/pjreddie/darknet), which is what is used on the website.

The final report will be added when the final draft is submitted to my university and is accepted.
