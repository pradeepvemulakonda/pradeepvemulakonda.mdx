---
layout: single
title:  "Master Data Management in Financial sector"
date: "2018-02-08T22:40:32.169Z"
categories: ["design"]
comments: true
classes: wide
---

![MDM](/assets/images/mdm.jpg)

One of the problems with large banks is that they are monsters created by mergers and acquisitions.

The initial plan would be to merge the software stacks in a phased manner.


Identify systems that provide common functionality.
Identify costs associated with maintaining and upgrading the systems and software.
Select a strategic platform.
Start your project to migrate all applications onto the strategic platform.
Start Phase 1
Get lost in business process translation.

Most of the time it is too hard to merge two software stacks and come up with a single unified strategic platform.

Higher Management would see this as a futile exercise and will take a decision to maintain the two systems and merge them in the future to save costs in the short term.

Now, from a customer perspective you are a single bank, but the from the bank perspective you are a different customer in each of their systems.

To simplify things, let us assume a bank which is standalone and does not have the baggage of mergers and acquisitions.

Until unless the bank is established in the 21st century the core software landscape will be a mix of modern and legacy applications.

Most of the time, they will be customised 3rd party products. To make matters worse, the original product will be out of support and with zero documentation.

In this kind of setting, it would be a humongous taskto integrate all the existing systems to provide a unified view of the customer data.

A typical software landscape would be

Core Systems:

Infrastructure | Software | Persistence
------------ | ------------- | -------------
Mainframes, AS400 | Cobol, CICS, IMS |DB2, IMS|
Linux | Java, J2EE, EJB|Db2, Oracle, SQL Server|
Windows | Siebel | Oracle |
Linux | SAP| Oracle |

Customer and staff-facing applications:

Infrastructure | Software | Persistence
------------ | ------------- | -------------
Application Servers on *nix | Java, Spring |DB2, Oracle|
Linux | Java, J2EE, EJB|Db2, Oracle, SQL Server|
Windows | .Net | Sql Server |
Browser | Angular, ReactJs| Redux,flux |
Mainframe | CICS,IMS | IMS, DB2|

To marry all these disparate systems, the data and integration architects will most probably come up with an SOA-based application and data integration architecture.

Service Oriented Architecture works well as an application integration architecture.

For example, the mainframes systems can be integrated with Java front-end system by using an Enterprise service bus or a Webservice exposed from CICS.

But the data is still restricted to the interface the core backend system exposes to the frontend.

Over the courseof time, all new requirements will be catered in the front end layer rather than making changes to the core systems. The reason can be cost, flexibility and human resource.

This leads to data fragmentation and the concept of "single source of truth" no longer applies.

To counter this the organisation will create a centraliseddatawarehouse to house all organisation data. This would help in consolidating data at a single place for consumption by the organisation, but most frequently the data is not real time.

The aggregated data in Data warehouseswould be flat, complicated and without any logical structure. This data would then be used only for offline reporting or data analysis.

Even after such complex integrations and data structures, the organisation cannot make any real times decisions on the data.

To solve this problem there are many products in the market which can help organisations better use their business data to achieve expected business outcomes.

Some of them are

A Hadoop cluster to house enterprise business data.
A real-time global commit log for stream processing.
A graph database/structure to house customer data along with entity relationships.
A NoSQL database like SAP HANA.
A typical implementation of a Master Data Management system can be as below


All enterprise data will go through a single communication highway, the Global Commit Log. In this example, I will use Apache Kafka as a distributed commit log.
All the systems first write any of the data updates into the commit log before clients to the log read the data and place them into their individual data stores.
Datawarehouse and Hadoop systems stream data from Apache Kafka at their own pace.
All business entities along with their relationships are moved to a global Graph Database. Example: Neo4j.
Any updates to the entity will be reflected in the Graph on a near real-time basis.
This Graph will be used for any read queries related to organisation data.
All updates/additions still flow through Kafka.
Graph queries can be cached and any updates can be propagated by a push mechanism.
