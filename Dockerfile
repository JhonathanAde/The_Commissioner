FROM node:18.4.0 AS build-stage

WORKDIR /react-app
COPY react-app/. .

ENV REACT_APP_BASE_URL=https://art-commissioner.herokuapp.com/

RUN npm install
RUN npm run build

FROM python:3.8

ENV FLASK_APP=app
ENV FLASK_DEBUG=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/

RUN pip install -r requirements.txt
RUN pip install psycopg2
RUN pip install boto3

CMD gunicorn app:app