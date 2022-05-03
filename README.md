# DCWMMsetup
My custom set up for my magic mirror dashboard wall calendar

![29FF0B60-9DDB-4495-9144-485B64C2ED63](https://user-images.githubusercontent.com/104077563/166502205-46e67ab6-69eb-4f78-abab-e0d337fb4b9f.JPG)

Many asked for a step by step guide for how I created my set-up. So here it is. I did use a fair number of other tutorials, so I will not repeat thier work and will link to thier steps when needed. I will make it as beginner friendly as possible.

1) Install PiOS or other full GUI OS on your raspberry pi.
2) If using a Pi Zero 2 W, ssh in for install steps and overclock to 1.4ghz - https://www.tomshardware.com/how-to/overclock-raspberry-pi-zero-2-w
3) Install manually with magicmirror.builders or this automated script: bash -c "$(curl -sL https://raw.githubusercontent.com/sdetweil/MagicMirror_scripts/master/raspberry.sh)"
4) Follow this guide to finish installing Magic Mirror - https://www.magicmirrorcentral.com/complete-raspberry-pi-magic-mirror-tutorial/
5) navigate to the modules folder: cd ~/MagicMirror/modules
6) Install MMM-CalendarExt2 using their install guide: https://github.com/MMM-CalendarExt2/MMM-CalendarExt2
7) Install MMM-MicrosoftToDo using thier install guide: https://github.com/thobach/MMM-MicrosoftToDo
    -Note: follow the install guide carefully. Its a lot of work, but it does work. When it says to name the app, just call it Magic Mirror.
8) Copy in the code you want from my config.js and custom.css files.
    -Note: the config.js file isnt complete, just the module section. There will be other code in your default config file that must also remain.
    
I also set a schedule for turning the output to the monitor on and off through crontab. Edit crontab by typing 'crontab -e' into the terminal

0 22 * * * vcgencmd display_power 0  (Turns output off and monitor goes into sleep mode)

0 6 * * *  vcgencmd display_power 1  (Turns monitor back on)
    
Let me know if you have any questions and I will elaborate.

Thanks!
