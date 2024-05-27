(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{395:function(e,t,o){e.exports=o.p+"assets/img/YouAreHere-DriveVelocityPID-quarter.a7b479ff.png"},396:function(e,t,o){e.exports=o.p+"assets/img/example-dashboard-half.a68901f8.jpg"},456:function(e,t,o){"use strict";o.r(t);var i=o(46),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"archive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#archive"}},[e._v("#")]),e._v(" Archive")]),e._v(" "),i("p",[e._v("These are archived pages and "),i("em",[e._v("should not be used")]),e._v(" unless you really know what you are doing.")]),e._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("DriveVelocityPID tuning is available only for archival reasons and "),i("em",[i("strong",[e._v("should not be used on your robot")])]),e._v(". Use "),i("RouterLink",{attrs:{to:"/feedforward-tuning.html"}},[e._v("feedforward control")]),e._v(" on your robot instead.")],1)]),e._v(" "),i("h2",{attrs:{id:"why-is-drivevelocitypid-not-used"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#why-is-drivevelocitypid-not-used"}},[e._v("#")]),e._v(" Why is DriveVelocityPID not used?")]),e._v(" "),i("p",[e._v("DriveVelocityPID uses the internal PID controller in the SDK, meaning that the tuning process is quite fickle. While you technically can achieve good results with this tuning method, using "),i("RouterLink",{attrs:{to:"/feedforward-tuning.html"}},[e._v("feedforward")]),e._v(" is much easier to tune and will result in the same accuracy. DriveVelocityControl can result in unfixable oscillation, especially once you integrate the heading and follower PIDs, and often takes much longer to tune even when you do not have issues.")],1),e._v(" "),i("h2",{attrs:{id:"drivevelocitypid-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#drivevelocitypid-tuning"}},[e._v("#")]),e._v(" DriveVelocityPID tuning")]),e._v(" "),i("HideAyudeWrapper",{attrs:{skipIfDriveEncoders:!0}},[i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("This section should be skipped because you have chosen the option not to use drive encoders.")])])]),e._v(" "),i("figure",{attrs:{align:"center"}},[i("img",{attrs:{src:o(395),alt:"You are on the drive velocity pid step"}}),e._v(" "),i("figcaption",{staticClass:"mt-2 text-gray-600 text-center"},[e._v("You are here")])]),e._v(" "),i("p",[e._v("Tuning the Velocity PID can be one of the more frustrating parts of Road Runner. This is required for accurate path following. However, intuition on how a PID controller works and what to do will help alleviate that frustration and hopefully make this a smooth process.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("You can press X (on the Xbox and Logitech gamepads, square on the PS4 dualshock) to pause the tuning process and enter driver control.")]),e._v(" "),i("p",[e._v("Press A (on the Xbox and Logitech gamepads, X on the PS4 dualshock) to cede control back to the tuner.")]),e._v(" "),i("p",[e._v("If your bot drifts off path, simply enter driver control and drive your bot back to the initial position.")])]),e._v(" "),i("h2",{attrs:{id:"tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[e._v("#")]),e._v(" Tuning")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Before you begin tuning, start the RC phone and open up Dashboard. Connect to the RC phone's wifi network. The password to the network is located in the "),i("code",[e._v("Program and Manage")]),e._v(" menu.")])]),e._v(" "),i("li",[i("p",[e._v("In your browser, navigate to "),i("code",[e._v("192.168.49.1:8080/dash")]),e._v(" with a phone RC or "),i("code",[e._v("192.168.43.1:8080/dash")]),e._v(" with a Control Hub.")])]),e._v(" "),i("li",[i("p",[e._v("Before you begin tuning the velocity PID opmode, we're going to run a quick tuner that gives us the empirical kF value and maximum velocity the bot can travel. Select the "),i("code",[e._v("MaxVelocityTuner")]),e._v(".")]),e._v(" "),i("ul",[i("li",[e._v("The "),i("code",[e._v("MaxVelocityTuner")]),e._v(" will run at max speed for the specified "),i("code",[e._v("RUNTIME")]),e._v(". By default, the bot will run "),i("strong",[e._v("full speed")]),e._v(" for 2 seconds. "),i("strong",[e._v("Ensure that you have enough room cleared for this!")]),e._v(" You may adjust "),i("code",[e._v("RUNTIME")]),e._v(" through the code or through Dashboard.")])])]),e._v(" "),i("li",[i("p",[e._v("Run "),i("code",[e._v("MaxVelocityTuner")]),e._v('. After it has completed its sequence, it will print a "Max Velocity" value and a "Voltage Compensated kF" value.')]),e._v(" "),i("ul",[i("li",[e._v('"Max Velocity" is the maximum velocity your bot can travel while under load and at the battery level this opmode is ran at. You can use this value as your '),i("code",[e._v("MAX_VEL")]),e._v(" in "),i("code",[e._v("DriveConstants")]),e._v(". It is recommended to set your "),i("code",[e._v("MAX_VEL")]),e._v(" value to 90-95% of the number you just got, just to leave some leeway.")]),e._v(" "),i("li",[e._v("Take note of the "),i("code",[e._v("Voltage Comepnsated kF")]),e._v(" value")]),e._v(" "),i("li",[e._v("If your "),i("code",[e._v("MaxVelocityTuner")]),e._v(" spins in a circle, you have not reversed the motors on your drive train properly. Follow the directions "),i("RouterLink",{attrs:{to:"/drive-constants.html#samplemecanumdrive-motor-direction"}},[e._v("here")]),e._v(".")],1)])]),e._v(" "),i("li",[i("p",[e._v("In Dashboard, look for the "),i("code",[e._v("DriveConstants")]),e._v(" dropdown on the right. Press it and it should open a drop down. Then, look for the "),i("code",[e._v("MOTOR_VELO_PID")]),e._v(" dropdown. Press that to open it. You should be presented with "),i("code",[e._v("p")]),e._v(", "),i("code",[e._v("i")]),e._v(", "),i("code",[e._v("d")]),e._v(", and "),i("code",[e._v("f")]),e._v(" fields. Fill the "),i("code",[e._v("f")]),e._v(' field in with the "Voltage Compensated kF" value from earlier.')])]),e._v(" "),i("li",[i("p",[e._v("Now, start up the "),i("code",[e._v("DriveVelocityPIDTuner")]),e._v(" opmode. The bot will travel travel back and forth in a straight(ish) line over and over.")]),e._v(" "),i("ul",[i("li",[e._v("The default "),i("code",[e._v("DISTANCE")]),e._v(" the bot travels is 72 inches. Therefore, ensure you have at least that specified distance's worth of clearance (plus another foot, ideally). You may adjust the "),i("code",[e._v("DISTANCE")]),e._v(" value in the dashboard variable configuration sidebar or directly in the file itself if you do not have enough space. Although the bot is supposed to travel in a straight line, it will slowly drift to one side. This can be caused by a number of reasons from uneven weight distribution to the velocity PID simply being untuned. You need not worry about this as enabling the heading PID later will fix this during actual path following. I recommend clearing a space 2-3 field mats wide to help address the drift. If you have a path that is only 1 mat wide, it will keep falling off the edge and you need to keep resetting its position. If this happens, follow the tip at the top of the page and manually reset position via driver override.")])])])]),e._v(" "),i("p",[e._v("Your page should look something like this:")]),e._v(" "),i("figure",{attrs:{align:"center"}},[i("div",{staticClass:"relative"},[i("img",{attrs:{src:o(396),alt:"Image depicting FTC Dashboard in the browser"}}),e._v(" "),i("div",{staticClass:"absolute top-0 left-0 w-full h-full pointer-events-none",staticStyle:{"box-shadow":"inset 0 2px 6px 2px rgba(0, 0, 0, 0.06)"}})]),e._v(" "),i("figcaption",{staticClass:"mt-2 text-sm text-gray-600 text-center"},[e._v("Example dashboard"),i("br"),e._v("(Ignore the graph content. This is just a sample of the page layout)")])]),e._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[i("p",[e._v("Run the opmode. The graph will not show up until you have started it.")]),e._v(" "),i("ul",[i("li",[e._v("Remeber to turn off the 30 second autonomous timer!")]),e._v(" "),i("li",[e._v("Make sure to click the graph button "),i("em",[e._v("after")]),e._v(" you run the program. If the graph doesn't show up and instead shows a number of checkboxes, make sure you have clicked the "),i("code",[e._v("targetVelocity")]),e._v(" and "),i("code",[e._v("velocity0")]),e._v(" checkbox. Ignore the others. This will make tuning easier.")])])]),e._v(" "),i("li",[i("p",[e._v("In the "),i("code",[e._v("DriveVelocityPIDTuner")]),e._v(" dropdown, ensure that the "),i("code",[e._v("DISTANCE")]),e._v(" variable is big enough so the "),i("code",[e._v("targetVelocity")]),e._v(" line has a plateau. If it resembles a series of triangles, increase the "),i("code",[e._v("DISTANCE")]),e._v(". There should be a decently straight/flat portion in the graph, as shown in the sample dashboard above. This is so we can tune the behavior during the coasting phase as well.")])]),e._v(" "),i("li",[i("p",[e._v("Direct your attention back to the "),i("code",[e._v("MOTOR_VELO_PID")]),e._v(" dropdown in the right sidebar from earlier. You will be tuning the PIDF gains found there.")])]),e._v(" "),i("li",[i("p",[e._v("At this point, once you have run the opmode, the bot should be moving back and forth along the distance specified in the opmode file. The goal of the tuning process is to match "),i("code",[e._v("velocity0")]),e._v(" to the "),i("code",[e._v("targetVelocity")]),e._v(" line. Edit the values in the text boxes and press enter. They will live update and you should see the effects take place on the bot.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Recommended tuning process")]),e._v(":")]),e._v(" "),i("ol",[i("li",[e._v("Set all the PID gains to zero. "),i("code",[e._v("f")]),e._v(" should be set to the value we got earlier from "),i("code",[e._v("MaxVelocityTuner")]),e._v(".")]),e._v(" "),i("li",[e._v("At this point, the "),i("code",[e._v("velocity0")]),e._v(" line should be reaching to the top of the plateau. If it's overshooting (too high), lower the "),i("code",[e._v("kF")]),e._v(" value. If our measured velocity does not reach the setpoint ("),i("code",[e._v("targetVelocity")]),e._v("), increase "),i("code",[e._v("kF")]),e._v(". However, the default "),i("code",[e._v("kF")]),e._v(" value should be good enough.")]),e._v(" "),i("li",[e._v("At this point, the top of your "),i("code",[e._v("velocity0")]),e._v(" graph and the top of the "),i("code",[e._v("targetVelocity")]),e._v(' graph should match. However, there should be a lot of "phase lag," where the accelerating/decelerating portions (the up/down slopes) lag behind the '),i("code",[e._v("targetVelocity")]),e._v(". Your graph is essentially out of phase. We will be raising the "),i("code",[e._v("p")]),e._v(" value to try and minimize this phase lag.")]),e._v(" "),i("li",[e._v("Slowly increase "),i("code",[e._v("p")]),e._v(" to try and get the slopes to match the target.")]),e._v(" "),i("li",[e._v("Increase "),i("code",[e._v("d")]),e._v(" to try and dampen any oscillations. Increasing "),i("code",[e._v("d")]),e._v(" too far will simply increase oscillations. You should really only need minor "),i("code",[e._v("d")]),e._v(" adjustments.")]),e._v(" "),i("li",[e._v("It is important to realize that raising "),i("code",[e._v("p")]),e._v(" will only get you so far in reducing the phase lag. There will be a certain point where you can keep raising it and nothing really improves. You will just end up increasing oscillations and only marginally reducing the phase lag. This is due to the lack of "),i("code",[e._v("kA")]),e._v(" adjustment in the REV Hub's internal motor controller. You must also realize that there will be a large bump on the deceleration portions of the graph. You cannot fix this. This is due to some quirks in the REV Hub's motor controller. Realizing the limitations of the internal PIDF controller is very important in keeping your sanity. There will be a constant small amount of phase lag no matter what you do and that's okay. Do not try and tune to perfection.")]),e._v(" "),i("li",[e._v("You should not touch the "),i("code",[e._v("i")]),e._v(" gain. The "),i("code",[e._v("i")]),e._v(" gain tends to cause many problems and its use is technically incorrect. See the tip below.")]),e._v(" "),i("li",[i("strong",[e._v("Side Note:")]),e._v(' The official Road Runner docs recommend that you should "prioritize eliminating phase lag even at the cost of some extra oscillations." However, I personally feel that it is better to try and minimize oscillations, especially towards the zero velocity (middle of the graph). I found that eliminating phase lag, especially at high speeds, would cause very jittery motion, most likely due to the Rev Hub\'s odd motor control. Hit us up in the '),i("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC Discord"),i("OutboundLink")],1),e._v(" if you are interested in further technical details. My personal advice would be to try your best to minimize phase lag but if it causes your robot to visibly jitter, loosen up on the tuning and allow for the translational PID to fix any phase lag discrepancies.")]),e._v(" "),i("li",[i("strong",[e._v("Any adjustments in dashboard need to be copied over to the "),i("code",[e._v("DriveConstants.java")]),e._v(" file under the equivalent variable name. Dashboard adjustments are temporary and will reset once you restart the opmode. Remember this!! It is very frustrating to get decent tunings and forgetting to save them in "),i("code",[e._v("DriveConstants.java")]),e._v("!")])]),e._v(" "),i("li",[e._v("Check the tuning simulator to see how each gain affects the behavior.")])])])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[i("em",[e._v("\"Velocity PID Controllers typically don't need "),i("code",[e._v("kD")]),e._v('"')]),e._v(" (Veness, Tyler. "),i("em",[e._v("Control Engineering in FRC")]),e._v(". pg. 17). However, it seems to be beneficial for FTC bots due to some feedforward and motor controller weirdness.")]),e._v(" "),i("p",[e._v("On a tangential note, you shouldn't need to use "),i("code",[e._v("i")]),e._v(".")]),e._v(" "),i("blockquote",[i("p",[e._v('"Adding an integral gain to the controller is an incorrect way to eliminate steady-state error. A better approach would be to tune it with an integrator added to the plant, but this requires a model. Since we are doing output-based rather than model-based control, our only option is to add an integrator to the controller."')])]),e._v(" "),i("p",[e._v("If you feel the need to add "),i("code",[e._v("i")]),e._v(", you should be increasing "),i("code",[e._v("f")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Your "),i("code",[e._v("MaxVelocityTuner")]),e._v(" is going backwards")]),e._v(" "),i("ul",[i("li",[e._v("Ensure that your wheel are reversed correctly. Check "),i("RouterLink",{attrs:{to:"/drive-constants.html#samplemecanumdrive-motor-direction"}},[e._v("the goBILDA mecanum chart")]),e._v(" to use as a reference while debugging")],1)])]),e._v(" "),i("li",[i("p",[e._v("One of the velocity lines are going the opposite way and not following "),i("code",[e._v("targetVelocity")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("The polarity to the motors are reversed. The encoder is not reading the same direction as the motor is actually turning. Switch the black and red cable on your motor. Or, multiply the encoder readings in your "),i("code",[e._v("SampleMecanumDrive")]),e._v(" by -1.")])])]),e._v(" "),i("li",[i("p",[e._v("The StraightTest or DriveVelocityPID opmode keeps overshooting and tweaking variables in "),i("code",[e._v("DriveConstants.java")]),e._v(" just doesn't change anything:")]),e._v(" "),i("ul",[i("li",[e._v("Try lowering the "),i("code",[e._v("MAX_VEL")]),e._v(" in "),i("code",[e._v("DriveConstants.java")]),e._v(". Set it to a really low value at first to confirm that this is the problem.")])])]),e._v(" "),i("li",[i("p",[e._v("Miscellaneous motor direction problems:")]),e._v(" "),i("ul",[i("li",[e._v("See "),i("RouterLink",{attrs:{to:"/drive-constants.html#samplemecanumdrive-motor-direction"}},[e._v("reversing motor directions")])],1),e._v(" "),i("li",[e._v("Refer to the "),i("a",{attrs:{href:"https://github.com/acmerobotics/road-runner-quickstart/blob/quickstart1/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/drive/opmode/MotorDirectionDebugger.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Motor Direction Debugger opmode"),i("OutboundLink")],1),e._v(" if you are struggling to debug your motor config. The Motor Direction Debugger allows you to run your motors one by one. Remove the "),i("code",[e._v("@Disabled")]),e._v(" lin on line "),i("code",[e._v("41")]),e._v(" and follow the directions in the opmode comments. Use this to diagnose your motor config problem and fix appropriately.")])])])]),e._v(" "),i("h2",{attrs:{id:"pid-tuning-simulator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pid-tuning-simulator"}},[e._v("#")]),e._v(" PID Tuning Simulator")]),e._v(" "),i("ClientOnly",[i("VeloPIDTuning-PIDTuningSimulator",{staticClass:"m-4",attrs:{graphHeight:"30rem"}})],1),e._v(" "),i("p",[e._v("Play around with the gains to see how each one affects the graph! Try and tune this simple example. This graph is very similar to what you will be doing while actually tuning the bot so having an understanding of how the process will go will be beneficial.")]),e._v(" "),i("p",[e._v("Tip: Press enter in the text input for your new gain to take effect (just like FTC-Dashboard!).")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v('This is a very very rudimentary "simulator." It is only meant to give you a basic high level understanding of how the gains affect the behavior of the graph. It is in no way trying to accurately simulate the Rev Hub\'s motor controller as that presents its own problems. This sim is based on a simple DC Motor model with arbitrary constants. The sim will not behave exactly like how your actual tuning will go but it is meant to give you a decent intuition of how it works. It\'s much easier than actual tuning as the kF value is very effective in the sim. Much less so on an actual bot due to the Rev Hub motor controller weirdness. Also, I am very aware of the bugs it has. That\'s what the "reset" button is for 😛')])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Here are a few good videos on the topic of PID controllers. Highly recommend watching these as an intuitive understanding of the PID controller and the behavior of each gain will make tuning much easier.")]),e._v(" "),i("p",[e._v("The first video is very good in my opinion. You can skip the initial 3-4 minutes but the latter portion of the video goes over the behavior of each gain. The second video also does the same.")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=XfAt6hNV8XM",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=XfAt6hNV8XM"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=6OH-wOsVVjg",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=6OH-wOsVVjg"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("a",{attrs:{href:"https://www.youtube.com/watch?v=0vqWyramGy8",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=0vqWyramGy8"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("This article is also pretty neat:")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://blog.wesleyac.com/posts/intro-to-control-part-one-pid",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.wesleyac.com/posts/intro-to-control-part-one-pid"),i("OutboundLink")],1)])]),e._v(" "),i("h1",{attrs:{id:"temporary-informal-video"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#temporary-informal-video"}},[e._v("#")]),e._v(" Temporary Informal Video")]),e._v(" "),i("p",[e._v("Temporary informal video while the polished, edited videos are in production. Quality is atrocious but hopefully it helps 😃")]),e._v(" "),i("div",{staticClass:"flex justify-center"},[i("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/2UkeLsQuCOw",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])],1)}),[],!1,null,null,null);t.default=a.exports}}]);