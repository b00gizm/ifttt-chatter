ifttt-chatter
=============

A sample app built with [express-ifttt-webhook](https://github.com/b00giZm/express-ifttt-webhook) to display text messages pushed to IFTTT in real time though web sockets.

Installation
------------

I'm hosting a version for you at [Heroku](https://ifttt-chatter.herokuapp.com/), so you really do not need to install anything. But, if you want to have your own little chat app, the easiest option is to use the awesome one-click Heroku deployment.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/b00giZm/ifttt-chatter)

Usage instructions
------------------

IFTTT recently [released a new suite of apps](http://blog.ifttt.com/post/111467477713/introducing-do-a-new-class-of-apps-by-ifttt) for iOS and Android, each one dedicated to trigger actions for one certain event. The one we will use for demonstration purpose is called [Do Note](https://ifttt.com/products/do/note), which lets you send texts. It's avaiable for free for [iOS](https://itunes.apple.com/us/app/do-note-by-ifttt/id905998379) and [Android](https://play.google.com/store/apps/details?id=com.ifttt.donote), so just go ahead and download.

### Activate Wordpress channel

You need to activate the [IFTTT Wordpress](https://ifttt.com/wordpress) channel. "Really? Wordpress?" - No, not really ;) It's basically a hack, but a pretty nifty one. If you want to get into the details, it's explained in the [express-ifttt-webhook documentation](https://github.com/b00giZm/express-ifttt-webhook#how-does-it-work).

Feel free to use the URL of my [hosted version on Heroku](https://ifttt-chatter.herokuapp.com/) for a quick test.

![](http://i.imgur.com/KBqWeJv.png)

### Configure the action

After you activated the Wordpress channel, choose the "Create a post" action

![](http://i.imgur.com/dhf1924.png)

and configure it like this:

![](http://i.imgur.com/6UPWOfS.png)

### Ready to go!

![](http://i.imgur.com/Sbo0g5w.png)

![](http://i.imgur.com/i1UvC6p.gifv)

Made with
---------

* Express
* React
* Socket.io
* Browserify
* Gulp
* Sass
* Bootstrap
* Moment.js
* lodash

Maintainer
----------

Pascal Cremer

* Email: <hello@codenugget.co>
* Twitter: [@b00gizm](https://twitter.com/b00gizm)
* Web: [http://codenugget.co](http://codenugget.co)

License
-------

>The MIT License (MIT)
>
>Copyright (c) 2014-2015 Pascal Cremer
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
