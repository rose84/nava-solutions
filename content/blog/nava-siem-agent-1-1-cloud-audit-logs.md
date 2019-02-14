+++
  title = "Nava SIEM Agent 1.1 – Retrieve, retain, and analyze cloud audit logs"
  author = "Lusine Kolozyan"
  date = "2014-04-14"
  category = ["cloud security","nava siem agent","products"]
  draft = false
  showthedate = true
+++

We’re happy to announce an update to [Nava SIEM Agent](/products/nava-siem-agent/), our cloud security and audit log retrieval solution. Since Nava SIEM Agent is a relatively new product, we want to answer some frequently asked questions about it in this post.

Many of the changes in this release (Nava SIEM Agent 1.1) are internal but important, including:

- Updated to work with with the latest version of the Google Admin SDK libraries
- Ability to “Service Account” authentication as opposed to 3-legged OAuth
- Selective backlog retrieval

The changes will cumulatively result in better security, improved stability, and scalability to millions of events. For full release notes, please visit this page: {{< link content="Nava SIEM Agent 1.1 release notes" href="https://googleappsreseller.zendesk.com/entries/32549734-Nava-SIEM-Agent-1-1-Release-Notes/" >}}.

## What are some common use cases for Nava SIEM Agent?

There are several reasons why you might use it:

- Google Apps retains audit logs only for 180 days, after which they are gone.
- Help perform IP reputation analysis, by comparing IP addresses in audit logs with a database of known malicious IPs.
- Help perform offline forensics, without requiring access to the cloud provider.
- Help aggregate logs in a centralized logging server.