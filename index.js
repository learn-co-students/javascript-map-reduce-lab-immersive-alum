const issues = [
  {
    body:
      'Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team.',
    created_at: '2016-03-31 16:23:13 UTC',
    comments_count: 0,
    id: 144948778,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/basic-sinatra-forms-lab/issues/7'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-28 03:25:56 UTC',
    comments_count: 1,
    id: 143883618,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-what-is-the-event-system-readme/issues/3'
  },
  {
    body:
      'This section talks about the keywork GROUP BY but the exercise did not use that. ',
    created_at: '2016-03-27 23:55:28 UTC',
    comments_count: 1,
    id: 143861795,
    number: 11,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sql-grouping-and-sorting-readme/issues/11'
  },
  {
    body: '',
    created_at: '2016-06-21 19:51:37 UTC',
    comments_count: 0,
    id: 161524199,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:36:40 UTC',
    comments_count: 0,
    id: 94330872,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-routes-readme/issues/2'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:38:32 UTC',
    comments_count: 0,
    id: 94331206,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-messages/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:37:12 UTC',
    comments_count: 0,
    id: 94330963,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-twitter-todo/issues/3'
  },
  {
    body:
      "I'm not sure it's exactly up to whatever 'style guide' you guys might have, but there were lots of little errors.",
    created_at: '2016-03-31 16:47:39 UTC',
    comments_count: 1,
    id: 144954640,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/forms-and-basic-associations-rails/issues/7'
  },
  {
    body: '',
    created_at: '2016-06-21 19:55:49 UTC',
    comments_count: 0,
    id: 161525013,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/2'
  },
  {
    body:
      'Resolves issues #4 and #5 \r\n\r\nMade it clear that upper case letters should be hardcoded for this lab. Also, previous pull request updated the readme to state that colors should be read from the array. \r\n\r\n@PeterBell ',
    created_at: '2016-03-28 14:05:56 UTC',
    comments_count: 0,
    id: 143985287,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/interpolation-super-power/issues/7'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-28 03:20:49 UTC',
    comments_count: 1,
    id: 143882852,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-what-is-the-event-system-readme/issues/2'
  },
  {
    body:
      'my nested hashes(hero_friends) are not completing the learn. It looks exactly like the follow along example but its saying "expecting end, unexpected ]"',
    created_at: '2016-03-27 23:38:26 UTC',
    comments_count: 0,
    id: 143860810,
    number: 19,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/building-nested-hashes/issues/19'
  },
  {
    body: '',
    created_at: '2016-06-21 19:57:59 UTC',
    comments_count: 0,
    id: 161525417,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/3'
  },
  {
    body: '',
    created_at: '2016-06-21 20:02:55 UTC',
    comments_count: 0,
    id: 161526423,
    number: 5,
    state: 'open',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/5'
  },
  {
    body:
      "the .rspec file in the root of the project needs the flag `--require spec_helper` otherwise you have to explicitly declare `require 'spec_helper' at top of the specs and you will get a fail since you're not loading in the environment.\r\n\r\n```\r\n# .rspec\r\n--color\r\n--format documentation\r\n--require spec_helper\r\n```",
    created_at: '2016-03-27 17:29:08 UTC',
    comments_count: 2,
    id: 143830695,
    number: 17,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-fwitter-group-project/issues/17'
  },
  {
    body: '',
    created_at: '2016-06-21 20:06:14 UTC',
    comments_count: 0,
    id: 161527064,
    number: 6,
    state: 'open',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/6'
  },
  {
    body: '',
    created_at: '2016-06-21 20:06:26 UTC',
    comments_count: 0,
    id: 161527108,
    number: 7,
    state: 'open',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/7'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 21:35:39 UTC',
    comments_count: 1,
    id: 143850150,
    number: 3,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-create-objects-lab/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 22:17:14 UTC',
    comments_count: 1,
    id: 143855372,
    number: 16,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/scraping-reading/issues/16'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 22:11:52 UTC',
    comments_count: 1,
    id: 143854790,
    number: 15,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/scraping-reading/issues/15'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-01-27 06:40:06 UTC',
    comments_count: 1,
    id: 129048387,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/simple-partials-lab/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:34:32 UTC',
    comments_count: 0,
    id: 94330462,
    number: 6,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/6'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-31 14:54:17 UTC',
    comments_count: 1,
    id: 144924921,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/cancan_readme/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 21:06:35 UTC',
    comments_count: 1,
    id: 143848056,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-object-methods-readme/issues/2'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 20:45:35 UTC',
    comments_count: 1,
    id: 143846624,
    number: 30,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/using-bundler/issues/30'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 19:55:20 UTC',
    comments_count: 1,
    id: 143843124,
    number: 29,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/using-bundler/issues/29'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-01-27 05:45:49 UTC',
    comments_count: 1,
    id: 129039075,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/simple-partials-reading/issues/4'
  },
  {
    body: '',
    created_at: '2016-06-21 20:11:29 UTC',
    comments_count: 0,
    id: 161528114,
    number: 8,
    state: 'open',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/8'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:31:10 UTC',
    comments_count: 0,
    id: 94329835,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/oo-neopet-html-generator/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:01:58 UTC',
    comments_count: 0,
    id: 94324140,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/count-elements/issues/2'
  },
  {
    body:
      'The h1 at the top uses "@song.name", but songs aren\'t set up that way in the db. Should be "@song.title". It doesn\'t affect the tests, so it\'s not noticeable unless you actually try to visit the edit path through a browser. ',
    created_at: '2016-03-31 13:54:15 UTC',
    comments_count: 0,
    id: 144909174,
    number: 3,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/refactoring-views-with-helpers-lab/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-31 13:18:39 UTC',
    comments_count: 1,
    id: 144899211,
    number: 11,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-ajax-callbacks-readme/issues/11'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-31 11:37:24 UTC',
    comments_count: 1,
    id: 144869423,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/media-queries/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:33:51 UTC',
    comments_count: 0,
    id: 94330315,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-27 00:44:35 UTC',
    comments_count: 0,
    id: 143764577,
    number: 8,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/partial-locals-lab/issues/8'
  },
  {
    body:
      'number and conditions has the wrong answer on problem  # 15 \r\n it should be true.',
    created_at: '2016-03-25 17:05:07 UTC',
    comments_count: 1,
    id: 143542834,
    number: 26,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/booleans-ruby-readme/issues/26'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:31:51 UTC',
    comments_count: 0,
    id: 94329943,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/playlister-static-generator-with-ar/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:34:23 UTC',
    comments_count: 0,
    id: 94330424,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/erb-templating/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 15:01:56 UTC',
    comments_count: 0,
    id: 94324134,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/count-elements/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 14:54:53 UTC',
    comments_count: 0,
    id: 94322722,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/oo-neopet-html-generator/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 14:48:35 UTC',
    comments_count: 0,
    id: 94321483,
    number: 23,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/23'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 14:12:32 UTC',
    comments_count: 0,
    id: 94313939,
    number: 22,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/22'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-31 05:03:55 UTC',
    comments_count: 1,
    id: 144790136,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/rails-model-view-controller-readme/issues/5'
  },
  {
    body: '',
    created_at: '2016-06-21 20:12:10 UTC',
    comments_count: 0,
    id: 161528284,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-26 16:27:56 UTC',
    comments_count: 0,
    id: 143726621,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-directive-controllers-readme/issues/2'
  },
  {
    body: 'Line wraps removed for readability.',
    created_at: '2016-03-26 18:54:42 UTC',
    comments_count: 1,
    id: 143739524,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/validations-with-form_for-rails/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-26 21:38:18 UTC',
    comments_count: 1,
    id: 143751328,
    number: 8,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/simple-partials-reading/issues/8'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 14:54:17 UTC',
    comments_count: 0,
    id: 94322603,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/key-for-min-value/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-10 14:56:55 UTC',
    comments_count: 0,
    id: 94323137,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/debugging-with-pry/issues/4'
  },
  {
    body: 'Somehow it got committed with line wraps in it.  Fixed it.',
    created_at: '2016-03-26 16:29:20 UTC',
    comments_count: 1,
    id: 143726773,
    number: 6,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/validations-in-controller-actions-rails-lab/issues/6'
  },
  {
    body: '',
    created_at: '2016-06-21 20:13:13 UTC',
    comments_count: 0,
    id: 161528499,
    number: 10,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/10'
  },
  {
    body: '',
    created_at: '2016-06-21 20:14:37 UTC',
    comments_count: 0,
    id: 161528791,
    number: 11,
    state: 'closed',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/11'
  },
  {
    body: '',
    created_at: '2016-06-21 20:22:37 UTC',
    comments_count: 0,
    id: 161530474,
    number: 12,
    state: 'open',
    url:
      'https://api.github.com/repos/pletcher/test_repo_please_ignore/issues/12'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 22:41:48 UTC',
    comments_count: 0,
    id: 94168692,
    number: 21,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/21'
  },
  {
    body:
      'The solution given also returns words with a "wa" anywhere in the string. Here\'s my solution:\r\n\r\n```ruby\r\ndef first_wa(array)\r\n  array.find { |word| word[0..1] == "wa"}\r\nend\r\n```\r\n\r\nThis solution only matches "wa" at the start of the string.',
    created_at: '2016-03-26 15:56:22 UTC',
    comments_count: 0,
    id: 143722033,
    number: 11,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/collections_practice_vol_2/issues/11'
  },
  {
    body: 'Should be updated to learn',
    created_at: '2016-03-26 13:56:17 UTC',
    comments_count: 0,
    id: 143707480,
    number: 4,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/guessing-cli/issues/4'
  },
  {
    body: '',
    created_at: '2015-07-09 21:47:40 UTC',
    comments_count: 3,
    id: 94159117,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/reading-ios-sorting-basic/issues/1'
  },
  {
    body: '@jmburges ',
    created_at: '2015-07-09 21:39:14 UTC',
    comments_count: 2,
    id: 94157375,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-data-types.js/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:53:58 UTC',
    comments_count: 0,
    id: 94149615,
    number: 19,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/deploy-on-day-1/issues/19'
  },
  {
    body: "Really?\r\n```rails\r\nrails\r\nconsole\r\n```\r\nC'mon guys.",
    created_at: '2016-03-31 04:00:11 UTC',
    comments_count: 1,
    id: 144782740,
    number: 8,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/displaying-associations-rails/issues/8'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-30 20:49:54 UTC',
    comments_count: 1,
    id: 144716547,
    number: 12,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-forms-params-readme-walkthrough/issues/12'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-26 13:25:04 UTC',
    comments_count: 0,
    id: 143704626,
    number: 12,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/reading-ios-nsarray/issues/12'
  },
  {
    body:
      "Trying to run advanced_jukebox doesn't work without changing the permissions.",
    created_at: '2016-03-26 13:23:01 UTC',
    comments_count: 0,
    id: 143704426,
    number: 30,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/jukebox-cli/issues/30'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:47:23 UTC',
    comments_count: 0,
    id: 94148581,
    number: 16,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/16'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:46:17 UTC',
    comments_count: 0,
    id: 94148431,
    number: 15,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/15'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-30 17:41:08 UTC',
    comments_count: 1,
    id: 144663707,
    number: 6,
    state: 'closed',
    url: 'https://api.github.com/repos/learn-co-curriculum/devise_lab/issues/6'
  },
  {
    body:
      'Designed to fix https://github.com/learn-co-curriculum/flatiron-store-project/issues/1#issuecomment-203459073',
    created_at: '2016-03-30 15:22:13 UTC',
    comments_count: 7,
    id: 144626636,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/flatiron-store-project/issues/7'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-26 04:35:00 UTC',
    comments_count: 1,
    id: 143662626,
    number: 10,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/array-CRUD-lab/issues/10'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 20:28:57 UTC',
    comments_count: 1,
    id: 143590235,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-jquery-dom-reading/issues/3'
  },
  {
    body: "Here we go! I maybe did this all wrong but we'll see?",
    created_at: '2016-01-27 04:44:18 UTC',
    comments_count: 3,
    id: 129028469,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/refactoring-views-with-helpers-lab/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:48:56 UTC',
    comments_count: 0,
    id: 94148802,
    number: 19,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/19'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:48:10 UTC',
    comments_count: 0,
    id: 94148693,
    number: 18,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/18'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-30 17:40:14 UTC',
    comments_count: 0,
    id: 144663443,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/cs-swapping-implementations-lab/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 21:42:44 UTC',
    comments_count: 1,
    id: 143606829,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-jquery-stop-propogation-readme/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:47:44 UTC',
    comments_count: 0,
    id: 94148642,
    number: 17,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/17'
  },
  {
    body:
      'Package.json file is missing so I had to create my own in order to install necessary dependencies through npm. \r\n\r\nIf you\'re a fellow student, just copy, paste, and save the code snippet below to package.json\r\n\r\n```\r\n{\r\n   "name": "angular",\r\n   "version": "1.0.0",\r\n   "devDependencies": {\r\n     "express": "^4.13.4"\r\n   }\r\n}\r\n```\r\n\r\nFeel free to close the comment if the issue is addressed.\r\n',
    created_at: '2016-03-30 14:27:46 UTC',
    comments_count: 0,
    id: 144609670,
    number: 3,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-using-directive-controllers-lab/issues/3'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:45:52 UTC',
    comments_count: 0,
    id: 94148360,
    number: 14,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/14'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 16:50:38 UTC',
    comments_count: 0,
    id: 143539971,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/media-queries/issues/3'
  },
  {
    body:
      "after typed 'bundle install' in command line: \r\nAn error occurred while installing eventmachine (1.0.7), and Bundler cannot\r\ncontinue.\r\nMake sure that `gem install eventmachine -v '1.0.7'` succeeds before bundling.\r\n\r\nso i changed \r\neventmachine (1.0.7) to eventmachine (1.2.0.1) in Gemfile.lock\r\n\r\nand then typed 'gem install eventmachine' ,the bundle worked...",
    created_at: '2016-03-25 02:41:47 UTC',
    comments_count: 0,
    id: 143410533,
    number: 24,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/activerecord-crud/issues/24'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 16:35:49 UTC',
    comments_count: 1,
    id: 143537363,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/ruby-class-variables-and-class-methods-lab/issues/9'
  },
  {
    body:
      'I think it may be that the parenthetical in the last blurb on testTrueStrictEqualityComparison should have (!==) instead of (===) for strict inequality/nonequality\r\n\r\n![screen shot 2016-03-24 at 8 14 29 pm](https://cloud.githubusercontent.com/assets/12436033/14037087/4db1c83e-f1fd-11e5-8425-772820474b36.png)\r\n',
    created_at: '2016-03-25 03:16:39 UTC',
    comments_count: 2,
    id: 143414508,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-comparison-operators.js/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 01:57:32 UTC',
    comments_count: 1,
    id: 143406307,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-looping.js/issues/7'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 06:39:09 UTC',
    comments_count: 0,
    id: 143438827,
    number: 2,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-bind-to-controller-readme/issues/2'
  },
  {
    body:
      'all of the pictures in the lesson show launching shotgun, should show tux and require errors',
    created_at: '2016-03-25 09:22:51 UTC',
    comments_count: 1,
    id: 143462827,
    number: 11,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/sinatra-activerecord-using-tux/issues/11'
  },
  {
    body: '',
    created_at: '2016-03-25 14:12:25 UTC',
    comments_count: 1,
    id: 143507577,
    number: 21,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/orm-mapping-db-to-ruby-object-lab/issues/21'
  },
  {
    body: "I don't see the 1st Lab in the directory.",
    created_at: '2016-03-30 05:11:15 UTC',
    comments_count: 1,
    id: 144465599,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/learn-cli-workflow-nitrous/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:44:17 UTC',
    comments_count: 0,
    id: 94148115,
    number: 13,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/13'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:40:55 UTC',
    comments_count: 0,
    id: 94147657,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-30 14:26:18 UTC',
    comments_count: 1,
    id: 144609158,
    number: 6,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-hashes-readme/issues/6'
  },
  {
    body:
      "Not sure if this is an actual issue or intentional, but it seems the spec wants the order of the readers in 'post update' to be alice then beth in the array. It felt illogical that beth would come last, given she's the creator of the post and alice is the updated entry, so I swapped the order of alice and beth in the test array to pass this test.\r\n\r\nThis is on line 38 of notes_controller_spec.rb",
    created_at: '2016-03-24 23:15:55 UTC',
    comments_count: 0,
    id: 143385193,
    number: 5,
    state: 'open',
    url: 'https://api.github.com/repos/learn-co-curriculum/cancan_lab/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:43:29 UTC',
    comments_count: 0,
    id: 94147998,
    number: 12,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/12'
  },
  {
    body:
      'Last login: Tue Mar 29 22:48:34 on ttys000\r\n/tmp/tmp_open.sh ; exit;\r\n[22:49:39] ~\r\n// ♥ /tmp/tmp_open.sh ; exit;\r\nLooking for lesson...\r\nForking lesson...\r\nCloning lesson...\r\nThere was a problem cloning this lesson. Retrying...\r\nCloning lesson...\r\nThere was a problem cloning this lesson. Retrying...\r\nCloning lesson...\r\nCloning lesson...\r\nCannot clone this lesson right now. Please try again.\r\nlogout\r\nSaving session...\r\n...copying shared history...\r\n...saving history...truncating history files...\r\n...completed.\r\n\r\n[Process completed]',
    created_at: '2016-03-30 05:52:31 UTC',
    comments_count: 1,
    id: 144471295,
    number: 29,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/first-lab-ruby-learn-cli-osx/issues/29'
  },
  {
    body: 'Wrong lesson',
    created_at: '2016-03-24 23:14:49 UTC',
    comments_count: 0,
    id: 143385077,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/devise_roles_readme/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:41:14 UTC',
    comments_count: 0,
    id: 94147695,
    number: 10,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/10'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 23:44:44 UTC',
    comments_count: 1,
    id: 143389126,
    number: 9,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-scope-readme/issues/9'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-25 00:19:46 UTC',
    comments_count: 0,
    id: 143393294,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-flow-control.js/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:09:50 UTC',
    comments_count: 0,
    id: 94141501,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/7'
  },
  {
    body: '',
    created_at: '2016-03-15 14:50:48 UTC',
    comments_count: 0,
    id: 140994927,
    number: 14,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-rake/issues/14'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:23:09 UTC',
    comments_count: 0,
    id: 94144426,
    number: 17,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/apples-and-holidays/issues/17'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:23:06 UTC',
    comments_count: 0,
    id: 94144417,
    number: 16,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/apples-and-holidays/issues/16'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 19:26:03 UTC',
    comments_count: 0,
    id: 143337422,
    number: 17,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/rails-blog-nested-forms/issues/17'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:23:04 UTC',
    comments_count: 0,
    id: 94144407,
    number: 15,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/apples-and-holidays/issues/15'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:11:10 UTC',
    comments_count: 0,
    id: 94141816,
    number: 8,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/8'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:07:28 UTC',
    comments_count: 0,
    id: 94141084,
    number: 6,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/6'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-30 03:38:23 UTC',
    comments_count: 1,
    id: 144454886,
    number: 6,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/strong-params-basics/issues/6'
  },
  {
    body:
      "i passed the local tests and submitted the pull request but it aint showing up on learn\r\n\r\nUPDATE: it's working now",
    created_at: '2016-03-30 01:42:23 UTC',
    comments_count: 0,
    id: 144435772,
    number: 13,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/speaking-grandma/issues/13'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 19:44:59 UTC',
    comments_count: 1,
    id: 143341011,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/ruby-posting-requests/issues/2'
  },
  {
    body: 'Fixes issue #4 ',
    created_at: '2016-03-24 20:37:45 UTC',
    comments_count: 2,
    id: 143352790,
    number: 7,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-make-our-app-di-safe-lab/issues/7'
  },
  {
    body: '',
    created_at: '2016-03-24 20:25:31 UTC',
    comments_count: 0,
    id: 143350587,
    number: 14,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/deli-counter/issues/14'
  },
  {
    body:
      'This lab has the same issue as: https://github.com/learn-co-curriculum/angular-ngroute-lab/issues/2',
    created_at: '2016-03-24 15:14:46 UTC',
    comments_count: 0,
    id: 143273928,
    number: 2,
    state: 'open',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-ui-router-lab/issues/2'
  },
  {
    body: '',
    created_at: '2016-03-24 14:18:09 UTC',
    comments_count: 1,
    id: 143259108,
    number: 26,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/nyc-sinatra/issues/26'
  },
  {
    body: '',
    created_at: '2016-03-24 14:59:02 UTC',
    comments_count: 0,
    id: 143269281,
    number: 16,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/ruby-music-library-cli/issues/16'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 19:43:41 UTC',
    comments_count: 0,
    id: 94136223,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/3'
  },
  {
    body: '',
    created_at: '2015-06-30 15:23:52 UTC',
    comments_count: 0,
    id: 92123599,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/countdown-to-midnight/issues/5'
  },
  {
    body:
      'USE CLASS PREFIXES!\r\n\r\nExposition about properties in the lab readme. This can be review, but it should not be new content.\r\n\r\nLet\'s not use a binary gender system for humans.\r\n\r\n`friend` --> `aFriend` (reserved word collision)\r\n\r\n`removeFriend:` should be a void type\r\n\r\n\r\n"Playing with your methods in the AppDelegate\r\n"Feel free to play with your new class outside of the tests in the AppDelegate. Here is a reminder how.\r\n- this seriously misled a student away from the tests\r\n\r\n',
    created_at: '2015-06-29 17:03:09 UTC',
    comments_count: 1,
    id: 91857687,
    number: 32,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/mobile-development-curriculum/issues/32'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 17:40:36 UTC',
    comments_count: 1,
    id: 143313165,
    number: 10,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/debugging-errors-readme/issues/10'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 15:31:37 UTC',
    comments_count: 0,
    id: 143278173,
    number: 18,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/yield-and-blocks/issues/18'
  },
  {
    body: 'apologies, this was my mistake ^^; no issue here.',
    created_at: '2016-03-24 15:22:51 UTC',
    comments_count: 0,
    id: 143275976,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/angular-nested-views-readme/issues/2'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 20:06:04 UTC',
    comments_count: 0,
    id: 94140751,
    number: 5,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/5'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 19:52:01 UTC',
    comments_count: 0,
    id: 94138172,
    number: 4,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/intro-to-the-shell/issues/4'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 19:51:40 UTC',
    comments_count: 0,
    id: 94138086,
    number: 1,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/first-terminal/issues/1'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2016-03-24 00:56:02 UTC',
    comments_count: 1,
    id: 143117161,
    number: 2,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/js-create-objects-lab/issues/2'
  },
  {
    body: 'This pull request has been automatically created by learn.co.',
    created_at: '2015-07-09 18:51:01 UTC',
    comments_count: 0,
    id: 94124869,
    number: 3,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/hash-overview-readme/issues/3'
  },
  {
    body:
      'Could not find proper version of rspec-core (3.3.2) in any of the sources\r\nRun `bundle install` to install missing gems.\r\n\r\nI received this issue when running the "learn" command.',
    created_at: '2016-03-24 01:47:17 UTC',
    comments_count: 1,
    id: 143123002,
    number: 10,
    state: 'closed',
    url:
      'https://api.github.com/repos/learn-co-curriculum/ttt-1-welcome-rb/issues/10'
  }
];

const issuesWithUpdatedApiUrl = issues.map(result => {
  return Object.assign({}, result, {
    body: result.body,
    created_at: result.created_at,
    comments_count: result.comments_count,
    id: result.id,
    number: result.number,
    state: result.state,
    url: result.url.replace('api.github.com', 'api-v2.github.com')
  });
});

const commentCountAcrossIssues = issues
  .map(result => {
    return result.comments_count;
  })
  .reduce(add, 0);

function add(totalAmount, batch) {
  return totalAmount + batch;
}

const openIssues = new Array();

for (let i = 0; i < issues.length; i++) {
  if (result.state === 'open') {
    const openIssue = Object.assign({}, result, {
      body: result.body,
      created_at: result.created_at,
      comments_count: result.comments_count,
      id: result.id,
      number: result.number,
      state: result.state,
      url: result.url.replace('api.github.com', 'api-v2.github.com')
    });
    openIssues.push(openIssue);
  }
}
