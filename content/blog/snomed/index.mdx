---
layout: single
title:  "Snomed-CT"
date: "2018-02-08T22:40:32.169Z"
categories: ["design"]
comments: true
classes: wide
---

![Snomed](/assets/images/snomed-ct.jpg)

Ever wonder why specifications from a standard body are complex? Have a look at Java Specifications or try understanding a new declarative language, they are mired in complex functionality and assumptions.

A couple of years ago, I came across SNOMED-CT and found that not all specifications are made equal. Being an IT professional, I expected such kind of work from an IT major, but surprisingly it came from the medical community.
SNOMED-CT is aspecification for identifying, defining and describing medical terms. This should have been one of the complex specification in the known IT world but is one of the simplest.

The authors of this specification understood the underlying structure of the data should closely represent the domain model, which is the medical terminology context. The following is the basis for the specification(I will use terminology and specification interchangeably in this blog):

All components in the terminology are represented by Concepts.
Any relations between these concepts are defined by relationships.
All the components have a human/system readable description.

That's it! This is the entire gist of the specification. The underlying data structure is simple and concise and does not blur the distinction between data representation vs interpretation.

The goal of this article is to go through the data representation of the SNOMED-CT terminology.

The main Content components in SNOMED

Concepts
Descriptions
Relationships

There are other supporting components such as

Reference sets
Extensions

Let's go through the main concepts one by one

Concept:
A clinical idea that is associated with a unique identifier. Each concept is associated with an FSN.

FSN(Fully Specified Name):
An FSN is used to describe a clinical concept and is associated stronglywith a concept. Each concept will have one and only one FSN in one locale. Authoritative description of the concept type.

Identifier: A concept identifier is a numeric identifier which is up to 18 digits.

Each concept is associated with one or more "description".

Description:

   A description describes the associatedconcept or relationship. The relationship between description and concept is managed by a reference to the concept identifier. Similar to a Foreign Key relationship on the Concept Identifier.
   Descriptions also have a unique identifier which follows a different pattern to the concept identifier.

There are different types of descriptions that can be associated with a concept.

Fully Specified Name(FSN)
Synonym
Optional Description of other types


The description is in Unicode, so can be used to describe concepts in different locales.

Relationship:

   A relationship identifies the associated relationships between concepts. A relationship is identified by a unique identifier which follows a different pattern than a concept or descriptions identifier.

Each relationship has a relationship type which identifies the type of relationship between two concepts. 

The relationship is of the form (concept)---[relationship]---(concept). The concepts are identified by the concept identifiers.

For a detailed understanding of the SNOMED-CT terminologyplease visit [SNOMED CT](https://confluence.ihtsdotools.org/display/DOCSTART/5.+SNOMED+CT+Logical+Model)

In the next article, will see how to persist the Snomed data into a Graph DB.

