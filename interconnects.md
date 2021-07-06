Interconnect Blog

With the soft-launch of Google Cloud’s Melbourne region last week, I was wondering what the cost would be to setup a new interconnect between a data center in Melbourne and how it compared to connecting to Azure, the only other public cloud provider that has a presence in Melbourne.

I was not really prepared for the huge disparity in cost! I was expecting something maybe in the 30-50% range but the differential is insane - connecting to Azure is *357% more* expensive.

The setup for a connection from an 'On-prem' datacenter to a public cloud provider requires usually requires two interconnections - to remove a single point of failure from the network.

[pic of setup]

In Google Cloud these are called Cloud Interconnects, in Azure they're called ExpressRoutes.

Pricing for a single instance for both providers is:
 - Azure: 
 ExpressRoute Direct (Port Rental): 1x $9,611/mth
 
 Global Reach Add-on: 1x $6,865/mth
