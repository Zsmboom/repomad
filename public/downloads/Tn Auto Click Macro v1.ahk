;v1 TN auto click macro 2025

#Requires Autohotkey v1
#SingleInstance force
Hotkey, ~LButton, Off  ; Disable the hotkey at the start
FilePath = %A_MyDocuments%\iniclick.ini
speed = 100
Ver = V1

infotext = 
(
This is the TN Fisch Macro %version%. 
Created by tab nation 2025

Single Point - Clicks at a single point
Two Point - Clicks at two points
Random - Clicks randomly on the screen
Long Clicks - Clicks and holds
Key Spam - Spams a key
IMG Search - Clicks on an image based on image you have saved on your computer
Pix Search - Clicks on a pixel color you pick
)	


if !FileExist(FilePath)
	{
	IniWrite, 100, %FilePath%, settings, speed
    IniWrite, TN Auto Click Macro, %FilePath%, settings, windowname
    IniWrite, 0, %FilePath%, settings, x1
    IniWrite, 0, %FilePath%, settings, y1
    IniWrite, 0, %FilePath%, settings, x2
    IniWrite, 0, %FilePath%, settings, y2
    IniWrite, 5, %FilePath%, settings, range
    IniWrite, 0x000000, %FilePath%, settings, hexedit
    }
IniRead, speed, %FilePath%, settings, speed
IniRead, windowname, %FilePath%, settings, windowname
IniRead, x1, %FilePath%, settings, x1
IniRead, y1, %FilePath%, settings, y1
IniRead, x2, %FilePath%, settings, x2
IniRead, y2, %FilePath%, settings, y2
IniRead, range, %FilePath%, settings, range
IniRead, hexedit, %FilePath%, settings, hexedit


Menu, FileMenu, Add, About, MenuHandler
Menu, FileMenu, Add, Donate, MenuHandler
Menu, FileMenu, Add, Exit, MenuHandler

Menu, MyMenuBar, Add, File, :FileMenu

Gui Menu, MyMenuBar
Gui, Font, s10

Gui, Add, GroupBox, x16 y8 w120 h59, SPEED
Gui, Add, Edit, x32 y32 w95 h20 vspeed, %speed%

Gui, Add, GroupBox, x152 y8 w217 h60, Window Name
Gui, Add, Edit, x168 y32 w190 h20 vwindowname, %windowname%
Gui, Add, Button, x380 y23 w86 h34 ggettitle, Get Name

Gui, Add, GroupBox, x16 y88 w585 h105, Modes
Gui, Add, Button, x24 y112 w86 h34 gsinglepoint, Single Point
Gui, Add, Button, x120 y112 w86 h34 gtwopoint, Two Point
Gui, Add, Button, x216 y112 w86 h34 grandomclick, Random
Gui, Add, Button, x312 y112 w86 h34 glongclick, Long Clicks
Gui, Add, Button, x408 y112 w86 h34 gkeyspam, Key Spam
Gui, Add, Button, x503 y112 w86 h34 gimgsearch, IMG Search
Gui, Add, Button, x24 y153 w86 h34 gpixsearch, Pix Search

Gui, Show, w620 h205, TN Auto Click Macro %Ver%
return

;==============================  Get window Info   ==============================
gettitle:
    msgbox, Make window active and press f2
Return

f2::
    WinGetTitle, windowname, A  
    msgbox, %windowname% - Copied to clipboard
    A_clipboard = %windowname%
Return

;==============================  Single point   ==============================
singlepoint:
    Gui, Submit
    gosub, save
    if (windowname = "")
    {
        MsgBox, The Window Name is blank!
        reload
    }
    WinActivate, %windowName% 
    tooltip, Single Click Mode / F1 to reload
    loop{
        Click
        Sleep, %speed%
            IfWinNotActive, %windowname%
            {
                reload
            }
    }

;==============================  Two Point   ==============================
twopoint:
    Gui, Submit
    gosub, save
    if (windowname = "")
    {
        MsgBox, The Window Name is blank!
        reload
    }
    WinActivate, %windowName% 
    sleep, 1000
    tooltip, click first point
    KeyWait, LButton, D
    MouseGetPos, MouseX1, MouseY1
    sleep 1000
    tooltip, click second point
    KeyWait, LButton, D
    MouseGetPos, MouseX2, MouseY2
    sleep, 1000

    tooltip, Two Point Click Mode / F1 to reload    

    loop{
        Click, %MouseX1%, %MouseY1%
        Sleep, %speed%
        Click, %MouseX2%, %MouseY2%
        Sleep, %speed%
            IfWinNotActive, %windowname%
            {
                reload
            }
    }

;==============================  Random Click   ==============================
randomclick:
    Gui, Submit
    gosub, save
    CoordMode, Mouse, Window
    WinActivate, %windowName% 
    sleep, 1000
    ; Get the active window's position and size
    WinGetPos, winX, winY, winWidth, winHeight, A  ; "A" refers to the active window
    tooltip, Random Click Mode / F1 to reload  
    loop{
     Random, randX, winX, winX + winWidth  ; Random X position within the window
     Random, randY, winY, winY + winHeight  ; Random Y position within the window
     Click, %randX%, %randY%
     Sleep, %speed%
    }

;==============================  Long Click   ==============================  
longclick:
    Gui, Submit
    gosub, save
    WinActivate, %windowName% 
    sleep, 1000
    tooltip, Long Click Mode / F1 to reload 
    loop{
        Click, down
        Sleep, %speed%
        Click, up
            IfWinNotActive, %windowname%
            {
                reload
            }
    }

;==============================  Key spammer   ==============================  
keyspam:
    Gui, Submit
    gosub, save
    Gui, 2:Add, Text, x16 w198 h80 , Enter key to press on repeat (spell out full name of keys like enter or space)
    Gui, 2:Add, Edit, vspamkey x56 y80 w120 h21
    Gui, 2:Add, Button, gSubmit2 x56 y120 w121 h50, Go
    Gui, 2:Show, , KS
    Return

    Submit2:
    Gui, 2:Submit 

    WinActivate, %windowName% 
    sleep, 1000
    tooltip, Key spam Mode / F1 to reload 

    If spamkey contains enter, space, tab
        {
            loop{
                Send, {%spamkey%}
                Sleep, %speed%
                    IfWinNotActive, %windowname%
                    {
                        reload
                    }
            }
        }

    loop{
        Send, %spamkey%
        Sleep, %speed%
            IfWinNotActive, %windowname%
            {
                reload
            }
    }

;==============================  Image Search   ==============================
imgsearch:
; Open File Explorer to pick an image
FileSelectFile, ImagePath, 3, , Select an Image, Images (*.png; *.jpg; *.bmp)
Gui, Submit
gosub, save
MsgBox, Selected Image: %ImagePath%`n now highlight area to search by holding left click down. press ok to start.


CoordMode, Mouse, Screen
global x1, y1, x2, y2
Hotkey, ~LButton, On  ; Disable the hotkey at the start
sleep, 3000
~LButton::
    MouseGetPos, x1, y1  ; Get initial position when left mouse button is pressed
    While GetKeyState("LButton", "P")  ; Wait for button release
        Sleep, 10
    MouseGetPos, x2, y2  ; Get final position when mouse button is released

    ; Ensure x1, y1 are the top-left and x2, y2 are the bottom-right
    if (x2 < x1) 
        Swap(x1, x2)
    if (y2 < y1) 
        Swap(y1, y2)
    H :=x2 - x1
    W := y2 - y1
    Hotkey, ~LButton, Off  ; Disable the hotkey at the start

tooltip, Image Search Mode / F1 to reload

; Get image dimensions
Width := 0
Height := 0
FileGetSize, ImageSize, %ImagePath%  ; Ensure the file exists
if (ImageSize > 0)
{
    SplitPath, ImagePath, , , , Ext
    if (Ext = "png" or Ext = "bmp" or Ext = "jpg")
    {
        ImageGetSize(ImagePath, Width, Height)
    }
}

Loop
{
    ImageSearch, FoundX, FoundY, %x1%, %y1%, %x2%, %y2%, %ImagePath%
    if (ErrorLevel = 0)  ; Image found
    {
        CenterX := FoundX + (Width // 2)
        CenterY := FoundY + (Height // 2)
        Click, %CenterX%, %CenterY%
    }
    Sleep, %speed%  ; Small delay to avoid excessive CPU usage
}

; Function to get image dimensions
ImageGetSize(ImagePath, ByRef Width, ByRef Height)
{
    VarSetCapacity(BITMAP, 24, 0)
    hImage := DllCall("LoadImage", "UInt", 0, "Str", ImagePath, "UInt", 0, "Int", 0, "Int", 0, "UInt", 0x10)
    if !hImage
        return
    DllCall("GetObject", "UInt", hImage, "Int", 24, "UInt", &BITMAP)
    Width := NumGet(BITMAP, 4, "Int")
    Height := NumGet(BITMAP, 8, "Int")
    DllCall("DeleteObject", "UInt", hImage)
}
Return

Swap(ByRef a, ByRef b)
{
    temp := a
    a := b
    b := temp
}
Return

;==============================  Pix Search   ==============================
pixsearch:
    Gui, Submit
    gosub, save
    CoordMode, Pixel, Screen


    Gui, 3:Add, Text, x10 y10 w100 h20, Hex Value:
    Gui, 3:Add, Edit, x120 y10 w100 vHexEdit
    
    Gui, 3:Add, Text, x10 y40 w100 h20, Slider Value:
    Gui, 3:Add, Edit, x120 y40 w100 vrange
    
    Gui, 3:Add, Text, x10 y70 w40 h20, X1:
    Gui, 3:Add, Edit, x50 y70 w50 vX1Edit
    Gui, 3:Add, Text, x110 y70 w40 h20, Y1:
    Gui, 3:Add, Edit, x140 y70 w50 vY1Edit
    
    Gui, 3:Add, Text, x10 y100 w40 h20, X2:
    Gui, 3:Add, Edit, x50 y100 w50 vX2Edit
    Gui, 3:Add, Text, x110 y100 w40 h20, Y2:
    Gui, 3:Add, Edit, x140 y100 w50 vY2Edit
    
    Gui, 3:Add, Button, x10 y130 w80 h30 gGetXY, Get X Y
    Gui, 3:Add, Button, x100 y130 w80 h30 gGetColor, Get Color
    Gui, 3:Add, Button, x190 y130 w80 h30 gStartAction, Start
    
    Gui, 3:Show, w290 h180, PIx Search
    Return
    
    GetXY:
        tooltip, Click on the screen to get X1 and Y1 coordinates
        sleep 1000
        keywait, LButton, D
        MouseGetPos, mx, my
        GuiControlGet, x1, , X1Edit
        GuiControlGet, y1, , Y1Edit
            GuiControl,, X1Edit, %mx%
            GuiControl,, Y1Edit, %my%
        tooltip, Click on the screen to get X2 and Y2 coordinates
        sleep 1000
        keywait, LButton, D
        MouseGetPos, mx, my
            GuiControl,, X2Edit, %mx%
            GuiControl,, Y2Edit, %my%
        tooltip,
    Return
    
    GetColor:
        tooltip, Click on the screen to get color
        sleep 1000
        keywait, LButton, D
        MouseGetPos, mx, my
        PixelGetColor, color, %mx%, %my%
        GuiControl,, HexEdit, %color%
        tooltip,
    Return
    
    StartAction:
    gui, 3:submit
    gosub, save
    tooltip, Pix Search Mode / F1 to reload
    sleep 1000
    Loop
    {
        PixelSearch, Px, Py, %X1%, %Y1%, %X2%, %Y2%, %HexEdit%, %range%
        if (ErrorLevel = 0)
        {
            Click, %Px%, %Py%
        }
        Sleep, %speed%
    }
    Return


;==============================  Save Settings   ==============================
save:
    IniWrite, %speed%, %FilePath%, settings, speed
    IniWrite, %windowname%, %FilePath%, settings, windowname
    IniWrite, %x1%, %FilePath%, settings, x1
    IniWrite, %y1%, %FilePath%, settings, y1
    IniWrite, %x2%, %FilePath%, settings, x2
    IniWrite, %y2%, %FilePath%, settings, y2
    IniWrite, %range%, %FilePath%, settings, range
    IniWrite, %hexedit%, %FilePath%, settings, hexedit
Return


;==============================  Other   ==============================
GuiClose:
    ExitApp

MenuHandler:
    if (A_ThisMenuItem = "Exit")
    {
        ExitApp
    }
    else if (A_ThisMenuItem = "About")
	{
        msgbox, %infotext%
    }
    else if (A_ThisMenuItem = "Donate")
        {
            Run, https://www.paypal.com/paypalme/tabnationYT
        }
Return

f1::reload