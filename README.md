# Developers/Maintainers graph automation

For more information see [T318599](https://phabricator.wikimedia.org/T318599).

## Installation

- Install [Chrome](https://www.google.com/chrome/) (tested with v106.)
- Install [Node.js](https://nodejs.org/) v14 (tested with v14.20.1).
- Install Node.js dependencies with: `npm ci`.

## Usage

- Run: `npm run wdio`.

The script opens versions of [Developers/Maintainers](https://www.mediawiki.org/wiki/Developers/Maintainers) page in a headless Chrome. Versions (and their dates) are hard-coded at the top of `test/specs/data.js`. As a progress indicator, the script will output URL of the page it's parsing. When all pages are parsed, the script will output Graph:Chart ([Extension:Graph](https://www.mediawiki.org/wiki/Extension:Graph), [Template:Graph:Chart](https://www.mediawiki.org/wiki/Template:Graph:Chart)) template. Copy/paste the template to a wiki page.

## Example

```
~/Documents/github/zeljkofilipin/developers-maintainers$ npm run wdio

> developers-maintainers@1.0.0 wdio /Users/z/Documents/github/zeljkofilipin/developers-maintainers
> wdio run wdio.conf.js

Execution of 1 workers started at 2022-10-06T10:50:31.527Z

[0-0] 2022-10-06T10:50:31.590Z WARN @wdio/utils:shim: You are running tests with @wdio/sync which will be discontinued starting Node.js v16.Read more on https://github.com/webdriverio/webdriverio/discussions/6702
[0-0] RUNNING in chrome - /test/specs/data.js
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2376817
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2435161
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2181417
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2577123
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2677753
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2751248
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2822198
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2905633
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3036807
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3205911
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3309076
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=2905633
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3598102
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3753592
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=3961000
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=4148426
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=4340058
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=4514091
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=4703470
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=4842249
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=5009838
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=5146289
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=5323169
[0-0] https://www.mediawiki.org/w/index.php?title=Developers/Maintainers&oldid=5502573
[0-0] {{Graph:Chart|width=2000|height=100|xAxisTitle=Date|yAxisTitle=Components|type=rect|showValues=|x=2017-01-28,2017-04-01,2017-07-06,2017-10-03,2018-01-02,2018-04-03,2018-07-05,2018-10-03,2019-01-03,2019-04-24,2019-07-10,2019-10-03,2020-01-20,2020-04-03,2020-07-13,2020-10-02,2021-01-12,2021-04-06,2021-07-13,2021-10-01,2022-01-09,2022-04-04,2022-07-05,2022-10-03|y=530,534,566,372,372,372,329,342,343,347,361,342,367,363,362,318,365,368,367,369,369,351,353,357}}
[0-0] {{Graph:Chart|width=2000|height=100|xAxisTitle=Date|yAxisTitle=Unassigned|type=rect|showValues=|x=2017-01-28,2017-04-01,2017-07-06,2017-10-03,2018-01-02,2018-04-03,2018-07-05,2018-10-03,2019-01-03,2019-04-24,2019-07-10,2019-10-03,2020-01-20,2020-04-03,2020-07-13,2020-10-02,2021-01-12,2021-04-06,2021-07-13,2021-10-01,2022-01-09,2022-04-04,2022-07-05,2022-10-03|y=0,0,0,0,0,1,70,74,74,75,79,74,78,79,78,83,80,80,78,93,92,108,107,106}}
[0-0] {{Graph:Chart|width=2000|height=100|xAxisTitle=Date|yAxisTitle=Unassigned %|type=rect|showValues=|x=2017-01-28,2017-04-01,2017-07-06,2017-10-03,2018-01-02,2018-04-03,2018-07-05,2018-10-03,2019-01-03,2019-04-24,2019-07-10,2019-10-03,2020-01-20,2020-04-03,2020-07-13,2020-10-02,2021-01-12,2021-04-06,2021-07-13,2021-10-01,2022-01-09,2022-04-04,2022-07-05,2022-10-03|y=0,0,0,0,0,0,21,22,22,22,22,22,21,22,22,26,22,22,21,25,25,31,30,30}}
[0-0] PASSED in chrome - /test/specs/data.js

 "spec" Reporter:
------------------------------------------------------------------
[Chrome Headless 106.0.5249.103 darwin #0-0] Running: Chrome Headless (v106.0.5249.103) on darwin
[Chrome Headless 106.0.5249.103 darwin #0-0] Session ID: 55d2c3de-10c4-400d-abe4-7bacee51b326
[Chrome Headless 106.0.5249.103 darwin #0-0]
[Chrome Headless 106.0.5249.103 darwin #0-0] » /test/specs/data.js
[Chrome Headless 106.0.5249.103 darwin #0-0] Developers/Maintainers
[Chrome Headless 106.0.5249.103 darwin #0-0]    ✓ should create charts
[Chrome Headless 106.0.5249.103 darwin #0-0]
[Chrome Headless 106.0.5249.103 darwin #0-0] 1 passing (1m 31.4s)

Spec Files:      1 passed, 1 total (100% completed) in 00:01:32
```