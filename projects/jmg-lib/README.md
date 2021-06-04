# jmg-lib

jmg-lib is an Angular library to assist in common Angular development tasks. 
Currently, it only includes a social media component which can be
seen on the website [Jemigo.com](https://www.jemigo.com). It will be expanded in the future to include many other tools for Angular development.

## Installation

`npm i jmg-lib` 

## Usage

```ts
import { JmgLibModule } from 'jmg-lib';
```

```html
  <social-media [coloredIcons]="false" 
  [githubName]="'githubUsername'"
  [linkedInName]="'linkedInHandle'"
  [twitterName]="'twitterHandle'"
  [facebookName]="'facebookUsername'"
  ></social-media>
```

## License

jmg-lib is [MIT licensed](https://github.com/abuMiguel/jmg-lib/LICENSE.txt).
