## Description
This projects is used to detect face from input image URL.
It is built by using react, express and Clarifei API
<br>
live demo:
<br>
https://myfacedetections.herokuapp.com/

This project includes two parts:

* Frontend:https://github.com/yudanZ/face-recognition

* Backend:https://github.com/yudanZ/face-recognition-backend



by using this projects, you need to install PostgreSQL
<br>
DATABASE:
<br>
```sql
    CREATE DATABASE facerecognition

  
    CREATE TABLE public.login
    (
        id integer NOT NULL DEFAULT nextval('login_id_seq'::regclass),
        hash character varying(100) COLLATE pg_catalog."default" NOT NULL,
        email text COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT login_pkey PRIMARY KEY (id),
        CONSTRAINT login_email_key UNIQUE (email)
    )

    CREATE TABLE public.users
    (
        id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
        name character varying(100) COLLATE pg_catalog."default",
        email text COLLATE pg_catalog."default" NOT NULL,
        entries bigint DEFAULT 0,
        joined timestamp without time zone NOT NULL,
        CONSTRAINT users_pkey PRIMARY KEY (id),
        CONSTRAINT users_email_key UNIQUE (email)
    )
   ```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.




### Deployment

Here is a documentation to deploy on Heroku
https://devcenter.heroku.com/articles/git

