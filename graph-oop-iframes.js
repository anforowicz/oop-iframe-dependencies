loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'extensionTrialLaunch', value: { label: 'Extension trial launch', milestone: true, bug: '546050' } },
            { id: 'extensionDevLaunch', value: { label: 'Extension Dev channel launch', milestone: true, bug: '545200' } },
            { id: 'extensionBetaLaunch', value: { label: 'Extension Beta channel launch', milestone: true, bug: '545200' } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Ongoing Cleanup', milestone: true } },

            // extensionTrialLaunch
            { id: 'enforceExtSec', value: { label: 'Enforce extension security', status: 'complete' } },
            { id: 'isolateExtensions', value: { label: 'Isolate extensions, not all sites', bug: '481066', owner: 'nick', status: 'complete' } },
            { id: 'dontIsolatedHostedApps', value: { label: 'Don\'t isolate hosted apps', bug: '535073', owner: 'nick', status: 'complete' } },
            { id: 'blockCookies', value: { label: 'Block unauthorized cookies', bug: '467150', owner: 'nick', status: 'complete' } },

            { id: 'extensionSupport', value: { label: 'Basic extension support' } },
            { id: 'browserActions', value: { label: 'OOPIFs in browser actions', bug: '546267', owner: 'alexmos', status: 'complete' } },
            { id: 'extensionTests', value: { label: 'All tests pass with --isolate-extensions', bug: '532666', owner: 'alexmos' } },

            { id: 'launchMetrics', value: { label: 'Metrics for launch', status: 'complete' } },
            { id: 'umaProcessCount', value: { label: 'UMA stats for process count', bug: '248299', owner: 'nick', status: 'complete' } },
            { id: 'umaOOPIFCount', value: { label: 'UMA stats for actual OOPIFs', bug: '542921', owner: 'nasko', status: 'complete' } },

            { id: 'mostInputEvents', value: { label: 'Most OOPIF input events work', status: 'complete' } },
            { id: 'hitTesting', value: { label: 'Browser-side hit testing', bug: '491334', owner: 'kenrb', status: 'complete' } },
            { id: 'contextMenus', value: { label: 'OOPIF context menus', owner: 'kenrb', status: 'complete' } },
            { id: 'scrolling', value: { label: 'OOPIF scrolling works', owner: 'kenrb', status: 'complete' } },
            { id: 'mouseCursor', value: { label: 'OOPIF mouse cursor updates', owner: 'kenrb', status: 'complete' } },

            { id: 'basicBlinkSupport', value: { label: 'Basic Blink OOPIF support', status: 'complete' } },
            { id: 'focusController', value: { label: 'Focus controller and keyboard', bug: '339659', owner: 'alexmos', status: 'complete' } },
            { id: 'animation', value: { label: 'requestAnimationFrame', bug: '529785', owner: 'lfg', status: 'complete' } },

            { id: 'enableProcessReuseExtensions', value: { label: 'Allow process reuse in --isolate-extensions', bug: '513036', owner: 'nick', status: 'complete' } },

            { id: 'sessionHistory', value: { label: 'Session History updated', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'backForwardBasic', value: { label: 'Basic OOPIF back/forward', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'transferCrash', value: { label: 'Fix subframe transfer crash', bug: '536145', owner: 'creis', status: 'complete' } },
            { id: 'backForwardFTNs', value: { label: 'Recreate FTNs in back/forward', bug: '502317', owner: 'creis', status: 'complete' } },
            { id: 'sessionRestoreFNEs', value: { label: 'Restore FNEs in Session Restore', bug: '545219', owner: 'creis', status: 'complete' } },

            // extensionDevLaunch
            { id: 'crossFrameScripting', value: { label: 'Cross-process frame scripting', status: 'complete' } },
            { id: 'frameOpeners', value: { label: 'Updatable frame openers', bug: '225940', owner: 'alexmos', status: 'complete' } },
            { id: 'extBrowsingInstance', value: { label: 'Fix BrowsingInstance for extensions', bug: '522302', owner: 'nasko', status: 'complete' } },
            { id: 'crossProcessJS', value: { label: 'Remaining cross-process JS calls', bug: '128768', status: 'complete' } },
            { id: 'extensionFTNIds', value: { label: 'Use FTN IDs in extension APIs', bug: '432875', owner: 'robwu' } },
            { id: 'taskManagerOrder', value: { label: 'Improve task manager sort order', owner: 'nick' } },

            { id: 'blinkSupport', value: { label: 'Blink OOPIF support' } },
            { id: 'webFrameWidget', value: { label: 'Use WebFrameWidget in all frames', bug: '419087', owner: 'dcheng' } },
            { id: 'find', value: { label: 'Find-in-page', bug: '457440', owner: 'paulmeyer' } },
            { id: 'mixedContent', value: { label: 'Mixed content checks', bug: '486936', owner: 'estark' } },
            { id: 'xfo', value: { label: 'X-Frame-Options', bug: '555418', owner: 'mkwst' } },
            { id: 'csp', value: { label: 'Fix CSP regression', bug: '376522' } },
            { id: 'userGesture', value: { label: 'UserGestureIndicator' } },
            { id: 'zoom', value: { label: 'Zoom level', bug: '528407', owner: 'wjmaclean' } },
            { id: 'fullscreen', value: { label: 'Fullscreen', bug: '550497', owner: 'mlamouri' } },
            { id: 'screenOrientation', value: { label: 'Screen orientation', bug: '498287', owner: 'mlamouri' } },
            { id: 'pageSerialization', value: { label: 'Page serialization (saving)', bug: '526786', owner: 'lukasza', status: 'complete' } },
            { id: 'pushMessaging', value: { label: 'Push Messaging' } },
            
            { id: 'consolidateProcesses', value: { label: 'Consolidate subframe processes', bug: '512560' } },
            { id: 'crossProcessPost', value: { label: 'Cross-process POST submissions', bug: '101395' } },

            { id: 'printing', value: { label: 'OOPIF printing', bug: '455764', owner: 'thestig' } },
            { id: 'accessibility', value: { label: 'OOPIF accessibility', bug: '475127', owner: 'dmazzoni' } },
            { id: 'netStack', value: { label: 'Downloads and net stack', bug: '482049', owner: 'rdsmith' } },
            
            { id: 'telemetry', value: { label: 'Telemetry (memory, plt, scroll)', bug: '462323', owner: 'nasko' } },
            { id: 'testsOnWaterfall', value: { label: 'Site Isolation tests on main waterfall' } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots', bug: '417518', owner: 'alexmos' } },
            { id: 'layoutTests', value: { label: 'Run layout tests with OOPIFs', bug: '477150', owner: 'alexmos' } },
            { id: 'tryJobsDefault', value: { label: 'Site Isolation try jobs by default' } },
            
            { id: 'removeSwappedout', value: { label: 'Remove swappedout://', bug: '357747', owner: 'nasko' } },
            { id: 'messagePorts', value: { label: 'Update MessagePorts', bug: '473258', owner: 'sgurun', status: 'complete' } },
            { id: 'webviewSwappedOut', value: { label: 'No swappedout in webview', owner: 'nasko', status: 'complete' } },

            { id: 'enableFNEs', value: { label: 'Enable FrameNavigationEntries', bug: '236848', owner: 'creis' } },
            { id: 'locationReplace', value: { label: 'Update location.replace', bug: '373041', owner: 'creis' } },
            { id: 'initialNavEntry', value: { label: 'NavEntry for initial blank page', bug: '524208', owner: 'creis' } },
            { id: 'transferShortcut', value: { label: 'Shortcut the transfer logic', bug: '495161', owner: 'creis' } },
            { id: 'determineSiteInstance', value: { label: 'Use proper RFHM check in CSRH', bug: '536906', owner: 'creis' } },

            // extensionBetaLaunch
            { id: 'devToolsWebIframes', value: { label: 'Isolate web iframes in DevTools', bug: '570483' } },

            // siteSubsetLaunch
            { id: 'selectSiteSubset', value: { label: 'Select sites to isolate' } },
            { id: 'enforceSiteSec', value: { label: 'Enforce site isolation', owner: 'nick' } },
            { id: 'isolateSiteSubset', value: { label: 'Isolate subset of sites', owner: 'nick' } },
            { id: 'blockPasswords', value: { label: 'Block unauthorized passwords', bug: '467150', owner: 'lfg', status: 'complete' } },
            { id: 'blockPermissions', value: { label: 'Block unauthorized site permissions', bug: '467150' } },
            { id: 'blockHTML5Storage', value: { label: 'Block unauthorized HTML5 storage', bug: '467150' } },
            { id: 'blockCrossSiteDocs', value: { label: 'Block cross-site documents', bug: '268640', owner: 'alexmos' } },

            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'kenrb' } },
            { id: 'dragNDrop', value: { label: 'Drag n Drop' } },
            { id: 'gestures', value: { label: 'Gesture support' } },

            { id: 'enableProcessReuse', value: { label: 'Don\'t disable process reuse', bug: '513036', owner: 'nick' } },
            { id: 'ntp', value: { label: 'OOPIF NTP support' } },
            { id: 'chromeUrls', value: { label: 'OOPIF chrome:// support' } },
            { id: 'editStack', value: { label: 'Edit stack', bug: '549334', owner: 'lukasza' } },
            { id: 'spellcheck', value: { label: 'OOPIF spellcheck support', owner: 'groby' } },
            { id: 'prerendering', value: { label: 'Prerendering support', bug: '440544' } },
            { id: 'domDistiller', value: { label: 'DOM Distiller' } },
            { id: 'textAutosizing', value: { label: 'Text autosizing' } },

            // miscCleanup
            { id: 'shareFNEs', value: { label: 'Share FrameNavigationEntries', bug: '373041', owner: 'creis' } },
            { id: 'shareFNEsUnlessCloning', value: { label: 'Share FNEs unless cloning', bug: '373041', owner: 'creis' } },
            { id: 'restoreWithSharing', value: { label: 'Session restore with shared FNEs', owner: 'avi' } },
            { id: 'renderWidgetSplit', value: { label: 'Split RenderView/RenderWidget', bug: '419087', owner: 'avi' } },
            { id: 'removeRVH', value: { label: 'Remove RenderViewHost' } },
        ],
        links: [
            { u: 'extensionTrialLaunch', v: 'enforceExtSec' },
            { u: 'extensionTrialLaunch', v: 'extensionSupport' },
            { u: 'extensionTrialLaunch', v: 'launchMetrics' },
            { u: 'extensionTrialLaunch', v: 'mostInputEvents' },
            { u: 'extensionTrialLaunch', v: 'basicBlinkSupport' },
            { u: 'extensionTrialLaunch', v: 'enableProcessReuseExtensions' },
            { u: 'extensionTrialLaunch', v: 'sessionHistory' },

            { u: 'enforceExtSec', v: 'isolateExtensions' },
            { u: 'enforceExtSec', v: 'dontIsolatedHostedApps' },
            { u: 'enforceExtSec', v: 'blockCookies' },

            { u: 'mostInputEvents', v: 'hitTesting' },
            { u: 'mostInputEvents', v: 'contextMenus' },
            { u: 'mostInputEvents', v: 'scrolling' },
            { u: 'mostInputEvents', v: 'mouseCursor' },

            { u: 'basicBlinkSupport', v: 'focusController' },
            { u: 'basicBlinkSupport', v: 'animation' },
            
            { u: 'extensionSupport', v: 'browserActions' },
            { u: 'extensionSupport', v: 'extensionTests' },

            { u: 'launchMetrics', v: 'umaProcessCount' },
            { u: 'launchMetrics', v: 'umaOOPIFCount' },


            { u: 'extensionDevLaunch', v: 'extensionTrialLaunch' },
            { u: 'extensionDevLaunch', v: 'crossFrameScripting' },
            { u: 'extensionDevLaunch', v: 'extensionFTNIds' },
            { u: 'extensionDevLaunch', v: 'taskManagerOrder' },
            { u: 'extensionDevLaunch', v: 'blinkSupport' },
            { u: 'extensionDevLaunch', v: 'consolidateProcesses' },
            { u: 'extensionDevLaunch', v: 'crossProcessPost' },
            { u: 'extensionDevLaunch', v: 'printing' },
            { u: 'extensionDevLaunch', v: 'accessibility' },
            { u: 'extensionDevLaunch', v: 'netStack' },
            { u: 'extensionDevLaunch', v: 'telemetry' },
            { u: 'extensionDevLaunch', v: 'testsOnWaterfall' },
            { u: 'extensionDevLaunch', v: 'removeSwappedout' },
            { u: 'extensionDevLaunch', v: 'enableFNEs' },

            { u: 'sessionHistory', v: 'backForwardBasic' },
            { u: 'sessionHistory', v: 'transferCrash' },
            { u: 'sessionHistory', v: 'backForwardFTNs' },
            { u: 'sessionHistory', v: 'sessionRestoreFNEs' },

            { u: 'crossFrameScripting', v: 'frameOpeners' },
            { u: 'crossFrameScripting', v: 'crossProcessJS' },
            { u: 'crossFrameScripting', v: 'extBrowsingInstance' },

            { u: 'blinkSupport', v: 'webFrameWidget' },
            { u: 'blinkSupport', v: 'find' },
            { u: 'blinkSupport', v: 'mixedContent' },
            { u: 'blinkSupport', v: 'xfo' },
            { u: 'blinkSupport', v: 'csp' },
            { u: 'blinkSupport', v: 'userGesture' },
            { u: 'blinkSupport', v: 'zoom' },
            { u: 'blinkSupport', v: 'fullscreen' },
            { u: 'blinkSupport', v: 'screenOrientation' },
            { u: 'blinkSupport', v: 'pageSerialization' },
            { u: 'blinkSupport', v: 'pushMessaging' },

            { u: 'testsOnWaterfall', v: 'fyiBotTests' },
            { u: 'testsOnWaterfall', v: 'layoutTests' },
            { u: 'testsOnWaterfall', v: 'tryJobsDefault' },

            { u: 'removeSwappedout', v: 'messagePorts' },
            { u: 'removeSwappedout', v: 'webviewSwappedOut' },

            { u: 'enableFNEs', v: 'locationReplace' },
            { u: 'enableFNEs', v: 'initialNavEntry' },
            { u: 'enableFNEs', v: 'transferShortcut' },
            { u: 'enableFNEs', v: 'determineSiteInstance' },


            { u: 'extensionBetaLaunch', v: 'extensionDevLaunch' },
            { u: 'extensionBetaLaunch', v: 'devToolsWebIframes' },


            { u: 'siteSubsetLaunch', v: 'extensionDevLaunch' },
            { u: 'siteSubsetLaunch', v: 'selectSiteSubset' },
            { u: 'siteSubsetLaunch', v: 'enforceSiteSec' },
            { u: 'siteSubsetLaunch', v: 'allInputEvents' },
            { u: 'siteSubsetLaunch', v: 'enableProcessReuse' },
            { u: 'siteSubsetLaunch', v: 'ntp' },
            { u: 'siteSubsetLaunch', v: 'chromeUrls' },
            { u: 'siteSubsetLaunch', v: 'editStack' },
            { u: 'siteSubsetLaunch', v: 'spellcheck' },
            { u: 'siteSubsetLaunch', v: 'prerendering' },
            { u: 'siteSubsetLaunch', v: 'domDistiller' },
            { u: 'siteSubsetLaunch', v: 'textAutosizing' },

            { u: 'enforceSiteSec', v: 'isolateSiteSubset' },
            { u: 'enforceSiteSec', v: 'blockPasswords' },
            { u: 'enforceSiteSec', v: 'blockPermissions' },
            { u: 'enforceSiteSec', v: 'blockHTML5Storage' },
            { u: 'enforceSiteSec', v: 'blockCrossSiteDocs' },

            { u: 'allInputEvents', v: 'dragNDrop' },
            { u: 'allInputEvents', v: 'gestures' },


            { u: 'miscCleanup', v: 'shareFNEs' },
            { u: 'shareFNEs', v: 'shareFNEsUnlessCloning' },
            { u: 'shareFNEs', v: 'restoreWithSharing' },
            { u: 'miscCleanup', v: 'renderWidgetSplit' },
            { u: 'miscCleanup', v: 'removeRVH' },
        ]
    }
);
