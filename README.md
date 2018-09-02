# Seed Transactions Date Converter

This is a simple script to convert the dates in a [Seed](http://seed.co) transactions export to the format: `MM-dd-yyyy` (assuming they are in the first column and in the format `yyyy-MM-dd`).

## Made with [Rambda](https://ramdajs.com/).

I created this script as a way to start learning Rambda.JS. There may be better ways to accomplish this particular task, but this was my initial solution.

Credit goes to YouTuber [Christopher Okhravi](https://www.youtube.com/channel/UCbF-4yQQAWw-UnuCd2Azfzg) for getting me more interested in Rambda.JS through his [Rambda JS Tutorial](https://www.youtube.com/watch?v=Cltoo-NJ2JM&list=PLrhzvIcii6GMeyUfpn-o5xVCH3_UykrzI) playlist.

## Usage

Export transactions from [Seed](http://seed.co) and place the `transactions-export.csv` in the root of this project. Then run:

```
node index.js
```

> Be sure to run `npm i` first of course.

The script will create a new file with the name: `transactions-export-converted-${time}.csv`

## Roadmap

- [ ] Accept filename as CLI argument
- [ ] Append date/time to filename from CLI args
- [ ] Optionally set the date format as CLI argument
- [ ] Optionally set the output filename as a CLI argument
- [ ] Refactor Rambda code using more advanced functions
- [ ] What if the date is NOT in the first column?
- [ ] Could this be more generalized to parse any data in any column? multiple columns?
