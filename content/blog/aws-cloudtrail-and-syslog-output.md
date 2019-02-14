+++
  title = "Nava SIEM Agent 1.2: AWS CloudTrail and Syslog output"
  author = "Lusine Kolozyan"
  date = "2014-06-18"
  category = ["cloud security","nava siem agent","products"]
  draft = false
  showthedate = true
+++

Announcing Nava SIEM Agent 1.2. The industry’s leading tool for cloud compliance, audit analytics, cloud forensics, and data retention now supports a fuller set of features, including support for Amazon AWS CloudTrail and Syslog. 

Today we’re releasing Nava SIEM Agent 1.2. This version supports long-awaited functionality, including support for Amazon CloudTrail and output to Syslog.

Amazon AWS and Google Apps are two of the most popular cloud services that offer an API or method of retrieving audit logs. With this release we’re making yet another step in the direction of our commitment to provide a universal cloud logging solution.

Nava SIEM Agent is the industry’s only log management tool with full support for Google Apps and Amazon S3. Use it to bring in your cloud audit logs into your SIEM solution or achieve Google Apps HIPAA compliance. Give it a try today.

## Feature Diagram

Here is a diagram of current functionality:

## New Feature Details

### Amazon AWS CloudTrail

If you use Amazon AWS, then you should be interested in a new service called CloudTrail. All API calls (for supported services) within AWS are logged and available for retrieval and processing. Previously, Nava SIEM Agent already supported Amazon S3 (cloud storage) access logs, but the latest addition with CloudTrail provides unprecedented visibility into the AWS stack and how you use it.

Currently, the following AWS services are supported as part of CloudTrail: (new AWS services are being added)

- Amazon Elastic Compute Cloud (Amazon EC2)
- Amazon Elastic Block Store (Amazon EBS)
- Amazon Elastic MapReduce (Amazon EMR)
- Amazon Kinesis
- Elastic Load Balancing (ELB)
- Amazon Redshift
- Amazon Relational Database Service (Amazon RDS)
- Amazon Virtual Private Cloud (Amazon VPC)
- Amazon Simple Workflow
- AWS CloudFormation
- Amazon CloudFront
- AWS CloudTrail
- Amazon CloudWatch
- AWS Direct Connect
- AWS Elastic Beanstalk
- AWS Identity and Access Management (AWS IAM)
- AWS OpsWorks
- AWS Security Token Service (AWS STS)

### Syslog output

Nava SIEM Agent now supports Syslog as an output target, allowing your cloud audit logs to be sent to a remote Syslog server. Within the target configuration, you will notice that we support a variety of advanced configuration features, such as:

- Setting the protocol (TCP / UDP)
- Custom port number
- Ability to chose facility and severity
- Application name (Program name)
- And more…

### Other Changes

The full list of changes can be found here: {{< link content="Nava SIEM Agent 1.2 – Release Notes" href="https://googleappsreseller.zendesk.com/entries/45015454-Nava-SIEM-Agent-1-2-Release-Notes" >}}.

Do you have a favorite audit logging source/destination that we don’t yet support? Feel free to mention it in the comments and we’ll do our best to investigate and address.