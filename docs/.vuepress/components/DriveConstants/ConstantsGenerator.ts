import ConfigurationState, { ChassisEnum } from "./ConfigurationState";

interface ConstantProperties {
  ticksPerRev: number;
  maxRPM: number;

  runUsingEncoder: boolean;

  wheelRadius: number;
  gearRatio: number;
  trackWidth: number;

  recommendedVelo: number;
  recommendedAccel: number;

  maxVelo: number;
  maxAccel: number;
}

const StraferV1Constants: ConstantProperties = {
  ticksPerRev: 386.3,
  maxRPM: 435,

  runUsingEncoder: true,

  wheelRadius: 1.9685,
  gearRatio: 0.5,

  trackWidth: 15,

  recommendedVelo: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.8,
  recommendedAccel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI * 0.8,

  maxVelo: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI,
  maxAccel: (435 / 60) * 0.5 * 1.9685 * 2 * Math.PI,
};

function generateText(filledProperties: ConstantProperties): string {
  return `package org.firstinspires.ftc.teamcode.drive;

import com.acmerobotics.dashboard.config.Config;
import com.acmerobotics.roadrunner.control.PIDCoefficients;
import com.acmerobotics.roadrunner.trajectory.constraints.DriveConstraints;

/*
 * Constants shared between multiple drive types.
 *
 * TODO: Tune or adjust the following constants to fit your robot. Note that the non-final
 * fields may also be edited through the dashboard (connect to the robot's WiFi network and
 * navigate to https://192.168.49.1:8080/dash). Make sure to save the values here after you
 * adjust them in the dashboard; **config variable changes don't persist between app restarts**.
 *
 * These are not the only parameters; some are located in the localizer classes, drive base classes,
 * and op modes themselves.
 */
@Config
public class DriveConstants {

    /*
     * These are motor constants that should be listed online for your motors.
     */
    public static final double TICKS_PER_REV = ${filledProperties.ticksPerRev};
    public static final double MAX_RPM = ${filledProperties.maxRPM};

    /*
     * Set the first flag appropriately. If using the built-in motor velocity PID, update
     * MOTOR_VELO_PID with the tuned coefficients from DriveVelocityPIDTuner.
     */
    public static final boolean RUN_USING_ENCODER = ${
      filledProperties.runUsingEncoder
    };
    public static final PIDCoefficients MOTOR_VELO_PID = null;

    /*
     * These are physical constants that can be determined from your robot (including the track
     * width; it will be tune empirically later although a rough estimate is important). Users are
     * free to chose whichever linear distance unit they would like so long as it is consistently
     * used. The default values were selected with inches in mind. Road runner uses radians for
     * angular distances although most angular parameters are wrapped in Math.toRadians() for
     * convenience. Make sure to exclude any gear ratio included in MOTOR_CONFIG from GEAR_RATIO.
     */
    public static double WHEEL_RADIUS = ${filledProperties.wheelRadius}; // in
    public static double GEAR_RATIO = ${
      filledProperties.gearRatio
    }; // output (wheel) speed / input (motor) speed
    public static double TRACK_WIDTH = ${filledProperties.trackWidth}; // in

    /*
     * These are the feedforward parameters used to model the drive motor behavior. If you are using
     * the built-in velocity PID, *these values are fine as is*. However, if you do not have drive
     * motor encoders or have elected not to use them for velocity control, these values should be
     * empirically tuned.
     */
    public static double kV = 1.0 / rpmToVelocity(MAX_RPM);
    public static double kA = 0;
    public static double kStatic = 0;

    /*
     * These values are used to generate the trajectories for you robot. To ensure proper operation,
     * the constraints should never exceed ~80% of the robot's actual capabilities. While Road
     * Runner is designed to enable faster autonomous motion, it is a good idea for testing to start
     * small and gradually increase them later after everything is working. The velocity and
     * acceleration values are required, and the jerk values are optional (setting a jerk of 0.0
     * forces acceleration-limited profiling). All distance units are inches.
     */
    /*
     * Note from LearnRoadRunner.com:
     * The velocity and acceleration constraints were calculated based on the following equation:
     * ((MAX_RPM / 60) * GEAR_RATIO * WHEEL_RADIUS * 2 * Math.PI) * 0.8
     * Resulting in ${filledProperties.recommendedVelo} in/s.
     * This is only 80% of the theoretical maximum velocity of the bot, following the recommendation above.
     * This is capped at 80% because there are a number of variables that will prevent your bot from actually
     * reaching this maximum velocity: voltage dropping over the game, bot weight, general mechanical inefficiences, etc.
     * However, you can push this higher yourself if you'd like. Perhaps raise it to 90-95% of the theoretically 
     * max velocity. The theoreticaly maximum velocity is ${
       filledProperties.maxVelo
     } in/s.
     * Just make sure that your bot can actually reach this maximum velocity. Path following will be detrimentally
     * affected if it is aiming for a velocity not actually possible.
     * 
     * The maximum acceleration is somewhat arbitrary and it is recommended that you tweak this yourself based on
     * actual testing. Just set it at a reasonable value and keep increasing until your path following starts
     * to degrade. As of now, it simply mirrors the velocity results in ${
       filledProperties.recommendedAccel
     } in/s/s
     *
     * Maximum Angular Velocity is calculated as maximum velocity / (trackWidth / 2) * (180 / Math.PI)
     */
    public static DriveConstraints BASE_CONSTRAINTS = new DriveConstraints(
            ${filledProperties.recommendedVelo}, ${
    filledProperties.recommendedAccel
  }, 0.0,
            Math.toRadians(${(filledProperties.recommendedVelo /
              (filledProperties.trackWidth / 2)) *
              (180 /
                Math.PI)}), Math.toRadians(${(filledProperties.recommendedVelo /
    (filledProperties.trackWidth / 2)) *
    (180 / Math.PI)}), 0.0
    );


    public static double encoderTicksToInches(double ticks) {
        return WHEEL_RADIUS * 2 * Math.PI * GEAR_RATIO * ticks / TICKS_PER_REV;
    }

    public static double rpmToVelocity(double rpm) {
        return rpm * GEAR_RATIO * 2 * Math.PI * WHEEL_RADIUS / 60.0;
    }

    public static double getMotorVelocityF() {
        // see https://docs.google.com/document/d/1tyWrXDfMidwYyP_5H4mZyVgaEswhOC35gvdmP-V-5hA/edit#heading=h.61g9ixenznbx
        return 32767 * 60.0 / (MAX_RPM * TICKS_PER_REV);
    }
}`;
}

export function generateFile(properties: ConfigurationState): string {
  if (properties.chassisSelected == ChassisEnum.STRAFER_V1_CHASSIS)
    return generateText(StraferV1Constants);

  const buildConstants: ConstantProperties = {
    ticksPerRev: 0,
    maxRPM: 0,

    runUsingEncoder: true,

    wheelRadius: 0,
    gearRatio: 0,

    trackWidth: 0,

    recommendedVelo: 0,
    recommendedAccel: 0,

    maxVelo: 0,
    maxAccel: 0,
  };

  if (!properties.customMotorSelected) {
    buildConstants.ticksPerRev = properties.motorSelected.ticksPerRev;
    buildConstants.maxRPM = properties.motorSelected.maxRPM;
  } else {
    buildConstants.ticksPerRev = properties.ticksPerRev;
    buildConstants.maxRPM = properties.maxRPM;
  }

  buildConstants.runUsingEncoder = properties.runUsingEncoder;

  buildConstants.wheelRadius = properties.wheelRadius;
  buildConstants.gearRatio = properties.gearRatio;
  buildConstants.trackWidth = properties.trackWidth;

  buildConstants.recommendedVelo =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI *
    0.8;
  buildConstants.recommendedAccel =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI *
    0.8;

  buildConstants.maxVelo =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI;
  buildConstants.maxAccel =
    (buildConstants.maxRPM / 60) *
    buildConstants.gearRatio *
    buildConstants.wheelRadius *
    2 *
    Math.PI;

  return generateText(buildConstants);
}
