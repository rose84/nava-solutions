+++
  title = "HOWTO: Distributed Google Drive Migration"
  author = "Lusine Kolozyan"
  date = "2013-07-31"
  category = ["cloud storage migration","google apps migration","nava certus","products"]
  draft = false
  showthedate = true
+++

Enjoy cloud storage, migrate to Google Drive

This post is another in a series of posts about Nava Certus, our [Google Drive migration tool](/products/nava-certus/). Specifically, we show you the Distributed feature in NC. The beauty of distributed migration is that it allows you to get rid of your file server, but at the same time possibly stay in the “basic” tier of Google Drive storage, thus avoiding extra Google Drive storage costs.

How, do you ask? Well, you may know that Google Apps for Business accounts come with 35GB of free storage (shared between Gmail and Drive). Suppose you have 10TB of data belonging to 1000 users. This is about 10GB on the average for each user. Assuming that no user is consuming above 35GB, then we can move each file to its owner’s account.

The first steps to creating a Distributed migration job are similar to Centralized migration. The contents of the General and Source tabs stay the same, so refer to [this](/blog/centralized-google-drive-migration/)previous blog post.

{{< link content="Google Drive Migration - Distributed - Configuration" href="https://storage.googleapis.com/navasolutions-web.appspot.com/NavaCertus-Google-Drive-Migration-Distributed_3.png" >}}

Only the contents of the “Destination” tab will be different.

Destination tab

For destination type, please select “Google Drive (distributed)”

It turns out that the distributed options is much easier to configure, requiring only one option, the mapping file.

- Mapping File: A CSV file mapping users on the source to users on the destination. You need to have this prepared prior to starting the migration.

This is all you need in order to configure distributed migration.