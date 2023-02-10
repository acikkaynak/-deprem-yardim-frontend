export type Channel = "twitter" | "Babala" | "generic";
export type ExtraParams = BabalaParameters | TwitterParameters;

export interface BaseFeedChannel<T> {
  id?: number;
  full_text?: string;
  is_resolved?: boolean;
  channel?: Channel;
  timestamp?: string;
  extra_parameters: T;
  formatted_address?: string;
  reason?: string | null;
}

export type BabalaParameters = {
  name_surname: string;
  tel: number;
  additional_notes: string;
  status: string;
  manual_confirmation: string;
};

export type TwitterParameters = {
  user_id: string;
  screen_name: string;
  name: string;
  tweet_id: string;
  created_at: string;
  hashtags: string;
  user_account_created_at: string;
  media: string;
};

export type FeedChannelBabalaProps = BaseFeedChannel<BabalaParameters>;

export type FeedChannelTwitterProps = BaseFeedChannel<TwitterParameters>;
