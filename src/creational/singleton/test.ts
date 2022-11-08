import { StatsTracker } from "./stats-tracker";

export function test() {
    const tracker = StatsTracker.instance;
    console.log(`Widget views: ${tracker.widgetViews}`);
    console.log(`Twitter Shares: ${tracker.twitterShares}`);
}