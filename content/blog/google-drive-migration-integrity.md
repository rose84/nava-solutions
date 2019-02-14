+++
  title = "Migration Integrity – Ensuring Chain of Custody with Nava Certus"
  author = "Lusine Kolozyan"
  date = "2013-08-21"
  category = ["cloud storage migration","google apps migration","nava certus","products"]
  draft = false
  showthedate = true
+++

If you are planning a [Google Drive migration](/products/nava-certus/) and require assurance that the files at the source are exactly the same as the files at the destination, then you may be interested in our “Migration Integrity” feature.

One of the features that we designed into Nava Certus from the very beginning is called Migration Integrity. While this feature is not the most visible to the user, it is perhaps one of the most important for our enterprise customers that may want to ensure a certain chain-of-custody within the migration process. The “chain of custody” may be something that is required by your company’s internal policies or by regulation.

Specifically, the integrity feature provides assurance that every single file that has been migrated has not been altered in any way. For every single file that we migrate, we calculate a cryptographic hash which we later correlate with Google’s own hash (which automatically gets generated for any uploaded file). If the hashes match, we consider the migration to have been a success. If the hashes don’t match for any reason, the particular item will be marked as failed.

Be on the lookout for the next release of Nava Certus, which will feature a “Migration Integrity” report. This report will list every single file migrated, the hash at the source, the hash at the destination, and any errors. You can provide this report to your auditors as proof of the integrity of the migration.