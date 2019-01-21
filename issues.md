# Hugo Related Issues
Hugo utilizes [Blackfriday](https://github.com/russross/blackfriday), a Go Markdown processor, to render into HTML. There are a number of Markdown issues that are directly linked to Blackfriday. One particular issue is when HTML elements are wrapped around `p` tags. This document serves as a reference on how these issues affect the Nava Solutions website.

## Issues
There are two ways the issue is manifested:

- Empty `p` tags are random
- Elements nested inside `p` tags.

The issue has been heavily documented and argued on the Hugo repository. A ticket has been open and closed multiple times where the issue is primarily discussed. There have been several occasions when the project maintainers have claimed the issues has been resolved, but it still persists to this day. More can be found [here](https://github.com/gohugoio/hugo/issues/1642).

## Solutions
There are a number of commonly used workarounds for these issues. Due to the nature of Markdown, the accuracy of these solutions vary greatly.

### Moving Content
#### Fix
The spacing between elements can cause the empty `p` tags to show up. Eliminating the empty space between Markdown elements reduced the issues.

#### Problem
Due to the nature of how Markdown is rendered, certain elements can break when too close together.

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