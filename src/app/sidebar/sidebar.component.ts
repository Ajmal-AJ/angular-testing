import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menustructue =
  {
    "RootMenus": [
      {
        "Name": "Time & Attendance Management",
        "MenuId": "rootTAM",
        "Submenus": [
          {
            "Name": "Masters",
            "MenuId": "mnuTAMMasters",
            "ParentId": null,
            "Submenus": [
              {
                "Name": "Additional OFF Day",
                "MenuId": "mnuAdditionalOFFDay",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Daily Schedule Settings",
                "MenuId": "mnuDailyScheduleSettings",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Policy Codes",
                "MenuId": "mnuPolicyCode",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Request Master",
                "MenuId": "mnuRequestMaster",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Shift Codes",
                "MenuId": "mnuShiftCodes",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Special Seasons",
                "MenuId": "mnuSpecialSeasons",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Time Round Off Codes",
                "MenuId": "mnuTimeRoundOffCodes",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Weekly Schedule Settings",
                "MenuId": "mnuWeeklyScheduleSettings",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              },
              {
                "Name": "Weekly Shift Schedule",
                "MenuId": "mnuWeeklyShiftSchedule",
                "ParentId": "mnuTAMMasters",
                "Submenus": []
              }
            ]
          },
          {
            "Name": "Reports",
            "MenuId": "mnuTAMRpt",
            "ParentId": null,
            "Submenus": [
              {
                "Name": "Consolidated Attendance Report",
                "MenuId": "mnuConsolidatedAttnRpt",
                "ParentId": "mnuTAMRpt",
                "Submenus": []
              },
              {
                "Name": "Absent Report",
                "MenuId": "mnuAbsentReport",
                "ParentId": "mnuTAMRpt",
                "Submenus": []
              }
            ]
          },
          {
            "Name": "Transactions",
            "MenuId": "mnuTAMTrx",
            "ParentId": null,
            "Submenus": [
              {
                "Name": "Time Bookings",
                "MenuId": "mnuTimeBookings",
                "ParentId": "mnuTAMTrx",
                "Submenus": []
              },
              {
                "Name": "Daily Time Sheet",
                "MenuId": "mnuTAMDailyTimeSheet",
                "ParentId": "mnuTAMTrx",
                "Submenus": []
              }
            ]
          }
        ]
      },
      
      {
        "Name": "Dashboard",
        "MenuId": "rootDash",
        "Submenus": [
          {
            "Name": "Masters",
            "MenuId": "mnuDashMasters",
            "ParentId": null,
            "Submenus": [
              {
                "Name": "Dashboard Viewer",
                "MenuId": "mnuDashBoardViewer",
                "ParentId": "mnuDashMasters",
                "Submenus": []
              },
              {
                "Name": "Dashboard Designer",
                "MenuId": "mnuDashBoardDesigner",
                "ParentId": "mnuDashMasters",
                "Submenus": []
              }
            ]
          }
        ]
      }
    ]
  }

}
