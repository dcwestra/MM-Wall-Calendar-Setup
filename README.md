# DCWMMsetup
My custom set up for my magic mirror dashboard wall calendar on Pi Zero 2W

![29FF0B60-9DDB-4495-9144-485B64C2ED63](https://user-images.githubusercontent.com/104077563/166502205-46e67ab6-69eb-4f78-abab-e0d337fb4b9f.JPG)

Many asked for a step by step guide for how I created my set-up. So here it is. I did use a fair number of other tutorials, so I will not repeat their work and will link to their steps when needed. I will make it as beginner friendly as possible.

1) Install full GUI OS on your raspberry pi. I personally recommend DietPi because its light weight and has great CLI menus to set everything up.
  - DietPi starts headless but the initial set-up process for DietPi will run you through CLI menus that will give you the option to install different GUIs depending on your need. I chose the lightest weight option, which is LXDE.
2) If using a Pi Zero 2 W, ssh in for install steps and overclock using 

```bash
sudo dietpi-config
```

Then navigate the menu to performance options > overclocking > high

  - Overclocking helps ensure the MagicMirror install and subsequent reboots doesn't overwhelm and freeze the Pi Zero 2. Once installed, you can bring the overclocking back down.
  - The CPU on both the Pi Zero and Zero2 are powerful enough to run the software. The issue is the ammount of ram. It fills too quickly and memory swap is used. Overclocking helps it complete this process faster, preventing freezing and hang ups.

3) Install manually with this automated script:
            
```bash
curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh
```

  - some tutorials have you add in an script for auto-start. Current versions of this script from sdetweil include that start up, so its not needed.
  - I know running pre configured scripts is sus, but this guy does a lot of development and support for MagicMirror, so he is credible and trustworthy.


4) navigate to the modules folder: 

```bash
cd ~/MagicMirror/modules
```

5) Install MMM-CalendarExt2. Check out thier page for configurations: https://github.com/MMM-CalendarExt2/MMM-CalendarExt2

```bash
cd ~/MagicMirror/modules
git clone --depth=1 https://github.com/MMM-CalendarExt2/MMM-CalendarExt2
cd MMM-CalendarExt2
npm install
```

6) Install MMM-MicrosoftToDo using their install guide: https://github.com/thobach/MMM-MicrosoftToDo
    -DO THIS FIRST: follow the install guide carefully. There is a lot of prep work, but it does work. When it says to name the app, just call it Magic Mirror.
    
```bash
cd ~/MagicMirror/modules
git clone https://github.com/thobach/MMM-MicrosoftToDo.git
cd MMM-MicrosoftToDo && npm install
```

7) Copy in the code you want from my config.js and custom.css files.
    
8) I also set a schedule for turning the output to the monitor on and off through crontab. This way the monitor automatically turns off when I am sleeping.

```bash
crontab -e
```

Then add this at the bottom:

```bash
0 22 * * * export DISPLAY=:0.0 && xrandr --output HDMI-1 --off  (Turns the monitor off)
0 6 * * * export DISPLAY=:0.0 && xrandr --output HDMI-1 --auto  (Turns the monitor on)
```

Note: If testing the display on and off through SSH with this modified command:

```bash
export DISPLAY=:0.0 xhost + && xrandr --output HDMI-1 --off
export DISPLAY=:0.0 xhost + && xrandr --output HDMI-1 --auto
```

  - Because we are running the commands locally through crontab 'xhost +' is not needed.

9) Added optimization for running minimally, you will need to edit and update the mm.sh file:

copied from sdetweil (seriously, trust this guy).

Especially low powered devices like the Pi Zero W might struggle running MagicMirror with the Chromium browser. A simpler browser like Midori might be a good alternative in this case. To switch to using the Midori browser change the `MagicMirror/installers/mm.sh` file to include the `external_browser` variable like:

```bash
cd ~/MagicMirror
export external_browser=midori
DISPLAY=:0 npm start
```
    
Let me know if you have any questions and I will elaborate.

Thanks!
