# FCCP Simulation

A simple implementation for FCCP strategy, one of the MEC application migration approaches, using [AdvantEDGE](https://github.com/InterDigitalInc/AdvantEDGE) platform.

## Overview
AdvantEDGE provides a built-in Application Mobility Service implementation which we used in this simulation. Therefore, 
using this service, we can be informed of UEs movement. Also, on changes in UE location, its edge server provider alters, 
so we need a way to migrate the states of application between different 
edge servers. To do so, we can consider Filesystem and Container Configuration Preservation (FCCP) as our migration approach.
In this way, as its name indicates, we can preserve both filesystem and container configurations. 
To implement it, we modified the 3rd demo of the AdvantEdge platform. In this demo, we have one UE moving around two different 
edge servers. At the change of the UEs server, the FCCP strategy comes into place and transfers the application state.

![diagram](https://user-images.githubusercontent.com/68470999/264276150-9f5a407e-ebc0-4b74-b87a-c44e16b5b17d.png)

## Demo Topology

![topology](https://user-images.githubusercontent.com/68470999/264277382-15529a93-9fe6-47f8-93a1-e0d933e1518c.png)

## How It Works
At the start of the migration, the source server performs docker `commit` command which applies a container's file changes or 
settings into a new image. Afterward, it performs docker `save` command to store a new image into a .tar file. After that,
it copies the generated .tar file using linux `scp` command to the target server. Finally, it stops and removes the current running
container. At the target server, the received image will be loaded and started. You can see the corresponding scripts in
`goweb/load.sh` and `goweb/save.sh`.

## Application
In this simulation, we use a simple counter application which can be found in `counter` directory. It's an up counter with 
10 seconds clock intervals.

## Modified Demo
As I said before, we modify and use the 3rd demo of the AdvantEDGE platform. the modified version of it is in the `demo/demo3`
directory. The main change in this demo is in the backend file `demo3_service.go` which implements backend APIs. The added 
code snippet is like this:

```go
package server

...

func amsNotificationCallback(w http.ResponseWriter, r *http.Request) {
	
	... 
	
	if amsTargetId == MEPID {
		_, err := http.Post(MEPIP+"/save", "application/json", nil)
		if err != nil {
			log.Error("Failed to transfer app state to ", MEPIP, ": ", err.Error())
		} else {
			log.Info("State transferred: ", MEPIP)
		}
	}
	
	...
}

...

```

By this change, we can inform target server to start the migration process.

## Map Visualization

![visualization](https://user-images.githubusercontent.com/68470999/264282636-7dd4c32d-7779-4b5a-83bd-0ca0479e4feb.png)