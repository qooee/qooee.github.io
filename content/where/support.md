+++
title = "Support"
description = "Help with your daily WFH log, automatic recording, corrections and backups."
updated = "5 November 2026"
+++

Need a hand? Email [hello@qooee.net](mailto:hello@qooee.net?subject=Qooee%20Where%20support). Tell us what you were trying to do, what happened, and your Qooee Where and macOS versions. Find these in **Qooee Where → About Qooee Where** and **Apple menu → About This Mac**.

We cannot see your diary. A fictional example or a redacted screenshot is usually enough; please check attachments before sending them. There is no need to send a complete diary, network identifiers or passwords for a general question.

## Record and check a day

1. Choose a date in the main **WFH log** window.
2. Select **Edit WFH hours…**, enter the actual start and finish, and add any excluded breaks. You can also use **Start WFH** to record as you work.
3. Check the total and save. Use **Confirm day**, or the editor’s save-and-check action, once the day is complete. A running timer must finish before its day can be checked.

For a day with no home work, use **No WFH** in the day editor, or confirm **No WFH** in **Check days…**. This records a checked zero-hour day; it is different from leaving a day blank. The checking queue gathers past days that still need attention. Today and future days are not overdue.

The **Recording period** sets the start of your log. Days before it stay outside the checking queue. Record any earlier-record reference there if you keep part of the year elsewhere.

## Correct time in the grid

Click a day square in the year overview to open **Recording details** for that date. The day grid has one column per hour and six ten-minute blocks down each column.

- Click a block, then Shift-click the final block to select a range. For a 15:30–16:00 break, select the 15:30, 15:40 and 15:50 blocks.
- Alternatively, choose **Select time range…** and enter the start and finish directly. Tab moves through the time fields and assignment actions when macOS Keyboard Navigation is enabled.
- Choose **Break**, **Personal**, **WFH** or **Elsewhere**. Break and Personal share a colour and both stay outside WFH totals; their classifications remain distinct in the details.
- Use the named **Undo** action to restore the previous assignment.

WFH or Elsewhere assigns the whole selected range as work, including any breaks inside it. Check the selection before applying the change. Daily corrections retain earlier entries for inspection.

On an unchecked past day, **Assign remaining time** assigns all remaining recorded time together. Existing assignments, breaks, personal time and blank intervals stay as they are. Individual grid corrections remain available afterwards.

## Automatic recording

**Home detection**, the **work timer** and **activity recording** are separate controls:

- **Home detection** recognises Home or Not home from the Wi-Fi and display rules you enable. It records presence while the app runs and the Mac is awake.
- **Work timer** records time you deliberately choose to count as work. It follows the current location; Unknown is left out of WFH until you correct it. Turn work recording off for a break.
- **Activity recording** optionally records coarse intervals based on the time since keyboard or mouse input. It does not read the input itself. These intervals remain unassigned until you review them.

Pausing activity recording does not stop the work timer or home detection. Turning the work timer off does not stop those independent recordings. Use the labelled menu-bar controls or **Settings → Work & activity** to choose what is running.

Automatic observations and suggested work need checking. They do not, by themselves, confirm tax-log hours. You can use the entire daily WFH flow manually without enabling detection or activity recording.

## Home or Office is not recognised

Open **Settings → Home detection**. Enable detection and the rules you want to use. Add a Wi-Fi network or display to your home rules, or to **Other networks** for a place that should be recognised as Not home. Labels are optional. Display brand/model names are shown when macOS supplies them.

Rules are alternatives: a matching office Wi-Fi network **or** office display is enough for Not home. If home and away rules match at once, the app warns about the conflict. Review the enabled rules and connected devices rather than relying on a location result during that conflict.

For Wi-Fi, choose **Allow Wi-Fi recognition…** and check **System Settings → Privacy & Security → Location Services**. The saved network name must match the connected network; if you restrict access points, include the ones you use. The app requests this permission to read the connected network, without requesting coordinates. Display rules do not need it.

Allow a couple of minutes for evidence to settle. Unknown means the app cannot establish the location from the available evidence. Use a temporary **Home for two hours** or **Not home for two hours** choice when needed; **Automatic home detection** returns to your rules. Automatic detection cannot reconstruct closed-app or sleeping-Mac time.

## Gaps, merging and rounded totals

Daily and annual hour totals are rounded to the nearest minute. Matching WFH sessions with recording gaps of **up to and including one minute** include those short gaps in WFH time. Explicit breaks and personal exclusions remain excluded.

Longer gaps remain excluded even when sessions are grouped for easier viewing. The configurable grouping threshold in **Settings → Work & activity** controls grouping, not permission to fill longer gaps. Expand a group or use the grid to inspect exact recordings. Assign time explicitly if a longer gap was actual work.

## Export an annual handover

Open **WFH year** in the main window and choose **Save year package…**. The package includes a readable HTML report, daily WFH CSV, detailed work-block CSV, complete diary JSON and instructions. It shows checked hours and unfinished days separately. Checked No WFH days appear as zero-hour entries.

Open the readable report in a browser, or open CSV files in Numbers or Excel. If asked, use UTF-8 and a comma separator. Keep the JSON file for complete restoration; a CSV is a report, not a full backup. Notes are optional in reports, but the complete backup contains them.

Qooee Where records hours; it does not determine deduction eligibility or calculate a tax claim. Keep required expense evidence separately. Consult the [ATO’s working-from-home guidance](https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim/working-from-home-expenses) for the records relevant to your claim.

## Backup and restore

Choose **Backup & recovery… → Save backup…**. Save the dated, verified JSON file to an external drive or a folder that syncs off your Mac. Allow syncing to finish and check that the file is accessible independently of this Mac.

On a clean installation:

1. Open **Backup & recovery… → Restore backup…**.
2. Select the saved backup and check the preview, date and record counts.
3. Choose **Restore backup**. All years, original entry versions, checking history, log coverage and report settings are restored. The source file remains unchanged.

Restoration requires an empty diary. Recording stays off afterwards; set up home detection and automatic recording separately on the new Mac. Device-specific rules and permissions are not included in the portable backup. Complete diary JSON from an annual package can also be restored.

**Recovery snapshots on this Mac** retain the latest 20 copies made before diary edits. These help undo mistakes but share the same disk. Restoring a snapshot preserves the current file first; inspect its date and counts before confirming.

## A diary will not open or save

Keep the records folder and any error message. The app preserves unreadable and newer-format stores instead of overwriting them. Use **Reload diary** after resolving a file-access or conflict issue.

Use **Show records and recovery files in Finder** in Backup & recovery, or the records control in Settings, to locate the files. Quit the app before manually copying them and keep the originals. Contact support with the error text first; do not delete records to troubleshoot a general problem.

## Privacy, deletion and accessibility

Normal recording deletion offers Undo until the next review action or restart. **Permanently remove…** also removes selected recordings from app-held recovery and import copies. Previously exported files and backups remain under your control. See the [privacy policy](../privacy/#retention-and-deletion) for the full scope.

You can change reading size and calendar Grid/Details in the app. If keyboard navigation, VoiceOver or a display setting makes a control difficult to use, tell us the window, action and expected result, using fictional data. We welcome accessibility reports; full VoiceOver support is still being verified.

## Contact and purchases

Support and privacy enquiries: [hello@qooee.net](mailto:hello@qooee.net?subject=Qooee%20Where%20support).

Provided by **evil robots pty ltd**, ABN 21 667 313 911, PO Box 201, Berowra Heights NSW 2082, Australia.

The Mac App Store release is being prepared. Once available, Apple handles Store billing and refunds; [Apple purchase support](https://support.apple.com/en-au/billing) covers those requests. For an app problem, contact us directly.
