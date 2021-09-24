var $nwaConfig = {
	supportedLanguages: ['en-US','fr'],
	defaultColor: 'default'
};

var $nwaScope = {
    intro: {
        landing: {
            nwaPageHistoryUrl: '/',
            nwaPageFetch: {
            	url: '/html/introLanding.html',
            	header: false,
            	footer: false,
            	nav: false
            },
            nwaPageData: false,
            nwaPageForm: false
        }
    },
    overview: {
        landing: {
            nwaPageHistoryUrl: '/overview',
            nwaPageFetch: {
            	url: '/html/overviewLanding.html',
            	header: 'NWA Test Page Overview',
            	footer: true,
            	nav: true
            },
            nwaPageData: false,
            nwaPageForm: false
        }
    },
    template: {
        landing: {
            nwaPageHistoryUrl: '/template',
            nwaPageFetch: {
            	url: '/html/templateLanding.html',
            	header: 'NWA Template',
            	footer: false,
            	nav: false
            },
            nwaPageData: false,
            nwaPageForm: false
        },
		color: {
			nwaPageHistoryUrl: '/template/color',
			nwaPageFetch: {
				url: '/html/templateColor.html',
				header: 'NWA Template Colors',
				footer: false,
				nav: false
			},
			nwaPageData: false,
			nwaPageForm: false
		},
		box: {
			nwaPageHistoryUrl: '/template/box',
			nwaPageFetch: {
				url: '/html/templateBox.html',
				header: 'NWA Template Box',
				footer: false,
				nav: false
			},
			nwaPageData: false,
			nwaPageForm: false
		}
    }
}
