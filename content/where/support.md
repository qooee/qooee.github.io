+++
title = "Support"
description = "Help with your daily WFH log, automatic recording, corrections and backups."
updated = "5 November 2026"
support_contact = true
+++

## Getting started

Qooee Where requires **macOS 14 or later**. The Mac App Store release is being prepared.

If you have a beta invitation, install [TestFlight for Mac](https://testflight.apple.com/), open the invitation on your Mac and choose **View in TestFlight → Accept → Install**. Use **Update** in TestFlight for later builds. If no build is available, contact us with the message you see.

Open Qooee Where from Applications. If only its menu-bar icon appears, choose **Open diary**. Closing the window leaves recording running; **Quit Qooee Where** stops it.

Start with a manual day below. Home detection and activity recording are optional.

## Record and check a day

1. Choose a date in the main **WFH log** window.
2. Select **Add WFH hours…** for a new day, or **Edit WFH hours…** for an existing one. Enter the actual start and finish and add any breaks.
3. Choose **Save WFH hours**, check the total, then **Confirm day** once the day is complete. In the checking queue, **Save & check** does both.

To record as you work, choose **Start WFH**. Use **Pause** for a break and **Finish & check…** when you finish. A running timer must finish before its day can be checked.

For a day with no home work, turn on **No WFH this day** in the editor, save and confirm it. You can also choose **No WFH** in **Check days**. A checked zero-hour day is different from a blank day.

**Check days** gathers past days that need attention. Choose **Start date…** to set the recording period; days before that date are not overdue. Add an earlier-record reference if you keep part of the year elsewhere.

## Correct time in the grid

Click a day square in the year overview to open **Recording details** for that date. The day grid has one column per hour and six ten-minute blocks down each column.

- Click a block, then Shift-click the final block to select a range. For a 15:30–16:00 break, select the 15:30, 15:40 and 15:50 blocks.
- Alternatively, choose **Select time range…** and enter **Start 15:30** and **Finish 16:00** directly.
- Choose **Break**, **Personal**, **WFH** or **Elsewhere**. The legend combines Break and Personal as **Break / personal**; both are excluded from WFH hours.
- Use **Undo** to restore the previous assignment.

WFH or Elsewhere assigns the whole selected range as work, including any breaks inside it. Check the selection before applying the change. Daily corrections retain earlier entries for inspection.

On an unchecked past day, **Assign remaining time** assigns all remaining recorded time together. Existing assignments, breaks, personal time and blank intervals stay as they are. Individual grid corrections remain available afterwards.

## Automatic recording

To suggest work time automatically:

1. Set up your rules in **Settings → Home detection** and enable detection.
2. In **Settings → Work & activity**, enable **Record work automatically when the app opens**. This applies on the next launch.
3. To start during the current session, turn on **Record work time** in the menu-bar menu or **Diary** menu. Choose **Work location → Automatic** to follow your home rules.

The menu controls have different purposes:

- **Record work time** runs the work timer. Turn it off for a break. It includes idle time while the Mac is awake.
- **Record activity observations** captures optional activity intervals for later assignment. Turning it off does not stop the work timer or home detection.
- **Work location** chooses Automatic, Home or Elsewhere for new work time. A manual choice lasts until you select Automatic or quit; it does not change earlier entries.

Check suggested hours before confirming a day. Add work done while the app was closed or the Mac was asleep manually.

## Home or Office is not recognised

1. Open **Settings → Home detection** and enable **Detect and record Home / Not home**.
2. Add your network or stationary display under **Home rules**, or under **Other networks** for an office or another away location. Enable the saved rule.
3. For Wi-Fi, choose **Allow Wi-Fi recognition…**. If access was denied, enable Qooee Where in **System Settings → Privacy & Security → Location Services**. Check that the saved network name matches; if you restricted access points, include the ones you use.
4. If home and away rules match at once, resolve the warning by correcting the conflicting rules.

Rules use **or**: matching either the office Wi-Fi or the office display is enough for Not home. Labels are optional; display names are offered when macOS supplies them.

**Unknown** means no rule can establish the location. For work you are recording now, choose **Work location → Home** or **Elsewhere** in the menu. Correct earlier time in **Recording details**.

For a temporary presence override, use **Settings → Home detection → Temporary choice**. **Automatic** returns to the saved rules.

## Gaps, merging and rounded totals

Daily and annual hour totals are rounded to the nearest minute. Matching WFH sessions with recording gaps of **up to and including one minute** include those short gaps in WFH time. Explicit breaks and personal exclusions remain excluded.

Longer gaps remain excluded even when sessions are grouped for easier viewing. The configurable grouping threshold in **Settings → Work & activity** controls grouping, not permission to fill longer gaps. Expand a group or use the grid to inspect exact recordings. Assign time explicitly if a longer gap was actual work.

## Export an annual handover

Open **WFH year**, select the financial year and choose **Save year package…**. Use **Check days…** there to finish any unchecked days first. The package contains a readable report, daily WFH CSV, detailed work blocks and a complete diary backup. Checked zero-WFH days and unfinished days are shown separately.

Open the readable report in a browser, or open CSV files in Numbers or Excel. If asked, use UTF-8 and a comma separator. Keep the JSON file for complete restoration; a CSV is a report, not a full backup. Notes are optional in reports, but the complete backup contains them.

Qooee Where records hours; it does not determine deduction eligibility or calculate a tax claim. Keep required expense evidence separately. Consult the [ATO’s working-from-home guidance](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/working-from-home-expenses) for the records relevant to your claim.

## Backup and restore

Choose **Diary → Backup & recovery… → Save backup…**. Select an external drive or a folder that syncs off your Mac. Wait for **Backup saved and verified** and, if using a synced folder, allow syncing to finish.

**Restore on a new or empty installation:**

1. Open **Diary → Backup & recovery… → Restore backup…**.
2. Select the saved backup and check the preview, date and record counts.
3. Choose **Restore backup**. All years, original entry versions, checking history, log coverage and report settings are restored. The source file remains unchanged.

If **Restore backup…** is unavailable, the diary contains records, a timer is running or a diary/settings error needs resolving. Keep existing records and contact support if you need help; do not delete them to enable restoration.

Recording stays off after restoration. Set up home detection and automatic recording separately on the new Mac. Complete diary JSON from an annual package can also be restored.

**Recovery snapshots on this Mac** retain the latest 20 copies made before diary edits. These help undo mistakes but share the same disk. Restoring a snapshot preserves the current file first; inspect its date and counts before confirming.

## A diary will not open or save

Keep the error message and existing records. Open **Diary → Show records in Finder** to find them; quit the app before copying the folder somewhere safe.

Check that the disk has free space and the records folder is writable. Reopen the app and choose **Diary → Reload diary** after resolving a file-access or conflict issue. If the error remains, send its text to support. Do not delete the diary or replace an unreadable file with an empty one.

## Delete records {#privacy-deletion-and-accessibility}

Normal recording deletion offers Undo until the next review action or restart. **Permanently remove…** also removes selected recordings from app-held recovery and import copies. Exported files and separate backups are unaffected. See the [privacy policy](../privacy/#retention-and-deletion).

To remove all local records, first save anything you want to keep. Use **Diary → Backup & recovery… → Show records and recovery files in Finder**, quit the app, then remove its diary, settings, Recovery and Imports files. Manage exports and other backups separately. Uninstalling the app alone can leave these files behind.

## Keyboard and VoiceOver

For keyboard use, enable **System Settings → Keyboard → Keyboard navigation**. Use **Select time range…** instead of moving through individual grid blocks. Reading size is in **Settings → General → Reading**. Report keyboard, VoiceOver or display problems with the window name, action and expected result.

## Contact and purchases

Email [hello@qooee.net](mailto:hello@qooee.net?subject=Qooee%20Where%20support) and include:

- What you were trying to do, what happened and any error text.
- App version: **Qooee Where → About Qooee Where**. Mention TestFlight if you use it.
- macOS version: **Apple menu → About This Mac**.
- A screenshot or fictional example if helpful. Check it for private information; a complete diary is not needed for a general question.

If the email button does not open your mail app, copy **hello@qooee.net** into your usual email service.

Apple handles App Store billing and refund requests through [Apple purchase support](https://support.apple.com/en-au/billing). For problems with Qooee Where itself, contact us directly.
