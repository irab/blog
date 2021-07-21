---
title: Connecting to the Cloud in Melbourne - Azure or GCP
date: "2021-07-06T23:27:24.513"
---
Comparing the cost of setting up a private connection to Azure and Google Cloud in Melbourne
<!-- more -->
Google Cloud’s Melbourne region soft-launched last week. I thought I'd take a look at how much it would cost to setup a new interconnect in Melbourne to this new region. Also importantly, how it would compare to connecting to Azure, the only other public cloud provider with a Melbourne region.

## So what's an Interconnect?

Basically it's just a short run of fiber in a co-location facility (Colo) - such as [Next-DC](https://www.nextdc.com/data-centres/m1-melbourne-data-centre) in Melbourne -  from your company network equipment directly to a cloud providers network equipment.

If you don't want to manage your own network gear you can opt to setup a partner interconnect, which just means you connect to the partner network gear but you get can be cheaper to setup but is not dedicated to 
- You will need a  for a connection from an 'On-prem' datacenter to a public cloud provider generally requires two seperate interconnects - to remove a single point of failure from the network.

*An ExpressRoute circuit always has two connections to two Microsoft Enterprise edge routers (MSEEs)*

[pic of setup]

In Google Cloud these are called Cloud Interconnects, in Azure they're called ExpressRoutes.

Pricing for a single instance for both providers is:

### Google Costs Breakdown


### Azure Costs Breakdown

 ExpressRoute Direct (Port Rental): 1x $9,611/mth
 [Global Reach](https://docs.microsoft.com/en-us/azure/expressroute/expressroute-global-reach) Add-on: 1x $6,865/mth

## Costs Compared

I was not really prepared for the huge disparity in cost! I was expecting maybe 30-50% more but the actual difference was insane: connecting to Azure is *457% more* expensive.
