export interface IResponse {
    id: number,
  }
  
  export interface IEvent extends IResponse {
    event_type: string,
    visit_id: string,
    caregiver_id: string,
    care_recipient_id: string,
    mood ?: string,
    timestamp: string,
  }