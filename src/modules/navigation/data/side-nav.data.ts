import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'PERSONAL',
        authorization: 'EMPLOYEE',
        items: ['dashboard', 'my_team', 'timesheet', 'settings'],
    },
    {
        text: 'SELF SERVICE',
        authorization: 'EMPLOYEE',
        items: ['absence', 'benefit', 'personal'],
    },
    {
        text: 'MY REQUEST',
        authorization: 'EMPLOYEE',
        items: ['request_absence', 'request_benefit', 'request_checkin_checkout', 'request_personal'],
    },
    {
        text: 'Check In/Out',
        authorization: 'EMPLOYEE',
        items: ['check_in', 'check_out']
    },
    {
        text: 'APPROVAL',
        authorization: 'HRADMIN,MANAGER',
        items: ['approval_absence', 'approval_benefit', 'approval_personal', 'approval_checkin_out']
    },
    {
        text: 'APPROVAL HISTORY',
        authorization: 'HRADMIN,MANAGER',
        items: ['approval_history_absence', 'approval_history_benefit', 'approval_history_personal', 'approval_history_checkin_out']
    }
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
        authorization: 'EMPLOYEE'
    },
    absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/self-service/absence',
        authorization: 'EMPLOYEE'
    },
    benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/self-service/benefit',
        authorization: 'EMPLOYEE'
    },
    personal: {
        icon: 'user',
        text: 'Personal',
        authorization: 'EMPLOYEE',
        submenu: [
            {
                text: 'Biodata',
                link: '/self-service/personal/biodata',
                authorization: 'EMPLOYEE',
            },
            {
                text: 'Address',
                link: '/self-service/personal/address',
                authorization: 'EMPLOYEE',
            },
            {
                text: 'Family',
                link: '/self-service/personal/family',
                authorization: 'EMPLOYEE',
            }
        ],
    },
    request_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/my-request/absence',
        authorization: 'EMPLOYEE'
    },
    request_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/my-request/benefit',
        authorization: 'EMPLOYEE'
    },
    request_checkin_checkout: {
        icon: 'clock',
        text: 'Check In / Out',
        authorization: 'EMPLOYEE',
        submenu: [
            {
                text: 'Check In',
                link: '/my-request/check-in',
                authorization: 'EMPLOYEE',
            },
            {
                text: 'Check Out',
                link: '/my-request/check-out',
                authorization: 'EMPLOYEE',
            }
        ]
    },
    request_personal: {
        icon: 'user',
        text: 'Personal',
        authorization: 'EMPLOYEE',
        submenu: [
            {
                text: 'Biodata',
                link: '/my-request/personal/biodata',
                authorization: 'EMPLOYEE',
            },
            {
                text: 'Address',
                link: '/my-request/personal/address',
                authorization: 'EMPLOYEE',

            },
            {
                text: 'Family',
                link: '/my-request/personal/family',
                authorization: 'EMPLOYEE',
            }
        ]
    },
    my_team: {
        icon: 'user-friends',
        text: 'My Team',
        link: '/my-team',
        authorization: 'EMPLOYEE'
    },
    check_in: {
        icon: 'sign-in-alt',
        text: 'Check In',
        link: "/check-in",
        authorization: 'EMPLOYEE'
    },
    check_out: {
        icon: 'sign-out-alt',
        text: 'Check Out',
        link: "/check-out",
        authorization: 'EMPLOYEE'
    },
    timesheet: {
        icon: 'calendar-alt',
        text: 'Timesheet',
        link: '/timesheet',
        authorization: 'EMPLOYEE'
    },
    approval_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/approval/absence',
        authorization: 'MANAGER'
    },
    approval_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/approval/benefit',
        authorization: 'MANAGER'
    },
    approval_personal: {
        icon: 'user',
        text: 'Personal',
        authorization: 'HRADMIN',
        submenu: [
            {
                text: 'Biodata',
                link: '/approval/personal/biodata',
                authorization: 'HRADMIN',
            },
            {
                text: 'Address',
                link: '/approval/personal/address',
                authorization: 'HRADMIN',
            },
            {
                text: 'Family',
                link: '/approval/personal/family',
                authorization: 'HRADMIN',
            }
        ]
    },
    approval_checkin_out: {
        icon: 'clock',
        text: 'CheckIn/Out',
        link: '/approval/checkin-out',
        authorization: 'MANAGER'
    },
    approval_history_absence: {
        icon: 'user-clock',
        text: 'Absence',
        link: '/approval/history/absence',
        authorization: 'MANAGER'
    },
    approval_history_benefit: {
        icon: 'user-plus',
        text: 'Benefit',
        link: '/approval/history/benefit',
        authorization: 'MANAGER'
    },
    approval_history_personal: {
        icon: 'user',
        text: 'Personal',
        authorization: 'HRADMIN',
        submenu: [
            {
                text: 'Biodata',
                link: '/approval/history/personal/biodata',
                authorization: 'HRADMIN',
            },
            {
                text: 'Address',
                link: '/approval/history/personal/address',
                authorization: 'HRADMIN',
            },
            {
                text: 'Family',
                link: '/approval/history/personal/family',
                authorization: 'HRADMIN',
            }
        ]
    },
    approval_history_checkin_out: {
        icon: 'clock',
        text: 'CheckIn/Out',
        link: '/approval/history/checkin-out',
        authorization: 'MANAGER'
    },
    settings: {
        icon: 'cogs',
        text: 'Settings',
        link: '/settings',
        authorization: 'EMPLOYEE'
    },
};
