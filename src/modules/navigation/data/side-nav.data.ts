import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'PERSONAL',
        items: ['dashboard', 'my_team', 'timesheet', 'settings'],
    },
    {
        text: 'SELF SERVICE',
        items: ['absence', 'benefit', 'personal'],
    },
    {
        text: 'MY REQUEST',
        items: ['request_absence', 'request_benefit', 'request_checkin_checkout', 'request_personal'],
    },
    {
        text: 'Check In/Out',
        items: ['check_in', 'check_out']
    },
    {
        text: 'APPROVAL',
        items: ['approval_absence', 'approval_benefit', 'approval_personal', 'approval_checkin_out']
    },
    {
        text: 'APPROVAL HISTORY',
        items: ['approval_history_absence', 'approval_history_benefit', 'approval_history_personal', 'approval_history_checkin_out']
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/self-service/absence'
    },
    benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/self-service/benefit'
    },
    personal: {
        icon: 'user',
        text: 'Personal',
        submenu: [
            {
                text: 'Biodata',
                link: '/self-service/pesonal/biodata'
            },
            {
                text: 'Address',
                link: '/self-service/pesonal/address'
            },
            {
                text: 'Family',
                link: '/self-service/pesonal/family'
            }
        ],
    },
    request_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/request/absence'
    },
    request_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/request/benefit'
    },
    request_checkin_checkout: {
        icon: 'clock',
        text: 'Check In / Out',
        submenu: [
            {
                text: 'Check In',
                link: '/request/checkin'
            },
            {
                text: 'Check Out',
                link: '/request/checkout'
            }
        ]
    },
    request_personal: {
        icon: 'user',
        text: 'Personal',
        submenu: [
            {
                text: 'Biodata',
                link: '/request/personal/biodata'
            },
            {
                text: 'Address',
                link: '/request/personal/address'
            },
            {
                text: 'Family',
                link: '/request/personal/family'
            }
        ]
    },
    my_team: {
        icon: 'user-friends',
        text: 'My Team',
        link: '/my-team'
    },
    check_in: {
        icon: 'sign-in-alt',
        text: 'Check In',
        link: "/check-in"
    },
    check_out: {
        icon: 'sign-out-alt',
        text: 'Check Out',
        link: "/check-out"
    },
    timesheet: {
        icon: 'calendar-alt',
        text: 'Timesheet',
        link: '/timesheet'
    },
    approval_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/approval/absence'
    },
    approval_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/approval/benefit'
    },
    approval_personal: {
        icon: 'user',
        text: 'Personal',
        submenu: [
            {
                text: 'Biodata',
                link: '/approval/personal/biodata'
            },
            {
                text: 'Address',
                link: '/approval/personal/address'
            },
            {
                text: 'Family',
                link: '/approval/personal/family'
            }
        ]
    },
    approval_checkin_out: {
        icon: 'clock',
        text: 'CheckIn/Out',
        link: '/approval/checkin-out'
    },
    approval_history_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/approval/history/absence'
    },
    approval_history_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/approval/history/benefit'
    },
    approval_history_personal: {
        icon: 'user',
        text: 'Personal',
        submenu: [
            {
                text: 'Biodata',
                link: '/approval/history/personal/biodata'
            },
            {
                text: 'Address',
                link: '/approval/history/personal/address'
            },
            {
                text: 'Family',
                link: '/approval/history/personal/family'
            }
        ]
    },
    approval_history_checkin_out: {
        icon: 'clock',
        text: 'CheckIn/Out',
        link: '/approval/history/checkin-out'
    },
    settings: {
        icon: 'cogs',
        text: 'Settings',
        link: '/setting'
    },
};
