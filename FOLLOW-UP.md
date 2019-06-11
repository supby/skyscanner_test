# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

1. bootstrap: UI library. I tried to use BKP but when "npm i" compiling of bkp-react-scripts failed.
2. moment: easier to handle some datetime related thing like "get next monday", "format time"    
3. react-icons: I used icon of bell from there.    
4. typescript: i love strong typing and compile time errors.

### Q) What is the command to start the server?

(Default) `APIKEY=<key> npm run server`
i also used `cd server && APIKEY=<key> npm start` on linux or `set APIKEY=<key> && cd server && npm start` on windows.

---

# General:

### Q) How long, in hours, did you spend on the test?

~11-12 hours

### Q) If you had more time, what further improvements or new features would you add?

1. Make Query box to enter search params.
2. Use redux to manage state.
3. Replace server side on some more suitable platform. NodeJS is good but it is single thread event loop based.
   It is not so good for CPU bound task like formating/processing/transforming huge amount of json data from Skyscanner API.
4. Probably it is worth to delegate JSON transforming t some external services. In that case NodeJS could be used.
5. Adding Unit tests. I love writing tests but somehow it needs to stop doing task :)
6. Using https://www.npmjs.com/package/ts-node on server side.(if still NodeJS based)
7. Using some memory cache service on server side. (Redis)
8. Addin some API data validation on server.

### Q) Which parts are you most proud of? And why?

1. Component structure of Front-End part. It is readable and well structured.

### Q) Which parts did you spend the most time with? What did you find most difficult?

1. UI design. Adjusting/styling UI took most time.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

1. I really got pleasure to do it. It is exactly for 8-10h or 10-12h(if you have a child who constantly asking, dad what are you doing?) 
   Test allows to check back-end ad front-end skills.
