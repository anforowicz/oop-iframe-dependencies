loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'extensionTrialLaunch', value: { label: 'Extension trial launch', milestone: true } },
            { id: 'extensionDevLaunch', value: { label: 'Extension Dev channel launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Cleanup Milestone', milestone: true } },

            // extensionTrialLaunch
            { id: 'enforceExtSec', value: { label: 'Enforce extension security', owner: 'nick' } },
            { id: 'isolateExtensions', value: { label: 'Isolate extensions, not all sites', bug: '481066', owner: 'nick' } },
            { id: 'blockCookies', value: { label: 'Block unauthorized cookies', bug: '467150', owner: 'nick', status: 'complete' } },

            { id: 'launchMetrics', value: { label: 'Metrics for launch' } },
            { id: 'telemetry', value: { label: 'Telemetry (memory, plt, scroll)', owner: 'nasko' } },
            { id: 'umaProcessCount', value: { label: 'UMA stats for process count', owner: 'creis' } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots' } },
            { id: 'layoutTests', value: { label: 'Run layout tests with OOPIFs' } },

            { id: 'sessionHistory', value: { label: 'Session History updated', bug: '236848', owner: 'creis' } },
            { id: 'backForwardBasic', value: { label: 'Basic OOPIF back/forward', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'backForwardFTNs', value: { label: 'Recreate FTNs in back/forward', bug: '502317', owner: 'creis' } },
            { id: 'backForwardSubtree', value: { label: 'Back/forward with subtree', owner: 'creis' } },
            { id: 'sessionRestoreFNEs', value: { label: 'Restore FNEs in Session Restore', owner: 'avi' } },
            
            { id: 'mostInputEvents', value: { label: 'Most OOPIF input events work', owner: 'kenrb' } },
            { id: 'contextMenus', value: { label: 'OOPIF context menus', owner: 'kenrb' } },
            { id: 'scrolling', value: { label: 'OOPIF scrolling works', owner: 'kenrb' } },
            { id: 'mouseCursor', value: { label: 'OOPIF mouse cursor updates', owner: 'kenrb' } },
            
            { id: 'blinkSupport', value: { label: 'Blink OOPIF support' } },
            { id: 'webFrameWidget', value: { label: 'Use WebFrameWidget in all frames', owner: 'dcheng' } },
            { id: 'focusController', value: { label: 'Focus controller' } },
            { id: 'editStack', value: { label: 'Edit stack' } },
            { id: 'findReplace', value: { label: 'Find/replace' } },
            { id: 'mixedContent', value: { label: 'Mixed content checks', bug: '486936' } },
            
            { id: 'ntp', value: { label: 'OOPIF NTP support' } },
            { id: 'chromeUrls', value: { label: 'OOPIF chrome:// support' } },
            

            // extensionDevLaunch
            { id: 'crossFrameScripting', value: { label: 'Cross-process frame scripting' } },
            { id: 'frameOpeners', value: { label: 'Updatable frame openers', owner: 'alexmos' } },
            { id: 'extBrowsingInstance', value: { label: 'Fix BrowsingInstance for extensions' } },
            { id: 'crossProcessJS', value: { label: 'Remaining cross-process JS calls', bug: '128768' } },
            
            { id: 'crossProcessPost', value: { label: 'Cross-process POST submissions', bug: '101395' } },
            
            { id: 'hitTesting', value: { label: 'Browser-side hit testing', owner: 'kenrb' } },
            
            { id: 'printing', value: { label: 'OOPIF printing', bug: '455764', owner: 'thestig' } },
            { id: 'accessibility', value: { label: 'OOPIF accessibility', bug: '475127', owner: 'dmazzoni' } },
            { id: 'testsOnWaterfall', value: { label: 'Site Isolation tests on main waterfall' } },
            

            // siteSubsetLaunch
            { id: 'selectSiteSubset', value: { label: 'Select sites to isolate' } },
            { id: 'enforceSiteSec', value: { label: 'Enforce site isolation', owner: 'nick' } },
            { id: 'isolateSiteSubset', value: { label: 'Isolate subset of sites', owner: 'nick' } },
            { id: 'blockPasswords', value: { label: 'Block unauthorized passwords', bug: '467150', owner: 'lfg', status: 'complete' } },
            { id: 'blockPermissions', value: { label: 'Block unauthorized site permissions', bug: '467150' } },
            { id: 'blockHTML5Storage', value: { label: 'Block unauthorized HTML5 storage', bug: '467150' } },
            { id: 'blockCrossSiteDocs', value: { label: 'Block cross-site documents', bug: '268640', owner: 'alexmos' } },

            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'kenrb' } },

            // miscCleanup
            { id: 'removeSwappedout', value: { label: 'Remove swappedout://', bug: '357747', owner: 'nasko' } },
            { id: 'messagePorts', value: { label: 'Update MessagePorts', owner: 'nasko' } },
            { id: 'webviewSwappedOut', value: { label: 'No swappedout in webview', owner: 'nasko' } },
            { id: 'shareFNEs', value: { label: 'Share FrameNavigationEntries', bug: '373041', owner: 'creis' } },
            { id: 'shareFNEsUnlessCloning', value: { label: 'Share FNEs unless cloning', bug: '373041', owner: 'creis' } },
            { id: 'restoreWithSharing', value: { label: 'Session restore with shared FNEs', owner: 'avi' } },
        ],
        links: [
            { u: 'extensionTrialLaunch', v: 'enforceExtSec' },
            { u: 'extensionTrialLaunch', v: 'launchMetrics' },
            { u: 'extensionTrialLaunch', v: 'sessionHistory' },
            { u: 'extensionTrialLaunch', v: 'mostInputEvents' },
            { u: 'extensionTrialLaunch', v: 'blinkSupport' },
            { u: 'extensionTrialLaunch', v: 'ntp' },
            { u: 'extensionTrialLaunch', v: 'chromeUrls' },

            { u: 'enforceExtSec', v: 'isolateExtensions' },
            { u: 'enforceExtSec', v: 'blockCookies' },

            { u: 'sessionHistory', v: 'backForwardBasic' },
            { u: 'sessionHistory', v: 'backForwardFTNs' },
            { u: 'sessionHistory', v: 'backForwardSubtree' },
            { u: 'sessionHistory', v: 'sessionRestoreFNEs' },
            
            { u: 'mostInputEvents', v: 'contextMenus' },
            { u: 'mostInputEvents', v: 'scrolling' },
            { u: 'mostInputEvents', v: 'mouseCursor' },
            
            { u: 'blinkSupport', v: 'webFrameWidget' },
            { u: 'blinkSupport', v: 'focusController' },
            { u: 'blinkSupport', v: 'editStack' },
            { u: 'blinkSupport', v: 'findReplace' },
            { u: 'blinkSupport', v: 'mixedContent' },
            
            { u: 'launchMetrics', v: 'telemetry' },
            { u: 'launchMetrics', v: 'umaProcessCount' },
            { u: 'launchMetrics', v: 'fyiBotTests' },
            { u: 'launchMetrics', v: 'layoutTests' },


            { u: 'extensionDevLaunch', v: 'extensionTrialLaunch' },
            { u: 'extensionDevLaunch', v: 'crossFrameScripting' },
            { u: 'extensionDevLaunch', v: 'crossProcessPost' },
            { u: 'extensionDevLaunch', v: 'hitTesting' },
            { u: 'extensionDevLaunch', v: 'printing' },
            { u: 'extensionDevLaunch', v: 'accessibility' },
            { u: 'extensionDevLaunch', v: 'testsOnWaterfall' },

            { u: 'crossFrameScripting', v: 'frameOpeners' },
            { u: 'crossFrameScripting', v: 'crossProcessJS' },
            { u: 'crossFrameScripting', v: 'extBrowsingInstance' },


            { u: 'siteSubsetLaunch', v: 'extensionDevLaunch' },
            { u: 'siteSubsetLaunch', v: 'selectSiteSubset' },
            { u: 'siteSubsetLaunch', v: 'enforceSiteSec' },
            { u: 'siteSubsetLaunch', v: 'allInputEvents' },

            { u: 'enforceSiteSec', v: 'isolateSiteSubset' },
            { u: 'enforceSiteSec', v: 'blockPasswords' },
            { u: 'enforceSiteSec', v: 'blockPermissions' },
            { u: 'enforceSiteSec', v: 'blockHTML5Storage' },
            { u: 'enforceSiteSec', v: 'blockCrossSiteDocs' },


            { u: 'miscCleanup', v: 'removeSwappedout' },
            { u: 'removeSwappedout', v: 'messagePorts' },
            { u: 'removeSwappedout', v: 'webviewSwappedOut' },
            { u: 'miscCleanup', v: 'shareFNEs' },
            { u: 'shareFNEs', v: 'shareFNEsUnlessCloning' },
            { u: 'shareFNEs', v: 'restoreWithSharing' },
        ]
    }
);
