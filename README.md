# iot-trash-compactor-detector

This repo is meant to hold the ioT trash compactor repo for the chainlink hackathon

# Architecture diagram

![image](https://user-images.githubusercontent.com/24983889/197676480-e4ee0e6c-4fce-433b-989c-81ff764ff9a7.png)

# Technology used

1. Raspberry Pi 3B - device simulator- https://nodered.org/ (setup by aldrin)
- Minimum Requiremments: Rapsberry Pi with any Raspbian IoS version
- Micro SB card 8GB minimum
- Public IP address if remote access is required.
- Remote Access tool like VNC server
- Make sure you have a keyboard, mouse and monitor to plug into the Raspberry for initial configuration
2. Install node-red for raspbian
- basic command line > apt-get install nodered  
- additional details @ https://nodered.org/docs/getting-started/raspberrypi
2.1 Network configurations
- if wifi is unstable, add modification in etc/dhclient.conf are needed
- add this line into it send fqdn.fqdn = gethostname();
- or
- make sure dhclient.conf looks similar to this and includes all the "send" and "request" formats as below:
         send host-name = gethostname();
         send fqdn.fqdn = gethostname();
         #send dhcp-client-identifier 1:0:a0:24:ab:fb:9c;
         #send dhcp-lease-time 3600;
         #supersede domain-name "fugue.com home.vix.com";
         #prepend domain-name-servers 127.0.0.1;
         request subnet-mask, broadcast-address, time-offset, routers,
                 domain-name, domain-name-servers, domain-search, host-name,
                 netbios-name-servers, netbios-scope, interface-mtu,
                 rfc3442-classless-static-routes, ntp-servers,
                 dhcp6.domain-search, dhcp6.fqdn,
                 dhcp6.name-servers, dhcp6.sntp-servers;
         #require subnet-mask, domain-name-servers;

3. After wifi and node-red install :
- The following commands are provided to work with the service:

         node-red-start - this starts the Node-RED service and displays its log output. Pressing Ctrl-C or closing the window does not stop the service; it keeps running in the background
         node-red-stop - this stops the Node-RED service
         node-red-restart - this stops and restarts the Node-RED service
         node-red-log - this displays the log output of the service
 
 use this command line  to enable auto restart of node-red services
         sudo systemctl enable nodered.service
and to disable it:
      sudo systemctl disable nodered.service

4. Once Node-RED is running you can access the editor in a browser.

If you are using the browser on the Pi desktop, you can open the address: http://localhost:1880.

5. Information for this project and ONLY FOR THE Interest participants and DO NOT share.
>>>node-red user: trashcompactor  
>>>paswd: chainlink 
>>>paraphrase for flows: web3
>>>users: root and pi-top (both with chainlink as pwd)

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
