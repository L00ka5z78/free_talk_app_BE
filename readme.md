# this is a backendt to free talk application

It was created to check my backend skill. And not to mention, to be more familiar with

### typescript , because I'm definetely not very confident when im usig this.

But I have to admit that whole building process went pretty well, it took many hours,
loads of diging in docs, facing with errors , and watching some videos how some structures
are made.

### this is the basic version of the application. I will upgrade it soon. Do some refactoring etc..

I tried to play with some new thing and finally I used other encryption library than ususally.
Insted of bcrypt I used crypto. I wrote some basic tests with Jest and supertest,
but it was challenging. And I used a LOT of time to figure it out.

## what was positive in my eyes.

1. I think folder structure is ok, but can be better.
2. Database connection is created well I guess.
3. Config file is used in a good way.
4. Upload image feature.
5. Testing enviornment and setup

## what should I work with...

1. Few files with way to big chunks of code. It has to be splited into separate files.
2. Router structure needs to be better. Here I was way to concern NOT to have big code chunks, and the result could be better.
3. There are functions where some code repeats very often. Should be moved to ohter file and imported when needed.
4. Poor tests structure, just very basic. Needs to be write with more advanced features.
5. Lack of consequency in some places. Couldnt decide where I should have some files (middleware / common / services)
