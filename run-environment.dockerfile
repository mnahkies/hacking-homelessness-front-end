FROM 316662181545.dkr.ecr.eu-central-1.amazonaws.com/bases/aws-docker-base

ADD . /opt/nahkies/tournament-manager

ENV PORT 80
EXPOSE 80

WORKDIR /opt/nahkies/tournament-manager
RUN cp index.html 404.html

ENTRYPOINT npx http-server -p 80

