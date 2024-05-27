(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{398:function(e,t,o){e.exports=o.p+"assets/img/YouAreHere-FFTuning-quarter.9834e660.png"},399:function(e,t,o){e.exports=o.p+"assets/img/example-dashboard-half.8c159976.jpg"},400:function(e,t,o){e.exports=o.p+"assets/img/dawgma-tuning-guide.b758655a.jpg"},401:function(e,t,o){e.exports=o.p+"assets/img/deetz-tuning-half.da5fb022.jpg"},458:function(e,t,o){"use strict";o.r(t);var a=o(46),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"feedforward-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedforward-tuning"}},[e._v("#")]),e._v(" Feedforward Tuning")]),e._v(" "),a("figure",{attrs:{align:"center"}},[a("img",{attrs:{src:o(398),alt:"You are on the feedforward tuning step"}}),e._v(" "),a("figcaption",{staticClass:"mt-2 text-center text-gray-600"},[e._v("You are here")])]),e._v(" "),a("p",[e._v("Tuning the feedforward controller for accurate following is necessary for for accurate path following. Poor tuning of the feedforward controller will result in errors later along the line. Although the Road Runner quickstart comes with both an automatic tuner and a manual tuner, many find that the automatic tuner does not provide optimal results. The automatic tuner isn't able to properly calculate "),a("code",[e._v("kA")]),e._v(". However, you are free to try and run it and use the gains it produces. I would recommend manually tuning those results afterwards.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can press X (on the Xbox and Logitech gamepads, square on the PS4 dualshock) to pause the tuning process and enter driver control.")]),e._v(" "),a("p",[e._v("Press A (on the Xbox and Logitech gamepads, X on the PS4 dualshock) to cede control back to the tuner.")]),e._v(" "),a("p",[e._v("If your bot drifts off path, simply enter driver control and drive your bot back to the initial position.")])]),e._v(" "),a("h2",{attrs:{id:"tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[e._v("#")]),e._v(" Tuning")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("It is likely that your robot will slowly drift off course throughout the tuning process, this is normal and will be fixed later during heading and translational pid tuning.")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The first step is to run the "),a("code",[e._v("ManualFeedforwardTuner")]),e._v(" opmode via the RC.")])]),e._v(" "),a("li",[a("p",[e._v("Then, connect to the RC phone's wifi network. The password to the network is located in the "),a("code",[e._v("Program and Manage")]),e._v(" menu.")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to "),a("code",[e._v("192.168.49.1:8080/dash")]),e._v(" with a phone RC or "),a("code",[e._v("192.168.43.1:8080/dash")]),e._v(" with a Control Hub.")])])]),e._v(" "),a("p",[e._v("Your page should look something like this:")]),e._v(" "),a("figure",{attrs:{align:"center"}},[a("div",{staticClass:"relative"},[a("img",{attrs:{src:o(399),alt:"Image depicting FTC Dashboard in the browser"}}),e._v(" "),a("div",{staticClass:"absolute top-0 left-0 w-full h-full pointer-events-none",staticStyle:{"box-shadow":"inset 0 2px 6px 2px rgba(0, 0, 0, 0.06)"}})]),e._v(" "),a("figcaption",{staticClass:"mt-2 text-sm text-center text-gray-600"},[e._v("Example dashboard"),a("br"),e._v("(Ignore the graph content. This is just a sample of the page layout)")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Run the opmode. The graph will not show up until you have started it.")]),e._v(" "),a("ul",[a("li",[e._v("Make sure to click the graph button "),a("em",[e._v("after")]),e._v(" you run the program. If the graph still doesn't show up, and instead shows a number of checkboxes, that's okay. Click the "),a("code",[e._v("targetVelocity")]),e._v(" and "),a("code",[e._v("poseVelocity")]),e._v(" checkbox.")])])]),e._v(" "),a("li",[a("p",[e._v("In Dashboard, look for the "),a("code",[e._v("DriveConstants")]),e._v(" dropdown on the right. Press it and it should open a drop down. Then, look for the "),a("code",[e._v("kA")]),e._v(", "),a("code",[e._v("kV")]),e._v(", and "),a("code",[e._v("kStatic")]),e._v(" variables. You will be tuning these in a second.")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This step is important. If you don't have a plateau, your kV is likely wrong and you will experience accuracy issues later. Increase distance until you have a relatively long velocity plateau on your graph.")])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("In the "),a("code",[e._v("ManualFeedforwardTuner")]),e._v(" drop down, ensure that the "),a("code",[e._v("DISTANCE")]),e._v(" variable is large enough so the "),a("code",[e._v("targetVelocity")]),e._v(" line has a plateau. If it resembles a series of triangles, increase the "),a("code",[e._v("DISTANCE")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you do not have enough distance, you can increase your "),a("code",[e._v("MAX_ACCEL")]),e._v(" in drive constants (if your robot is capable of it) or lower "),a("code",[e._v("MAX_VEL")]),e._v(" in drive constants. This will affect the speed/acceleration of trajectories, so beware.")])]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[e._v("At this point, once you have run the opmode, the bot should be moving back and forth along the distance specified in the opmode file. The goal is for the "),a("code",[e._v("poseVelocity")]),e._v(" line to match the "),a("code",[e._v("targetVelocity")]),e._v(" line.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Recommended tuning process")]),e._v(":")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("kV")]),e._v(" should initially be set to "),a("code",[e._v("1 / max velocity")]),e._v(". The "),a("code",[e._v("poseVelocity")]),e._v(" line should be touching the top of the "),a("code",[e._v("targetVelocity")]),e._v(" plateau. If not, increase "),a("code",[e._v("kV")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Increase "),a("code",[e._v("kA")]),e._v("to try and get the slope of the "),a("code",[e._v("poseVelocity")]),e._v(" line to match "),a("code",[e._v("targetVelocity")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Here is a reference to visualize what these gains should be doing.")]),e._v(" "),a("figure",{attrs:{align:"center"}},[a("div",{staticClass:"relative"},[a("img",{attrs:{src:o(400),alt:"Image depicting tips for feed forward tuning using various graphed examples"}}),e._v(" "),a("div",{staticClass:"absolute top-0 left-0 w-full h-full pointer-events-none",staticStyle:{"box-shadow":"inset 0 2px 6px 2px rgba(0, 0, 0, 0.06)"}})]),e._v(" "),a("figcaption",{staticClass:"mt-2 text-sm text-center text-gray-600"},[e._v("Tuning Tips")])]),e._v(" "),a("p",[e._v("These tips come from FRC Team 1712's "),a("a",{attrs:{href:"https://www.chiefdelphi.com/t/paper-implementation-of-the-adaptive-pure-pursuit-controller/166552",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adaptive Pure Pursuit paper"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("That should be it! An example of a decently tuned feedforward controller can be found below.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Any adjustments in dashboard need to be copied over to the "),a("code",[e._v("DriveConstants.java")]),e._v(" file under the equivalent variable name. Dashboard adjustments are temporary and will reset once you restart the opmode.")])])]),e._v(" "),a("li",[a("p",[e._v("Check the tuning simulator to see how each gain affects the behavior.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Note:")]),e._v(" The graph doesn't need to be perfect. Just \"good enough.\" You can waste an infinite amount of time trying to perfect it. In addition to that, the Rev Hub's internal motor controller is a little odd and you will have a slight bump on deceleration that will be impossible to get rid of.")])])])])]),e._v(" "),a("p",[e._v("Decently tuned feedforward controller courtesy of Deetz from Team 14320:")]),e._v(" "),a("figure",{attrs:{align:"center"}},[a("div",{staticClass:"relative"},[a("img",{attrs:{src:o(401),alt:"Image depicting a decently tuned system with minimal phase lag"}}),e._v(" "),a("div",{staticClass:"absolute top-0 left-0 w-full h-full pointer-events-none",staticStyle:{"box-shadow":"inset 0 2px 6px 2px rgba(0, 0, 0, 0.06)"}})]),e._v(" "),a("figcaption",{staticClass:"mt-2 text-sm text-center text-gray-600"},[e._v("Tuned Feedforward Controller")])]),e._v(" "),a("p",[e._v("You may notice the asymmetry in the acceleration. Unfortunately, perfect velocity control is not yet achievable with a stock motor control model due to this asymmetry. Notice that the acceleration does not track well when decelerating. We suspect that this is due to weird Rev Hub's unique motor controller. For more details, or if you have a solution to this problem, please hit up the "),a("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC Discord"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The voltage that the REV Hub outputs will decrease as the battery level drops. Because of this, feedforward isn't guaranteed to be consistent throughout multiple matches. At this moment, Road Runner does not have explicit pose velocity closed loop control. There is a slight workaround to this. The translational PID controller's "),a("code",[e._v("kD")]),e._v(" term is essentially equivalent to the "),a("code",[e._v("kP")]),e._v(" term of a pose velocity PID controller. If you notice motion profile performance degradation along multiple matches, add a "),a("code",[e._v("kD")]),e._v(" term to the translational PID (which you will tune in the "),a("a",{attrs:{href:"/follower-pid-tuning"}},[e._v("follower PID page")]),e._v("). Further questions or don't quite understand this concept? Hit up the "),a("a",{attrs:{href:"https://discord.gg/first-tech-challenge",target:"_blank",rel:"noopener noreferrer"}},[e._v("FTC Discord"),a("OutboundLink")],1),e._v(" and shoot a question in the programming channel!")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("As mentioned prior, the REV Hub's motor controller has issues decelerating properly. This makes it impossible to properly tune the feedforward on the deceleration phases (when the velocity moves toward zero). This causes an overshoot every time. If you seem to be exhibiting a 10% overshoot, that is to be expected from the poor deceleration. "),a("strong",[e._v("Simply ignore it and move forward")]),e._v(". The follower PIDs will take care of the issue. Ensure that you set "),a("code",[e._v("kD")]),e._v(" to a non-zero value in the follower PID tuning steps.")])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Your "),a("code",[e._v("MaxVelocityTuner")]),e._v(" is going backwards")]),e._v(" "),a("ul",[a("li",[e._v("Ensure that your wheels are reversed correctly. Check "),a("RouterLink",{attrs:{to:"/drive-constants.html#samplemecanumdrive-motor-direction"}},[e._v("the goBILDA mecanum chart")]),e._v(" to use as a reference while debugging")],1)])]),e._v(" "),a("li",[a("p",[e._v("The pose velocity line is going the opposite way and not following "),a("code",[e._v("targetVelocity")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Your localization is bonked. Run "),a("code",[e._v("LocalizationTest")]),e._v(" and ensure that the reported pose matches the bot's actual pose. Ensure that the "),a("code",[e._v("getWheelVelocities")]),e._v(" function in your localizer (either in "),a("code",[e._v("SampleMecanumDrive")]),e._v(" or the dead wheel localizers) match the signs in your "),a("code",[e._v("getWheelPositions")]),e._v(" function.")])])]),e._v(" "),a("li",[a("p",[e._v("The StraightTest or ManualFeedforwardTuning opmode keeps overshooting and tweaking variables in "),a("code",[e._v("DriveConstants.java")]),e._v(" just doesn't change anything:")]),e._v(" "),a("ul",[a("li",[e._v("Try lowering the "),a("code",[e._v("MAX_VEL")]),e._v(" in "),a("code",[e._v("DriveConstants.java")]),e._v(". Set it to a really low value at first to confirm that this is the problem.")])])]),e._v(" "),a("li",[a("p",[e._v("Miscellaneous motor direction problems:")]),e._v(" "),a("ul",[a("li",[e._v("See "),a("RouterLink",{attrs:{to:"/drive-constants.html#samplemecanumdrive-motor-direction"}},[e._v("reversing motor directions")])],1),e._v(" "),a("li",[e._v("Refer to the "),a("a",{attrs:{href:"https://github.com/acmerobotics/road-runner-quickstart/blob/quickstart1/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/drive/opmode/MotorDirectionDebugger.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Motor Direction Debugger opmode"),a("OutboundLink")],1),e._v(" if you are struggling to debug your motor config. The Motor Direction Debugger allows you to run your motors one by one. Remove the "),a("code",[e._v("@Disabled")]),e._v(" lin on line "),a("code",[e._v("41")]),e._v(" and follow the directions in the opmode comments. Use this to diagnose your motor config problem and fix appropriately.")])])])]),e._v(" "),a("h2",{attrs:{id:"feedforward-tuning-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedforward-tuning-simulator"}},[e._v("#")]),e._v(" Feedforward Tuning Simulator")]),e._v(" "),a("ClientOnly",[a("FeedForwardTuning-FFTuningSimulator",{staticClass:"m-4",attrs:{graphHeight:"30rem"}})],1),e._v(" "),a("p",[e._v("Play around with the gains to see how each one affects the graph! Try and tune this simple example. This graph is very similar to what you will be doing while actually tuning the bot so having an understanding of how the process will go will be beneficial.")]),e._v(" "),a("p",[e._v("Tip: Press enter in the text input for your new gain to take effect (just like FTC-Dashboard!).")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v('This is a very very rudimentary "simulator." It is only meant to give you a basic high level understanding of how the gains affect the behavior of the graph. It is in no way trying to accurately simulate the Rev Hub\'s motor controller as that presents its own problems. This sim is based on a simple DC Motor model with arbitrary constants. The sim will not behave exactly like how your actual tuning will go but it is meant to give you a decent intuition of how it works. Also, I am very aware of the bugs it has. That\'s what the "reset" button is for 😛')])]),e._v(" "),a("h1",{attrs:{id:"temporary-informal-video"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temporary-informal-video"}},[e._v("#")]),e._v(" Temporary Informal Video")]),e._v(" "),a("p",[e._v("Temporary informal video while the polished, edited videos are in production. Quality is atrocious but hopefully it helps 😃")]),e._v(" "),a("div",{staticClass:"flex justify-center"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/efC0H9Twz_8",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])],1)}),[],!1,null,null,null);t.default=i.exports}}]);