# iot-trash-compactor-detector

This repo is meant to hold the ioT trash compactor repo for the chainlink hackathon

# Architecture diagram

![image](https://user-images.githubusercontent.com/24983889/197676480-e4ee0e6c-4fce-433b-989c-81ff764ff9a7.png)

# Technology used

1. device simulator- https://nodered.org/ (setup by aldurin)
2.

# How to start device simulator

1. run the script device_simulator/start.sh
   `./start.sh`

This will spin up 3 docker containers.

cedalo/management-center: Pretty UI to view pub/sub topics
cedalo/streamsheets: streams mqtt messages with simulated wind power plant data
eclipse-mosquitto: lightweight mqtt broker

2. navigate to `localhost:8088` to view the management center UI below is the default username/password but you can set the values in device_simulator/docker-compose.yml the env variables: CEDALO_MC_USERNAME & CEDALO_MC_PASSWORD

- username: cedalo
- password: mmcisawesome

below is what you should see once you login

3. Navigate to `localhost:8081` to view streamsheets and hit play button to the right of the box labeled "Wind Turbine"

4. Go back to management UI and go to the topic tree tab you should see the wind turbine data coming through in your topic tree along with their payloads

5. Start node-red using script `./start-node-red.sh`

6. navigate to node-red URL : `localhost:1880`

7. import the configuration for the device simulator file>import > point to node-flow.json in the output menu you should see logs printing out every 1 second

NOTE: (If you see connection failed to mosquitto mqtt broker you may need to update the configuration to point to your private ip address (192.168.1.x use ifconfig to find if on MAC))
