+++
  title = "Nava Certus 1.3: Migration deltas, Synchronization"
  author = "Lusine Kolozyan"
  date = "2013-12-25"
  category = ["cloud storage migration","nava certus","products"]
  draft = false
  showthedate = true
+++

Customers using [Nava Certus](/products/nava-certus/), may have noticed a few logistical complications with extremely large migrations. If a migration was large and the source files were still in used by users, then by the time you migrate the data there will be new versions of some files at the source.

In the past, we recommended to split up migrations into manageable chunks and to enforce a ‘freeze’ on the source during the migration.

Today we have a more ideal solution. We’re happy to release Nava Certus 1.3 featuring a new “Continuous Mode” option that enables two use cases: {{< link content="Delta migrations" href="http://navasolutions.uservoice.com/forums/234686-nava-certus/suggestions/5230478-support-delta-migrations" >}} & {{< link content="One-way Synchronization" href="http://navasolutions.uservoice.com/forums/234686-nava-certus/suggestions/5230491-one-way-synchronization" >}}.

## Delta Migration

One the main stage of the migration has finished, a delta migration allows for the migration of only the changed files. With this functionality, each migration can now have a last “delta migration” phase shortly before the go-live.

## One-Way Synchronization

With the one-way synchronization use case, the customer would like to continuously update the destination as files at the source are updated. When the destination is set to Google Drive,

## More Details

As you can see on the left, there are three configuration options we’ve added:

Enable Continuous Mode: With this option enabled, after migrating the initial set of data, NC will go into “Watching” state and monitor the source for changed files and periodically begin to migrate the changed data. For the Google Drive destination, modified files are appended as new “Revisions” to the existing file in Google Drive, preserving the previous version of the file.

Detection Method: We support 2 modes of detecting changes: Datetime and Checksum. With Datetime, the file’s modification time is used to detect if there have been any changes. With Checksum, we perform a cryptographic hash on each file to detect if the hash has changed. This is expensive operation and should not be used on extremely large data sets.

Time Interval: This is the number of minutes that NC will wait before re-checking the source files for modification.

If you’d like “Continuous Mode” to be truly persistent, please also ensure that the job is set to start automatically (when the Nava Certus service starts) and also make sure that the Startup Mode for the NC Service is also set to Automatic (in order to persist across reboots).

## .NET Framework 4.0

The past version of NC required .NET Framework 4.5. This made it impossible to run on older versions of Windows including Windows Server 2003 and Windows XP. The 4.5 requirement has been removed, allowing you to run NC on a much bigger population of servers and machines.

## Other Changes

Today’s release also has several enhancements, including an improved GUI and enhanced information in reports. Check out the full release notes here: {{< link content="Nava Certus 1.3 – Release Notes" href="https://googleappsreseller.zendesk.com/entries/24957359-Nava-Certus-1-3-0-Release-Notes" >}}.