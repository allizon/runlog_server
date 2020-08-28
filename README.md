# Typescript API For...Something

What do I want to build, now that I have a Postgres database and a Node server capable of connecting to it? (These answers affect the client app just as much as this API app!)

* Can I use GraphQL for any of my API fetching (or serving)?
* A game of some sort?
* A tool of some sort? What would help **ME**?
* An app for my running log, or some other form of streak-tracking?
  * Enter a day - maybe optionally integrates this thing with [Strava](https://developers.strava.com/)?
  * Keep weekly, monthly, yearly totals in both kms/mis
  * Needs to:
    * Enter data: date, distance in either miles or km
    * OR Import from Strava?
    * OR Add link to Strava?
    * Show "running totals" (hah hah)
* Oh shit, I probably need tests, huh...

### DB
```
Run
  run_date
  distance_km
  duration
  description
  (timestamps)
```