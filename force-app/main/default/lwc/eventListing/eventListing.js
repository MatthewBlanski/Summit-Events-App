import { LightningElement, api } from "lwc";

export default class EventListing extends LightningElement {
    @api audience;
    @api eventId;
    @api listDisplayType;
}
