import React from "react";
import "../../styles/style.scss";
import { EVENTS, UTM_DETAILS } from "../../../constants";
import { Util } from "../../../util.ts";

const { OPEN_EXTERNAL_URL } = EVENTS;

function handleLinkClick(url: string) {
	parent.postMessage(
		{
			pluginMessage: {
				type: OPEN_EXTERNAL_URL,
				url,
			},
		},
		"*"
	);
}

interface creditsProps {
	creditUSed: any;
	totalCredit: any;
	orgId: string;
}

function CreditsUI({ creditUSed, totalCredit, orgId }: creditsProps) {
	return (
		<div className="credit-details-container">
			<div className="credit-details-sub-container">
				Credits : {Util.abbreviateNumber(creditUSed)}/
				{Util.abbreviateNumber(totalCredit)} used
			</div>
			{(totalCredit === 0 || creditUSed >= totalCredit) && (
				<div className="token-err" style={{ padding: 0 }}>
					out of credits
				</div>
			)}
			<div
				onClick={() => {
					handleLinkClick(
						`https://console.pixelbin.io/organization/${orgId}/settings/billing/pricing${UTM_DETAILS}`
					);
				}}
				className="buy-credits-btn"
			>
				Buy credits
			</div>
		</div>
	);
}

export default CreditsUI;
