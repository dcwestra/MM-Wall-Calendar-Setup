# DCWMMsetup
My custom set up for my magic mirror dashboard wall calendar on Pi Zero 2W

![29FF0B60-9DDB-4495-9144-485B64C2ED63](https://user-images.githubusercontent.com/104077563/166502205-46e67ab6-69eb-4f78-abab-e0d337fb4b9f.JPG)

Many asked for a step by step guide for how I created my set-up. So here it is. I did use a fair number of other tutorials, so I will not repeat their work and will link to their steps when needed. I will make it as beginner friendly as possible.

1) Install full GUI OS on your raspberry pi. I personally recommend DietPi because its light weight and has great CLI menus to set everything up.
  - the initial set-up process for DietPi will run you through CLI menus that will give you the option to install different GUIs depending on your need. I chose the lightest weight options.
2) If using a Pi Zero 2 W, ssh in for install steps and overclock using dietpi-config > performance options > overclocking > high
  - Overclocking helps ensure the MagicMirror install and subsequent reboots doesn't overwhelm and freeze the Pi Zero 2. 
3) Install manually with magicmirror.builders or this automated script:
            
       bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
4) Follow this guide to finish installing Magic Mirror - https://www.magicmirrorcentral.com/complete-raspberry-pi-magic-mirror-tutorial/
5) navigate to the modules folder: 

       cd ~/MagicMirror/modules
6) Install MMM-CalendarExt2 using their install guide: https://github.com/MMM-CalendarExt2/MMM-CalendarExt2
7) Install MMM-MicrosoftToDo using their install guide: https://github.com/thobach/MMM-MicrosoftToDo
    -Note: follow the install guide carefully. Its a lot of work, but it does work. When it says to name the app, just call it Magic Mirror.
8) Copy in the code you want from my config.js and custom.css files.
    -Note: the config.js file isn't complete, just the module section. There will be other code in your default config file that must also remain.
    
I also set a schedule for turning the output to the monitor on and off through crontab. This way the monitor automatically turns off when I am sleeping.

    crontab -e
Then add this at the bottom:

    0 22 * * * export DISPLAY=:0.0 && xrandr --output HDMI-1 --off  (Turns the monitor off)
    0 6 * * * export DISPLAY=:0.0 && xrandr --output HDMI-1 --auto  (Turns the monitor on)

Note: If testing the display on and off in SSH, after 'export DISPLAY=:0.0' you will need to run 'xhost +' to allow the other commands to work. Because we are running the commands locally through crontab 'xhost +' is not needed.
    
Let me know if you have any questions and I will elaborate.

Thanks!
