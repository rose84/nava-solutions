# Hugo Related Issues
There are a number of Markdown issues with Hugo. One particular issue is when HTML elements are wrapped around `p` tags. This document serves as a reference on how these issues affect the Nava Solutions website.

## Issues
There are two ways the issue is manifested:

- Empty `p` tags are random
- Elements nested inside `p` tags.

The issue has been heavily documented and argued on the Hugo repository. A ticket has been open and closed multiple times where the issue is primarily discussed. There have been several occasions when the project maintainers have claimed the issues has been resolved, but it still persists to this day. More can be found [here](https://github.com/gohugoio/hugo/issues/1642).

The issue can be found more commonly in the [Nava Certus](https://nava-solutions.netlify.com/products/nava-certus) page. You'll notice the **Features** section icons are blown up. Looking at the console will show the images being wrapped around `p` tags.

## Solutions
There are a number of commonly used workarounds for these issues. Due to the nature of Markdown, the accuracy of these solutions vary greatly.

### Moving Content
#### Fix
The spacing between elements can cause the empty `p` tags to show up. Eliminating the empty space between Markdown elements reduced the issues.

#### Problem
Due to the nature of how Markdown is rendered, certain elements can break when they're too close together. Ironically, adding space in certain instances also helps to eliminate the bug.

### Wrapping Content in `div`s
#### Fix
Wrapping `img` and other elements inside `div` tags does eliminate the the bug in certain situations.

#### Problem
There isn't a directly problem caused by wrapping elements in `div`s. However, it is important to keep in mind that this is not semantic HTML and can cause speceficity issues with CSS later on.

### Inner Shortcode
#### Fix
Using shortcodes that take in parameters as content instead of `{{ .Inner }}` for any content, eliminates a lot of wrapping issues.

#### Problem
Although the issues arise far less with this method, it is still present on occasions. Moreover, not using wrapper shortcodes with `{{ .Inner }}` goes against Nava's shortcode strategy.

### Task Runner
#### Fix
Using a task runner like [Gulp](https://gulpjs.com/) and [Grunt](https://gruntjs.com/) can be utilized to create a search and replace function that eliminates empty tags and moved those incorrectly wrapped out. This is done with the use of [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

#### Problem
There aren't any issues with the method itself. But it isn't a solution to the problem directly. The task runner removes the issues post-render. So it acts as a solution around the problem.

#### Comments
This is the most widely used solution. You can see an example of it in the same Github issue [here](https://github.com/gohugoio/hugo/issues/1642#issuecomment-188693577).

## Issue Locations
Line numbers where the Hugo bug is currently showing up in the codebase.

### [public/about-us/partnership/index.html](public/about-us/partnership/index.html)
- [337](/public/about-us/partnership/index.html#L337)
- [340](/public/about-us/partnership/index.html#L340)
- [341](/public/about-us/partnership/index.html#L341)

### [public/products/index.html](public/products/index.html)
- [199](/public/products/index.html#L199)
- [203](/public/products/index.html#L203)
- [205](/public/products/index.html#L205)
- [213](/public/products/index.html#L213)
- [214](/public/products/index.html#L214)
- [218](/public/products/index.html#L218)
- [224](/public/products/index.html#L224)
- [228](/public/products/index.html#L228)
- [229](/public/products/index.html#L229)

### [public/products/nava-siem/index.html](public/products/nava-siem/index.html)
- [262](/public/products/nava-siem/index.html#L262)
- [264](/public/products/nava-siem/index.html#L264)
- [266](/public/products/nava-siem/index.html#L266)
- [268](/public/products/nava-siem/index.html#L268)
- [272](/public/products/nava-siem/index.html#L272)
- [274](/public/products/nava-siem/index.html#L274)
- [280](/public/products/nava-siem/index.html#L280)
- [282](/public/products/nava-siem/index.html#L282)
- [295](/public/products/nava-siem/index.html#L295)
- [297](/public/products/nava-siem/index.html#L297)
- [313](/public/products/nava-siem/index.html#L313)
- [347](/public/products/nava-siem/index.html#L347)
- [348](/public/products/nava-siem/index.html#L348)