# FCCP Simulation

A simple implementation for FCCP strategy, one of the MEC application migration approach, using [AdvantEDGE](https://github.com/InterDigitalInc/AdvantEDGE) platform.

## Overview
AdvantEDGE provides a built-in Application Mobility Service implementation which we used in this simulation. Therefore, 
using this service, we can be informed of UEs movement. Also, on changes in UE location, its edge server provider alters, 
so we need a way to migrate the states of application between different 
edge servers. To do so, we can consider Filesystem and Container Configuration Preservation (FCCP) as our migration approach.
In this way, as its name indicates, we can preserve both filesystem and container configurations. 
To implement it, we modified the 3rd demo of the AdvantEdge platform. In this demo, we have one UE moving around two different 
edge servers. At the change of the UEs server, the FCCP strategy comes into place and transfers the application state.

![diagram](https://user-images.githubusercontent.com/68470999/264276150-9f5a407e-ebc0-4b74-b87a-c44e16b5b17d.png)