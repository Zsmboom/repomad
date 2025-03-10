
;added window menu to main GUI
;small var fixes

;this will update accross script so only change version here
version := "v1.2"


abouttext = 
(
This is the TN Fisch Macro %version%. 
Created by tab nation and tested by mecha, skyler. Branched from asphaltburger. 

This script includes settings GUI, common fix info, and shake only mode. More settings and better GUI will be added soon. 2025
)	


;=======if first time running create default settings=======
if !FileExist("macrosave.ini")
	{
	IniWrite, Navigation, %a_scriptdir%\macrosave.ini, settings, ShakeMode
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, ClickShakeColorTolerance
	IniWrite, 0, %a_scriptdir%\macrosave.ini, settings, ManualBarSize
	IniWrite, 20, %a_scriptdir%\macrosave.ini, settings, ClickShakeFailsafe
	IniWrite, 10, %a_scriptdir%\macrosave.ini, settings, BarCalculationFailsafe
	IniWrite, \, %a_scriptdir%\macrosave.ini, settings, NavigationKey
	IniWrite, 0, %a_scriptdir%\macrosave.ini, settings, ManualBarSize

	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, AutoEnableCameraMode
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, AutoBlurCamera
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, AutoLookDownCamera
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, AutoLowerGraphics
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, AutoZoomInCamera
	IniWrite, 1, %a_scriptdir%\macrosave.ini, settings, baitdelay

	IniWrite, 2, %a_scriptdir%\macrosave.ini, settings, sright
	IniWrite, 1.3, %a_scriptdir%\macrosave.ini, settings, dright
	IniWrite, 1.8, %a_scriptdir%\macrosave.ini, settings, sleft
	IniWrite, 1.3, %a_scriptdir%\macrosave.ini, settings, dleft
	IniWrite, 5, %a_scriptdir%\macrosave.ini, settings, FishBarColorTolerance
	}

;===================load gui settings===================
IniRead, ShakeMode, %a_scriptdir%\macrosave.ini, settings, ShakeMode
IniRead, ClickShakeColorTolerance, %a_scriptdir%\macrosave.ini, settings, ClickShakeColorTolerance
IniRead, ManualBarSize, %a_scriptdir%\macrosave.ini, settings, ManualBarSize
IniRead, ClickShakeFailsafe, %a_scriptdir%\macrosave.ini, settings, ClickShakeFailsafe
IniRead, BarCalculationFailsafe, %a_scriptdir%\macrosave.ini, settings, BarCalculationFailsafe
IniRead, NavigationKey, %a_scriptdir%\macrosave.ini, settings, NavigationKey
IniRead, ManualBarSize, %a_scriptdir%\macrosave.ini, settings, ManualBarSize

IniRead, AutoEnableCameraMode, %a_scriptdir%\macrosave.ini, settings, AutoEnableCameraMode
IniRead, AutoBlurCamera, %a_scriptdir%\macrosave.ini, settings, AutoBlurCamera
IniRead, AutoLookDownCamera, %a_scriptdir%\macrosave.ini, settings, AutoLookDownCamera
IniRead, AutoLowerGraphics, %a_scriptdir%\macrosave.ini, settings, AutoLowerGraphics
IniRead, AutoZoomInCamera, %a_scriptdir%\macrosave.ini, settings, AutoZoomInCamera
IniRead, baitdelay, %a_scriptdir%\macrosave.ini, settings, baitdelay

IniRead, sright, %a_scriptdir%\macrosave.ini, settings, sright
IniRead, dright, %a_scriptdir%\macrosave.ini, settings, dright
IniRead, sleft, %a_scriptdir%\macrosave.ini, settings, sleft
IniRead, dleft, %a_scriptdir%\macrosave.ini, settings, dleft
IniRead, FishBarColorTolerance, %a_scriptdir%\macrosave.ini, settings, FishBarColorTolerance

suspend    ;so hotkeys dont work during GUI
;===================setup gui settings===================
Menu, FileMenu, Add, Reload Defaults, MenuHandler
Menu, FileMenu, Add, About, MenuHandler
Menu, FileMenu, Add, Exit, MenuHandler

Menu, MyMenuBar, Add, File, :FileMenu

Gui 2:Font, s10, Arial
Gui 2:Menu, MyMenuBar
;===================shake gui settings===================
Gui 2:Add, GroupBox, x22 y8 w317 h190, Shake
Gui 2: add, Text, x33 y30 w163 h35, Shake Mode
Gui 2: add, DropDownList, x35 y50 w125 vShakeMode, Navigation|Click
Gui 2: add, Text, x36 y83 w129 h24, Color Tolerance
Gui 2: add, Edit, x37 y104 w125 vClickShakeColorTolerance, %ClickShakeColorTolerance%

;===================bar gui settings===================
Gui 2:Add, GroupBox, x23 y216 w317 h200 , Bar
Gui 2: add, Text, x200 y305 w129 h24, Color Tolerance
Gui 2: add, Edit, x200 y320 w125 vFishBarColorTolerance, %FishBarColorTolerance%
Gui 2: add, Text, x37 y242 w167 h19, Bar Size (0 is auto calc)
Gui 2: add, Edit, x36 y262 w125  vManualBarSize,%ManualBarSize%
Gui 2: add, Button, x205 y240 w107 h31 ggetbarpix, Get pix length
Gui 2: add, Button, x205 y270 w107 h31 gpresets, preset info
Gui 2: add, Text, x38 y136 w123 h23, Click fail safe
Gui 2: add, Edit, x37 y157 w125  vClickShakeFailsafe , %ClickShakeFailsafe%
Gui 2: add, Text, x38 y298 w125 h60, Bar fail safe
Gui 2: add, Edit, x36 y318 w125  vBarCalculationFailsafe,%BarCalculationFailsafe%
Gui 2: add, Text, x227 y39 w63 h41, nav key
Gui 2: add, Edit, x227 y63 w56 vNavigationKey, %NavigationKey%
Gui 2: add, Text, x38 y356 w63 h41, S right
Gui 2: add, Edit, x37 y375 w56 vsright, %sright%
Gui 2: add, Text, x112 y358 w65 h23, D right
Gui 2: add, Edit, x109 y374 w56 vdright, %dright%
Gui 2: add, Text, x186 y357 w63 h20, S left
Gui 2: add, Edit, x181 y374 w56 vsleft, %sleft%
Gui 2: add, Text, x255 y358 w63 h18, D left
Gui 2: add, Edit, x252 y373 w56 vdleft, %dleft%



;===================other gui settings===================
Gui 2: add, Button, x36 y548 w129 h31 ghelpstart, setup tips
Gui 2: add, Button, x203 y115 w113 h47 gshakeonly, Shake only mode
Gui 2: add, Button, x190 y596 w125 h47 gstartstart, Start
Gui 2: add, Button, x50 y596 w125 h47 gsavebutton, Save
Gui 2: add, Button, x193 y548 w125 h31 gcrabmode, crab mode

Gui 2: add, CheckBox, x23 y417 w169 h43 vAutoEnableCameraMode , Auto enable cam mode
Gui 2: add, CheckBox, x23 y448 w169 h41 vAutoLookDownCamera , Auto look down
Gui 2: add, CheckBox, x24 y480 w169 h44 vAutoBlurCamera , Auto blur
Gui 2: add, CheckBox, x198 y417 w169 h41 vAutoZoomInCamera , Auto zoom
Gui 2: add, CheckBox, x197 y452 w176 h29 vAutoLowerGraphics , Auto lower graphics
Gui 2: add, CheckBox, x198 y475 w169 h44  vbaitdelay , Bait delay

Gui 2: add, Text, x43 y524 w239 h24, More settings soonish and better GUI


if (AutoEnableCameraMode = 1) {
    GuiControl,2:, AutoEnableCameraMode, 1  ; Check the checkbox
}
if (AutoLookDownCamera = 1) {
    GuiControl,2:, AutoLookDownCamera, 1  ; Check the checkbox
}
if (AutoBlurCamera = 1) {
    GuiControl,2:, AutoBlurCamera, 1  ; Check the checkbox
}
if (AutoZoomInCamera = 1) {
    GuiControl,2:, AutoZoomInCamera, 1  ; Check the checkbox
}
if (AutoLowerGraphics = 1) {
    GuiControl,2:, AutoLowerGraphics, 1  ; Check the checkbox
}
if (baitdelay = 1) {
    GuiControl,2:, baitdelay, 1  ; Check the checkbox
}


if (ShakeMode = "Click")
	{
		GuiControl, 2:Choose, ShakeMode, 2
	}
else
	{
		GuiControl, 2:Choose, ShakeMode, 1
	}


Gui 2: Show, w358 h656, TN Fisch Macro %version%
Return

startstart:
gui, 2: submit

;================================= save gui settings=====================================
IniWrite, %ShakeMode%, %a_scriptdir%\macrosave.ini, settings, ShakeMode
IniWrite, %ClickShakeColorTolerance%, %a_scriptdir%\macrosave.ini, settings, ClickShakeColorTolerance
IniWrite, %ManualBarSize%, %a_scriptdir%\macrosave.ini, settings, ManualBarSize
IniWrite, %ClickShakeFailsafe%, %a_scriptdir%\macrosave.ini, settings, ClickShakeFailsafe
IniWrite, %BarCalculationFailsafe%, %a_scriptdir%\macrosave.ini, settings, BarCalculationFailsafe
IniWrite, %NavigationKey%, %a_scriptdir%\macrosave.ini, settings, NavigationKey
IniWrite, %ManualBarSize%, %a_scriptdir%\macrosave.ini, settings, ManualBarSize

IniWrite, %AutoEnableCameraMode%, %a_scriptdir%\macrosave.ini, settings, AutoEnableCameraMode
IniWrite, %AutoBlurCamera%, %a_scriptdir%\macrosave.ini, settings, AutoBlurCamera
IniWrite, %AutoLookDownCamera%, %a_scriptdir%\macrosave.ini, settings, AutoLookDownCamera
IniWrite, %AutoLowerGraphics%, %a_scriptdir%\macrosave.ini, settings, AutoLowerGraphics
IniWrite, %AutoZoomInCamera%, %a_scriptdir%\macrosave.ini, settings, AutoZoomInCamera
IniWrite, %baitdelay%, %a_scriptdir%\macrosave.ini, settings, baitdelay

IniWrite, %sright%, %a_scriptdir%\macrosave.ini, settings, sright
IniWrite, %dright%, %a_scriptdir%\macrosave.ini, settings, dright
IniWrite, %sleft%, %a_scriptdir%\macrosave.ini, settings, sleft
IniWrite, %dleft%, %a_scriptdir%\macrosave.ini, settings, dleft
IniWrite, %FishBarColorTolerance%, %a_scriptdir%\macrosave.ini, settings, FishBarColorTolerance


if (AutoEnableCameraMode)
	{
		AutoEnableCameraMode := true
	}
	else
	{
		AutoEnableCameraMode := false
	}
	
	
	if (AutoLookDownCamera)
	{
		AutoLookDownCamera := true
	}
	else
	{
		AutoLookDownCamera := false
	}
	
	
	if (AutoBlurCamera)
	{
		AutoBlurCamera := true
	}
	else
	{
		AutoBlurCamera := false
	}
	
	
	if (AutoZoomInCamera)
	{
		AutoZoomInCamera := true
	}
	else
	{
		AutoZoomInCamera := false
	}
	
	
	if (AutoLowerGraphics)
	{
		AutoLowerGraphics := true
	}
	else
	{
		AutoLowerGraphics := false
	}
	
	
	if (baitdelay)
	{
		baitdelay := 600
	}
	else
	{
		baitdelay := 0
	}
	



suspend    ;lets hotkeys start working
#SingleInstance Force
setkeydelay, -1
setmousedelay, -1
setbatchlines, -1
SetTitleMatchMode 2

CoordMode, Tooltip, Relative
CoordMode, Pixel, Relative
CoordMode, Mouse, Relative

;     GENERAL SETTINGS     ====================================================================================================;

; Set to true to automatically lower graphics to 1
AutoGraphicsDelay := 50

; Set to true to automatically zoom in the camera
AutoZoomDelay := 50

; Set to true to check for camera mode and enable it
AutoCameraDelay := 50

; Set to true to automatically look down
AutoLookDelay := 200

; Set to true to automatically blur the camera
AutoBlurDelay := 50

; How long to wait after fishing before restarting
RestartDelay := 1000

; How long to hold the cast for before releasing
HoldRodCastDuration := 1000

; How long to wait for the bobber to land in water
WaitForBobberDelay := 1000


;     SHAKE SETTINGS     ====================================================================================================;


; Color range to scan for "shake" text
ClickShakeColorTolerance := 1
; Delay between each scan in miliseconds
ClickScanDelay := 10
; How many scans before clicking regardless of repeats
RepeatBypassCounter := 10

; Seconds for navigation shake to be considered failed
NavigationShakeFailsafe := 30
; Delay between each "S+Enter" in miliseconds
NavigationSpamDelay := 10

;     MINIGAME SETTINGS     ====================================================================================================;


; Seconds for calculation to be considered failed
BarCalculationFailsafe := 10
; Color range to scan for initial white bar
BarSizeCalculationColorTolerance := 15

; Color range to scan for minigame white bar
WhiteBarColorTolerance := 30
; Color range to scan for minigame arrow
ArrowColorTolerance := 6

; Amount of clicks per action cycle
StabilizerLoop := 10
; Ratio for bar side maximum hold (1 = max bar|0.5 = half bar)
SideBarRatio := 0.8
; Multiplier for how long to wait at the sides to prevent bounce
SideBarWaitMultiplier := 4.5

; Strength for moving right when in wrong zone
UnstableRightMultiplier := 2.4
; Counter strafe after moving right in wrong zone
UnstableRightDivision := 1.3
; Strength for moving left when in wrong zone
UnstableLeftMultiplier := 2.4
; Counter strafe after moving left in wrong zone
UnstableLeftDivision := 1.3

; Strength for moving right after a shift in the middle
RightAnkleBreakMultiplier := 0.9
; Strength for moving left after a shift in the middle
LeftAnkleBreakMultiplier := 0.5

;====================================================================================================;

if (AutoLowerGraphics != true and AutoLowerGraphics != false)
	{
	msgbox, AutoLowerGraphics must be set to true or false! (check your spelling)
	exitapp
	}
	
if (AutoEnableCameraMode != true and AutoEnableCameraMode != false)
	{
	msgbox, AutoEnableCameraMode must be set to true or false! (check your spelling)
	exitapp
	}
	
if (AutoZoomInCamera != true and AutoZoomInCamera != false)
	{
	msgbox, AutoZoomInCamera must be set to true or false! (check your spelling)
	exitapp
	}
	
if (AutoLookDownCamera != true and AutoLookDownCamera != false)
	{
	msgbox, AutoLookDownCamera must be set to true or false! (check your spelling)
	exitapp
	}
	
if (AutoBlurCamera != true and AutoBlurCamera != false)
	{
	msgbox, AutoBlurCamera must be set to true or false! (check your spelling)
	exitapp
	}
	
if (ShakeMode != "Navigation" and ShakeMode != "Click")
	{
	msgbox, ShakeMode must be set to "Click" or "Navigation"! (check your spelling)
	exitapp
	}

;====================================================================================================;

WinActivate, Roblox
if WinActive("Roblox")
	{
	WinMaximize, Roblox
	}
else
	{
	msgbox, roblox must be open first
	exitapp
	}
	
;====================================================================================================;

send {lbutton up}
send {rbutton up}
send {shift up}

;====================================================================================================;

Calculations:
WinGetActiveStats, Title, WindowWidth, WindowHeight, WindowLeft, WindowTop

CameraCheckLeft := WindowWidth/2.8444
CameraCheckRight := WindowWidth/1.5421
CameraCheckTop := WindowHeight/1.28
CameraCheckBottom := WindowHeight

ClickShakeLeft := WindowWidth/4.6545
ClickShakeRight := WindowWidth/1.2736
ClickShakeTop := WindowHeight/14.08
ClickShakeBottom := WindowHeight/1.3409

FishBarLeft := WindowWidth/3.3160
FishBarRight := WindowWidth/1.4317
FishBarTop := WindowHeight/1.1871
FishBarBottom := WindowHeight/1.1512

FishBarTooltipHeight := WindowHeight/1.0626

ResolutionScaling := 2560/WindowWidth

LookDownX := WindowWidth/2
LookDownY := WindowHeight/4

runtimeS := 0
runtimeM := 0
runtimeH := 0

TooltipX := WindowWidth/20
Tooltip1 := (WindowHeight/2)-(20*9)
Tooltip2 := (WindowHeight/2)-(20*8)
Tooltip3 := (WindowHeight/2)-(20*7)
Tooltip4 := (WindowHeight/2)-(20*6)
Tooltip5 := (WindowHeight/2)-(20*5)
Tooltip6 := (WindowHeight/2)-(20*4)
Tooltip7 := (WindowHeight/2)-(20*3)
Tooltip8 := (WindowHeight/2)-(20*2)
Tooltip9 := (WindowHeight/2)-(20*1)
Tooltip10 := (WindowHeight/2)
Tooltip11 := (WindowHeight/2)+(20*1)
Tooltip12 := (WindowHeight/2)+(20*2)
Tooltip13 := (WindowHeight/2)+(20*3)
Tooltip14 := (WindowHeight/2)+(20*4)
Tooltip15 := (WindowHeight/2)+(20*5)
Tooltip16 := (WindowHeight/2)+(20*6)
Tooltip17 := (WindowHeight/2)+(20*7)
Tooltip18 := (WindowHeight/2)+(20*8)
Tooltip19 := (WindowHeight/2)+(20*9)
Tooltip20 := (WindowHeight/2)+(20*10)

tooltip, Made By AsphaltCake, %TooltipX%, %Tooltip1%, 1
tooltip, Runtime: 0h 0m 0s, %TooltipX%, %Tooltip2%, 2

tooltip, Press "P" to Start, %TooltipX%, %Tooltip4%, 4
tooltip, Press "O" to Reload, %TooltipX%, %Tooltip5%, 5
tooltip, Press "M" to Exit, %TooltipX%, %Tooltip6%, 6

if (AutoLowerGraphics == true)
	{
	tooltip, AutoLowerGraphics: true, %TooltipX%, %Tooltip8%, 8
	}
else
	{
	tooltip, AutoLowerGraphics: false, %TooltipX%, %Tooltip8%, 8
	}
	
if (AutoEnableCameraMode == true)
	{
	tooltip, AutoEnableCameraMode: true, %TooltipX%, %Tooltip9%, 9
	}
else
	{
	tooltip, AutoEnableCameraMode: false, %TooltipX%, %Tooltip9%, 9
	}
	
if (AutoZoomInCamera == true)
	{
	tooltip, AutoZoomInCamera: true, %TooltipX%, %Tooltip10%, 10
	}
else
	{
	tooltip, AutoZoomInCamera: false, %TooltipX%, %Tooltip10%, 10
	}
	
if (AutoLookDownCamera == true)
	{
	tooltip, AutoLookDownCamera: true, %TooltipX%, %Tooltip11%, 11
	}
else
	{
	tooltip, AutoLookDownCamera: false, %TooltipX%, %Tooltip11%, 11
	}
	
if (AutoBlurCamera == true)
	{
	tooltip, AutoBlurCamera: true, %TooltipX%, %Tooltip12%, 12
	}
else
	{
	tooltip, AutoBlurCamera: false, %TooltipX%, %Tooltip12%, 12
	}

tooltip, Navigation Key: "%NavigationKey%", %TooltipX%, %Tooltip14%, 14

if (ShakeMode == "Click")
	{
	tooltip, Shake Mode: "Click", %TooltipX%, %Tooltip16%, 16
	}
else
	{
	tooltip, Shake Mode: "Navigation", %TooltipX%, %Tooltip16%, 16
	}
return

;====================================================================================================;

runtime:
runtimeS++
if (runtimeS >= 60)
	{
	runtimeS := 0
	runtimeM++
	}
if (runtimeM >= 60)
	{
	runtimeM := 0
	runtimeH++
	}

if WinActive("Roblox")
	{
	tooltip, Runtime: %runtimeH%h %runtimeM%m %runtimeS%s, %TooltipX%, %Tooltip2%, 2
	}
else
	{
	exitapp
	}
return

;====================================================================================================;

$o:: reload
$m:: exitapp
$p::

;====================================================================================================;

gosub, Calculations
settimer, runtime, 1000

tooltip, Press "O" to Reload, %TooltipX%, %Tooltip4%, 4
tooltip, Press "M" to Exit, %TooltipX%, %Tooltip5%, 5

tooltip, , , , 6
tooltip, , , , 10
tooltip, , , , 11
tooltip, , , , 12
tooltip, , , , 14
tooltip, , , , 16

tooltip, Current Task: AutoLowerGraphics, %TooltipX%, %Tooltip7%, 7
tooltip, F10 Count: 0/20, %TooltipX%, %Tooltip9%, 9
f10counter := 0
if (AutoLowerGraphics == true)
	{
	send {shift}
	tooltip, Action: Press Shift, %TooltipX%, %Tooltip8%, 8
	sleep %AutoGraphicsDelay%
	send {shift down}
	tooltip, Action: Hold Shift, %TooltipX%, %Tooltip8%, 8
	sleep %AutoGraphicsDelay%
	loop, 20
		{
		f10counter++
		tooltip, F10 Count: %f10counter%/20, %TooltipX%, %Tooltip9%, 9
		send {f10}
		tooltip, Action: Press F10, %TooltipX%, %Tooltip8%, 8
		sleep %AutoGraphicsDelay%
		}
	send {shift up}
	tooltip, Action: Release Shift, %TooltipX%, %Tooltip8%, 8
	sleep %AutoGraphicsDelay%
	}

tooltip, Current Task: AutoZoomInCamera, %TooltipX%, %Tooltip7%, 7
tooltip, Scroll In: 0/20, %TooltipX%, %Tooltip9%, 9
tooltip, Scroll Out: 0/1, %TooltipX%, %Tooltip10%, 10
scrollcounter := 0
if (AutoZoomInCamera == true)
	{
	sleep %AutoZoomDelay%
	loop, 20
		{
		scrollcounter++
		tooltip, Scroll In: %scrollcounter%/20, %TooltipX%, %Tooltip9%, 9
		send {wheelup}
		tooltip, Action: Scroll In, %TooltipX%, %Tooltip8%, 8
		sleep %AutoZoomDelay%
		}
	send {wheeldown}
	tooltip, Scroll Out: 1/1, %TooltipX%, %Tooltip10%, 10
	tooltip, Action: Scroll Out, %TooltipX%, %Tooltip8%, 8
	AutoZoomDelay := AutoZoomDelay*5
	sleep %AutoZoomDelay%
	}
	
tooltip, , , , 10

tooltip, Current Task: AutoEnableCameraMode, %TooltipX%, %Tooltip7%, 7
tooltip, Right Count: 0/10, %TooltipX%, %Tooltip9%, 9
rightcounter := 0
if (AutoEnableCameraMode == true)
	{
	PixelSearch, , , CameraCheckLeft, CameraCheckTop, CameraCheckRight, CameraCheckBottom, 0xFFFFFF, 0, Fast
	if (ErrorLevel == 0)
		{
		sleep %AutoCameraDelay%
		send {2}
		tooltip, Action: Presss 2, %TooltipX%, %Tooltip8%, 8
		sleep %AutoCameraDelay%
		send {1}
		tooltip, Action: Press 1, %TooltipX%, %Tooltip8%, 8
		sleep %AutoCameraDelay%
		send {%NavigationKey%}
		tooltip, Action: Press %NavigationKey%, %TooltipX%, %Tooltip8%, 8
		sleep %AutoCameraDelay%
		loop, 10
			{
			rightcounter++
			tooltip, Right Count: %rightcounter%/10, %TooltipX%, %Tooltip9%, 9
			send {right}
			tooltip, Action: Press Right, %TooltipX%, %Tooltip8%, 8
			sleep %AutoCameraDelay%
			}
		send {enter}
		tooltip, Action: Press Enter, %TooltipX%, %Tooltip8%, 8
		sleep %AutoCameraDelay%
		}
	}

RestartMacro:

tooltip, , , , 9

tooltip, Current Task: AutoLookDownCamera, %TooltipX%, %Tooltip7%, 7
if (AutoLookDownCamera == true)
	{
	send {rbutton up}
	sleep %AutoLookDelay%
	mousemove, LookDownX, LookDownY
	tooltip, Action: Position Mouse, %TooltipX%, %Tooltip8%, 8
	sleep %AutoLookDelay%
	send {rbutton down}
	tooltip, Action: Hold Right Click, %TooltipX%, %Tooltip8%, 8
	sleep %AutoLookDelay%
	DllCall("mouse_event", "UInt", 0x01, "UInt", 0, "UInt", 10000)
	tooltip, Action: Move Mouse Down, %TooltipX%, %Tooltip8%, 8
	sleep %AutoLookDelay%
	send {rbutton up}
	tooltip, Action: Release Right Click, %TooltipX%, %Tooltip8%, 8
	sleep %AutoLookDelay%
	mousemove, LookDownX, LookDownY
	tooltip, Action: Position Mouse, %TooltipX%, %Tooltip8%, 8
	sleep %AutoLookDelay%
	}
	
tooltip, Current Task: AutoBlurCamera, %TooltipX%, %Tooltip7%, 7	
if (AutoBlurCamera == true)
	{
	sleep %AutoBlurDelay%
	send {m}
	tooltip, Action: Press M, %TooltipX%, %Tooltip8%, 8
	sleep %AutoBlurDelay%
	}

tooltip, Current Task: Casting Rod, %TooltipX%, %Tooltip7%, 7
send {lbutton down}
tooltip, Action: Casting For %HoldRodCastDuration%ms, %TooltipX%, %Tooltip8%, 8
sleep %HoldRodCastDuration%
send {lbutton up}
tooltip, Action: Waiting For Bobber (%WaitForBobberDelay%ms), %TooltipX%, %Tooltip8%, 8
sleep %WaitForBobberDelay%

if (ShakeMode == "Click")
goto ClickShakeMode
else if (ShakeMode == "Navigation")
goto NavigationShakeMode

;====================================================================================================;

ClickShakeFailsafe:
ClickFailsafeCount++
tooltip, Failsafe: %ClickFailsafeCount%/%ClickShakeFailsafe%, %TooltipX%, %Tooltip14%, 14
if (ClickFailsafeCount >= ClickShakeFailsafe)
	{
	settimer, ClickShakeFailsafe, off
	ForceReset := true
	}
return

ClickShakeMode:

tooltip, Current Task: Shaking, %TooltipX%, %Tooltip7%, 7
tooltip, Click X: None, %TooltipX%, %Tooltip8%, 8
tooltip, Click Y: None, %TooltipX%, %Tooltip9%, 9

tooltip, Click Count: 0, %TooltipX%, %Tooltip11%, 11
tooltip, Bypass Count: 0/%RepeatBypassCounter%, %TooltipX%, %Tooltip12%, 12

tooltip, Failsafe: 0/%ClickShakeFailsafe%, %TooltipX%, %Tooltip14%, 14

ClickFailsafeCount := 0
ClickCount := 0
ClickShakeRepeatBypassCounter := 0
MemoryX := 0
MemoryY := 0
ForceReset := false

settimer, ClickShakeFailsafe, 1000

ClickShakeModeRedo:
if (ForceReset == true)
	{
	tooltip, , , , 11
	tooltip, , , , 12
	tooltip, , , , 14
	goto RestartMacro
	}
sleep %ClickScanDelay%
PixelSearch, , , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
if (ErrorLevel == 0)
	{
	settimer, ClickShakeFailsafe, off
	tooltip, , , , 9
	tooltip, , , , 11
	tooltip, , , , 12
	tooltip, , , , 14
	goto BarMinigame
	}
else
	{
	PixelSearch, ClickX, ClickY, ClickShakeLeft, ClickShakeTop, ClickShakeRight, ClickShakeBottom, 0xFFFFFF, %ClickShakeColorTolerance%, Fast
	if (ErrorLevel == 0)
		{
		tooltip, Click X: %ClickX%, %TooltipX%, %Tooltip8%, 8
		tooltip, Click Y: %ClickY%, %TooltipX%, %Tooltip9%, 9
		if (ClickX != MemoryX and ClickY != MemoryY)
			{
			ClickShakeRepeatBypassCounter := 0
			tooltip, Bypass Count: %ClickShakeRepeatBypassCounter%/%RepeatBypassCounter%, %TooltipX%, %Tooltip12%, 12
			ClickCount++
			click, %ClickX%, %ClickY%
			tooltip, Click Count: %ClickCount%, %TooltipX%, %Tooltip11%, 11
			MemoryX := ClickX
			MemoryY := ClickY
			goto ClickShakeModeRedo
			}
		else
			{
			ClickShakeRepeatBypassCounter++
			tooltip, Bypass Count: %ClickShakeRepeatBypassCounter%/%RepeatBypassCounter%, %TooltipX%, %Tooltip12%, 12
			if (ClickShakeRepeatBypassCounter >= RepeatBypassCounter)
				{
				MemoryX := 0
				MemoryY := 0
				}
			goto ClickShakeModeRedo
			}
		}
	else
		{
		goto ClickShakeModeRedo
		}
	}

;====================================================================================================;

NavigationShakeFailsafe:
NavigationFailsafeCount++
tooltip, Failsafe: %NavigationFailsafeCount%/%NavigationShakeFailsafe%, %TooltipX%, %Tooltip10%, 10
if (NavigationFailsafeCount >= NavigationShakeFailsafe)
	{
	settimer, NavigationShakeFailsafe, off
	ForceReset := true
	}
return

NavigationShakeMode:

tooltip, Current Task: Shaking, %TooltipX%, %Tooltip7%, 7
tooltip, Attempt Count: 0, %TooltipX%, %Tooltip8%, 8

tooltip, Failsafe: 0/%NavigationShakeFailsafe%, %TooltipX%, %Tooltip10%, 10

NavigationFailsafeCount := 0
NavigationCounter := 0s
ForceReset := false
settimer, NavigationShakeFailsafe, 1000
send {%NavigationKey%}
NavigationShakeModeRedo:
if (ForceReset == true)
	{
	tooltip, , , , 10
	goto RestartMacro
	}
sleep %NavigationSpamDelay%
PixelSearch, , , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
if (ErrorLevel == 0)
	{
	settimer, NavigationShakeFailsafe, off
	goto BarMinigame
	}
else
	{
	NavigationCounter++
	tooltip, Attempt Count: %NavigationCounter%, %TooltipX%, %Tooltip8%, 8
	sleep 1
	send {s}
	sleep 1
	send {enter}
	goto NavigationShakeModeRedo
	}

;====================================================================================================;

BarCalculationFailsafe:
BarCalcFailsafeCounter++
tooltip, Failsafe: %BarCalcFailsafeCounter%/%BarCalculationFailsafe%, %TooltipX%, %Tooltip10%, 10
if (BarCalcFailsafeCounter >= BarCalculationFailsafe)
	{
	settimer, BarCalculationFailsafe, off
	ForceReset := true
	}
return

BarMinigame:
sleep, %baitdelay%
tooltip, Current Task: Calculating Bar Size, %TooltipX%, %Tooltip7%, 7
tooltip, Bar Size: Not Found, %TooltipX%, %Tooltip8%, 8
tooltip, Failsafe: 0/%BarCalculationFailsafe%, %TooltipX%, %Tooltip10%, 10

ForceReset := false
BarCalcFailsafeCounter := 0
settimer, BarCalculationFailsafe, 1000

BarMinigameRedo:
if (ForceReset == true)
	{
	tooltip, , , , 10
	goto RestartMacro
	}
PixelSearch, BarX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0xFFFFFF, %BarSizeCalculationColorTolerance%, Fast
if (ErrorLevel == 0)
	{
	settimer, BarCalculationFailsafe, off
	if (ManualBarSize != 0)
		{
		WhiteBarSize := ManualBarSize
		goto BarMinigameSingle
		}
	WhiteBarSize := (FishBarRight-(BarX-FishBarLeft))-BarX
	goto BarMinigameSingle
	}
sleep 1
goto BarMinigameRedo

;====================================================================================================;

BarMinigameSingle:
sleep, %baitdelay%
tooltip, Current Task: Playing Bar Minigame, %TooltipX%, %Tooltip7%, 7
tooltip, Bar Size: %WhiteBarSize%, %TooltipX%, %Tooltip8%, 8

tooltip, Direction: None, %TooltipX%, %Tooltip10%, 10
tooltip, Forward Delay: None, %TooltipX%, %Tooltip11%, 11
tooltip, Counter Delay: None, %TooltipX%, %Tooltip12%, 12
tooltip, Ankle Delay: None, %TooltipX%, %Tooltip13%, 13

tooltip, Side Delay: None, %TooltipX%, %Tooltip15%, 15

HalfBarSize := WhiteBarSize/2
SideDelay := 0
AnkleBreakDelay := 0
DirectionalToggle := "Disabled"
AtLeastFindWhiteBar := false

MaxLeftToggle := false
MaxRightToggle := false
MaxLeftBar := FishBarLeft+WhiteBarSize*SideBarRatio
MaxRightBar := FishBarRight-WhiteBarSize*SideBarRatio

tooltip, |, %MaxLeftBar%, %FishBarTooltipHeight%, 18
tooltip, |, %MaxRightBar%, %FishBarTooltipHeight%, 17

BarMinigame2:
sleep 1
PixelSearch, FishX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
if (ErrorLevel == 0)
	{
	tooltip, ., %FishX%, %FishBarTooltipHeight%, 20
	if (FishX < MaxLeftBar)
		{
		if (MaxLeftToggle == false)
			{
			tooltip, <, %MaxLeftBar%, %FishBarTooltipHeight%, 19
			tooltip, Direction: Max Left, %TooltipX%, %Tooltip10%, 10
			tooltip, Forward Delay: Infinite, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: None, %TooltipX%, %Tooltip12%, 12
			tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
			DirectionalToggle := "Right"
			MaxLeftToggle := true
			send {lbutton up}
			sleep 1
			send {lbutton up}
			sleep %SideDelay%
			AnkleBreakDelay := 0
			SideDelay := 0
			tooltip, Side Delay: 0, %TooltipX%, %Tooltip15%, 15
			}
		goto BarMinigame2
		}
	else if (FishX > MaxRightBar)
		{
		if (MaxRightToggle == false)
			{
			tooltip, >, %MaxRightBar%, %FishBarTooltipHeight%, 19
			tooltip, Direction: Max Right, %TooltipX%, %Tooltip10%, 10
			tooltip, Forward Delay: Infinite, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: None, %TooltipX%, %Tooltip12%, 12
			tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
			DirectionalToggle := "Left"
			MaxRightToggle := true
			send {lbutton down}
			sleep 1
			send {lbutton down}
			sleep %SideDelay%
			AnkleBreakDelay := 0
			SideDelay := 0
			tooltip, Side Delay: 0, %TooltipX%, %Tooltip15%, 15
			}
		goto BarMinigame2
		}
	MaxLeftToggle := false
	MaxRightToggle := false
	PixelSearch, BarX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0xFFFFFF, %WhiteBarColorTolerance%, Fast
	if (ErrorLevel == 0)
		{
		AtLeastFindWhiteBar := true
		BarX := BarX+(WhiteBarSize/2)
		if (BarX > FishX)
			{
			tooltip, <, %BarX%, %FishBarTooltipHeight%, 19
			tooltip, Direction: <, %TooltipX%, %Tooltip10%, 10
			Difference := (BarX-FishX)*ResolutionScaling*StableLeftMultiplier
			CounterDifference := Difference/StableLeftDivision
			tooltip, Forward Delay: %Difference%, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: %CounterDifference%, %TooltipX%, %Tooltip12%, 12
			send {lbutton up}
			if (DirectionalToggle == "Right")
				{
				tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
				sleep %AnkleBreakDelay%
				AnkleBreakDelay := 0
				}
			else
				{
				AnkleBreakDelay := AnkleBreakDelay+(Difference-CounterDifference)*LeftAnkleBreakMultiplier
				SideDelay := AnkleBreakDelay/LeftAnkleBreakMultiplier*SideBarWaitMultiplier
				tooltip, Ankle Delay: %AnkleBreakDelay%, %TooltipX%, %Tooltip13%, 13
				tooltip, Side Delay: %SideDelay%, %TooltipX%, %Tooltip15%, 15
				}
			sleep %Difference%
			PixelSearch, FishX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
				{
				if (FishX < MaxLeftBar)
				goto BarMinigame2
				}
			send {lbutton down}
			sleep %CounterDifference%
			loop, %StabilizerLoop%
				{
				send {lbutton down}
				send {lbutton up}
				}
			DirectionalToggle := "Left"
			}
		else
			{
			tooltip, >, %BarX%, %FishBarTooltipHeight%, 19
			tooltip, Direction: >, %TooltipX%, %Tooltip10%, 10
			Difference := (FishX-BarX)*ResolutionScaling*StableRightMultiplier
			CounterDifference := Difference/StableRightDivision
			tooltip, Forward Delay: %Difference%, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: %CounterDifference%, %TooltipX%, %Tooltip12%, 12
			send {lbutton down}
			if (DirectionalToggle == "Left")
				{
				tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
				sleep %AnkleBreakDelay%
				AnkleBreakDelay := 0
				}
			else
				{
				AnkleBreakDelay := AnkleBreakDelay+(Difference-CounterDifference)*RightAnkleBreakMultiplier
				SideDelay := AnkleBreakDelay/RightAnkleBreakMultiplier*SideBarWaitMultiplier
				tooltip, Ankle Delay: %AnkleBreakDelay%, %TooltipX%, %Tooltip13%, 13
				tooltip, Side Delay: %SideDelay%, %TooltipX%, %Tooltip15%, 15
				}
			sleep %Difference%
			PixelSearch, FishX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
				{
				if (FishX > MaxRightBar)
				goto BarMinigame2
				}
			send {lbutton up}
			sleep %CounterDifference%
			loop, %StabilizerLoop%
				{
				send {lbutton down}
				send {lbutton up}
				}
			DirectionalToggle := "Right"
			}
		}
	else
		{
		if (AtLeastFindWhiteBar == false)
			{
			send {lbutton down}
			send {lbutton up}
			goto BarMinigame2
			}
		PixelSearch, ArrowX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x878584, %ArrowColorTolerance%, Fast
		if (ArrowX > FishX)
			{
			tooltip, <, %ArrowX%, %FishBarTooltipHeight%, 19
			tooltip, Direction: <<<, %TooltipX%, %Tooltip10%, 10
			Difference := HalfBarSize*UnstableLeftMultiplier
			CounterDifference := Difference/UnstableLeftDivision
			tooltip, Forward Delay: %Difference%, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: %CounterDifference%, %TooltipX%, %Tooltip12%, 12
			send {lbutton up}
			if (DirectionalToggle == "Right")
				{
				tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
				sleep %AnkleBreakDelay%
				AnkleBreakDelay := 0
				}
			else
				{
				AnkleBreakDelay := AnkleBreakDelay+(Difference-CounterDifference)*LeftAnkleBreakMultiplier
				SideDelay := AnkleBreakDelay/LeftAnkleBreakMultiplier*SideBarWaitMultiplier
				tooltip, Ankle Delay: %AnkleBreakDelay%, %TooltipX%, %Tooltip13%, 13
				tooltip, Side Delay: %SideDelay%, %TooltipX%, %Tooltip15%, 15
				}
			sleep %Difference%
			PixelSearch, FishX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
				{
				if (FishX < MaxLeftBar)
				goto BarMinigame2
				}
			send {lbutton down}
			sleep %CounterDifference%
			loop, %StabilizerLoop%
				{
				send {lbutton down}
				send {lbutton up}
				}
			DirectionalToggle := "Left"
			}
		else
			{
			tooltip, >, %ArrowX%, %FishBarTooltipHeight%, 19
			tooltip, Direction: >>>, %TooltipX%, %Tooltip10%, 10
			Difference := HalfBarSize*UnstableRightMultiplier
			CounterDifference := Difference/UnstableRightDivision
			tooltip, Forward Delay: %Difference%, %TooltipX%, %Tooltip11%, 11
			tooltip, Counter Delay: %CounterDifference%, %TooltipX%, %Tooltip12%, 12
			send {lbutton down}
			if (DirectionalToggle == "Left")
				{
				tooltip, Ankle Delay: 0, %TooltipX%, %Tooltip13%, 13
				sleep %AnkleBreakDelay%
				AnkleBreakDelay := 0
				}
			else
				{
				AnkleBreakDelay := AnkleBreakDelay+(Difference-CounterDifference)*RightAnkleBreakMultiplier
				SideDelay := AnkleBreakDelay/RightAnkleBreakMultiplier*SideBarWaitMultiplier
				tooltip, Ankle Delay: %AnkleBreakDelay%, %TooltipX%, %Tooltip13%, 13
				tooltip, Side Delay: %SideDelay%, %TooltipX%, %Tooltip15%, 15
				}
			sleep %Difference%
			PixelSearch, FishX, , FishBarLeft, FishBarTop, FishBarRight, FishBarBottom, 0x5B4B43, %FishBarColorTolerance%, Fast
				{
				if (FishX > MaxRightBar)
				goto BarMinigame2
				}
			send {lbutton up}
			sleep %CounterDifference%
			loop, %StabilizerLoop%
				{
				send {lbutton down}
				send {lbutton up}
				}
			DirectionalToggle := "Right"
			}
		}
	goto BarMinigame2
	}
else
	{
	tooltip, , , , 10
	tooltip, , , , 11
	tooltip, , , , 12
	tooltip, , , , 13
	tooltip, , , , 15
	tooltip, , , , 17
	tooltip, , , , 18
	tooltip, , , , 19
	tooltip, , , , 20
	sleep %RestartDelay%
	goto RestartMacro
	}
	
	

; ================================================Common Issues and Fixes============================================
helpstart:
suspend
helper:
issues := {}
issues["setup"] := "Make sure Roblox is in window mode and the chat is hidden. Ensure Roblox is running before starting the script. Make sure you have bacon hair and close out the chat/Leaderboard  and all UI"
issues["graphics"] := "Press ESC, go to settings, and adjust the graphics slider to the desired level. and disbale UI you also need to click the nav.button in top right or press \"
issues["open"] := "Right-click the macro file > Open with > AutoHotkey. If AutoHotkey isn't listed, browse to C:\\Program Files\\AutoHotkey. by clicking the blue text at bottom twice to pull up windows panel"
issues["shake"] := "Use ColorZilla Chrome ext. to get the color code for the shake text, then edit the script by replacing the 0xFFFFFF value in the PixelSearch line."
issues["bar"] := "Edit 'BarSizeCalculationColorTolerance' to 0 on line 74. also try not using bait"
issues["ver"] := "Try using v10 of the macro if v11 has issues. Download old versions at: https://fischmacro.com/"

; Command Handler
InputBox, command, Troubleshooting Bot, Enter command `nvideos | setup | graphics | open | shake | bar | ver`n`n  exit to exit and visit tabnationcoding.com for up to date info
If ErrorLevel = 1
	{
	Suspend, off
	goto startstart
	}

if (command = "exit") {
reload
}
	if (command = "videos") {
			InputBox, command, Troubleshooting Bot, Enter command for video on topic `macro | autohotkey | issues |discord
				if (command = "issues")
					Run, https://www.youtube.com/watch?v=BkvisovwX2E
				if (command = "macro")
					Run, https://www.youtube.com/watch?v=SijIyYVaXCg
				if (command = "autohotkey")
					Run, https://www.youtube.com/watch?v=Au5BFtpb65o
				if (command = "discord")
					Run, https://discord.gg/74srJgNBxz
				goto helper
				}
		else {
		if (issues[command] != "") {
			MsgBox % issues[command]
			goto helper
			}
		else {
		MsgBox Command not found.
		goto helper
		}	
}


;================================shake only mode button=============================
shakeonly:
suspend
msgbox, press f1 to turn shake on and off. make sure your press the camera icon to hide hud first in top right corner. press o to reload or m to quit
toggle := false
 return

F1::  ; When F1 is pressed, toggle the script on/off
toggle := !toggle
if (toggle) {
    send \
    SetTimer, SendKeys, 100  ; Start the loop every 500ms
} else {
    SetTimer, SendKeys, Off  ; Stop the loop
}
return
 
SendKeys:
Send, {s}  ; Send the "down" arrow key
sleep, 100
Send, {Enter}  ; Send the "Enter" key
return


;============================bar pixel leng getter========================================
getbarpix:
suspend
WinActivate, Roblox
if WinActive("Roblox")
	{
	WinMaximize, Roblox
	}
else
	{
	msgbox, Roblox must be open first
	reload
	}
msgbox,start bar game and press f2 to start bar pix getter..also can take a screen shot and measure there
return


f2::
{
    ; Wait for the first mouse click
    ToolTip, Click the first point
    KeyWait, LButton, D
    MouseGetPos, x1, y1
sleep 500
    ; Wait for the second mouse click
    ToolTip, Click the second point
    KeyWait, LButton, D
    MouseGetPos, x2, y2

    ; Clear the ToolTip
    ToolTip

    ; Calculate the distance
    dx := x2 - x1
    dy := y2 - y1
    distance := Sqrt(dx**2 + dy**2)

    ; Show the result in the tray icon tooltip
    TrayTip, Saved to clipboard Distance between points: %distance%, 5
	clipboard = %distance%
	reload
}
return


;==============preset button=================================================
presets:
Gui 1:Add, DropDownList, x37 y23 w180 vinfodropdown, no life|heaven|rotek|rotff|artix|rotd|steady|trident
Gui 1:Add, Button, x229 y24 w80 h23 gsetinfo, Info
Gui 1:Add, Button, x319 y24 w80 h23 ginfoclose, Close
Gui 1:Add, GroupBox, x25 y57 w603 h344, INFO
Gui 1:Add, Edit, x49 y96 w560 h284 vinfotext, This is basic info that may not be perfect depending on your set up but at least its a starting point! Some of these settings will need to be changed inside the scripts code for now till I add to main GUI. Do this by right clicking on script and open with notepad.
Gui 1:Show, w649 h422, Window
Return

setinfo:

nolife =
(
Stable-Right=2
Stable-RightD=1.67
Stable-Left=1.92
Stable-LeftD=1.45
Bar-Size=428
White-Tolerance=16
)

heaven =
(
Stable-Right=2.242
Stable-RightD=1.21
Stable-Left=1.932
Stable-LeftD=1.373
Bar-Size=276
White-Tolerance=16
)
rotek =
(
Stable-Right=2.050
Stable-RightD=1.650
Stable-Left=1.900
Stable-LeftD=1.300
Bar-Size=239
White-Tolerance=13

)
rotff =
(
Stable-Right=5.0
Stable-RightD=4.175
Stable-Left=4.8
Stable-LeftD=3.625
Bar-Size=409
White-Tolerance=16
)
artic =
(
Stable-Right=2.135
Stable-RightD=1.687
Stable-Left=1.976
Stable-LeftD=1.349
Bar-Size=246
White-Tolerance=13
)
rotd =
(
Stable-Right=2.24
Stable-RightD=1.3
Stable-Left=1.91
Stable-LeftD=1.31
Bar-Size=320
White-Tolerance=16
)
steady =
(
Stable-Right=2.394
Stable-RightD=1.253
Stable-Left=2.249
Stable-LeftD=1.28
Bar-Size=242
White-Tolerance=16
)
trident =
(
Stable-RightD = 1.550
Stable-Right = 2.360
Stable-LeftD  = 1.12
Stable-Left = 2.360
WhiteBarColorTolerance = 13
Bar Size = 232
)

Gui, 1:Submit, NoHide
if (infodropdown = "no life")
	GuiControl,, infotext, %nolife%
if (infodropdown = "heaven")
	GuiControl,, infotext, %heaven%
if (infodropdown = "rotek")
	GuiControl,, infotext, %rotek%
if (infodropdown = "rotff")
	GuiControl,, infotext, %rotff%
if (infodropdown = "artic")
	GuiControl,, infotext, %artic%
if (infodropdown = "rotd")
	GuiControl,, infotext, %rotd%
if (infodropdown = "steady")
	GuiControl,, infotext, %steady%
if (infodropdown = "trident")
	GuiControl,, infotext, %trident%
Return

infoclose:
gui, 1:destroy
return


;===================crab mode button==================
crabmode:
suspend
msgbox, make sure roblox is running before pressing ok

WinActivate, Roblox
tooltip, m = close, 200, 400, 1
tooltip, press p = Click 150 times, 200, 420, 2
tooltip, hold y = click while hold, 200, 440, 3
tooltip, press e = spam e, 200, 440, 3

$y::
while getkeystate("y","P")
{
send {click}
}
keywait y
return

$1::
sleep 200
loop, 150
{
send {click}
sleep 1
}
return

$e::
tooltip, SPAMMING E (press m to exit), , , 4
loop,
{
send {e down}
sleep 700
send {e up}
sleep 50
}
return



;======================main gui menus=====================
MenuHandler:
    if (A_ThisMenuItem = "Exit")
    {
        ExitApp
    }
    else if (A_ThisMenuItem = "Reload Defaults")
	{
		FileDelete, %a_scriptdir%\macrosave.ini
		reload
    }
	else if (A_ThisMenuItem = "About")
		{
		Gui, 3:Font, s10, Arial
		Gui, 3:Add, Edit, x10 y10 w600 h400 , %abouttext%
		Gui, 3:Show, w620 h420, About TN Fisch Macro
		send {left}
		Return
		}

	GuiClose:
		Gui, 3:Destroy
		Return

	
savebutton:
gui, 2: submit, nohide
;================================= save gui settings=====================================
IniWrite, %ShakeMode%, %a_scriptdir%\macrosave.ini, settings, ShakeMode
IniWrite, %ClickShakeColorTolerance%, %a_scriptdir%\macrosave.ini, settings, ClickShakeColorTolerance
IniWrite, %ManualBarSize%, %a_scriptdir%\macrosave.ini, settings, ManualBarSize
IniWrite, %ClickShakeFailsafe%, %a_scriptdir%\macrosave.ini, settings, ClickShakeFailsafe
IniWrite, %BarCalculationFailsafe%, %a_scriptdir%\macrosave.ini, settings, BarCalculationFailsafe
IniWrite, %NavigationKey%, %a_scriptdir%\macrosave.ini, settings, NavigationKey
IniWrite, %ManualBarSize%, %a_scriptdir%\macrosave.ini, settings, ManualBarSize

IniWrite, %AutoEnableCameraMode%, %a_scriptdir%\macrosave.ini, settings, AutoEnableCameraMode
IniWrite, %AutoBlurCamera%, %a_scriptdir%\macrosave.ini, settings, AutoBlurCamera
IniWrite, %AutoLookDownCamera%, %a_scriptdir%\macrosave.ini, settings, AutoLookDownCamera
IniWrite, %AutoLowerGraphics%, %a_scriptdir%\macrosave.ini, settings, AutoLowerGraphics
IniWrite, %AutoZoomInCamera%, %a_scriptdir%\macrosave.ini, settings, AutoZoomInCamera
IniWrite, %baitdelay%, %a_scriptdir%\macrosave.ini, settings, baitdelay

IniWrite, %sright%, %a_scriptdir%\macrosave.ini, settings, sright
IniWrite, %dright%, %a_scriptdir%\macrosave.ini, settings, dright
IniWrite, %sleft%, %a_scriptdir%\macrosave.ini, settings, sleft
IniWrite, %dleft%, %a_scriptdir%\macrosave.ini, settings, dleft
IniWrite, %FishBarColorTolerance%, %a_scriptdir%\macrosave.ini, settings, FishBarColorTolerance
msgbox, saved!
return