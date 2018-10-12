/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('url defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


         it('name defined', function() {
           for(let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });


        describe('The menu', function() {

          const body = document.querySelector('body');
          const menu = document.querySelector('.menu-icon-link');


         it('is hidden', function () {
           expect(body.classList).toContain('menu-hidden');
         });


          it('toggles visible and hidden', function() {

            menu.click();
            expect(body.classList).not.toContain('menu-hidden');
            menu.click();
            expect(body.classList).toContain('menu-hidden');
          });
        });


    describe('Initial Entries', function() {

         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('work completed', function(){
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    });



    describe('New Feed Selection', function() {

      //const feed = document.querySelector('.feed');
      //const firstFeed = [];

         let firstFeed, secondFeed;
         beforeEach(function(done) {
           loadFeed(0, function() {
             firstFeed = document.querySelector('.entry').innerHTML;

              loadFeed(1, function() {
                secondFeed = document.querySelector('.entry').innerHTML;

             done();

            });
         });
      });
         it('content changes', function() {
           expect(firstFeed === secondFeed).not.toBe(true);
         });
    });
}());
