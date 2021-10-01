import { LightningElement, api } from "lwc";

export default class SummitEvents extends LightningElement {
    @api audience;
    @api eventId;
    @api instanceId;
    @api listDisplayType;

    registrationId;
}
