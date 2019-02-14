+++
  title = "30 cloud storage migration paths, including Sharepoint, OneDrive, and Google Cloud Storage"
  author = "Lusine Kolozyan"
  date = "2014-02-20"
  category = ["cloud storage migration","nava certus","products"]
  draft = false
  showthedate = true
+++

oday, we’re happy to announce the availability of Nava Certus 1.4 our most comprehensive release to date. As a result, we now support nearly 30 different unique migration paths with strong support for Google Drive and Google Cloud Storage as migration destinations.

We aim to be the clear leader in cloud storage migration and are constantly at work developing support for new sources/destinations. Do you have a feature requirement we don’t yet support? Feel free to request it in our UserVoice forum or in the comments below.

Check our the release notes for more detail.

With this release, we are introducing four major features:

- Sources
  - Microsoft Sharepoint (Document libraries)
  - Microsoft OneDrive (formerly SkyDrive)
  - Amazon S3
- Destinations
  - Google Cloud Storage

{{% container tag="section" class="table" %}}
|FROM -> TO          |File Server (NTFS)|Google Drive|Amazon S3|Dropbox|Google Cloud Storage|
|--------------------|------------------|------------|---------|-------|--------------------|
|File Server (NTFS)  |-                 |P           |P        |X      |P                   |
|Google Drive        |P                 |P           |P        |X      |P                   |
|Amazon S3           |P                 |P           |P        |X      |P                   |
|Dropbox             |X                 |X           |X        |X      |X                   |
|Microsoft OneDrive  |X                 |X           |X        |X      |X                   |
|Microsoft Sharepoint|P                 |P           |P        |X      |P                   |

Table Legend: P – we migrate & set permissions, X – we migrate w/out permissions
{{% /container %}}

Why not download a free trial using the link below. Or you can [contact us](/request-a-quote/) or our [resellers](/about-us/partnership/) for more information.

[Download Free Trial](/products/downloads-nava-certus/)