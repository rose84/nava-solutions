+++
  title = "Nava Certus 1.0.0.7: Migration to Amazon S3, Permission Analyzer"
  author = "Lusine Kolozyan"
  date = "2013-10-15"
  category = ["cloud storage migration","nava certus","products"]
  draft = false
  showthedate = true
+++

Hooray! Today we’re releasing the latest version of Nava Certus, our cloud storage migration software. Have you [tried it](/products/nava-certus/) yet? If not, then why not go for the trial and you can migrate up to 1GB for free. Today’s release contains the following new features:

Support for Amazon S3 storage: Due to popular demand, we’re now supporting migration from Windows file system to Amazon S3. Simply configure the migration job for S3 and within minutes you can be uploading your files to Amazon S3. Don’t worry about lost files, with our Migration Integrity report you can provide your boss/customer with a full accounting of what exactly was migrated (and what was not, including the reason). Amazon S3 migration also supports preservation of permissions.  
Permission Analyzer Tool: Complicated migrations, where many users are involved, require a little bit of planning. Now, a built-in Permission Analyzer Tool can list all of the users and permissions present at the source. This will aid you greatly in creating the user mapping file and thus speed up the migration preparation time.  
Want more info? Read the full {{< link content="release notes" href="https://googleappsreseller.zendesk.com/entries/22446439-Nava-Certus-1-0-0-7-Release-Notes" >}}.

Nava Certus recap

Nava Certus is already a popular download on our site and many of you are already familiar with this awesome and easy-to-use tool. However, for newcomers, let us provide a summary of what our product does. You can get more info on our product page: [Nava Certus](/products/nava-certus/)

Why does Nava Certus exist?

We decided to develop this tool after receiving customer requests to migrate to cloud storage (specifically Google Drive). We searched far and wide and could not find a standard off-the-shelf tool that does this. Whatever tools did exist, were not built with large enterprises in mind, where compliance, project management, and accountability are very important.

What does Nava Certus do?

Nava Certus allows IT workers and users to migrate user data to cloud storage. As of today’s release, we support migration from Windows file server to Google Drive and Amazon S3 storage. Migrating terabytes of information to the cloud is seldom an overnight task. Nava Certus runs as a Windows service and performs long running migrations, keeping track of source files in an embedded database. Advanced features allow customers to plan migrations better, support project management queries, and ensure the integrity of the migration through the use of cryptographic hashing.

How much does it cost?

A 5-day free-trial allows you to migrate up to 1GB for free. After the 1st gigabyte, the license costs are currently $4.99 GB. This is an introductory price that will expire in November.

Interested in trying out Nava Certus? Take advantage of the trial today!