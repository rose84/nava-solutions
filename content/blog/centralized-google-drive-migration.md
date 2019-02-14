+++
  title = "HOWTO: Migrate File Server to Google Drive with Nava Certus (Centralized)"
  author = "Lusine Kolozyan"
  date = "2013-07-29"
  category = ["google apps migration","nava certus"]
  draft = false
  showthedate = true
+++

Google Drive Migration Tool

Do you need to migrate a large quantity of files to Google Drive? Have you tasted the frustration of the “manual” approach? Well, why don’t you try Nava Certus? It is the ultimate [Google Drive migration](/products/nava-certus/) tool. It moves files, copies permissions, recreates the directory hierarchy, and lets you print pretty reports for your boss. And you can take all the credit.

Here we show the “Centralized” configuration, where all files go to a single destination Google Drive. NC will migrate the specified file(s) only to Google drive of those domain users who are granted at least one type of permission on that file. Using a preconfigured mapping file, NC will map the file permissions along with migrating the file to respective Google drives.

To create and configure a Centralized migration:

## General tab

{{< link content="Nava Certus Google Drive Migration - Centralized - General" href="https://storage.googleapis.com/navasolutions-web.appspot.com/NavaCertus-Google-Drive-Migration-Centralized.png" >}}

In the General tab, configure the general settings of the migration.

Mandatory settings:

- Job Name: Give a distinctive name to your job.
- Thread Count: Number of threads executing the migration. Be very careful with this setting. Setting to very large values may actually have a detrimental effect on migration performance.
- Retry Count: Number of time you’d like to re-try failed items.
- Start Automatically: Its a good idea to set this to true, in order to ensure that the migration continues should the migration server be restarted for any reason.
- Reprocess Failures: Set to true if you want to retry migration of failed items. Set to false to skip over problematic items. You can always change this setting.
- Log File/Level: Provide a log file and a logging level, usually “Error” is recommended for production.

The Email Configuration section is optional and is used if you only want to receive email notifications on errors or slow performance.

## Source tab

There are few settings here:

- Source Type: File System (we are rapidly developing other “source” connectors). Stay tuned.
- Source Root Folder: Any folder on your filesystem or remote UNC path.

The “Source Root Folder” in reality can be any folder mounted in Windows. As such, you may also consider Dropbox, Amazon S3, Box.com, and any other cloud storage which appears as a mount point in Windows. There is a small caveat about permissions in these cases, but if you don’t need to preserve permissions for Dropbox and such, then NC is a great tool for such migrations. (Note: We’re always developing new “native” source types, so check back often.)

## Destination tab

{{< link content="Nava Certus Google Drive Migration - Centralized - Destination" href="https://storage.googleapis.com/navasolutions-web.appspot.com/NavaCertus-Google-Drive-Migration-Centralized_3.png" >}}

For destination type, please select “Google Drive” (This is the Centralized setting)

- Mapping File: A CSV file mapping users on the source to users on the destination. You need to have this prepared prior to starting the migration.
- Destination Root Folder: A folder by this name will be created on the destination and the file hierarchy will be reconstructed within that folder.

The “Authentication” section is optional and we recommend that you leave these settings empty. If you do so, once the task starts you will be prompted for OAuth authentication which is a more secure method that doesn’t involve storing your password on the server.

You are ready to start the migration. See, it wasn’t that bad!