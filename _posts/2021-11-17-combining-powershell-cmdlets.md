---
title: Combining PowerShell Cmdlets
author: Tristan Madden
categories: [PowerShell, AzureAD]
tags: [exchange online management, azure]
---

I found myself in a position where I needed to generate a report to troubleshoot an email issue for a client. Some data could only be retrieved from the ExchangeOnlineManagement module, and other data only from the AzureAD module. This PowerShell script demonstrates how to use both in tandem.

<script src="https://gist.github.com/Trimad/23d1f60c518fda9b4265edfe0456d8d9.js"></script>