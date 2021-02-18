---
title: Airtable GET request (single record response with Record ID in query string or first 20 without)
code: scottbram/CinemaTron/blob/prod/functions/at_get_movie.js
url: scottbram/CinemaTron/
tags:
  - airtable
  - javascript
---

# Airtable GET request (single record response with Record ID in query string or first 20 without)

This working sample will return a single record in the response when a query string value is present (from the key &quot;recid&quot;) or will return the first 20 records when no query string value is present.

Notes:

- Performs no validation on the record ID; invalid values will meet the catch condition
- A sort configuration (by field &quot;Year&quot;) is present, which may simply be omitted or revised to your need
